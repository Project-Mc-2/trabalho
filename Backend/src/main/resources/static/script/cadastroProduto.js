const API_URL = "http://localhost:8080/api/produtos";
const CAT_URL = "http://localhost:8080/api/categorias";

const paramsUrl = new URLSearchParams(window.location.search);
const idEdicao = paramsUrl.get("id");

document.addEventListener("DOMContentLoaded", async () => {
    await carregarCategorias();

    if (idEdicao) {
        await carregarDadosProduto(idEdicao);
    }

    document.getElementById("formCadastro").addEventListener("submit", salvarProduto);
});

async function carregarCategorias() {
    try {
        const res = await fetch(CAT_URL);
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
        const produto = await res.json();

        document.getElementById("nomeProduto").value = produto.nomeProduto;
        document.getElementById("anoLancamento").value = produto.anoLancamento;
        document.getElementById("marca").value = produto.marca;
        document.getElementById("urlCapa").value = produto.urlCapa;

        if (produto.categoria) {
            document.getElementById("selectCategoria").value = produto.categoria.id;
        }

    } catch (error) {
        alert("Erro ao buscar dados do produto.");
        window.location.href = "produto.html";
    }
}

function salvarProduto(event) {
    event.preventDefault();

    const produto = {
        nomeProduto: document.getElementById("nomeProduto").value,
        anoLancamento: document.getElementById("anoLancamento").value,
        marca: document.getElementById("marca").value,
        urlCapa: document.getElementById("urlCapa").value,
        categoria: {
            id: document.getElementById("selectCategoria").value
        }
    };

    const metodo = idEdicao ? "PUT" : "POST";
    const url = idEdicao ? `${API_URL}/${idEdicao}` : API_URL;

    fetch(url, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto)
    })
        .then(() => {
            alert("Produto salvo!");
            window.location.href = "produto.html";
        })
        .catch(err => alert("Erro ao salvar produto"));
}
