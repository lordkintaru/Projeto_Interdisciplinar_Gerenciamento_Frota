//Referênciação de elementos do documento HTML para constante; 
const sltTabelas = document.getElementById("sltTabelas");
const tbCaminhoes = document.getElementById("tbCaminhoes");
const outBarraPesquisa = document.getElementById("outBarraPesquisa");
const inBarraPesquisa = document.getElementById("inBarraPesquisa");

//Adicionando receptores de eventos;
document.addEventListener("DOMContentLoaded", analisarTabela);
sltTabelas.addEventListener("change", analisarTabela);
inBarraPesquisa.addEventListener("")


//Função de tabela;
function analisarTabela() {
    //Limpando as tabelas;
    tbCaminhoes.innerHTML = "";
    //Limpando campo de pesquisa;
    outBarraPesquisa.innerHTML = "";
    //Declaração de varíaveis referênciando constantes;
    tabela = sltTabelas.value;
    //Estrutura de opções;
    switch (tabela) {

        case "distancia":


            break;

        case "consumo":
            compararConsumoMedio();

            break;


        default:
            //Acionando a função de criação de tabela;
            criarTabela();


            break;

    }
}

//Função de comparação de consumo médio;
function compararConsumoMedio() {
    //Criando a varíavel de comparação;
    var menorConsumo = 0;
    //Varíavel de de posição;
    var posicao = 0;
    //Estrutura de repetição com comparação;
    for (let i = 0; i < vetMedia.length; i++) {

        if (menorConsumo < vetMedia[i]) {
            menorConsumo = vetMedia[i];
            posicao = i;
        }
    }
    //Criação de váriaveis criadoras de elementos; 
    var placa = document.createElement("td");
    var km = document.createElement("td");
    var consumo = document.createElement("td");
    var media = document.createElement("td");
    var tr = document.createElement("tr");

    //Atribuindo os textos para as varíaveis;
    placa.innerHTML = vetPlaca[posicao];
    km.innerHTML = vetKM[posicao];
    consumo.innerHTML = vetConsumo[posicao];
    media.innerHTML = vetMedia[posicao].toFixed(2);

    //Organização para a inserção da tabela no HTML;
    tr.appendChild(placa);
    tr.appendChild(km);
    tr.appendChild(consumo);
    tr.appendChild(media);
    tbCaminhoes.appendChild(tr);
}

//Função de criação de tabela e barra de pesquisa;
function criarTabela() {

    //Estrutura de repetição para criação da tabela.
    for (let i = 0; i < vetPlaca.length; i++) {

        //Criação de váriaveis criadoras de elementos; 
        var placa = document.createElement("td");
        var km = document.createElement("td");
        var consumo = document.createElement("td");
        var media = document.createElement("td");
        var tr = document.createElement("tr");

        //Atribuindo os textos para as varíaveis;
        placa.innerHTML = vetPlaca[i];
        km.innerHTML = vetKM[i];
        consumo.innerHTML = vetConsumo[i];
        media.innerHTML = vetMedia[i].toFixed(2);

        //Organização para a inserção da tabela no HTML;
        tr.appendChild(placa);
        tr.appendChild(km);
        tr.appendChild(consumo);
        tr.appendChild(media);
        tbCaminhoes.appendChild(tr);
    }
    //Criando uma barra de pesquisa;
    var inBarraPesquisa = document.createElement("input");
    barraPesquisa.type = "text";
    barraPesquisa.id = "inBarraPesquisa";
    barraPesquisa.placeholder = "Procure o caminhão aqui!"
    outBarraPesquisa.appendChild(inBarraPesquisa);

}
