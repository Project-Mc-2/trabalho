const CAT_URL = "http://localhost:8080/api/categorias";

document.addEventListener("DOMContentLoaded", listarCategorias);

function listarCategorias() {
    fetch(CAT_URL)
        .then(res => res.json())
        .then(categorias => {

            const grid = document.getElementById("listaCategoria");
            grid.innerHTML = "";

            if (categorias.length === 0) {
                grid.innerHTML = `
                    <p style="grid-column:1/-1; text-align:center; color:#ccc;">
                        Nenhuma categoria cadastrada.
                    </p>`;
                return;
            }

            categorias.forEach(c => {
                grid.innerHTML += `
                    <div class="cardCategoria" onclick="abrirProdutos(${c.id})">
                        ${c.nome}
                    </div>
                `;
            });
        });
}

function abrirProdutos(id) {
    window.location.href = `produto.html?idCategoria=${id}`;
}
