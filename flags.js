const featureFlags = {
    checkoutV2: true,
    rolloutPercentage: 100
};

function isOn(flag) {
    return featureFlags[flag] === true;
}
