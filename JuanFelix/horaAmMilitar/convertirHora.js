function hackAmPmTo24(){
	var horaAmPm=prompt("Ingresar la hora (HH:MM xx):");
	var hora24;

	while(horaAmPm[0]>1 || horaAmPm[0]<0 || horaAmPm[2]!=":" || horaAmPm[3]>5 || horaAmPm[5]!=" " 
		  || (horaAmPm[6]!="a" && horaAmPm[6]!="A" && horaAmPm[6]!="p" && horaAmPm[6]!="P") || horaAmPm[0]+horaAmPm[1]>12 
		  || (horaAmPm[7]!="m" && horaAmPm[7]!="M"))

	{
		horaAmPm=prompt("Ingresar la hora (HH:MM xx):");		
	}

	if(horaAmPm[6]=="p" || horaAmPm[6]=="P"){
		if(horaAmPm[0]+horaAmPm[1]==12){
			hora24=horaAmPm[0]+horaAmPm[1]+":"+horaAmPm[3]+horaAmPm[4];
		}else{
				hora24=parseInt(horaAmPm[0]+horaAmPm[1])+12+":"+horaAmPm[3]+horaAmPm[4];
			 }
	}else{
			if(horaAmPm[0]+horaAmPm[1]==12){
				hora24="00"+":"+horaAmPm[3]+horaAmPm[4];
			}else{
					hora24=horaAmPm[0]+horaAmPm[1]+":"+horaAmPm[3]+horaAmPm[4];
				}	
		 }
	return alert("La hora ingresada: "+horaAmPm+"\nLa hora convertida a 24 horas es: "+hora24);
}

function hack24ToAmPm(){
	var hora24=prompt("Ingresar la hora (HH:MM):");
	var horaAmPm;

	while(hora24[0]>2 || hora24[0]<0 || hora24[2]!=":" || hora24[3]+hora24[4]>59 || hora24[3]+hora24[4]<00 || 
		  hora24[0]+hora24[1]>24)
	{
		hora24=prompt("Ingresar la hora (HH:MM):");		
	}

	if(hora24[0]+hora24[1]<13){
		horaAmPm=hora24[0]+hora24[1]+":"+hora24[3]+hora24[4]+" "+"am";
	}else if(parseInt(hora24[0]+hora24[1])-12==12){
				horaAmPm="00:"+hora24[3]+hora24[4]+" "+"am";
			  }else{	
					horaAmPm=parseInt(hora24[0]+hora24[1])-12+":"+hora24[3]+hora24[4]+" "+"pm";
		 			}
	return alert("La hora ingresada: "+hora24+"\nLa hora convertida es: "+horaAmPm);
}