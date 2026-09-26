const r = require("raylib");
const { WINDOW_HEIGHT, WINDOW_WIDTH } = require("../shared/constant");


function horizontalParticle(ofssetX, offsetY, particleWidth) {
    r.DrawRectangle(ofssetX, offsetY, particleWidth, WINDOW_HEIGHT, r.SKYBLUE)
}

function verticalParticle(ofssetX, offsetY, particleHeight) {
    r.DrawRectangle(ofssetX, offsetY, WINDOW_WIDTH, particleHeight, r.SKYBLUE);
}

module.exports = {
    horizontalParticle,
    verticalParticle,
}