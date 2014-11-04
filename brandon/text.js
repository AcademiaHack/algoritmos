var pregunta1;
var pregunta2;
var pregunta3;
var pregunta4;
var pregunta5;
var pregunta6;
var pregunta7;
var pregunta8;
var pregunta9;
var pregunta10;
var pregunta11;
var pregunta12;
var pregunta13;
var pregunta14;
var pregunta15;
var pregunta16;
var pregunta17;
var pregunta18;
var pregunta19;
var pregunta20;
var pregunta21;
var pregunta22;

var adv;

adv = " responda si o no en minuscula"

pregunta1 = prompt("¿esta pensando en un vehiculo?"+adv);

if (pregunta1 == "si")	
{ //es un vehiculo
	pregunta2 = prompt("¿esta pensando en un carro?"+adv);
	console.log(pregunta2);
	if (pregunta2 == "si") 
	{ //es un carro
		pregunta4 = prompt("¿esta pensando en una marca comercial?"+adv);
		console.log(pregunta4);
		if (pregunta4 == "si") 
		{ //es una marca comercial
			pregunta6 = prompt("¿esta pensando en un vehiculo de venta en venezuela?"+adv);
			console.log(pregunta6);
			if (pregunta6 == "si") 
				
			{ //esta de venta en venezuela
				pregunta7 = prompt("¿esta pensando en un vehiculo del gobierno?"+adv);
				console.log(pregunta7)
				if (pregunta7 == "si") 
				{ //si es un vehiculo del gobierno
					alert("lo siento el gobierno pone nombres raros a los vehiculos"+adv)
				}
				else if (pregunta7 == "no")	
				{ //no es un vehiculo del gobierno
					pregunta8 = prompt("¿esta pensando en un vehiculo ford?"+adv);
					console.log(pregunta8)
					if (pregunta8 == "si") 
					{
						pregunta9 = prompt("¿esta pensando en un vehiculo pickup?"+adv);
						console.log(pregunta9)
						if (pregunta9 == "si") 
						{
							alert("tu vehiculo es un ford f150 , f250 o f350")
						}
						else if (pregunta9 =="no") 
						{
							pregunta13 = prompt("¿esta pensando en una camioneta?"+adv);
							console.log(pregunta13)
							if (pregunta13 == "si")
							{
								alert("tu vehiculo es una ford explorer")
							}
							else if (pregunta13 == "no") 
							{
								pregunta14 = prompt("¿esta pensando en un automovil?"+adv);
								console.log(pregunta14)
								if (pregunta14 == "si")
								{
									alert("esta pensando en un ford mustang o ford fusion")
								}
								else if (pregunta14 == "no") 
								{
									alert("no se encuentra posible respuesta")
								}
							}
						}	
					}
					else if (pregunta8 == "no") 
					{
						pregunta10 = prompt("¿esta pensando en un vehiculo mazda?"+adv);
						console.log(pregunta10)
						if (pregunta10 == "si") 
						{
							pregunta11 = prompt("¿esta pensando en un vehiculo pickup?"+adv);
							console.log(pregunta11)
							if (pregunta11 == "si")
							{
								alert("")
							}
							else if (pregunta13) 
							{

								pregunta15 = prompt("¿esta pensando en una camioneta?"+adv);
								console.log(pregunta15)
								if (pregunta15 == "si")
								{
									alert("")
								}
								else if (pregunta15 == "no") 
								{
									pregunta16 = prompt("¿esta pensando en un automovil?"+adv);
									console.log(pregunta16)
									if (pregunta16 == "si")	
									{
										alert("")
									}
									else if (pregunta16 == "no") 
									{
										alert("no se encuentra posible respuesta")
									}
								}
							}	
						}
						else if (pregunta10 == "no") 
						{
							alert("no tenemos mas marcas registradas en la base de datos")
						}
						
					}
				}
			}
			else if (pregunta6 == "no")
			{ //no es un vehiculo de venta en venezuela
				alert("lo sentimos este programa no tiene todas las marcar internacionales")
			}
			
		}
		else if (pregunta4 == "no")	
		{ //no es una marca comercial
			pregunta5 = prompt("¿esta pensando en una marca costosa?"+adv);	
			console.log(pregunta5)
			if (pregunta5 == "si") 	
			{ //es una marca costosa
				pregunta19 = prompt("¿tu marca es lamborghini?"+adv)
				console.log(pregunta19)
				if (pregunta19 == "si") 
				{
					alert("usted penso en un lamborghini gallardo, aventador o murcielago")
				}
				else if (pregunta19 == "no") 
				{
					pregunta17 = prompt("¿tu marca es ferrari?"+adv)
					console.log(pregunta17)
					if (pregunta17 == "si")
					{
						alert("usted probablemente penso en el perrari enzo, spider o scuderia")
					}
					else if (pregunta17 == "no") 
					{
						pregunta18 = prompt("¿tu marca es bugatti?"+adv)
						console.log(pregunta18)
						if (pregunta18 == "si")
						{
							alert("usted probablemente penso en el bugatti galibier, veyron o stratos")
						}
						else if (pregunta18 == "no") 
						{
							alert("no hay mas modelos costosos en la base de datos espere futuras actualizaciones")
						}
					}
				}
			}
			else if (pregunta5 == "no")
			{ //no es una marca constosa
				alert("lo conocera tu abuela")
			}
		}
	}
	else if (pregunta2 == "no")
	{
		pregunta3 = prompt("¿esta pensando en un moto?"+adv);
		console.log(pregunta3);
		if (pregunta3 == "si") 	
		{ //es una moto
			alert("no tenemos base de datos de moto")
		}
	}
}
else if (pregunta1 == "no")
{

}