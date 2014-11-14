

//RECUERDA QUE ASI ES UNA MATRIZ!!!
//mat = [[1,2,3],[4,5,6],[7,8,9]]
// 1 4 7
// 2 5 8
// 3 6 9
// mat[0][1] -> 2

function main(){
    var lado = parseInt(prompt("Tamaño del tablero"));
    var matrizP1 = hackInitMatriz(lado);
    var matrizP2 = hackInitMatriz(lado);
    
    var matrizBarcoP1 = hackInitBarcos(matrizP1);
    var matrizBarcoP2 = hackInitBarcos(matrizP2);

    hackPrintMatriz(matrizP1);
    hackPrintMatriz(matrizP2);

    startGame(matrizP1, matrizP2);
};

function hackInitBarcos(matriz) {
        
  //entrada es un arreglo con tres posiciones: 0: Coordenada X, 1: Coordenada Y. 2: Orientacion
  var entrada;
  
  entrada = hackEntradaBarco("T1");
  matriz = hackPosicionarBarco(entrada, 4, '1', matriz);
  
  entrada = hackEntradaBarco("T2");
  matriz = hackPosicionarBarco(entrada, 3, '2', matriz);
  
  entrada = hackEntradaBarco("T3");
  matriz = hackPosicionarBarco(entrada, 2, '3', matriz);
  
};

function hackPosicionarBarco(entrada, tamanoBarco, tokenBarco, matriz) {
    var x, y, orientacion;
    var barcoDetectado = false;
    
    x = parseInt(entrada[0]);
    y = parseInt(entrada[1]);
    orientacion = entrada[2];
    
    //COMPROBACION HORIZONTAL.
    if(orientacion == "h" || orientacion == "H") {
        if(x < matriz.length && y < matriz.length) {
            //LA COORDENADA EXISTE
            if(matriz[x][y] == "*") {
                //LA COORDENADA ES HABITABLE
                if(x + tamanoBarco <= matriz.length) {
                    //EL LIMITE MAX DEL BARCO EXISTE
                    for(var i = x; i< x+tamanoBarco; i++) {
                        if(matriz[i][y] != "*") {
                            barcoDetectado = true;
                        }
                    }
                    if(barcoDetectado != true) {
                        //INSERTAR BARCO
                        for(var i = x; i< x+tamanoBarco; i++) {
                            matriz[i][y] = tokenBarco;
                        }
                        alert("Barco insertado correctamente");
                    } else {
                        alert("Barco encontrado en el camino")
                    }
                } else {
                    alert("El barco no cabe en el tablero")
                }
            } else {
                alert("La coordenada ya esta ocupada por otro barco")
            }
        } else {
            alert("La coordenada no existe en el tablero")
        }
    } else if (orientacion == "v" || orientacion == "V") {//COMPROBACION VERTICAL.
        if(x < matriz.length && y < matriz.length) {
            //LA COORDENADA EXISTE
            if(matriz[x][y] == "*") {
                //LA COORDENADA ES HABITABLE
                if(y + tamanoBarco <= matriz.length) {
                    //EL LIMITE MAX DEL BARCO EXISTE
                    for(var i = y; i< y+tamanoBarco; i++) {
                        if(matriz[x][i] != "*") {
                            barcoDetectado = true;
                        }
                    }
                    if(barcoDetectado != true) {
                        //INSERTAR BARCO
                        for(var i = y; i< y+tamanoBarco; i++) {
                            matriz[x][i] = tokenBarco;
                        }
                        alert("Barco insertado correctamente");
                    } else {
                        alert("Barco encontrado en el camino")
                    }
                } else {
                    alert("El barco no cabe en el tablero")
                }
            } else {
                alert("La coordenada ya esta ocupada por otro barco")
            }
        } else {
            alert("La coordenada no existe en el tablero")
        }
    }
    return matriz;
}
//POSICIONAR BARCOS EN EL TABLERO.
function hackEntradaBarco(barco) {
    var stringCoordenada;
    var x,y, orientacion;
    stringCoordenada = prompt("Indique las coordenadas de "+ barco);
    x = stringCoordenada[0];
    y = stringCoordenada[2];
    orientacion = prompt("Indique la orientacion de " + barco);
    
    return [x,y,orientacion];
}

//CREA MATRIZ PARA INSERTAR BARCOS
function hackInitMatriz(lado){
    //Aqui se almacena cada uno de los arreglos
    var matriz = [];//vector externo para ingresar los vectores internos.
    var result = [];//vector interno inicializado.
    
    for (var i = 0; i < lado; i++) {
        result = [];
        for (var j = 0; j < lado; j++) {
            result[j] = "*";
        };
        matriz[i] = result;
    };    
    return matriz;
};

function hackPrintMatriz (result){
    var linea = "";         
    var lado = result.length;
    
    for (var i = 0;i < lado;i++) {
        for (var j = 0;j < lado;j++) {
            linea = linea + result[j][i];
        }
        linea =linea + "\n"
    }
    console.log(linea);
}

function startGame(mp1,mp2){
    var mpv1 = hackInitMatriz(mp1.length);
    var mpv2 = hackInitMatriz(mp2.length);  

    
    while(true){

        var coord = entradaCoordenada('Player 1');
        mpv2 = atacar(coord, mp2, mpv2);

        if(finishGame(mpv2)){
            alert('Gano Player 1');
            break;
        }

        coord = entradaCoordenada('Player 2');
        mpv1 = atacar(coord, mp1, mpv1);


        if(finishGame(mpv1)){
            alert('Gano Player 2');
            break;
        }

    }    

}

function atacar(coord, mp, mpv){
    var x = coord[0];
    var y = coord[1];

    if (mp[x][y]==1 || mp[x][y]==2 || mp[x][y]==3) {
        mpv[x][y] = "X";
        alert('Hit');
    }else {
        mpv[x][y] = "F";
        alert('Fail');
    }

    return mpv;
}

//ESTA FUNCION COMPRUEBA SI TERMINO EL JUEGO.
function entradaCoordenada(p1){
    var xy = prompt("Introduzca la coordenada de ataque (x:y)."+" "+p1);
    var x = parseInt(xy[0]);
    var y = parseInt(xy[2]);

    return [x,y];
}


function finishGame(mpv){
    //Verifica que la matriz de muestra tenga 9 X
    var hits = 0;
    for (var i = 0; i < mpv.length; i++) {
        for (var j = 0; j < mpv.length; j++) {
            if(mpv[i][j]=='X'){
                hits++;
                if(hits == 9){
                    return true;
                }
            }
        }
    }
    return false;
}


main();