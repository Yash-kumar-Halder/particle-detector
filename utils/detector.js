const r = require("raylib");

function updateVelocity(curr, length, startBound, endBound, velocity) {
  const detectorEnd = curr + length;
  const isOutofBound = detectorEnd > endBound || curr < startBound;
  return isOutofBound ? -velocity : velocity;
}

function getDetectorColor(isDetected) {
  return isDetected ? r.RED : r.WHITE;
}

function init(posX, posY, w, h, c, startB, endB, velo) {
  const currX = posX;
  const currY = posY;
  const width = w;
  const height = h;
  const color = c;
  const startBound = startB;
  const endBound = endB;
  const velocity = velo;
  const isDetected = false;

  return {
    currX,
    currY,
    width,
    height,
    color,
    startBound,
    endBound,
    velocity,
    isDetected,
  };
}

module.exports = {
  init,
  updateVelocity,
  getDetectorColor,
};
