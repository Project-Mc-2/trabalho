const API_URL = "http://localhost:8080/api/produtos";
const CAT_URL = "http://localhost:8080/api/categorias";

document.addEventListener("DOMContentLoaded", listarProduto);

async function listarProduto() {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Erro ao buscar produtos do servidor");
        const produtos = await res.json();

        const lista = document.getElementById("listaProduto");
        if (!lista) throw new Error("Elemento 'listaProduto' não encontrado no HTML");

        const paramsUrl = new URLSearchParams(window.location.search);
        const idCategoria = paramsUrl.get("idCategoria");

        let produtosFiltrados = produtos;
        if (idCategoria) {
            produtosFiltrados = produtos.filter(p => p.categoria && p.categoria.id == idCategoria);
        }
        // mudando produtos

        if (produtosFiltrados.length === 0) {
            lista.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666;">
                    Nenhum produto encontrado.
                </p>`;
            return;
        }

        // Criar HTML dos produtos
        let html = produtosFiltrados.map(f => `
            <div class="produto-card">
                <div class="acoes-produto">
                    <button class="btn-editar" onclick="editarProduto(${f.id})">✏️</button>
                    <button class="btn-excluir" onclick="excluirProduto(${f.id})">🗑️</button>
                </div>
                <img src="${f.urlCapa || 'https://via.placeholder.com/300x450?text=Sem+Capa'}" 
                     alt="${f.nomeProduto}" 
                     onerror="this.src='https://via.placeholder.com/300x450?text=Sem+Capa'">
                <strong>${f.nomeProduto}</strong><br>
                <em>${f.categoria ? f.categoria.nome : "Sem Categoria"}</em><br>
                (${f.anoLancamento || ""}) - ${f.marca || ""} - ${f.opiniao || ""}
            </div>
        `).join("");

        lista.innerHTML = html;

    } catch (err) {
        console.error(err);
        alert("Erro ao carregar produtos. Veja o console para detalhes.");
    }
}

function editarProduto(id) {
    window.location.href = `cadastroProduto.html?id=${id}`;
}

async function excluirProduto(id) {
    if (!confirm("Tem certeza que deseja excluir este produto?")) return;

    try {
        const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Erro ao excluir produto");
        listarProduto();
    } catch (err) {
        console.error(err);
        alert("Erro ao excluir produto. Veja o console para detalhes.");
    }
}
