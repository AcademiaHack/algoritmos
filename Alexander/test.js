var nombre;
var estasListo;
var pregunta1;
var persecuciones;
var persecuciones2; /* primer nivel */
var accion; /* primer nivel */
var persecuciones4; /* segundo nivel */
var persecuciones5; /* segundo nivel */
var romance;
var reglas;
var drama;
var horror;
var comediaGeneral;
var western;
var cienciaficcion;

reglas = ("Si, No o No lo se")
nombre = prompt("¡Bienvenido! ¿Cual es tu nombre?");

switch (nombre) {
  	case "Alexander":
    alert(estasListo);
    break;
 	case "":
 	alert("No puedes continuar sin identificarte.");
    break;
}

estasListo = prompt("¿" + nombre + " " + "estas listo?");

switch (estasListo) {
	case "Si":
	alert("¡No hay vuelta atras!")
	break;
	case "Afirmativo":
	alert("¡Copiado, cambio y fuera!")
	break;
	case "Por supuesto":
	alert("Un simple si hubiese sido suficiente.")
	break;
}

alert("Piensa en un género de cine. ¿Listo?")
alert("Limita tus respuestas a Si, No o No lo se, con la primera letra en mayúscula.")
alert("Nuestros algoritmos super avanzados son un poco anticuados y no reconoceran tu respuesta de otra manera.")

pregunta1 = prompt("¿Involucra tiroteos y persecuciones?" + " " + reglas);

switch (pregunta1) {
	case "Si":
	persecuciones = prompt("¿Los héroes suelen ser policias?" + " " + reglas)
	break;
	case "No":
	romance = prompt("¿Tiene que ver con romance?" + " " + reglas)
	break;
	case "No lo se":
	alert("No me estas poniendo las cosas fáciles.")
	accion = prompt("¿Tiene que ver con espionaje?" + " " + reglas)
	break;

}

alert("Calculando variables, computando, tirando flechas...");

/** rama de persecuciones **/

/* primer nivel */
  
switch (persecuciones) {
 	case "Si":
 	persecuciones2 = prompt("¿Sus personajes suelen tener superpoderes?" + " " + reglas)
 	break;
 	case "No":
 	accion = prompt("¿Tiene que ver con espionaje?" + " " + reglas)
 	break;
 	case "No lo se":
 	alert("Gusfraba, guuuuuuuusfraba.")
 	horror = prompt("¿Tiene que ver con fantasmas, hombres lobos, vampiros, etc?")
 	break;
}

alert("Identificando patrones, armando legos...");

/* segundo nivel */

switch (persecuciones2) {
 	case "Si":
 	cienciaFiccion = prompt("¿Involucra alienígenas?" + " " + reglas)
 	break;
 	case "No":
 	persecuciones5 = prompt("¿Tiene que ver con crímenes?" + " " + reglas)
 	break;
 	case "No lo se":
 	alert("¿Siempre eres asi de indeciso" + " " + nombre + "?")
	romance = prompt("¿Tiene que ver con romance?" + " " + reglas)
	break;
}

switch (persecuciones5) {
	case "Si":
	western = prompt("¿Tiene lugar en el lejano oeste?" + " " + reglas)
	break;
	case "No":
	guerra = prompt("¿Tiene que ver con la guerra?")
	break;
	case "No lo se":
	alert("Tu género son las películas de crimen. Si esto te parece incorrecto, recuerda que soy una computadora y por ende más inteligente que tu.")
	break;
}

alert("El algoritmo esta cobrando vi... es mentira");

/* rama secundaria */

switch (romance) {
 	case "Si":
 	comediaRespuesta = prompt("¿Su tono suene ser humorístico?" + " " + reglas)
 	break;
 	case "No":
 	horror = prompt("¿Tiene que ver con fantasmas, hombres lobos, vampiros, etc?")
 	break;
 	case "No lo se":
	drama = prompt("¿Lás películas de este género suelen ser deprimentes?" + " " + reglas)
	break;
}

/* Respuestas */

switch (comediaRespuesta) {
	case "Si":
	alert("¡Ja! Eso fue sencillo, humano. Tu género son las comedias románticas.")
	break;
	case "No":
	alert("¿Ese fue tu mejor intento, humano? Tu género es el romance.")
	break;
	case "No lo se":
	alert("Tu género puede ser o comedia romántica o solo romance, mis algoritmos son inútiles frente a tu indecisión.")
}

switch (cienciaficcion) {
	case "Si":
	alert("Estas pensando en ciencia ficción, puedes llamarme HAL9000.")
	break;
	case "No":
 	persecuciones5 = prompt("¿Tiene que ver con crímenes?" + " " + reglas)
 	break;
}

switch (western) {
	case "Si":
	alert("Tu género son los westerns, ¿ese es tu mejor esfuerzo" + " " + name + "?" + " " + reglas)
	break;
	case "No":
 	alert("Estas pensando en películas de guerra, tu pequeño cerebro no es un reto.")
 	break;
 	case "No lo se":
 	alert("Tu género es la acción. Podría ser más específico, pero has resultado incapaz de responder las preguntas más sencillas.")
 	break;
}

switch (horror) {
	case "Si":
	alert("Tu género es el terror. Bu")
	break;
	case "No":
 	accion = prompt("¿Tiene que ver con espionaje?" + " " + reglas)
 	break;
 	case "No lo se":
 	comediaGeneral = prompt("¿Tiene que ver con chistes?" + " " + reglas)
 	break;
}


switch (comediaGeneral) {
	case "Si":
	alert("Tu género es la comedia. No le veo la gracia, humano.")
	break;
	case "No":
	drama = prompt("¿Lás películas de este género suelen ser deprimentes?" + " " + reglas)
	break;
	case "No lo se":
	alert("Es imposible determinar tu resultado. Prefiero borrar mi disco duro antes que seguir lidiando con tu indecisión.")
	break;
}

switch (drama) {
	case "Si":
	alert("Tu género es el drama. Preferiría ver la Lista de Schindler antes que volver a jugar contigo.")
	break;
	case "No":
	alert("Tu género es la comedia. No le veo la gracia, humano.")
	break;
	case "No lo se":
	persecuciones5 = prompt("¿Tiene que ver con crímenes?" + " " + reglas)
	break;
}

switch (accion) {
	case "Si":
	alert("Tu género son las películas de espías.")
	break;
	case "No":
	alert("Tu género son las películas de crimen. Si esto te parece incorrecto, recuerda que soy una computadora y por ende más inteligente que tu.")
	break;
	case "No lo se":
	alert("Tu género es la acción. Podría ser más específico, pero has resultado incapaz de responder las preguntas más sencillas.")
	break;
}







