var resp1 = "Cristiano Ronaldo";
var resp2 = "Lionel Messi";
var resp3 = "Neymar";
var resp4 = "Iker Casillas";
var resp5 = "Zlatan Ibrahimovic";
var	resp6 = "Phillip Lahm";


var rules =" Solo puedes responder -Si -No"; 

var	ask1 ="Tu personaje jugo el Mundial de futbol 2014?" + rules;
var ask2 ="Tu personaje nacio en Europa?" + rules;
var ask3 ="Tu personaje Juega en la liga BBVA?" + rules;
var ask4 ="Tu personaje juego en la posicion de delantero?" + rules;
var ask5 ="Tu personaje juega en el Real Madrid?" + rules;
var ask6 ="Tu personaje juega en posicion de arquero?" + rules;
var ask8 ="Tu personaje juega en la Bundesliga?" + rules;
var ask9 ="Tu personaje juega en el Bayern F.C?" + rules;
var ask10="Tu personaje juega en el F.C Barcelona?" + rules;
var ask11="Tu personaje a Ganado algun Balon de Oro?" + rules;
var ask12= "Tu personaje juega en el PSG?" + rules;



switch (prompt(ask1).toLowerCase()) {
	case "si":
		switch (prompt(ask2).toLowerCase()) {
			case "si":
				switch (prompt(ask3).toLowerCase()) {
					case "si":
						switch(prompt(ask4).toLowerCase()) {
							case "si":
								switch(prompt(ask5).toLowerCase()) {
								case "si":
									confirm("Tu personaje es " + resp1 + " ?")
								break;
								case "no":
									alert("Lo sentimos nuestra Base de Datos aun no ha sido Actualizada")
								break;
								}
							break;
							case "no":
								switch(prompt(ask5).toLowerCase()) {
								case "si":
									switch(prompt(ask6).toLowerCase()) {
										case "si":
											confirm("Tu personaje es " + resp4 + " ?")
										break;
										case "no":
											alert("Lo sentimos nuestra Base de Datos aun no ha sido Actualizada")
										break;
									}
								break;
								case "no":
									alert("Lo sentimos nuestra Base de Datos aun no ha sido Actualizada")
								break;
								}
							break;
	
						}
					break
					case "no":
						switch(prompt(ask8).toLowerCase()) {
							case "si":
								switch(prompt(ask9).toLowerCase()) {
									case "si":
										switch(prompt(ask4).toLowerCase()) {
											case "si":
												alert("Lo sentimos nuestra Base de Datos aun no ha sido Actualizada")
											break;
											case "no":
												confirm("Tu personaje es " + resp6 + " ?")
											break;
										}
									break;

									case "no":
										alert("Lo sentimos nuestra Base de Datos aun no ha sido Actualizada")
									break;
								}
							break;	
						}
					break;
				}
			break;
			case "no":
				switch(prompt(ask4).toLowerCase()) {
					case "si":
						switch(prompt(ask3).toLowerCase()) {
							case "si":
								switch(prompt(ask10).toLowerCase()) {
									case "si":
										switch(prompt(ask11).toLowerCase()) {
											case "si":
												confirm("Tu personaje es " + resp2 + " ?")
											break;

											case "no":
												confirm("Tu personaje es " + resp3 + " ?")
											break;		
										}
									break;
									case "no":
										alert("Lo sentimos nuestra Base de Datos aun no ha sido Actualizada")
									break;
								}
							break;
							case "no":
								alert("Lo sentimos nuestra Base de Datos aun no ha sido Actualizada")
							break;
						}
					break;
					case "no":
						alert("Lo sentimos nuestra Base de Datos aun no ha sido Actualizada")
					break;
					}
			break;
			}	
	break;

	case "no":
		switch(prompt(ask2).toLowerCase()) {
			case "si":
				switch(prompt(ask4).toLowerCase()) {
					case "si":
						switch(prompt(ask12).toLowerCase()) {
							case "si":
								confirm("Tu personaje es " + resp5 + " ?")
							break;
							case "no":
								alert("Lo sentimos nuestra Base de Datos aun no ha sido Actualizada")
							break;
						}
					break;
					case "no":
						alert("Lo sentimos nuestra Base de Datos aun no ha sido Actualizada")
					break;
				}
			break;
			case "no":
				alert("Lo sentimos nuestra Base de Datos aun no ha sido Actualizada")
			break;
		}
	break;	
}
