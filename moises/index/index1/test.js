var area;
var altura;
var volumen;

area = prompt("Introdusca area");
altura = prompt("Introdusca altura");
if(area % 2 == 0 && altura % 2 == 0){
	volumen = area * altura;
	console.log(volumen);
} else {
	console.log("El area y altura no son par")
}