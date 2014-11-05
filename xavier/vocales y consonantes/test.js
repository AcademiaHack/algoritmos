var consonante = " ES UNA CONSONANTE";
var vocal = " ES UNA VOCAL";
var warning = " Escriba la letra en Mayuscula ejemplo: 'A' ";
var answer = "";
var input = "ingrese una letra para saber si es consonante o una vocal"

answer = prompt(input + warning);
if (answer == "A" || answer == "E" || answer == "I" || answer == "O" || answer == "U"){
	rVocal = answer + vocal
	document.write(rVocal)

}else if(answer == "B" || answer == "C" || answer == "D" || answer == "F" || answer == "G" || answer == "H" || answer == "J" || answer == "K" || answer == "L" || answer == "M" || answer == "N" || answer == "Ñ" || answer == "P" || answer == "Q" || answer == "R" || answer == "S" || answer == "T" || answer == "V" || answer == "W" || answer == "X" || answer == "Y" || answer == "Z") {
	rConsonante = answer + consonante
	document.write(rConsonante)
}
else{
	alert("no es una letra 'RECUERDE SOLO INGRESAR UNA LETRA'")
}



