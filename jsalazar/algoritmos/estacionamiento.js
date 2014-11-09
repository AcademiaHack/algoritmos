var ampmEntrada;
var horaEntrada;
var minutoEntrada;
var ampmSalida;
var horaSalida;
var minutoSalida;
var montoPago;
var mediaHora = 2.5;

//Solicito las horas de entrada.
horaEntrada = prompt("Introduzca la hora de entrada (Formato 12H):");
minutoEntrada = prompt("Introduzca los minutos de la hora de entrada:");
ampmEntrada = prompt("Introduzca A mayúscula si entró en la mañana ó P mayúscula si fue en la tarde:");
//Solicito las horas de salida.
horaSalida = prompt("Introduzca la hora de salida (Formato 12H):");
minutoSalida = prompt("Introduzca los minutos de la hora de salida:");
ampmSalida = prompt("Introduzca A mayúscula si salió en la mañana ó P mayúscula si fue en la tarde:");
//Convierto las horas de entrada y salida a formato 24H para simplificar la resta.
if (ampmEntrada == 'P' && horaEntrada != 12) {
	horaEntrada = horaEntrada+12;
}
else if (ampmSalida == 'P' && horaSalida != 12) {
	horaSalida = horaSalida+12;
}
else if (ampmEntrada == 'A' && horaEntrada == 12) {
	horaEntrada = horaEntrada-12;
}
else if (ampmEntrada == 'A' && horaEntrada != 12) {
	horaEntrada = horaEntrada;
}

var cantHoras = horaSalida-horaEntrada;
var cantMinutos = minutoSalida-minutoEntrada;

//en este caso el usuario tiene menos de 1 hora en el estacionamiento.
if (cantMinutos>0 && cantHoras==0) {
	montoPago=4;
	alert("El monto A a cancelar es: "+montoPago);
} //Caso si se pasa de media hora adicional.
else if (cantMinutos>0) {
	if (horaEntrada==12 || horaEntrada<6) {
		alert("El estacionamiento abre a las 6am, vuelva después.");
	}
	else if (cantHoras<0) {//Caso si pernocta con entrada PM y salida AM.
		alert("La pernocta no está permitida en este estacionamiento, asi que vaya a buscar su carro en una chivera.");
	}
	else if (ampmEntrada == 'P' && ampmSalida == 'P') {
		alert("La pernocta no está permitida en este estacionamiento, asi que vaya a buscar su carro en una chivera.");
	}
	//Caso si pasa al menos 1 hora.
	else if (cantHoras>0) {
		montoPago = (cantHoras*4) + mediaHora;
		alert("El monto A a cancelar es: "+montoPago);
	}
	
}//Caso si se pasa de la media hora adicional pero NO llega a 1 hora.
else if (cantMinutos<0) {
	if (horaEntrada==12 || horaEntrada<6) {
		alert("El estacionamiento abre a las 6am, vuelva después.");
	}
	else if (cantHoras != 0) {
		montoPago = cantHoras*4;
		alert("El monto A a cancelar es: "+montoPago);
	}else if (cantHoras == 0) {
		alert("Ud introdujo una hora de entrada errónea.");//Caso en que el usuario coloque la misma hora de entrada y salida
	}														//pero pasa algunos minutos en el estacionamiento.
}