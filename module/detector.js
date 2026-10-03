const r = require("raylib");
const range = require("./range");

// function updateVelocity(curr, length, startBound, endBound, velocity) {
//   const detectorEnd = curr + length;
//   const isOutofBound = detectorEnd > endBound || curr < startBound;
//   return isOutofBound ? -velocity : velocity;
// }

function updateVelocity(detector) {
  const currPosition = detector.isHorizontal ? detector.currX : detector.currY;
  const detectorEnd = detector.isHorizontal
    ? currPosition + detector.width
    : currPosition + detector.height;
  const isOutofBound =
    detectorEnd > detector.endBound || currPosition < detector.startBound;
  detector.velocity = isOutofBound ? -detector.velocity : detector.velocity;
  return detector;
}

function getDetectorColor(isDetected) {
  return isDetected ? r.RED : r.WHITE;
}

function init(
  currX,
  currY,
  width,
  height,
  color,
  startBound,
  endBound,
  velocity,
) {
  const isHorizontal = width < height;
  return {
    currX,
    currY,
    width,
    height,
    color,
    startBound,
    endBound,
    velocity,
    isDetected: false,
    isHorizontal,
  };
}

function update(detector, p1, p2) {
  const d = updateVelocity(detector);
  if (detector.isHorizontal) detector.currX += detector.velocity;
  if (!detector.isHorizontal) detector.currY += detector.velocity;

  const detectorPos = detector.isHorizontal ? detector.currX : detector.currY;
  const detectorThikness = detector.isHorizontal
    ? detector.width
    : detector.height;
  const p1Pos = detector.isHorizontal ? p1.currX : p1.currY;
  const p1Thikness = detector.isHorizontal ? p1.width : p1.height;
  const p2Pos = detector.isHorizontal ? p2.currX : p2.currY;
  const p2Thikness = detector.isHorizontal ? p2.width : p2.height;

  detector.isDetected = range.isParticleDetected(
    detectorPos,
    detectorThikness,
    p1Pos,
    p1Thikness,
    p2Pos,
    p2Thikness,
  );

  detector.color = getDetectorColor(detector.isDetected);
  // console.log(!detector.isHorizontal && detector.isDetected);

  return d;
}

module.exports = {
  init,
  updateVelocity,
  getDetectorColor,
  update,
};
