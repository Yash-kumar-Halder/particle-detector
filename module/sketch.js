const r = require("raylib");
const constant = require("../shared/constant");
const detector = require("../utils/detector");
const particle = require("../utils/particle");

// Initialize Detectors
const d1 = detector.init(
  0,
  0,
  50,
  constant.WINDOW_HEIGHT,
  r.WHITE,
  0,
  constant.WINDOW_WIDTH / 2,
  1,
);
const d2 = detector.init(
  constant.WINDOW_WIDTH / 2,
  0,
  50,
  constant.WINDOW_HEIGHT,
  r.WHITE,
  constant.WINDOW_WIDTH / 2,
  constant.WINDOW_WIDTH,
  3,
);
const d3 = detector.init(
  0,
  0,
  constant.WINDOW_WIDTH,
  50,
  r.WHITE,
  0,
  constant.WINDOW_HEIGHT,
  2,
);

// Initialize Particles
const p1 = particle.init(300, 0, 60, constant.WINDOW_HEIGHT, r.SKYBLUE);
const p2 = particle.init(600, 0, 30, constant.WINDOW_HEIGHT, r.SKYBLUE);
const p3 = particle.init(0, 300, constant.WINDOW_WIDTH, 30, r.SKYBLUE);

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(
    constant.WINDOW_WIDTH,
    constant.WINDOW_HEIGHT,
    "Particle Detector",
  );
  r.SetTargetFPS(constant.FPS);
  return;
}

function running() {
  return !r.WindowShouldClose();
}

function drawRange(elem) {
  r.DrawRectangle(elem.currX, elem.currY, elem.width, elem.height, elem.color);
}

function isOverlapping(
  detectorCurrPos,
  detectorThikness,
  perticleCurrPos,
  perticleThikness,
) {
  const detectorEnd = detectorCurrPos + detectorThikness;
  const particleEnd = perticleCurrPos + perticleThikness;

  return !(detectorEnd < perticleCurrPos || particleEnd < detectorCurrPos);
}

function isParticleDetected(
  detectorCurrPos,
  detectorThikness,
  perticle1CurrPos,
  perticle1Thikness,
  perticle2CurrPos,
  perticle2Thikness,
) {
  return (
    isOverlapping(
      detectorCurrPos,
      detectorThikness,
      perticle1CurrPos,
      perticle1Thikness,
    ) ||
    isOverlapping(
      detectorCurrPos,
      detectorThikness,
      perticle2CurrPos,
      perticle2Thikness,
    )
  );
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  // Particles
  drawRange(p1);
  drawRange(p2);
  drawRange(p3);

  // Detectors
  drawRange(d1);
  drawRange(d2);
  drawRange(d3);

  r.EndDrawing();
}

function update() {
  // Updating velocity
  d1.velocity = detector.updateVelocity(
    d1.currX,
    d1.width,
    d1.startBound,
    d1.endBound,
    d1.velocity,
  );
  d2.velocity = detector.updateVelocity(
    d2.currX,
    d2.width,
    d2.startBound,
    d2.endBound,
    d2.velocity,
  );
  d3.velocity = detector.updateVelocity(
    d3.currY,
    d3.height,
    d3.startBound,
    d3.endBound,
    d3.velocity,
  );

  // Updating Position
  d1.currX += d1.velocity;
  d2.currX += d2.velocity;
  d3.currY += d3.velocity;

  d1.isDetected = isParticleDetected(
    d1.currX,
    d1.width,
    p1.currX,
    p1.width,
    p2.currX,
    p2.width,
  );
  d2.isDetected = isParticleDetected(
    d2.currX,
    d2.width,
    p1.currX,
    p1.width,
    p2.currX,
    p2.width,
  );
  d3.isDetected = isParticleDetected(
    d3.currY,
    d3.height,
    p3.currY,
    p3.height,
    p3.currY,
    p3.height,
  );

  // Updating Color On Perticle Detect
  d1.color = detector.getDetectorColor(d1.isDetected);
  d2.color = detector.getDetectorColor(d2.isDetected);
  d3.color = detector.getDetectorColor(d3.isDetected);
}

function tearDown() {
  r.CloseWindow();
}

module.exports = {
  setup,
  running,
  draw,
  update,
  tearDown,
};
