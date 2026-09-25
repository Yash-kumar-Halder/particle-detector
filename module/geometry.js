const constant = require("../shared/constant")

function isOverlapping(scannerX, particleX, particleWidth) {
    return !(scannerX + constant.SCANNER_WIDTH < particleX || scannerX > particleX + particleWidth);
}

module.exports = {
    isOverlapping
};