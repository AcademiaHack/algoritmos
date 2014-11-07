var ampmEntrada;
var horaEntrada;
var minutoEntrada;

var ampmSalida;
var horaSalida;
var minutoSalida;

var montoPago;
var mediaHora = 2.5;

var cantHoras;
var cantMinutos;

//Solicito las horas de entrada.
horaEntrada = prompt("Introduzca la hora de entrada (Formato 12H):");
minutoEntrada = prompt("Introduzca los minutos de la hora de entrada:");
ampmEntrada = prompt("Introduzca A mayúscula si entró en la mañana ó P mayúscula si fue en la tarde:");
//Solicito las horas de salida.
horaSalida = prompt("Introduzca la hora de salida (Formato 12H):");
minutoSalida = prompt("Introduzca los minutos de la hora de salida:");
ampmSalida = prompt("Introduzca A mayúscula si salió en la mañana ó P mayúscula si fue en la tarde:");



horaEntrada = Number(horaEntrada);
minutoEntrada = Number(minutoEntrada);

horaSalida = Number(horaSalida);
minutoSalida = Number(minutoSalida);
cantHoras = Number(cantHoras);
cantMinutos = Number(cantMinutos);

//Convierto las horas de entrada y salida a formato 24H para simplificar la resta.
if (ampmEntrada == 'P' && ampmSalida == 'A') {
	horaEntrada = horaEntrada+12;
	horaSalida = horaSalida;
}
else if (ampmEntrada == 'A' && horaEntrada == 12) {
	horaEntrada = horaEntrada-12;
}
else if (ampmSalida == 'P' && horaSalida == 12) {
	horaSalida = horaSalida;
}
else if (ampmEntrada == 'A' && ampmSalida == 'P') {
	horaEntrada = horaEntrada;
	horaSalida = horaSalida+12;
}
else if (ampmEntrada == 'A' && ampmSalida == 'A') {
	horaEntrada = horaEntrada;
	horaSalida = horaSalida;
}
else if (ampmEntrada == 'P' && ampmSalida == 'P') {
	horaEntrada = horaEntrada+12;
	horaSalida = horaSalida+12;
}


cantHoras = horaSalida-horaEntrada;
cantMinutos = minutoSalida-minutoEntrada;

//Aqui comienzan las combinaciones de opciones.

if (cantHoras==0 && cantMinutos>0) {
	montoPago=4;
	alert("El monto a cancelar es: "+montoPago);
}
else if (cantHoras==0 && cantMinutos<0) {
	alert("Ud introdujo una hora de entrada errónea.");
}
else if (ampmEntrada == 'P' && ampmSalida == 'A') {
	alert("Le dijimos que NO pernoctara en este estacionamiento, asi que vaya a buscar su carro en una chivera.");
}
else if (horaEntrada==12 || horaEntrada<6) {
	alert("El estacionamiento abre a las 6am, vuelva después.");
}
else if (cantHoras>0) {
	
	if (cantMinutos>0) {
		montoPago = cantHoras*4 + mediaHora;
		alert("El monto a cancelar es: "+montoPago);
	}
	else if (cantMinutos<0 || cantMinutos==0) {
		montoPago = cantHoras*4;
		alert("El monto a cancelar es: "+montoPago);
	}
}
else if (ampmEntrada == 'P' && ampmSalida == 'P' && cantHoras <0) {
	alert("Le dijimos que NO pernoctara en este estacionamiento, asi que vaya a buscar su carro en una chivera.");
}