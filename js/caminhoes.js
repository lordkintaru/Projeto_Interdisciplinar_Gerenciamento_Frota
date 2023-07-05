//Referênciação de elementos do documento HTML para constante; 
const sltTabelas = document.getElementById("sltTabelas");
const tbCaminhoes = document.getElementById("tbCaminhoes");


//Adicionando receptores de eventos;
document.addEventListener("DOMContentLoaded", analisarTabela);
sltTabelas.addEventListener("change", analisarTabela);

//Função de tabela;
function analisarTabela() {


    //Variável referênciando uma constante;
    var tabela = sltTabelas.value;
   

    //Estrutura de opções;
    switch (tabela) {

        case "distancia":
            alert("deu certo ")

            break;

        case "consumo":
            alert("deu certo ")

            break;


        default:
            //Acionando a função de criação de tabela;
            criarTabela();


            break;

    }
}

//Função de criação de tabela;
function criarTabela() {
    //Estrutura de repetição para criação da tabela.
    for (let i = 0; i < vetPlaca.length; i++) {

        //Elemento seletor do corpo da tabela;
        var tbody = document.querySelector("tbody");

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
        media.innerHTML = vetMedia[i];

        //Organização para a inserção da tabela no HTML;
        tr.appendChild(placa);
        tr.appendChild(km);
        tr.appendChild(consumo);
        tr.appendChild(media);
        tbody.appendChild(tr);
    }
}



