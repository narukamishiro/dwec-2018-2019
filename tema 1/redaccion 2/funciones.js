function ejercicio3(rad){
	var ar=Math.PI*Math.pow(rad,2);
	var cir=Math.PI*2*rad;
	document.write("la circuferencia es:"+cir+"<br>");
	document.write("el area es:"+ar+"<br>");
	
}
function calcels(c){
	var f=(c*1.8)+32;
	document.write(c+" grados celsius son "+f+" grados farenheit<br>");
}
function calfah(f){
	var c=(f-32)/1.8;
	document.write(f+" grados farenheit son "+c+" grados celsius<br>");
}
//ejercicio 3 
//ejercicio3(4);
//ejercicio 4
calcels(1);
calfah(33.8);