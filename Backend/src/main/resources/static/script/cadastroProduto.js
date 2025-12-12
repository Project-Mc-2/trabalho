const API_URL = "http://localhost:8080/api/produtos";
const CAT_URL = "http://localhost:8080/api/categorias";

const paramsUrl = new URLSearchParams(window.location.search);
const idEdicao = paramsUrl.get("id");

document.addEventListener("DOMContentLoaded", async () => {
    await carregarCategorias();

    if (idEdicao) {
        await carregarDadosProduto(idEdicao);
        document.getElementById("nomeProdutoTitulo").textContent = "Editar Produto";
    }

    document.getElementById("formCadastro").addEventListener("submit", salvarProduto);
});

async function carregarCategorias() {
    try {
        const res = await fetch(CAT_URL);
        if (!res.ok) throw new Error("Erro ao buscar categorias");
        const categorias = await res.json();

        const select = document.getElementById("selectCategoria");
        select.innerHTML = '<option value="">Selecione uma categoria</option>';

        categorias.forEach(c => {
            select.innerHTML += `<option value="${c.id}">${c.nome}</option>`;
        });
    } catch (error) {
        alert("Erro ao carregar categorias: " + error);
    }
}

async function carregarDadosProduto(id) {
    try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error("Produto não encontrado");
        const produto = await res.json();

        document.getElementById("nomeProduto").value = produto.nomeProduto;
        document.getElementById("anoLancamento").value = produto.anoLancamento || "";
        document.getElementById("marca").value = produto.marca || "";
        document.getElementById("opiniao").value = produto.opiniao || "";
        document.getElementById("urlCapa").value = produto.urlCapa || "";

        if (produto.categoria) {
            document.getElementById("selectCategoria").value = produto.categoria.id;
        }

    } catch (error) {
        alert("Erro ao buscar dados do produto. " + error);
        window.location.href = "produto.html";
    }
}

async function salvarProduto(event) {
    event.preventDefault();

    const produto = {
        nomeProduto: document.getElementById("nomeProduto").value,
        anoLancamento: document.getElementById("anoLancamento").value,
        marca: document.getElementById("marca").value,
        opiniao: document.getElementById("opiniao").value,
        urlCapa: document.getElementById("urlCapa").value,
        categoria: {
            id: Number(document.getElementById("selectCategoria").value)
        }
    };

    const metodo = idEdicao ? "PUT" : "POST";
    const url = idEdicao ? `${API_URL}/${idEdicao}` : API_URL;

    try {
        const res = await fetch(url, {
            method: metodo,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(produto)
        });

        if (!res.ok) throw new Error("Erro ao salvar produto");

        alert("Produto salvo com sucesso!");
        window.location.href = "produto.html";

    } catch (err) {
        console.error(err);
        alert("Erro ao salvar produto. Veja o console para detalhes.");
    }
}
