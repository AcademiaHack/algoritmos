var a = prompt("Introduzca numero para calcular su raiz cuadrada.")
var b,c,d;

function raiz(a){
	b = a;
	c = 0;
	d = a;//Esta variable sirve para almacenar el valor inicial a calcular, ya que la variable inicial se sobreescribirá.
	while (c != a){
		c = a;
		a = ((b/a)+a)/2;
	}
	alert("La raiz cuadrada de "+d+" es: "+a);
}

raiz(a);