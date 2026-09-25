const r = require("raylib");


function setup(windowWidth, windowHeight, title, fps) {
    r.InitWindow(windowWidth, windowHeight, title);
    r.SetTargetFPS(fps);
    return;
}

function running() {
    return !r.WindowShouldClose();
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawRectangle(10, 10, 100, 100, r.BLUE)
    r.EndDrawing();
}

function update() {

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
