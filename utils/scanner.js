const r = require("raylib");
const constant = require("../shared/constant")

function hosizontalScanner(x, width, color) {
    r.DrawRectangle(x, 0, width, constant.WINDOW_HEIGHT, color);
}
function verticalScanner(y, height, color) {
    r.DrawRectangle(0, y, constant.WINDOW_WIDTH, height, color);
}

module.exports = {
    hosizontalScanner,
    verticalScanner
}