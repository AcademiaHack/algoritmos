var letras;
var data = new Array("a", "e", "i","o","u");
var i=0;
var	vocal= 0;



letras=prompt("Ingrese Una Vocal o Consonate");



while (i<= 5) {
	

	if (data[i] == letras){
		vocal =1
		
	}
	i=i+1;
}

		 
if (vocal == 1) {

	alert("Es Vocal");

} else {
	alert("Es Consonante");

}



				

		









