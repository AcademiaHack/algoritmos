var p = " (s para SI y n para NO)";

var input = prompt("Piensa en un país de américa del sur y escribe la letra s minuscula cuando estés listo");

var input = prompt("hablan portugés?" +p);
if (input=='s') {
	console.log("Tu país es Brasil");
}
else if (input=='n') {
	var input = prompt("Tienen mar?" +p);
	if (input == 'n') {console.log("Tu país es Bolivia");}
	else if (input=='s') {
		var input = prompt("Tienen muchas miss universo?" +p);
		if (input=='s') {console.log("Tu país es Venezuela");}
		else if (input=='n') {
		var input = prompt("Producen café?" +p);
		if (input=='s') {
			console.log("Tu país es Colombia");
		}
		else if (input=='n') {
			var input = prompt("Allí está Machu Pichu?" +p);
			if (input == 's') {
				console.log("Tu país es Perú");
			}
			else if (input=='n') {
				var input = prompt("Tu presidente es Correa?" +p);
				if (input == 's') {
					console.log("Tu país es Ecuador");
				}
				else if (input=='n') {
					var input = prompt("Eres un pibe?" +p);
					if (input == 's') {
						console.log("Tu país es Argentina");
					}
					else if (input=='n') {
						var input = prompt("Te burlas de los argentinos?"+p);
						if (input == 's') {
							console.log("Tu país es Uruguay")
						}
						else {console.log("Tu país es Chile");}
					}
				}
			}
		}
	}
	}
	
}