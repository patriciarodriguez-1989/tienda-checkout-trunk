function mostrarCheckout() {
    if (isOn("checkoutV2")) {
        console.log("Mostrando Checkout V2");
    } else {
        console.log("Mostrando Checkout V1");
    }
}

mostrarCheckout();
