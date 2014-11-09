var num = '';
var capicua = true;
var i,j;

num = prompt("Ingrese un numero para verificar si es Capicua:")
capicua = true;

for(i=0, j=num.length-1; i<=(num.length/2); i++, j--){
	if (num.charAt(i) != num.charAt(j)) {
		capicua = false;				
	}
	if (capicua == true) {
			alert("El numero "+num+" es capicua");
	} else {
			alert("El numero "+num+" no es capicua");
	}
	break;	
}

