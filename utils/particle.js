const r = require("raylib");
const { PARTICLE_WIDTH, WINDOW_HEIGHT } = require("../shared/constant");


function particle(ofssetX, offsetY) {
    r.DrawRectangle(ofssetX, offsetY, PARTICLE_WIDTH, WINDOW_HEIGHT, r.SKYBLUE)
}

module.exports = {
    particle
}