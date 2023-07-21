//Referênciação de elementos do documento HTML para constante; 
const sltTabelas = document.getElementById("sltTabelas");
const tbCaminhoes = document.getElementById("tbCaminhoes");
var barraPesquisa = document.getElementById("barraPesquisa")
var table = document.getElementById("table");
var pesquisa = document.getElementById("pesquisa");

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
      // Esconde o elemento com o ID "barraPesquisa"
      pesquisa.style.display = "none";
      table.style.display = "none";

      break;

    case "consumo":
      // Esconde o elemento com o ID "barraPesquisa"
      pesquisa.style.display = "none";

      //Acionando a função;
      compararConsumoMedio();


      break;
    case "ranking":
      // Esconde o elemento com o ID "barraPesquisa"
      pesquisa.style.display = "none";

      //Acionando a função;
      calcularEconomicos();


      break;


    default:
      // Mostra o elemento com o ID "barraPesquisa"
      pesquisa.style.display = "inline";

      //Acionando a função;
      criarTabela();

      break;
  }
}

//Função de comparação de consumo médio;
function compararConsumoMedio() {

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

  var inputValor = barraPesquisa.value.toUpperCase();
  var tabela = document.getElementById("tbCaminhoes");
  // Limpa a tabela anterior (se houver);
  tabela.innerHTML = "";

  for (var i = 0; i < vetPlaca.length; i++) {
    if (vetPlaca[i].toUpperCase().includes(inputValor)) {
      var novaLinha = tabela.insertRow();
      var placa = novaLinha.insertCell(0);
      var quilometro = novaLinha.insertCell(1);
      var consumo = novaLinha.insertCell(2);
      var consumoMedio = novaLinha.insertCell(3);

      placa.innerHTML = vetPlaca[i];
      quilometro.innerHTML = vetKM[i];
      consumo.innerHTML = vetConsumo[i];
      consumoMedio.innerHTML = (vetKM[i] / vetConsumo[i]).toFixed(2);
    }
  }
  // insertCell(): cria uma nova célula e a insere na linha especificada. Nesse caso, estamos criando quatro células para cada linha da tabela, representando cada uma das colunas. Em seguida, usamos a propriedade innerHTML dessas células para definir o conteúdo que será exibido em cada célula da tabela. Isso é o que preenche a tabela com os dados do vetor vetorPlaca, vetorKM e vetorConsumo;
}

//Função de para criar a tabela com os caminhões mais econômicos;
function calcularEconomicos() {
  // Criação de um novo vetor;
  var vetCaminhoes = [];
  for (var i = 0; i < vetPlaca.length; i++) {
    vetCaminhoes.push({
      placa: vetPlaca[i],
      distanciaPercorrida: vetKM[i],
      combustivelConsumido: vetConsumo[i],
      consumoMedio: vetMedia[i]
    });
  }

  // Ordenar os caminhões com base no consumo médio (do menor para o maior);
  vetCaminhoes.sort(function (a, b) {
    // na verdade aqui ele compara um consumo com outro;
    return a.consumoMedio - b.consumoMedio;
  });

  // Selecionar e limita os 10 caminhões mais econômicos;
  var top10Caminhoes = vetCaminhoes.slice(0, 10);

  // Preencher a tabela HTML com as informações dos 10 caminhões mais econômicos;
  var tabela = document.getElementById("tbCaminhoes");
  tabela.innerHTML = "";

  for (var i = 0; i < top10Caminhoes.length; i++) {
    var caminhao = top10Caminhoes[i];
    var novaLinha = tabela.insertRow();
    var placa = novaLinha.insertCell(0);
    var quilometro = novaLinha.insertCell(1);
    var consumo = novaLinha.insertCell(2);
    var consumoMedio = novaLinha.insertCell(3);

    placa.innerHTML = caminhao.placa;
    quilometro.innerHTML = caminhao.distanciaPercorrida;
    consumo.innerHTML = caminhao.combustivelConsumido;
    consumoMedio.innerHTML = caminhao.consumoMedio.toFixed(2);
  }
}

function compararDistancia() {

  var maiorDistancia = 0;
  //Varíavel de de posição;
  var posicao = 0;
  //Estrutura de repetição com comparação;
  for (let i = 0; i < vetDistancia.length; i++) {

    if (maiorDistancia < vetDistancia[i]) {
      menorConsumo = vetDistancia[i];
      posicao = i;
    }
    
  }
 


}
