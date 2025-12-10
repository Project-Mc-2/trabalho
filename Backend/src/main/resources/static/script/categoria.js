const listaCategorias = document.getElementById("lista-categorias");
const listaFiltrada = document.getElementById("produtos-filtrados");

const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

const categorias = [...new Set(produtos.map(p => p.categoria))];

categorias.forEach(cat => {
const li = document.createElement("li");
li.textContent = cat;
li.onclick = () => filtrar(cat);
listaCategorias.appendChild(li);
});

function filtrar(cat) {
listaFiltrada.innerHTML = "";

const filtrados = produtos.filter(p => p.categoria === cat);

filtrados.forEach(prod => {
const div = document.createElement("div");
div.classList.add("produto-cat");

div.innerHTML = `
<img src="${prod.foto}">
<h3>${prod.nome}</h3>
<p>⭐ ${prod.notaMedia.toFixed(1)}</p>
`;

listaFiltrada.appendChild(div);
});
}