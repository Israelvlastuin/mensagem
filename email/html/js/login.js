const loginForm = document.getElementById('login-form');
const loginEmailInput = document.getElementById('login-email');
const loginEmailError = document.getElementById('login-email-error');
const showCreateAccountBtn = document.getElementById('show-create-account');

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  loginEmailError.textContent = '';
  loginEmailInput.setAttribute('aria-invalid', 'false');
  const email = loginEmailInput.value.trim();
  if (!email) {
    loginEmailError.textContent = 'O email é obrigatório.';
    loginEmailInput.setAttribute('aria-invalid', 'true');
    loginEmailInput.focus();
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    loginEmailError.textContent = 'Por favor, insira um email válido.';
    loginEmailInput.setAttribute('aria-invalid', 'true');
    loginEmailInput.focus();
    return;
  }
  alert('Login simulado com sucesso para ' + email);
});

showCreateAccountBtn.addEventListener('click', () => {
  window.location.href = 'create-account.html';
});
loginEmailInput.focus();