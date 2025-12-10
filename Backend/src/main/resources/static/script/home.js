// Verifica login
const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
if (!usuario) window.location.href = "login.html";

// Elementos
const listaProdutos = document.getElementById("lista-produtos");

// Buscar "banco" local de produtos
const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// Exibir produtos dinamicamente
function renderizarProdutos() {
listaProdutos.innerHTML = "";

produtos.forEach(produto => {
const div = document.createElement("div");
div.classList.add("produto");

div.innerHTML = `
<img src="${produto.foto}" alt="${produto.nome}">
<h3>${produto.nome}</h3>
<p>Marca: ${produto.marca}</p>
<p class="nota">⭐ ${produto.notaMedia.toFixed(1)}</p>
<button onclick="verProduto(${produto.id})">Ver Detalhes</button>
`;

listaProdutos.appendChild(div);
});
}

function verProduto(id) {
localStorage.setItem("produtoSelecionado", id);
window.location.href = "produto.html";
}

renderizarProdutos();