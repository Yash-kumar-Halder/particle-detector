function isOverlapping(
  detectorCurrPos,
  detectorThikness,
  particleCurrPos,
  particleThikness,
) {
  const detectorEnd = detectorCurrPos + detectorThikness;
  const particleEnd = particleCurrPos + particleThikness;

  return !(detectorEnd < particleCurrPos || particleEnd < detectorCurrPos);
}

function isParticleDetected(
  detectorCurrPos,
  detectorThikness,
  particle1CurrPos,
  particle1Thikness,
  particle2CurrPos,
  particle2Thikness,
) {
  return (
    isOverlapping(
      detectorCurrPos,
      detectorThikness,
      particle1CurrPos,
      particle1Thikness,
    ) ||
    isOverlapping(
      detectorCurrPos,
      detectorThikness,
      particle2CurrPos,
      particle2Thikness,
    )
  );
}

module.exports = {
  isParticleDetected,
};
