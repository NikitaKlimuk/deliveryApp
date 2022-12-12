window.addEventListener('click', (e) => {
    let counter;

    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
        const counterWrapper = e.target.closest('.counter-wrapper')
        counter = counterWrapper.querySelector('[data-counter]');
    }

    if (e.target.dataset.action === 'plus') {
        counter.innerText++;
    }

    if (e.target.dataset.action === 'minus') {

        if (counter.innerText > 1) {
            counter.innerText--;
        } else if (e.target.closest('.cart-wrapper') && counter.innerText == 1) {
            e.target.closest('.cart-item').remove();

            // Отображение статуса корзины
            toggleCardStatus();
            calcCartPriceAndDelivery();
        }
    }

    // Провверка на клик + - внутри корзины
    if (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')) {
        // Пересчет общей суммы
        calcCartPriceAndDelivery();
    }
})

