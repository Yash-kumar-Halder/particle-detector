const r = require("raylib");
const sketch = require("./module/sketch");
console.log(sketch);


function loop() {
    while (sketch.running()) {
        sketch.draw();
        sketch.update();
    }
}

function main() {
    sketch.setup();
    loop();
    sketch.update();
    sketch.teardown();
}

main();