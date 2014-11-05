var dividendo;
var divisor;
var residuo;
var cociente;
var entero;
var i=1;
var k=0;
var m=0;
var z=0;
var resuldeci=""




dividendo= 123456789;
divisor=3456;

resto = dividendo - divisor;

	while ( resto >= divisor){
			resto= resto - divisor;
				i=i+1;
	}
		if (resto==0) {
			alert("El Resultado es igual a:" +i);
		
			} else {
					entero =i
					k=0
					resto = resto*10;
						while ( resto >= divisor){
							resto= resto - divisor;
								k=k+1;
									}
							resuldeci= k;
							alert("El Resultado es:" +entero+","+resuldeci);
					

				}


			 




				

		









