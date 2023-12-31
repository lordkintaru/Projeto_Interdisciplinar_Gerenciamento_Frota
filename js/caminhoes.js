/*Versão da página caminhões, versão 1.0, sendo a finalização dela para a a entrega dos arquivos
Desenvolvida por: Igor e Alexandre*/

//Referênciação de elementos do documento HTML para constante; 
const sltTabelas = document.getElementById("sltTabelas");
const tbCaminhoes = document.getElementById("tbCaminhoes");
const barraPesquisa = document.getElementById("barraPesquisa");
const table = document.getElementById("table");
const pesquisa = document.getElementById("pesquisa");
const diagResultado = document.getElementById("diagResultado");
const outResultado = document.getElementById("outResultado");
const btFecharResultado = document.getElementById("btFecharResultado");

//Adicionando receptores de eventos;
document.addEventListener("DOMContentLoaded", analisarTabela);
sltTabelas.addEventListener("change", analisarTabela);
btFecharResultado.addEventListener("click", fecharDialog);

//Varíavel para segurar o valor;
var ancora = "";

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
      //Acionando a função;
      compararDistancia()

      break;

    case "consumo":
    
      //Acionando a função;
      compararConsumoMedio();


      break;
    case "ranking":
      //Variavel a qual segura o valor;
      ancora = sltTabelas.value;
      // Esconde o elemento com o ID "barraPesquisa";
      pesquisa.style.display = "none";

      //Acionando a função;
      calcularEconomicos();


      break;


    default:
      //Variavel a qual segura o valor;
      ancora = sltTabelas.value;
      // Mostra o elemento com o ID "barraPesquisa";
      pesquisa.style.display = "inline";

      //Acionando a função;
      criarTabela();

      break;
  }
}

//Função de comparação de consumo médio;
function compararConsumoMedio() {

  //Mantendo o mesmo valor anterior;
  sltTabelas.value = ancora;
  analisarTabela();

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
  //Saída das informações através do dialog; 
  outResultado.innerHTML = `A viagem a qual possui o menor consumo médio de gasolina foi o caminhão ${vetPlaca[posicao]}, percorrendo ${vetKM[posicao]} Kms ultilizando ${vetConsumo[posicao]} L de gasolina, sendo assim seu consumo médio de ${vetMedia[posicao].toFixed(2)} Kms/L.`
  diagResultado.showModal();
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

  //Mantendo o mesmo valor anterior;
  sltTabelas.value = ancora;
  analisarTabela();

  //Varíavel de comparação;
  var maiorDistancia = 0;
  
  //Varíavel de de posição;
  var posicao = 0;
  //Estrutura de repetição com comparação;
  for (let i = 0; i < vetDistancia.length; i++) {

    if (maiorDistancia < vetDistancia[i]) {
      maiorDistancia = vetDistancia[i];
      posicao = i;
    }

  }

  //Adiconando o resultado da comparação;
  outResultado.innerHTML = `O caminhão ${vetPlaca[posicao]} foi o que mais percorreu distância, sendo ao total ${maiorDistancia} Kms.`
  //Mostrando o dialog;
  diagResultado.showModal();


}

function fecharDialog(){
  diagResultado.close();
}