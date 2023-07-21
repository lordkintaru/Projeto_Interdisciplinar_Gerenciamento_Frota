//Vetores pré-definidos;
var vetPlaca = ['JTA-7059', 'EOO-3665', 'MHK-1131', 'SFZ-3907', 'SVI-9010', 'MHK-1131', 'SFZ-3907', 'VCK-9071', 'STQ-1330', 'LUF-9516', 'STQ-1330', 'SFZ-3907', 'MHK-1131', 'EOO-3665', 'SVI-9010', 'LNO-5650', 'JTA-7059', 'VCK-9071', 'STQ-1330', 'LNO-5650', 'LNO-5650', 'EOO-3665', 'SFZ-3907', 'SVI-9010', 'LUF-9516', 'SVI-9010', 'LUF-9516', 'EEI-6218', 'EOO-3665', 'JTA-7059', 'VCK-9071', 'EEI-6218', 'SVI-9010', 'STQ-1330', 'VCK-9071', 'EEI-6218', 'STQ-1330', 'LUF-9516', 'EEI-6218', 'LNO-5650', 'MHK-1131', 'LNO-5650', 'EEI-6218', 'LNO-5650', 'EEI-6218', 'VCK-9071', 'LUF-9516', 'LNO-5650', 'EOO-3665', 'SVI-9010', 'MHK-1131', 'STQ-1330', 'SFZ-3907', 'SFZ-3907', 'SFZ-3907', 'SVI-9010', 'EOO-3665', 'SVI-9010', 'LUF-9516', 'VCK-9071', 'STQ-1330', 'JTA-7059', 'JTA-7059', 'JTA-7059', 'SFZ-3907', 'LUF-9516', 'EEI-6218', 'MHK-1131', 'LNO-5650', 'MHK-1131', 'MHK-1131', 'MHK-1131', 'EEI-6218', 'EOO-3665', 'STQ-1330', 'EOO-3665', 'VCK-9071', 'MHK-1131', 'SFZ-3907', 'VCK-9071', 'SVI-9010', 'LUF-9516', 'EEI-6218', 'JTA-7059', 'LUF-9516', 'JTA-7059', 'EEI-6218', 'EOO-3665', 'SFZ-3907', 'EOO-3665', 'LNO-5650', 'SVI-9010', 'VCK-9071', 'LUF-9516', 'JTA-7059', 'LNO-5650', 'STQ-1330', 'JTA-7059', 'STQ-1330', 'VCK-9071'];

var vetKM = [443, 397, 104, 571, 822, 878, 173, 914, 994, 256, 249, 476, 276, 273, 495, 124, 279, 207, 384, 517, 653, 767, 416, 566, 759, 722, 252, 500, 599, 203, 342, 212, 851, 593, 650, 378, 390, 135, 378, 805, 406, 299, 240, 276, 558, 971, 995, 645, 991, 682, 871, 269, 602, 680, 584, 312, 996, 711, 541, 750, 589, 833, 333, 857, 682, 290, 617, 442, 676, 960, 131, 987, 789, 365, 473, 185, 618, 787, 677, 913, 639, 957, 178, 746, 975, 499, 434, 680, 963, 667, 335, 277, 198, 623, 271, 378, 675, 642, 954, 983];

var vetConsumo = [87.2, 78.5, 21.6, 114.5, 168.5, 180.5, 34.0, 186.2, 196.2, 48.8, 47.3, 93.7, 53.6, 58.9, 100.9, 20.4, 53.9, 36.6, 78.9, 104.8, 127.2, 152.2, 84.4, 117.9, 155.5, 140.3, 49.8, 100.3, 124.4, 42.5, 65.2, 46.8, 173.9, 123.6, 127.2, 79.1, 75.5, 30.5, 79.1, 160.8, 80.2, 56.8, 47.7, 52.3, 110.4, 193.6, 196.5, 126.3, 198.5, 137.0, 170.1, 51.3, 115.5, 135.1, 117.7, 64.2, 199.2, 145.6, 106.7, 154.6, 121.8, 167.0, 68.9, 169.9, 134.7, 57.2, 124.8, 91.2, 132.9, 192.5, 25.3, 200.8, 153.6, 75.3, 99.5, 40.4, 128.6, 159.5, 132.9, 182.0, 124.5, 190.0, 39.7, 154.1, 190.4, 104.5, 87.4, 133.0, 196.2, 130.2, 67.7, 54.0, 36.1, 120.6, 57.5, 79.8, 132.3, 128.9, 194.6, 194.9];

//Criação de um vetor de consumo médio de litros;
var vetMedia= [];
//Estrutura de repetição para a inserção dos valores no vetor;
for (let i = 0; i< vetConsumo
    .length; i++) {

    var kmL = vetKM[i]/vetConsumo[i];
    vetMedia.push(kmL);

}

//Criação do vetor da distância total de cada caminhão;
var vetDistancia = [];
//Variável somadora;
var somadora = 0;

//Estrutura de repetição para a inserção dos valores no vetor;
for (let index = 0; index < vetPlaca.length; index++) {

    //Estrutura de repetição comparadora e somadora;
  for (let i = 0; i < vetPlaca.length; i++) {

    if (vetPlaca[index] == vetPlaca[i]) {

      somadora += vetKM[i];

    }
  }
  //Inserção do valor no vetor;
  vetDistancia.push(somadora);
  //Zerando a varíavel somadora para a próxima repetição;
  somadora = 0;
}


