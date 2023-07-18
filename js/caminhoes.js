//Referênciação de elementos do documento HTML para constante; 
const sltTabelas = document.getElementById("sltTabelas");
const tbCaminhoes = document.getElementById("tbCaminhoes");
const barraPesquisa = document.getElementById("barraPesquisa");

//Adicionando receptores de eventos;
document.addEventListener("DOMContentLoaded", analisarTabela);
sltTabelas.addEventListener("change", analisarTabela);


//Função de tabela;
function analisarTabela() {
    //Limpando as tabelas;
    tbCaminhoes.innerHTML = "";
    //Limpando campo de pesquisa;
    barraPesquisa.innerHTML = "";
    //Declaração de varíaveis referênciando constantes;
    tabela = sltTabelas.value;
    //Estrutura de opções;
    switch (tabela) {

        case "distancia":


            break;

        case "consumo":
            compararConsumoMedio();

            break;
        case "ranking":
         

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
    var inputValor = document.getElementById("barraPesquisa").value.toUpperCase();
    var tabela = document.getElementById("tbCaminhoes");
    tabela.innerHTML = ""; // Limpa a tabela anterior (se houver)

    for (var i = 0; i < vetPlaca.length; i++) {
        if (vetPlaca[i].toUpperCase().includes(inputValor)) {
            var novaLinha  = tabela.insertRow();
            var Placa  = novaLinha .insertCell(0);
            var quilometro  = novaLinha .insertCell(1);
            var Consumo  = novaLinha .insertCell(2);
            var consumoMedio = novaLinha .insertCell(3);

            Placa .innerHTML = vetPlaca[i];
            quilometro .innerHTML = vetKM[i];
            Consumo .innerHTML = vetConsumo[i];
            consumoMedio.innerHTML = (vetKM[i] / vetConsumo[i]).toFixed(2);
        }
    }
    // insertCell(): cria uma nova célula e a insere na linha especificada. Nesse caso, estamos criando quatro células para cada linha da tabela, representando cada uma das colunas. Em seguida, usamos a propriedade innerHTML dessas células para definir o conteúdo que será exibido em cada célula da tabela. Isso é o que preenche a tabela com os dados do vetor vetorPlaca, vetorKM e vetorConsumo.
}