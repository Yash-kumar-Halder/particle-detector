const constant = require("../shared/constant")

function isOverlapping(scannerX, particleX) {
    return !(scannerX + constant.SCANNER_WIDTH < particleX || scannerX > particleX + constant.PARTICLE_WIDTH);
}

module.exports = {
    isOverlapping
};