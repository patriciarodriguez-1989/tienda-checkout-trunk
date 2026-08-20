const featureFlags = {
    checkoutV2: true,
    rolloutPercentage: 5
};

function isOn(flag) {
    return featureFlags[flag] === true;
}
