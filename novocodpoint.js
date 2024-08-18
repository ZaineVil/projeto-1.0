let cart = [];
let total = 0;

document.addEventListener('DOMContentLoaded', () => {
  // Adiciona eventos de clique para navegação entre as seções
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('data-target');
      showSection(targetId);
    });
  });

  // Função para mostrar a seção selecionada
  function showSection(id) {
    document.querySelectorAll('main > div').forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
  }

  // Inicializa mostrando a página inicial
  showSection('home');
});

function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  cartItems.innerHTML = '';
  total = 0;

  cart.forEach(cartItem => {
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
