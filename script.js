// script.js

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    const products = document.querySelectorAll('.product');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        products.forEach(product => {
            const productName = product.querySelector('h3').innerText.toLowerCase();
            if (productName.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
