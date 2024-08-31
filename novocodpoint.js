let cart = [];
let total = 0;

// Função para fornecer feedback auditivo
function fornecerFeedbackAuditivo(mensagem) {
  const sintetizador = window.speechSynthesis;
  const fala = new SpeechSynthesisUtterance(mensagem);
  sintetizador.speak(fala);
}

// Função para mostrar a seção selecionada
function showSection(id) {
  document.querySelectorAll('main > div').forEach(section => {
    section.style.display = 'none';
  });
  const section = document.getElementById(id);
  section.style.display = 'block';
  fornecerFeedbackAuditivo(section.querySelector('h2').textContent); // Fornece feedback da seção exibida
}

// Função para adicionar item ao carrinho
function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
  fornecerFeedbackAuditivo(`${item} adicionado ao carrinho por R$${price.toFixed(2)}`);
}

// Função para atualizar o carrinho
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
  fornecerFeedbackAuditivo(`Total do carrinho atualizado para R$${total.toFixed(2)}`);
}

// Função para finalizar pedido
function checkout() {
  if (cart.length === 0) {
    fornecerFeedbackAuditivo('O carrinho está vazio!');
    alert('O carrinho está vazio!');
    return;
  }

  // Aqui você pode adicionar a lógica para enviar o pedido para o servidor.
  fornecerFeedbackAuditivo('Pedido finalizado com sucesso!');
  alert('Pedido finalizado com sucesso!');
  cart = [];
  updateCart();
}

// Inicializa mostrando a página inicial
document.addEventListener('DOMContentLoaded', () => {
  // Adiciona eventos de clique para navegação entre as seções
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('data-target');
      showSection(targetId);
    });



    // Adiciona feedback auditivo ao focar o link
    link.addEventListener('focus', () => fornecerFeedbackAuditivo(link.textContent.trim()));
  });

  // Adiciona feedback auditivo aos itens do menu
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('focus', () => fornecerFeedbackAuditivo(item.querySelector('h4').textContent));
  });

  // Adiciona feedback auditivo ao botão de checkout
  const checkoutButton = document.querySelector('#cart button');
  if (checkoutButton) {
    checkoutButton.addEventListener('focus', () => fornecerFeedbackAuditivo('Botão para finalizar o pedido.'));
  }

  // Inicializa mostrando a página inicial
  showSection('home');
});

// script.js

document.addEventListener('DOMContentLoaded', function () {
  const loginIcon = document.getElementById('login-icon');
  const loginMenu = document.getElementById('login-menu');

  loginIcon.addEventListener('click', function () {
    loginMenu.classList.toggle('hidden');
  });

  // Ocultar menu se clicar fora do ícone
  document.addEventListener('click', function (event) {
    if (!loginIcon.contains(event.target) && !loginMenu.contains(event.target)) {
      loginMenu.classList.add('hidden');
    }
  });
});
