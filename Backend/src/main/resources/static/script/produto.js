const API_URL = "http://localhost:8080/api/produtos";
const CAT_URL = "http://localhost:8080/api/categorias";

document.addEventListener("DOMContentLoaded", listarProduto);

function listarProduto() {
    fetch(API_URL)
        .then(res => res.json())
        .then(produto => {
            const lista = document.getElementById("listaProduto");
            lista.innerHTML = "";

            const paramsUrl = new URLSearchParams(window.location.search);
            const idCategoria = paramsUrl.get("idCategoria");

            if (idCategoria) {
                produto = produto.filter(f => f.categoria && f.categoria.id == idCategoria);
            }

            if (produto.length === 0) {
                lista.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666;">
                    Nenhum produto encontrado.
                </p>`;
                return;
            }

            let html = "";
            produto.forEach(f => {
                html += `
                  <div class="produto-card">

                    <div class="acoes-produto">
                        <button class="btn-editar" onclick="editarProduto(${f.id})">✏️</button>
                        <button class="btn-excluir" onclick="excluirProduto(${f.id})">🗑️</button>
                    </div>

                    <img src="${f.urlCapa}" alt="${f.nomeProduto}" 
                         onerror="this.src='https://via.placeholder.com/300x450?text=Sem+Capa'">

                    <strong>${f.nomeProduto}</strong><br>
                    <em>${f.categoria ? f.categoria.nome : "Sem Categoria"}</em><br>
                    (${f.anoLancamento || ""}) - ${f.marca || ""}
                  </div>
                `;
            });

            lista.innerHTML = html;
        });
}

function editarProduto(id) {
    window.location.href = `cadastroProduto.html?id=${id}`;
}

function excluirProduto(id) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(() => listarProduto())
        .catch(err => alert("Erro ao excluir"));
}
