var D = '1025';
var d = '5';
var i = 0;
var resto = "";
var j;
var k;
var aux;
var resultado = "";

while (i < D.length){

	j = i+1;
	aux = resto + D[i];
	
	while (j <= D.length && parseInt(aux) < parseInt(d)) {
		aux = aux + D[j];		
		
		if (j>1) {
			resultado = resultado + '0';
		}
		j = j + 1;
	}
	
	k = 1;

	while (parseInt(aux) - (k*parseInt(d)) >= parseInt(d)) {
		k = k + 1;
	}	

	resultado = resultado + k.toString();

	resto = parseInt(aux) - (k*parseInt(d));

	i = j;
}

alert(resultado);