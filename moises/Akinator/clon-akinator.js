var q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20; 
alert("Piense en un personaje");
alert("Responda con si/no");
console.log("Piense en un personaje")
console.log("Responda con si/no");

q1 = prompt("Su personaje es famoso?");
q2 = prompt("Tu personaje tiene piernas?");
q3 = prompt("Tu personaje usa la misma vestimenta siempre?");
q4 = prompt("Tu personaje usa lentes?");

if (q1=="si"){
	if (q2=="si") {
		if (q3=="si") {
			if (q4=="si") {
				q10 = prompt("Tu personaje es veloz?");
				q5 = prompt("Tu personaje tiene poderes?");
				if (q10=="si" && q5=="si") {
					q7 = prompt("Su personaje sale en la TV?");
					if (q7=="si") {
						q11 = prompt("Su personaje usa una arco y flecha");
						if (q11=="si") {
							q8 = prompt("Tu personaje lucha cotra otros?");
							if (q8=="si") {
								q9 = prompt("Tu personaje es huerfano?");
								if (q9=="no") {
									alert("Tu personaje pertenece a la serie Bleach");
								}
							}
						}
					} else {
						q14 = prompt("Tu personaje usa un caparazon?");
						if (q14=="si") {
							q15 = prompt("Tu personaje es un anciano?");
							if (q15=="si") {
								alert("Tu personaje pertenece a Dragon Ball Z");
							}
						}
					}
				}
				q20 = prompt("Tu personaje usa capa?");
				if (q20="si") {
					q8 = prompt("Tu personaje lucha cotra otros?");
					if (q8=="si") {
						q5 = prompt("Tu personaje tiene poderes?");
						if (q5=="si") {
							q17=prompt("Tu personaje es rubio?");
							if (q17=="si") {
								alert("Tu personaje pertenece a la serie de Dragon Ball Z")
							}
						}
					}

				} 
				q16=prompt("Tu personaje usa magia?");
				if (16=="si") {
					q17=prompt("Tu personaje es rubio?");
					if (q17=="") {
						alert("Tu personaje pertenece a Fairy Tail");
					}
				}
			}
		}
	} else{
		q12 = prompt("Tu personaje habla?");
		if (q12=="no") {
			q8 = prompt("Tu personaje lucha cotra otros?");
			q5 = prompt("Tu personaje tiene poderes?");
			q10 = prompt("Tu personaje es veloz?");
			if ((q8=="si" && q5=="si") && (q10=="si")) {
				q19=prompt("Tu personaje usa ropa?");
				if (q19=="no") {
					alert("Tu personaje pertenece a la serie Pokemon")
				}
			}
		} else{
			q8 = prompt("Tu personaje lucha cotra otros?");
			q5 = prompt("Tu personaje tiene poderes?");
			q10 = prompt("Tu personaje es veloz?");
			if (q8=="si" && q5=="si" && q10=="si") {
				q19=prompt("Tu personaje usa ropa?");
				if (q19=="si") {
					alert("Tu personaje pertenece a la serie Digimon")
				}
			}
		}
	}
}
q18=prompt("Tu personaje es un dibujo?");
if (q18=="si") {
	if (q2=="si") {
		q5 = prompt("Tu personaje tiene poderes?");
		q6 = prompt("Su personaje es de otro pais?");
		if(q5=="si" && q6=="si"){
			q8 = prompt("Tu personaje lucha cotra otros?");	
			q7 = prompt("Su personaje sale en la TV?");
			if ((q8=="si" && q7=="no")||(q8=="no" && q7=="no")) {
				alert("Tu personaje pertenece a la serie de un manga");
			}
		}
	}
}