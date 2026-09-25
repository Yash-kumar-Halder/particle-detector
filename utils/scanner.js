const r = require("raylib");
const constant = require("../shared/constant")

function scanner(x) {
    r.DrawRectangle(x, 0, constant.SCANNER_WIDTH, constant.WINDOW_HEIGHT, r.WHITE);
}

module.exports = {
    scanner
}