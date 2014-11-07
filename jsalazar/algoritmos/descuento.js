var monto;

monto = prompt("Ingrese el monto de la compra");

if (monto > 1000){
	monto = monto - (monto*20/100);
	alert("El monto a pagar es: " +monto);
}
else {
	alert("El monto a pagar es: " +monto);
}