function init(posX, posY, w, h, c) {
  const currX = posX;
  const currY = posY;
  const width = w;
  const height = h;
  const color = c;
  return { currX, currY, width, height, color };
}

module.exports = {
  init,
};
