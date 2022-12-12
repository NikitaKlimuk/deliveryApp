window.addEventListener('click', (e) => {
    let counter;

    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
        const counterWrapper = e.target.closest('.counter-wrapper')
        counter = counterWrapper.querySelector('[data-counter]');
    }

    if (e.target.dataset.action === 'plus') {
        counter.innerText++;
    }

    if (e.target.dataset.action === 'minus' && counter.innerText > 1) {
        counter.innerText--;
    }
})

