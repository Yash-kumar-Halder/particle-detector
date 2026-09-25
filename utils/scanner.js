const r = require("raylib");
const constant = require("../shared/constant")

function scanner(x, color) {
    r.DrawRectangle(x, 0, constant.SCANNER_WIDTH, constant.WINDOW_HEIGHT, color);
}

module.exports = {
    scanner
}