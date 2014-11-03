var PI;
var radioCircunferencia;
var areaCircunferencia;
var alturaCilindro;
var volumenCilindro;

PI = 3;
radioCircunferencia = prompt("Introduzca el radio de la circunferencia");
alturaCilindro = prompt("Introduzca el alto del cilindro");

areaCircunferencia = PI * radioCircunferencia * radioCircunferencia;
if (areaCircunferencia % 2 == 0 && alturaCilindro % 2 == 0) {	
	console.log(areaCircunferencia);
} else {
	console.log("El area no es par");
}

volumenCilindro = areaCircunferencia * alturaCilindro;
console.log(volumenCilindro)