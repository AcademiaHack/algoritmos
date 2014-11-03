/*var PI;
var radioCircunferencia;
var areaCircunferencia;
var alturaCilindro;
var volumenCilindro;

PI = 3;
radioCircunferencia = prompt("Introduzca el radio de la circunferencia");
alturaCilindro = prompt("Introduzca el alto del cilindro");

areaCircunferencia = PI * radioCircunferencia * radioCircunferencia;
if (areaCircunferencia % 2 == 0 && alturaCilindro % 2 == 0) {	
	console.log(areaCircunferencia);
} else {
	console.log("El area no es par");
}


if (prompt("¿es utilizado en programación web?").toLowerCase()=="si") {
				if (prompt("¿es utilizado en FrontEnd?").toLowerCase()=="si") {
					if (prompt("¿con este lenguaje se define como se muestran los objetos de tu aplicación web?").toLowerCase()=="si") {
						if (prompt("¿estas pensando en el lenguaje CSS?").toLowerCase()=="si"){
							
						}
					}
				}
			}


if (prompt("¿se simboliza por un camello este lenguaje?"+c).toLowerCase()=="si"){
          if (prompt("¿estas pensando en el lenguaje Perl?").toLowerCase()=="si"){
            console.log("Perl divertido!");

          }
          else {
            console.log("mentiroso xd")
          }
        }

volumenCilindro = areaCircunferencia * alturaCilindro;
console.log(volumenCilindro)*/
c=" escriba (si) o (no) segun su respuesta";

if (prompt("¿estas pensando en un lenguaje de programación?"+c).toLowerCase()=="si") {
	if (prompt("¿soporta programación orientada objeto?"+c).toLowerCase()=="si") {
		if (prompt("¿es un lenguaje interpretado?"+c).toLowerCase()=="si") {
			if (prompt("¿el logo de este lenguaje es una joya?"+c).toLowerCase()=="si"){
				if (prompt("¿estas pensando en el lenguaje ruby?"+c).toLowerCase()=="si"){
					console.log("Ruby genial!");
				}
        else {
          console.log("mentiroso xd");
        }
			}//NO RUBI
      else if (prompt("¿se simboliza por un camello este lenguaje?"+c).toLowerCase()=="si") {
        if (prompt("¿estas pensando en el lenguaje Perl?"+c).toLowerCase()=="si"){
          console.log("Perl divertido!");
        }
        else {
          console.log("mentiroso xd");
        }
      }//NO PERL
      else if (prompt("¿este lenguaje te exige identar para funcionar correctamente?"+c).toLowerCase()=="si"){
        if (prompt("¿estas pensando en Python?"+c).toLowerCase()=="si"){
          console.log("Python Excelente!");
        }
        else{
          console.log("mentiroso xd");
        }
      }//NO PYTHON
      else if(prompt("¿este lenguaje se corre en una maquina virtual?"+c).toLowerCase()=="si"){
        if (prompt("¿estas pensando en el lenguaje de programación Java?"+c).toLowerCase()=="si"){
          console.log("Java Increible!");
        }
        else{
          console.log("mentiroso xd");
        }
      }//NO JAVA
      else{
        if (prompt("¿estas pensando en PHP?"+c).toLowerCase()=="si"){
          console.log("PHP Maravilloso!");
        }
        else{//NO PHP
          console.log("mentiroso xd");
        }
      }
		}//NO LENGUAJE INTERPRETADO
    else if (prompt("¿este lenguaje es de tipo compilado?"+c).toLowerCase()=="si"){
      if (prompt("¿este lenguaje fue popularizado por la compañia microsoft?"+c).toLowerCase()=="si"){
        if(prompt("¿estas pensando en Microsoft Visual Basic?"+c).toLowerCase()=="si"){
          console.log("Basic! Arcáico!");
        }
        else {
          console.log("mentiroso xd");
        }
      }//NO VISUAL BASIC
      else if (prompt("¿este lenguaje se utilizaba con tarjetas perforadas en sus inicios?"+c).toLowerCase()=="si"){
        if (prompt("¿el lenguaje es FOLTRAN?"+c).toLowerCase()=="si"){
          console.log("FOLTRAN constante innovacion!");
        }
        else{
          console.log("xq me engañas?");
        }
      }//NO FOLTRAN
      else {
        if (prompt("¿estas pensando en C/C++?"+c).toLowerCase()=="si"){
          console.log("C/C++! Rapidisimo!");
        }//NO C/C++
        else{
          console.log("xq insistes en dañar el sistema? jejeje");
        }
      }
    }//NO COMPILADO
    else{
      console.log("ni idea en cual piensas men!");
    }
	}// NO ORIENTADO OBJETO
  else {
    if(prompt("¿este lenguaje es declarativo?"+c).toLowerCase()=="si"){
      if (prompt("¿este lenguaje es privativo(pago)?"+c).toLowerCase()=="si"){
        if (prompt("este lenguaje es oracle(base de datos)?"+c).toLowerCase()=="si"){
          console.log("Oracle! Formal!");
        }
        else{
          console.log("no te gusta pagar por software eh?");
        }
      }//NO ORACLE
      else if (prompt("¿el logo de este lenguaje es un elefante?").toLowerCase()=="si"){
        if (prompt("¿estas pensando en Postgresql?"+c).toLowerCase()=="si"){
          console.log("Postgresql Inpresindible!");
        }
        else{
          console.log("no Postgresql eh? perdi entonces :(");
        }
      }//NO POSTGRESQL
      else{
        if (prompt("¿estas pensando en MySql?"+c).toLowerCase()=="si"){
          console.log("MySql Simple y Funcional!");
        }//NO MYSQL
        else{
          console.log("no MySql eh? perdi entonces :(");
        }
      }
    }//NO DECLARATIVO
    else{
      console.log("entonces no se nada :(");
    }
  }
}//NO LENGUAJE PROGRAMACION
else{
  console.log(":(");
}

