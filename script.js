// função para ler arquivo JSON
async function lerProdutos() {
const response = await fetch("product.json");
const produtos = await response.json();
return produtos; 
}
// função para exibir o produto no div
function exibirProduto(numero, produtos) {
    const produto = produtos.find(p => p.id === numero);
    const div = document.querySelector("#prod");

    if (produto){
        div.innerHTML = `
        <h2>${produto.Nome}</h2>
        <p>Valor: R$ ${produto.Valor.toFixed(2)}</p>`;
    

    } 
    else {
        div.innerHTML = "<p>Produto não encontrado.</p>";
   }
}

// evento de input no campo de texto 
const leprod = document.getElementById("cbprod");
leprod.addEventListener("input", async function () {
    const numero = parseInt(this.value);
    const produtos = await lerProdutos();
    exibirProduto(numero, produtos);  
});