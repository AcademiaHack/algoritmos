var dividendo = "1025025";
var divisor = "5";
var i, j, k, aux, resto;
i=0;
resto ="";
resultado="";
console.log("i","j","k","aux","resto","resultado");
console.log(i,j,k,aux,resto,resultado);
while (i < (dividendo.length)){
	j = i+1;
	console.log("i","j","k","aux","resto","resultado");
	console.log(i,j,k,aux,resto,resultado);
	aux = resto + dividendo[i]; //CharAt(i)
	console.log("i","j","k","aux","resto","resultado");
	console.log(i,j,k,aux,resto,resultado);
	while (j<=dividendo.length && parseInt(aux) < parseInt(divisor)){
		aux = aux + dividendo[j];
		console.log("i","j","k","aux","resto","resultado");
		console.log(i,j,k,aux,resto,resultado);
		j=j+1;
		if (j>1) {
		resultado = resultado + '0';
	}
		console.log("i","j","k","aux","resto","resultado");
		console.log(i,j,k,aux,resto,resultado);
	}
	k=1;
	console.log("i","j","k","aux","resto","resultado");
	console.log(i,j,k,aux,resto,resultado);
	while ((parseInt(aux) - (k*parseInt(divisor))) >= parseInt(divisor)) {
		k=k+1;
		console.log("i","j","k","aux","resto","resultado");
		console.log(i,j,k,aux,resto,resultado);
	}

	resultado = resultado + k.toString();
	console.log("i","j","k","aux","resto","resultado");
	console.log(i,j,k,aux,resto,resultado);
	resto = (parseInt(aux) - (k*parseInt(divisor)));
	console.log("i","j","k","aux","resto","resultado");
	console.log(i,j,k,aux,resto,resultado);
	i = j;
	console.log("i","j","k","aux","resto","resultado");
	console.log(i,j,k,aux,resto,resultado);
}
console.log("resultado:",resultado);