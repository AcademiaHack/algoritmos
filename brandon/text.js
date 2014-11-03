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
var adv;

adv = " responda si o no en minuscula"

pregunta1 = prompt("¿esta pensando en un vehiculo?"+adv);

if (pregunta1 == "si")
	//es un vehiculo
{
	pregunta2 = prompt("¿esta pensando en un carro?"+adv);
	console.log(pregunta2);
	if (pregunta2 == "si") 
		//es un carro
	{
		pregunta4 = prompt("¿esta pensando en una marca comercial?"+adv);
		console.log(pregunta4);
		if (pregunta4 == "si") 
			//es una marca comercial
		{
			pregunta6 = prompt("¿esta pensando en un vehiculo de venta en venezuela?"+adv);
			console.log(pregunta6);
			if (pregunta6 == "si") 
				//esta de venta en venezuela
			{
				pregunta7 = prompt("¿esta pensando en un vehiculo del gobierno?"+adv);
				console.log(pregunta7)
				if (pregunta7 == "si") 
					//si es un vehiculo del gobierno
				{
					alert("lo siento el gobierno pone nombres raros a los vehiculos"+adv)
				}
				else if (pregunta7 == "no")
					//no es un vehiculo del gobierno
				{
					pregunta8 = prompt("¿esta pensando en un vehiculo ford?"+adv);
					console.log(pregunta8)
					if (pregunta8 == "si") 
					{

					};
				}
			}
			else if (pregunta6 == "no")
				//no es u vehiculo de venta en venezuela
			{
				alert("lo sentimos este programa no tiene todas las marcar internacionales")
			}
			
		}
		else if (pregunta4 == "no")
			//no es una marca comercial
		{
			pregunta5 = prompt("¿esta pensando en una marca costosa?"+adv);	
			console.log(pregunta5)
			if (pregunta5 == "si") 
				//es una marca costosa
			{
				pergunta9 = prompt("¿tu marca es lamborghini?"+adv)
			}
			else if (pregunta5 == "no")
				//no es una marca constosa
			{
				alert("lo conocera tu abuela")
			}
		}
	}
	else if (pregunta1 == "no")
		{
		pregunta3 = prompt("¿esta pensando en un moto?"+adv);
		console.log(pregunta3);
		if (pregunta2 == "si") 
			//es una moto
		{

		};
	}
}
else if (pregunta1 == "no")
{

}




