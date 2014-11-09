function main() {
	var arrEntrada;
	var arrMayores;
	var promedio;
	//Pedir datos al usuario
	arrEntrada = entrada();
	//Separar mayores y menores de 18 años
	arrMayores = separarEdades(arrEntrada);
	//Calcular el promedio de estos datos
	promedio = calcularPromedio(arrMayores);
	//Imprimir resultado
	alert(promedio);
}

function entrada() {
	var valorEntrada = [];
	var aux;
	var i = 0;
	
	while(true) {
		aux = parseInt(prompt("Introduzca una edad"));
		if(aux != -1) {
			valorEntrada[i] = aux;	
			i++;
		} else {
			break;
		}
	}
	return valorEntrada;
}

function separarEdades(edades) {
	var arrMayores = [];
	var j = 0;

	for(var i = 0; i < edades.length; i++) {
		if(edades[i] >= 18) {
			arrMayores[j] = edades[i];
			j++;
		}
	}
	return arrMayores;
}

function calcularPromedio(mayores) {
	var suma = 0;
	for(var i = 0; i < mayores.length; i++) {
		suma = suma + mayores[i];	
	}
	return suma / mayores.length;
}

main();