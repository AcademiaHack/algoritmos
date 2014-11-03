var advertencia;
var akinator;
var pregunta; 
var respuesta;

advertencia="Debe escribir Si o No en su respuesta";
akinator=alert("Hola!!! Soy AKINATOR.");
alert(advertencia);
pregunta=prompt("Pregunta No. 1 Su personaje existe realmente (Si o No)");+alert(advertencia);
respuesta=pregunta;
//console.log(respuesta);

if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){ //primer if
	pregunta=prompt("Preguta No. 2 Lo utiliza para escribir (Si o No)");+alert(advertencia);
	
	if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){ //segundo if
		pregunta=prompt("Preguta No. 3 Lo conectas a la corriente electrica (Si o No)");+alert(advertencia);
		
		if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){ //tercer if
			pregunta=prompt("Preguta No. 4 Tiene monitor y teclado (Si o No)");+alert(advertencia);
			if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){confirm("Estas pensando en una COMPUTADORA")}

		}else{confirm("Estas pensando en un SMARTPPHONE"}

			if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){
				pregunta=prompt("Preguta No. 5 Utiliza hoja para escribir (Si o No)");+alert(advertencia);

				if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){confirm("Estas pensado en una MAQUINA DE ESCRIBIR")}
			}else{confirm("Estas pensando en una TECNOLOGIA del FUTURO!!!")}
		pregunta=prompt("Preguta No. 3 Lo utilizas para apoyarte (Si o No)");+alert(advertencia);
		if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){
			pregunta=prompt("Preguta No. 4 Es de madera o vidrio (Si o No)");+alert(advertencia);
			if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){
				pregunta=prompt("Preguta No. 5 Tienes tus papeles y tus cosas personales sobre ella (Si o No)");+alert(advertencia);
				if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){confirm("Estas pensado en un ESCRITORIO")}
			}else{confirm("No me digas que estas pensando en una SILLA");}
		}else if(pregunta=='No' || pregunta=='NO' || pregunta=='no'){confirm("Tu eres una persona que levita")}	
	}else if(pregunta=='No' || pregunta=='NO' || pregunta=='no'){confirm("Tu escribes en la primera pared que te encuentras en el medio")}		
}else {console.log("Su respuesta fue No")}//Fin del primer if


