// Pegar ID do produto selecionado
const produtoID = localStorage.getItem("produtoSelecionado");
const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

const produto = produtos.find(p => p.id == produtoID);

// Elementos
const titulo = document.getElementById("titulo-produto");
const foto = document.getElementById("foto-produto");
const marca = document.getElementById("marca-produto");
const nota = document.getElementById("nota-produto");
const listaAvaliacoes = document.getElementById("lista-avaliacoes");
const formAvaliacao = document.getElementById("form-avaliacao");

// Carregar informações
titulo.textContent = produto.nome;
foto.src = produto.foto;
marca.textContent = produto.marca;
nota.textContent = produto.notaMedia.toFixed(1);

// Renderizar avaliações
function renderAvaliacoes() {
listaAvaliacoes.innerHTML = "";
produto.avaliacoes.forEach(av => {
const li = document.createElement("li");
li.innerHTML = `
<strong>${av.usuario}</strong> – ⭐ ${av.nota}<br>
<span>${av.comentario}</span>
`;
listaAvaliacoes.appendChild(li);
});
}

// Adicionar avaliação
formAvaliacao.addEventListener("submit", (e) => {
e.preventDefault();

const nota = Number(document.getElementById("nota").value);
const comentario = document.getElementById("comentario").value.trim();
const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

const novaAvaliacao = {
usuario: usuario.nome,
nota,
comentario
};

produto.avaliacoes.push(novaAvaliacao);

produto.notaMedia =
produto.avaliacoes.reduce((acc, a) => acc + a.nota, 0) /
produto.avaliacoes.length;

localStorage.setItem("produtos", JSON.stringify(produtos));

renderAvaliacoes();
});

renderAvaliacoes();