var i,j,num;

num = prompt("Ingrese el numero de la tabla de multiplicar que desea ver.");

//Esta es únicamente la tabla que solicita el usuario.
for (i=num; i<=num; i++){
	for (j=1; j<=10; j++){
		console.log(i+"x"+j+"="+i*j);
	}	
}
//Esta es la tabla completa del 1 al 10.

// for (i=1; i<=1; i++){
// 	for (j=1; j<=10; j++){
// 		console.log(i+"x"+j+"="+i*j);
// 	}	
// }