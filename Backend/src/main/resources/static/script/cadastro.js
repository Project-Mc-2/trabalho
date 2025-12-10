// Elementos
const formCadastro = document.getElementById("form-cadastro");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const confirmarSenhaInput = document.getElementById("confirmar-senha");
const erro = document.getElementById("erro-cadastro");

formCadastro.addEventListener("submit", (e) => {
e.preventDefault();

const nome = nomeInput.value.trim();
const email = emailInput.value.trim();
const senha = senhaInput.value.trim();
const confirmarSenha = confirmarSenhaInput.value.trim();

// Validação
if (senha !== confirmarSenha) {
erro.textContent = "As senhas não coincidem!";
erro.style.display = "block";
return;
}

// Verificar se e-mail já existe
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

if (usuarios.find((u) => u.email === email)) {
erro.textContent = "Este e-mail já está cadastrado!";
erro.style.display = "block";
return;
}

// Criar novo usuário
const novoUsuario = {
id: Date.now(),
nome,
email,
senha
};

usuarios.push(novoUsuario);

localStorage.setItem("usuarios", JSON.stringify(usuarios));

alert("Cadastro realizado com sucesso!");

window.location.href = "login.html";
});