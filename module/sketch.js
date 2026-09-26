const r = require("raylib");
const constant = require("../shared/constant");
const { hosizontalScanner, verticalScanner } = require("../utils/scanner");
const { horizontalParticle, verticalParticle } = require("../utils/particle");
const { isColliding, updateDelta } = require("./geometry");

let horizontalScanner1X = 0;
let horizontalScanner1Color = r.WHITE;
let deltaX1 = 1;

let horizontalScanner2X = constant.WINDOW_WIDTH / 2;
let horizontalScanner2Color = r.WHITE;
let deltaX2 = 2;

let verticalScanner1Y = 0;
let verticalScanner1Color = r.WHITE;
let deltaY1 = 3;

const PARTICLE_1_X = constant.WINDOW_WIDTH * 0.3;
const PARTICLE_2_X = constant.WINDOW_WIDTH * 0.7;
const HORIZONTAL_PARTICAL_1_Y = constant.WINDOW_HEIGHT * 0.3;

function setup() {
    r.InitWindow(constant.WINDOW_WIDTH, constant.WINDOW_HEIGHT, "Particle Detector",
    );
    r.SetTargetFPS(constant.FPS);
    r.SetTraceLogLevel(r.LOG_NONE);
    return;
}

function running() {
    return !r.WindowShouldClose();
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    horizontalParticle(PARTICLE_1_X, 0, constant.PARTICLE_1_WIDTH);
    horizontalParticle(PARTICLE_2_X, 0, constant.PARTICLE_2_WIDTH);

    hosizontalScanner(horizontalScanner1X, constant.SCANNER_1_WIDTH, horizontalScanner1Color);
    hosizontalScanner(horizontalScanner2X, constant.SCANNER_2_WIDTH, horizontalScanner2Color);

    verticalParticle(0, HORIZONTAL_PARTICAL_1_Y, constant.HORIZONTAL_PERTICAL_1_HEIGHT);
    verticalScanner(verticalScanner1Y, constant.VERTICAL_SCANNER_1_HEIGHT, verticalScanner1Color);

    r.EndDrawing();
}

function update() {
    deltaX1 = updateDelta(horizontalScanner1X, 0, constant.WINDOW_WIDTH / 2, constant.SCANNER_1_WIDTH, deltaX1,
    );
    deltaX2 = updateDelta(horizontalScanner2X, constant.WINDOW_WIDTH * 0.5, constant.WINDOW_WIDTH, constant.SCANNER_2_WIDTH, deltaX2,
    );
    deltaY1 = updateDelta(verticalScanner1Y, 0, constant.WINDOW_HEIGHT, constant.VERTICAL_SCANNER_1_HEIGHT, deltaY1,
    );

    horizontalScanner1X = horizontalScanner1X + deltaX1;
    horizontalScanner2X = horizontalScanner2X + deltaX2;
    verticalScanner1Y = verticalScanner1Y + deltaY1;

    horizontalScanner1Color = getColor(isColliding(horizontalScanner1X, constant.SCANNER_1_WIDTH, PARTICLE_1_X, constant.PARTICLE_1_WIDTH) || isColliding(horizontalScanner1X, constant.SCANNER_1_WIDTH, PARTICLE_2_X, constant.PARTICLE_2_WIDTH));
    horizontalScanner2Color = getColor(isColliding(horizontalScanner2X, constant.SCANNER_2_WIDTH, PARTICLE_1_X, constant.PARTICLE_1_WIDTH) || isColliding(horizontalScanner2X, constant.SCANNER_2_WIDTH, PARTICLE_2_X, constant.PARTICLE_2_WIDTH));
    verticalScanner1Color = getColor(isColliding(verticalScanner1Y, constant.VERTICAL_SCANNER_1_HEIGHT, HORIZONTAL_PARTICAL_1_Y, constant.HORIZONTAL_PERTICAL_1_HEIGHT));
}

function getColor(isColliding) {
    return isColliding ? r.RED : r.WHITE;
}

function tearDown() {
    r.CloseWindow();
}

module.exports = {
    setup,
    running,
    draw,
    update,
    tearDown,
};
