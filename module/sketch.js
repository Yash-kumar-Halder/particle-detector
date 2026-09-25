const r = require("raylib");
const constant = require("../shared/constant");
const { scanner } = require("../utils/scanner");
const { particle } = require("../utils/particle");
const { isOverlapping } = require("./geometry");

let scanner1X = 0;
let scanner2X = constant.WINDOW_WIDTH / 2;
let deltaX1 = 1;

let scanner1Color = r.WHITE;
let scanner2Color = r.WHITE;
let deltaX2 = 1;


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
    scanner(scanner1X, constant.SCANNER_1_WIDTH, scanner1Color);
    scanner(scanner2X, constant.SCANNER_2_WIDTH, scanner2Color);
    r.DrawLine(constant.WINDOW_WIDTH / 2, 0, constant.WINDOW_WIDTH / 2, constant.WINDOW_HEIGHT, r.GREEN)
    r.EndDrawing();
}

function update() {
    deltaX1 = updateDeltaX(scanner1X, 0, constant.WINDOW_WIDTH / 2, constant.SCANNER_1_WIDTH, deltaX1);
    deltaX2 = updateDeltaX(scanner2X, constant.WINDOW_WIDTH * 0.5, constant.WINDOW_WIDTH, constant.SCANNER_2_WIDTH, deltaX2);
    scanner1X = scanner1X + deltaX1;
    scanner2X = scanner2X + deltaX2;

    scanner1Color = getColor(scanner1X, constant.SCANNER_1_WIDTH, PARTICLE_1_X, constant.PARTICLE_1_WIDTH, PARTICLE_2_X, constant.PARTICLE_2_WIDTH)
    scanner2Color = getColor(scanner2X, constant.SCANNER_2_WIDTH, PARTICLE_2_X, constant.PARTICLE_2_WIDTH, PARTICLE_2_X, constant.PARTICLE_2_WIDTH)
}

function updateDeltaX(currX, startX, endX, width, deltaX) {
    if (currX < startX) {
        deltaX = -deltaX;
    }
    if (currX >= endX - width) {
        deltaX = -deltaX;
        console.log("End hited", currX, endX, width, currX + width);

    }
    return deltaX;
}

function getColor(scannerX, scannerWidth, particle1X, particle1Width, particle2X, particle2Width,) {
    if (isOverlapping(scannerX, scannerWidth, particle1X, particle1Width) || isOverlapping(scannerX, scannerWidth, particle2X, particle2Width)) {
        // console.log("RED");
        return r.RED;
    } else {
        // console.log("WHITE");
        return r.WHITE;
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
