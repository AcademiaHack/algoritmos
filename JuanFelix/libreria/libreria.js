
var arr = ["Martha","Ana","Maria","Linda"];
var pos = 2;
var arrNuevo = [];
var j = 0;
var k = 0;
var elemento;
var arrPop = [];

function hackDelete(pos,arr){
	for(i=0; i<arr.length; i++){
		if(i!=pos){
			arrNuevo[j]=arr[i];
			j++;
		}
	}
	return arrNuevo;
}

function hackPop(arr){
	elemento=arr[0];

	for(i=1; i<arr.length; i++){
			arrNuevo[k]=arr[i];
			k++;
	}
	return 	[elemento,arrNuevo];
}

function hackPush(elem,arr){
	i=1+arr.length;
	arr[i]=elem;
	return arr;
}

function hackSearch(elem,arr){
	pos = -1;
	for(i=0; i<arr.length; i++){
		if(arr[i]==elem){
			pos=i;
		}
	}
	return pos;
}