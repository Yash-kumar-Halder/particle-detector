function isOverlapping(scannerX, scannerWidth, particleX, particleWidth) {
    return !((scannerX + scannerWidth < particleX) || (scannerX > particleX + particleWidth));
}

function updateDelta(currPos, boundStart, boundEnd, scannerSize, currDir) {
    if (currPos < boundStart) {
        currDir = -currDir;
    }
    if (currPos >= boundEnd - scannerSize) {
        currDir = -currDir;
    }
    return currDir;
}

module.exports = {
    isOverlapping,
    updateDelta
};