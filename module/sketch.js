const r = require("raylib");
const constant = require("../shared/constant");
const { scanner } = require("../utils/scanner");
const { particle } = require("../utils/particle");
const { isOverlapping } = require("./geometry");

let scannerX = 0;
let deltaX = 1;
let scannerColor = r.WHITE;

const PARTICLE_1_X = constant.WINDOW_WIDTH * 0.3;
const PARTICLE_2_X = constant.WINDOW_WIDTH * 0.7;

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
    particle(PARTICLE_1_X, 0, constant.PARTICLE_1_WIDTH);
    particle(PARTICLE_2_X, 0, constant.PARTICLE_2_WIDTH);
    scanner(scannerX, scannerColor);
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
    if (isOverlapping(scannerX, PARTICLE_1_X, constant.PARTICLE_1_WIDTH) || isOverlapping(scannerX, PARTICLE_2_X, constant.PARTICLE_2_WIDTH)) {
        scannerColor = r.RED;
    } else {
        scannerColor = r.WHITE;
    }
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
