const r = require("raylib");
const constant = require("../shared/constant")

function scanner(x, width, color) {
    r.DrawRectangle(x, 0, width, constant.WINDOW_HEIGHT, color);
}

module.exports = {
    scanner
}