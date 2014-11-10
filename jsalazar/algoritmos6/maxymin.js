var arr = [];
var aux;
var max;
var min;
var cuentaMax = 0;
var cuentaMin = 0;
var check = true;

//Se ingresan valores al arreglo.
while (check){
	aux = parseInt(prompt("Introduzca un digito:"));
	if (aux == -1) {
		check = false;
	}else {
		arr.push(aux);
	}	
			
}
console.log(arr);
//Se calcula el num maximo.
max = arr[0];
for (i=0; i<arr.length; i++){			
	
	if (arr[i] > max){
		max = arr[i];		
	}		
 }
for (i=0; i<arr.length; i++){	
	if (arr[i] == max){			
		cuentaMax = cuentaMax +1;
	}
}
 alert("MAX "+max+" OCUR "+cuentaMax);	
 
// //Se calcula el num minimo.
min = arr[0];
for (i=0; i<arr.length; i++){			
	
	if (arr[i] < min){
		min = arr[i];	
	}			
}

for (i=0; i<arr.length; i++){	
	if (arr[i] == min){			
		cuentaMin = cuentaMin +1;
	}
}
alert("MIN "+min+" OCUR "+cuentaMin);