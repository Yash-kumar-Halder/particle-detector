const sketch = require("./module/sketch");

function loop(world) {
  while (sketch.running()) {
    sketch.draw(world);
    sketch.update(world);
  }
}

function main() {
  const world = sketch.setup();
  loop(world);
  sketch.update();
  sketch.tearDown();
}

main();
