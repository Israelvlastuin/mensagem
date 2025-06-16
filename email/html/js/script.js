const USERS = [
  { id: 1, email: 'user@example.com', name: 'Fulano de Tal', avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1cbc4ebe-41bb-43ed-85ea-c33b410c8dcf.png', role: 'user' },
  { id: 2, email: 'amigo@example.com', name: 'Amigo Legal', avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a1ef044-6f03-4bc4-9ed4-82bea9fc5e45.png', role: 'user' },
  { id: 3, email: 'contato@example.com', name: 'Contato Rápido', avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b56e9a6f-8435-4e26-9050-1ae50088a841.png', role: 'user' },
];
let currentUser = null;






function clearFormErrors() {
  composeRecipientError.textContent = '';
  composeSubjectError.textContent = '';
  composeBodyError.textContent = '';
  composeRecipientInput.setAttribute('aria-invalid', 'false');
  composeSubjectInput.setAttribute('aria-invalid', 'false');
  composeBodyInput.setAttribute('aria-invalid', 'false');
}


function validateComposeForm() {
  let valid = true;
  clearFormErrors();

  if (!composeRecipientInput.value.trim()) {
    composeRecipientError.textContent = 'O destinatário é obrigatório.';
    composeRecipientInput.setAttribute('aria-invalid', 'true');
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(composeRecipientInput.value)) {
    composeRecipientError.textContent = 'Por favor, insira um email válido.';
    composeRecipientInput.setAttribute('aria-invalid', 'true');
    valid = false;
  }

  if (!composeSubjectInput.value.trim()) {
    composeSubjectError.textContent = 'O assunto é obrigatório.';
    composeSubjectInput.setAttribute('aria-invalid', 'true');
    valid = false;
  }

  if (!composeBodyInput.value.trim()) {
    composeBodyError.textContent = 'A mensagem não pode estar vazia.';
    composeBodyInput.setAttribute('aria-invalid', 'true');
    valid = false;
  }

  return valid;
}




function handleLogin(event) {
  event.preventDefault();
  const email = loginEmailInput.value.trim().toLowerCase();
  loginEmailError.textContent = '';
  loginEmailInput.setAttribute('aria-invalid', 'false');

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

  const user = USERS.find(u => u.email.toLowerCase() === email);
  if (!user) {
    loginEmailError.textContent = 'Usuário não encontrado.';
    loginEmailInput.setAttribute('aria-invalid', 'true');
    loginEmailInput.focus();
    return;
  }

  currentUser = user;
  loginPage.hidden = true;
  app.hidden = false;
  renderInbox();
  updateUnreadCount();
}

