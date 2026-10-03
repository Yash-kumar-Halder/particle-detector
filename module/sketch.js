const r = require("raylib");
const constant = require("../shared/constant");
const detector = require("../module/detector");
const particle = require("../module/particle");

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(
    constant.WINDOW_WIDTH,
    constant.WINDOW_HEIGHT,
    "Particle Detector",
  );
  r.SetTargetFPS(constant.FPS);

  const world = {};

  world.d1 = detector.init(
    0,
    0,
    50,
    constant.WINDOW_HEIGHT,
    r.WHITE,
    0,
    constant.WINDOW_WIDTH / 2,
    1,
  );
  world.d2 = detector.init(
    constant.WINDOW_WIDTH / 2,
    0,
    50,
    constant.WINDOW_HEIGHT,
    r.WHITE,
    constant.WINDOW_WIDTH / 2,
    constant.WINDOW_WIDTH,
    3,
  );
  world.d3 = detector.init(
    0,
    0,
    constant.WINDOW_WIDTH,
    50,
    r.WHITE,
    0,
    constant.WINDOW_HEIGHT,
    2,
  );

  world.p1 = particle.init(300, 0, 60, constant.WINDOW_HEIGHT, r.SKYBLUE);
  world.p2 = particle.init(600, 0, 30, constant.WINDOW_HEIGHT, r.SKYBLUE);
  world.p3 = particle.init(0, 300, constant.WINDOW_WIDTH, 30, r.SKYBLUE);

  return world;
}

function running() {
  return !r.WindowShouldClose();
}

function drawRange(elem) {
  r.DrawRectangle(elem.currX, elem.currY, elem.width, elem.height, elem.color);
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  // Particles
  drawRange(world.p1);
  drawRange(world.p2);
  drawRange(world.p3);

  // Detectors
  drawRange(world.d1);
  drawRange(world.d2);
  drawRange(world.d3);

  r.EndDrawing();
}

function update(world) {
  world.d1 = detector.update(world.d1, world.p1, world.p2);
  world.d2 = detector.update(world.d2, world.p1, world.p2);
  world.d3 = detector.update(world.d3, world.p3, world.p3);
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
