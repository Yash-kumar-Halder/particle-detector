const r = require("raylib");
const sketch = require("./module/sketch");
console.log(sketch);


const WINDOW_WIDTH = 600;
const WINDOW_HEIGHT = 500;
const FPS = 60;

function loop() {
    while (sketch.running()) {
        sketch.draw();
        sketch.update();
    }
}

function main() {
    sketch.setup(WINDOW_WIDTH, WINDOW_HEIGHT, "Raylib Progran", FPS);
    loop();
    sketch.teardown();
}

main();