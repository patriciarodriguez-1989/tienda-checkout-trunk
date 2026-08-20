const featureFlags = {
    checkoutV2: false
};

function isOn(flag) {
    return featureFlags[flag] === true;
}
