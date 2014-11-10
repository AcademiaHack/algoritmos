function entrada(){
	
	var valorEntrada = [];
	var i;
	var contadorEdades = 0;
	var cant_edades = prompt("Cuantas edades desea ingresar?");

	while (contadorEdades <= cant_edades) {
		
		for (i=0; i< cant_edades; i++){
			var edad = parseInt(prompt("Introduzca una edad"));

			if(edad >= 0) {
				valorEntrada[i] = edad;
				contadorEdades++;
			}
		}
		return valorEntrada;					
	}	
}

function separarEdades(edades){
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

function promedio(mayores) {
	var suma = 0;
	for(var i = 0; i < mayores.length; i++) {
		suma = suma + mayores[i];	
	}
	return suma / mayores.length;
}

function main(){
	var arrEntrada;
	var arrMayores;
	var promedioEdadMayores;

	arrEntrada = entrada();
	arrMayores = separarEdades(arrEntrada);
	promedioEdadMayores = promedio(arrMayores);

	alert("El promedio de edad de los mayores a 18 años es: "+promedioEdadMayores+" años.");
}

main();
