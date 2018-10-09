function lanzamiento(){
	var x=Math.floor(Math.random()*6+1);
	return x;
}
function suclanz(nm){
	var x;
	var cont1=0;
	var cont2=0;
	var cont3=0;
	var cont4=0;
	var cont5=0;
	var cont6=0;
	for(x=0;x<nm;x++){
		switch(lanzamiento()){
			case 1:cont1++;break;
			case 2:cont2++;break;
			case 3:cont3++;break;
			case 4:cont4++;break;
			case 5:cont5++;break;
			case 6:cont6++;break;
		};
	}
	return "de "+nm+" tirada ha salido "+cont1+" unos,"+cont2+" dos,"+cont3+" tres,"+cont4+" cuatros,"+cont5+" cincos y "+cont6+" seis.";
	
}
function recpot(bs,exp){
	if(exp>=1){
		return bs*recpot(bs,exp-1);
	}else{
		return 1;
	}
}
function factorial(nm){
	if(nm>1){
		return nm*factorial(nm-1);
	}else{
		return 1;
	}
}
function creafactb(nm){
	document.write("<table>");
	for(x=1;x<=nm;x++){
		document.write("<tr>");
		document.write("<td>"+x+"</td>");
		document.write("<td>"+factorial(x)+"</td>");
		document.write("</tr>");
	}
	document.write("</table>");
	
}

//ejercicio 2
/*var btn=document.getElementById("btn");
btn.addEventListener("click",function(){document.getElementById("res").innerHTML="el resultado ha sido "+ lanzamiento();});*/

//ejercicio 3
/*var btn=document.getElementById("btn");
var x=prompt("¿cuantas tiradas quieres hacer?");
btn.addEventListener("click",function(){document.getElementById("res").innerHTML=suclanz(x);});
*/
//ejercicio 6
/*var x=prompt("introduzca la base");
var y=prompt("introduzca el exponente");
var btn=document.getElementById("btn");
btn.addEventListener("click",function(){document.getElementById("res").innerHTML="el resultado ha sido "+ recpot(x,y);});
*/
//ejercicio 7
/*var y=prompt("numero maximo ");
var btn=document.getElementById("btn");
btn.addEventListener("click",creafactb(y));
*/