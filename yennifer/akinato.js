var bienvenido;
var respuesta;
var pregunta;
var valor;


bienvenido=alert("Bienvenido a AKINATO");

respuesta=prompt("¿Su Personaje existe?.....¡¡¡¡¡¡¡¡Advertencia al Usuario......."+ "... Seleccione una Respuesta de estas dos opciones Si o No");
valor=respuesta;

//console.log(valor);


if (valor == "SI" || valor=="si") {

	respuesta=prompt("¿Es una persona?");

		if (valor == "SI" || valor=="si") {
			respuesta=prompt("¿Es Mujer?");
			valor=respuesta;
			
			if (valor=="SI" || valor=="si") {
				respuesta=prompt("Es mujerrrrrrr");
			} else { 

				respuesta=prompt("¿Es mexicano?");
				valor=respuesta;
					
					if (valor=="SI" || valor=="si") {
							respuesta=prompt("Es Mexicano");
					} else {
						
						respuesta=prompt("¿Le gusta la arepa?");
						valor=respuesta;
						
						if (valor=="SI" || valor=="si"){
							respuesta=prompt("Es Cantante");

								if (valor=="SI" || valor=="si"){
									respuesta=prompt("Cantante venezolano y famoso");
									valor=respuesta;

									if (valor=="SI" || valor=="si") {

										respuesta=prompt("Le gusta la Salsa?");
										valor=respuesta;
										if (valor=="SI" || valor=="si") {
											respuesta=prompt("Pensaste en Oscar de Leon el Salsero");
										} else {}

									} else {}

								} else {}

						} else {}


					}
			}

		}
		else
			
		{}

	
} else { 

	respuesta=prompt("¿le gusta ir a la playa?");

		if (valor == "SI" || valor=="si") {

		} else
		{}

}














