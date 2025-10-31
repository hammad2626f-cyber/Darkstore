const cartIcon = document.getElementById('cartIcon');
const cartPanel = document.getElementById('cartPanel');
const closeCart = document.getElementById('closeCart');
const addCartButtons = document.querySelectorAll('.addCart');
const cartItems = document.getElementById('cartItems');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const products = document.querySelectorAll('.card');

// Open/Close Cart
cartIcon.onclick = () => cartPanel.classList.add('active');
closeCart.onclick = () => cartPanel.classList.remove('active');

// Add items to Cart
addCartButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    const name = card.querySelector('h2').innerText;
    const price = card.querySelector('p').innerText;

    const li = document.createElement('li');
    li.textContent = ${name} - ${price};
    cartItems.appendChild(li);
  });
});

// Search Function
searchBtn.onclick = () => {
  const searchTerm = searchInput.value.toLowerCase();
  products.forEach(prod => {
    const name = prod.querySelector('h2').innerText.toLowerCase();
    prod.style.display = name.includes(searchTerm) ? 'block' : 'none';
  });
};