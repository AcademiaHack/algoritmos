var q1 = "Estas pensando en un politico?";
var q2 = "Es hombre?";
var q3 = "El color del partido politico es amarillo?";
var q4 = "El color del partido politico es rojo?";
var q5 = "Es flaco?";
var q6 = "Es inteligente?";
var q7 = "es bonito?";
var q8 = "es venezolano?";
var q9 = "es universitario?";
var q10 = "tiene bigote?";
var q11 = "es gordo?";	
var currentAnswer;

var warning = " Escriba la letra S para si o la letra N para no"
var error = "SOLO DEBE RESPONDER S o N"

currentAnswer = prompt(q1 + warning);
if(currentAnswer == "S") {
	//ES UN POLITICO
	currentAnswer = prompt(q2 + warning); 
	if (currentAnswer == "S") {
		//ES UN HOMBRE
		currentAnswer = prompt(q3 + warning); 
		if (currentAnswer == "S") {
			//EL PARTIDO POLITICO ES AMARILLO
		currentAnswer = prompt(q5 + warning);
		if (currentAnswer == "S") {
			//ES FLACO
			 currentAnswer = prompt(q6 + warning);
			 if (currentAnswer == "S") {
			 	//ES INTELIGENTE
			 	currentAnswer = prompt(q7 + warning);
			 	if (currentAnswer == "S") {
			 		//ES BONITO
			 		currentAnswer = prompt(q8 + warning);
			 		if (currentAnswer == "S") {
			 			//ES VENEZOLANO
			 			currentAnswer = prompt(q9 + warning);
			 			if (currentAnswer == "S") {
			 				//ES UNIVERSITARIO
			 			}
			 		}
			 	}
			 }
		}
			alert('Tu Politico es Capriles');
		} else if(currentAnswer == "N") {
			//EL PARTIDO POLITICO NO ES AMARILLO
			currentAnswer = prompt(q4 + warning);
			if (currentAnswer == "S") {
				//El COLOR POLITICO ES ROJO
				currentAnswer = prompt(q6 + warning);
				if (currentAnswer == "N") {
					//NO UNIVERSITARIO
					currentAnswer = prompt(q7 + warning);
					if (currentAnswer == "N") {
						//NO ES BONITO
						currentAnswer = prompt(q8 + warning);
						if (currentAnswer == "N") {
							//NO ES VENEZOLANO
							currentAnswer = prompt(q9 + warning);
							if (currentAnswer == "N") {
								//NO ES UNIVERSITARIO
								currentAnswer = prompt(q10 + warning);
								if (currentAnswer == "S") {
									//SI TIENE BIGOTE
									currentAnswer = prompt(q11 + warning);
									if (currentAnswer == "S") {
										alert('Tu Politico es Maduro');
									}
								}
							}
						}
					}
				}
			}
		} else {
			alert(error)
		}
	} else if(currentAnswer == "N") {
		//NO ES UN HOMBRE
	} else {
		alert(error)
	}
} else if(currentAnswer == "N") {
	//NO ES UN POLITICO
} else {
	alert(error)
}
