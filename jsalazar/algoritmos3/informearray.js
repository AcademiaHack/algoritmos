var arr = [];
var num;
var i;

function aleatorio(){
	Math.round(Math.random()*(10000+10000)-10000);
}

var posiciones = prompt("Ingresa el tamaño del arreglo: ");

function llenar(){
	for (i = 0; i < posiciones; i++) {
		arr[i]=aleatorio();
		var n = arr[i];	
		console.log("El numero "+n);
	}
}

function par(num){
	if (num%2==0) {
			console.log("El numero es par.")
		}
		else {
			console.log("El numero es impar.")
		}
}

function longitudNum(num){
	if (num.length==1) {
			console.log("El numero es una unidad.")
		}
		else if (num.length==2) {
			console.log("El numero es una decena.")
		}
		else if (num.length==3) {
			console.log("El numero es una centena.")
		}
		else if (num.length==4) {
			console.log("El numero es una unidad de mil.")
		}
		else {
			console.log("El numero es 10 mil.")
		}
}

function positivoNegativo(num){
	if (num<0) {
			console.log("El numero es negativo");
		}
		else {
			console.log("El numero es positivo.")
		}
}

/*function imprimir(num){
	for (var i = 0; i < posiciones; i++) {
		console.log("El numero "+arr[i]);		
	}
}*/
	
function comprobar (num){
	for (i = num; i <= num; i++) {
		llenar();
		par(num);
		longitudNum(num);
		positivoNegativo(num);		
	}
}

var num = prompt("Ingresa una posicion del arreglo para chequearla");
comprobar(num);