var numero;

numero = prompt("Ingrese un numero del 1 al 6: ");

if (numero == 1) {
	alert("No es un numero primo.");
}
else if (numero > 1 && numero <= 6) {
	if (numero%numero==0 && numero%1 == 0 && numero%2 == 0 && numero<=2) {
		alert("Es un numero primo.");
	}
	else if (numero%numero==0 && numero%1 == 0 && numero%3 == 0 && numero<=3) {
		alert("Es un numero primo.");
	}
	else if (numero%numero==0 && numero%1 == 0 && numero%5 == 0) {
		alert("Es un numero primo.");
	}
	else {
		alert("No es un numero primo.");
	}
}
else {
	alert("No es un numero entre el 1 y el 6.");
}