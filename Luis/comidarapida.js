var warn = " Escriba en minusculas y sin acentos"
var q1 = "¿Tienes hambre?";
var q2 = "¿Te gusta la comida rápida?";
var q3 = "¿Que prefieres, dulce o salado?";
var q4 = "¿Frio Caliente?";
var q5 = "¿Americano, Asiatico, Mexicano, Arbae?";
var q6 = "¿Que te gusta más hamburguesas o pollo?";
var q7 = "¿Te gusta la tocineta?";
var q8 = "¿Te gusta el picante?";
var q9 = "¿Que te gusta más, sushi o comida china?";
var q10 = "¿Que prefieres rolles o conos?";
var q11 = "¿Que te gusta más burritos o tacos?";
var q12 = "¿?";
var q13 = "¿Frio Caliente?";
var q14 = "¿Frio Caliente?";
var q15 = "¿Frio Caliente?";



a1 = prompt(q1 + warn)
if (a1 =="si")
{
 	a2 = prompt(q2 + warn);
} 
else
{
 	alert("Regresa cuando tengas hambre :)");
}

if (a2 =="si") 
{
	a3 = prompt(q3);
}	
else
{
	alert("Ve a tu casa a preparar comida .l.");
}
if (a3 =="dulce") 
{
	a4 = prompt(q4);
}
if (a4 =="frio") 
{
	alert("Ve a EFE!!!!!!!");
}
if (a4 =="caliente") 
{
	alert("Ve a Churromania!!!!!!!");
}
if (a3 =="salado") 
{
	a5 = prompt(q5);
}
if (a5 =="Americano") 
{
	a6 = prompt(q6);
}
if (a6 =="Hamburguesas") 
{
	a7 = prompt(q7);
}
if (a7 == "si") 
{
	alert("Ve a BURGER KING!!!");	
}
else
{
	alert("Ve a Mcdonalds");
}
if (a6 =="pollo")
{
	a8 = prompt(q8);
}
if (a8 =="si") 
{
	alert("Ve a KFC!!!!!!!");
}
else
{
	alert("Ve a Arturos!!!!!!");
}
if (a5 =="asiatico") 
{
	a9 = prompt(q9);
}
if (a9 == "sushi") 
{
	a10 = prompt(q10);
}
if (a10 = "rolles") 
{
	alert("Ve a Sushi Town!!!!!!");
}
if (a10 = "conos") 
{
	alert("Ve a Conos Temakeria!!!!!!!");
}
if (a5 ="Mexicano") 
{
	a11 = prompt(q11);
}
if (a11 =="Burritos") 
{
	alert("Ve a Rico Burrito!!!!!!!");
}
if (a11 =="tacos") 
{
	alert("Ve a salsa y fiesta!!!!!!!");
}
if (a5 =="arabe") 
{
	alert("Ve a Shawarma Mix!!!!!!!!");
}

