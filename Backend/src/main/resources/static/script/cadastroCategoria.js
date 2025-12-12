document.getElementById("formCategoria").addEventListener("submit", function (e) {
    e.preventDefault();

    const nomeInput = document.getElementById("nomeCategoria").value;

    fetch("http://localhost:8080/api/categorias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: nomeInput })
    })
        .then(() => {
            alert("Categoria salva!");
            window.location.href = "categoria.html";
        })
        .catch(err => alert("Erro ao salvar categoria"));
});
