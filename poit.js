// scripts.js
let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  cartItems.innerHTML = '';
  total = 0;

  cart.forEach((cartItem, index) => {
    const li = document.createElement('li');
    li.textContent = `${cartItem.item} - R$${cartItem.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += cartItem.price;
  });

  totalElement.textContent = `Total: R$${total.toFixed(2)}`;
}

function checkout() {
  if (cart.length === 0) {
    alert('O carrinho está vazio!');
    return;
  }

  // Aqui você pode adicionar a lógica para enviar o pedido para o servidor.
  alert('Pedido finalizado com sucesso!');
  cart = [];
  updateCart();
}
