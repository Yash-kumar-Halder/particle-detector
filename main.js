const sketch = require("./module/sketch");


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
    sketch.tearDown();
}

main();