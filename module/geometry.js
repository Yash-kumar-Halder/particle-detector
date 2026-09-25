const constant = require("../shared/constant")

function isOverlapping(scannerX, scannerWidth, particleX, particleWidth) {
    return !(scannerX + scannerWidth < particleX || scannerX > particleX + particleWidth);
}

module.exports = {
    isOverlapping
};