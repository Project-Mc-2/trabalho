const formLogin = document.getElementById("form-login");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const mensagemErro = document.getElementById("erro-login");

// Evento do botão
formLogin.addEventListener("submit", (e) => {
e.preventDefault();

const email = emailInput.value.trim();
const senha = senhaInput.value.trim();

// Buscar usuários cadastrados
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const usuarioEncontrado = usuarios.find(
(user) => user.email === email && user.senha === senha
);

if (!usuarioEncontrado) {
mensagemErro.textContent = "E-mail ou senha inválidos!";
mensagemErro.style.display = "block";
return;
}

// Salvar usuário logado
localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

// Redirecionar
window.location.href = "home.html";
});