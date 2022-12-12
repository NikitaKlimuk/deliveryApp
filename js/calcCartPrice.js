function calcCartPriceAndDelivery() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');

    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDeliveryEl = document.querySelector('[data-cart-delivery]')

    let totalPrice = 0;

    cartItems.forEach((item) => {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice;
    })

    // Отображаем цену на странице
    totalPriceEl.innerText = totalPrice;

    if (totalPrice > 0) {
        cartDeliveryEl.classList.remove('none');
    } else {
        cartDeliveryEl.classList.add('none');
    }

    if (totalPrice >= 60) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'Бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '15 PLN';
    }
}
