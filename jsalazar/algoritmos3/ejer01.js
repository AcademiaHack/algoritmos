var PI = 3.14;
var lado1 = 3; //Puede ser utilizado como la base.
var lado2 = 5; //Puede ser utilizado como la altura.
var radio = 7;

function areaCuadrado(lado1){
	return lado1*lado1;
}

function areaRectangulo(lado1, lado2){
	return lado1*lado2;
}

function areaCirculo(radio){
return PI*radio*radio;
}


var degree = prompt("Ingrese temperatura: ");
var tipo = prompt("Ingrese 'f' para convertir a grados Farenheit o 'c' para convertir a grados celsius");
function convertTemperature (degree, tipo){	
	if (tipo=='f') {
		alert("Grados Farenheit: "+(degree*(9/5)+32));
	}
	else {
		alert("Grados celsius: "+(degree-32)*(5/9));
	}

}
convertTemperature(degree, tipo);