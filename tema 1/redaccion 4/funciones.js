function compnum(nm1,nm2){
	var text;
	var max;
	if(nm1!=nm2){
		if(nm1>nm2){
			max=nm1;
		}else{
			max=nm2;
		}
	}
	text="el numero mas grande entre "+nm1+" y "+nm2+" es "+max;
	return text;
}
function saludos(lg){
	switch(lg){
		case "en":return "hello word";break;
		case "jp":return "ohayo warudo";break;
		case "fr":return "salut monde";break;
		default:return "hello word";break;
	}
}
//ejercicio 1
//document.getElementById("res").innerHTML=compnum(12,19)+"";
//ejercicio 2
document.getElementById("res").innerHTML=saludos("");