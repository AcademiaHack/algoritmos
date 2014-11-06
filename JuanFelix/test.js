var advertencia;
var akinator;
var pregunta; 
var respuesta;

advertencia="Debe escribir Si o No en su respuesta";
akinator=alert("Hola!!! Soy AKINATOR.");
alert(advertencia);
pregunta=prompt("Pregunta No. 1 Usas materiales de oficina (Si o No)");+alert(advertencia);
respuesta=pregunta;
//console.log(respuesta);

if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){ 
	pregunta=prompt("Preguta No. 2 Sirve para escribir (Si o No)");+alert(advertencia);
	
	if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){
		pregunta=prompt("Preguta No. 3 Lo conectas a la corriente electrica (Si o No)");+alert(advertencia);

		if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){
			pregunta=prompt("Preguta No. 4 Tiene monitor y teclado (Si o No)");+alert(advertencia);
			
			if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){confirm("Estas pensando en una COMPUTADORA");}
			else{
					pregunta=prompt("Preguta No. 4 Es necesario colocarle una hoja para escribir (Si o No)");+alert(advertencia);
					
					if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){
						confirm("Estas pensado en una MAQUINA DE ESCRIBIR");
					}else{confirm("Estas pensando en un SMARTPPHONE");}
				}
		}else{
				pregunta=prompt("Pregunta 4 Lo utilizas para guardar documentos (Si o No)");+alert(advertencia);
				if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){
					pregunta=prompt("Pregunta 5 Es de color MARRON o AMARILO (Si o No)");+alert(advertencia);
						if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){
							confirm("Estas pensado en una CARPETA");
						}else{confirm("No estas claro en lo que estas pensando!!!");}
				}else{
						pregunta=prompt("Pregunta 5 Lo utilizas para recortar (Si o No)");+alert(advertencia);
						if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){
							confirm("Estas pensado en una TIJERA");
						}else{confirm("Tu te la pasas molestando a tus colegas en la oficina!!!");}
					}
			}		
	}else{
			pregunta=prompt("Preguta No. 3 Lo utilizas para apoyarte (Si o No)");+alert(advertencia);
				
				if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){
					pregunta=prompt("Preguta No. 4 Es de madera o vidrio (Si o No)");+alert(advertencia);
				
					if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){
						pregunta=prompt("Preguta No. 5 Tienes tus papeles y tus cosas personales sobre ella (Si o No)");+alert(advertencia);
							if(pregunta=='Si' || pregunta=='SI' || pregunta=='si'){confirm("Estas pensado en un ESCRITORIO")}
					}else{confirm("No me digas que estas pensando en una SILLA");}
				}else{confirm("Tu eres una persona que levita");}
		}
}else {confirm("Tienes que ir pensando en conseguir empleo algun dia!!!");}