const r = require("raylib");
const constant = require("../shared/constant");
const { scanner } = require("../utils/scanner");


let scannerX = 0;
let deltaX = 1;

function setup() {
    r.InitWindow(constant.WINDOW_WIDTH, constant.WINDOW_HEIGHT, "Particle Detector");
    r.SetTargetFPS(constant.FPS);
    return;
}

function running() {
    return !r.WindowShouldClose();
}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    scanner(scannerX);
    r.EndDrawing();
}

function update() {
    if (scannerX <= 0) {
        deltaX = 2;
    }
    if (scannerX >= constant.WINDOW_WIDTH - constant.SCANNER_WIDTH) {
        deltaX = -deltaX;
    }
    scannerX = scannerX + deltaX;
}


function tearDown() {
    r.CloseWindow();
}

module.exports = {
    setup,
    running,
    draw,
    update,
    tearDown
}
