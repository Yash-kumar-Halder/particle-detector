const r = require("raylib");

function updateVelocity(curr, length, startBound, endBound, velocity) {
  const detectorEnd = curr + length;
  const isOutofBound = detectorEnd > endBound || curr < startBound;
  return isOutofBound ? -velocity : velocity;
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
  };
}

module.exports = {
  init,
  updateVelocity,
  getDetectorColor,
};
