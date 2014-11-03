var PI;
var radioCircunferencia;
var areaCircunferencia;
var alturaCilindro;
var volumenCilindro
PI = 3.14;
radioCircunferencia = prompt("introdusca radio");
alturaCilindro= prompt("introdusca altura");
areaCircunferencia = PI * radioCircunferencia * radioCircunferencia;

if (areaCircunferencia % 2 == 0)
{
	console.log(areaCircunferencia);
}
else
{
	console.log("el  area no es par");
	if (alturaCilindro % 2 == 0) 
	{
		volumenCircunferencia =  areaCircunferencia * alturaCilindro;
		console.log(volumenCircunferencia)
	}
	else
	{
		console.log("el volumen no es par")
	}
}

