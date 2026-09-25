const r = require("raylib");
const { PARTICLE_WIDTH, WINDOW_HEIGHT } = require("../shared/constant");


function particle(ofssetX, offsetY, particleWidth) {
    r.DrawRectangle(ofssetX, offsetY, particleWidth, WINDOW_HEIGHT, r.SKYBLUE)
}

module.exports = {
    particle
}