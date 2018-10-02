function ejercicio1(v1,v2){
	var nm1=Math.random();
	var nm2=Math.random()*100+100;
	var nm3=Math.random()*(v2-v1)+v1;
	document.write("numero 1(entre 0 y 1): "+nm1 +"<br>");
	document.write("numero 2(entre 100 y 200): "+Math.ceil(nm2)+"<br>");
	document.write("numero 3(entre "+v1+" y "+v2+"): "+Math.ceil(nm3)+"<br>");
}
function resuelveecu(g2,g1,g0){
	var x=Math.pow(g1,2)-(4*g2*g0);
	var sol1=(-g1+Math.sqrt(x))/(2*g2);
	var sol2=(-g1-Math.sqrt(x))/(2*g2);
	if(x>=0){
		if(x==0){
			document.write("esa ecuacion de segundo grado tiene una solucion y es "+sol1);
		}else{
			document.write("esa ecuacion de segundo grado tiene dos soluciones y son "+sol1 +" y "+sol2);
		}
	}else{
		document.write("no tiene soluciones reales")
	}
}
function tbseno(fl){
	var x=1;
	document.write('<table border=”0” cellspacing=”2” bgcolor=”black” width=200”>');
	do{
		document.write('<tr bgcolor=”white” height= ”50” >');
		document.write('<td width= ”100” bgcolor="white">'+x+'</td>');
		document.write('<td width= ”100” bgcolor="white">'+Math.sin(x)+'</td>');
		document.write('</tr>');
		x++;
	}while(x<=fl);
	
	document.write('</table>');
}
function rdimage(){
	var x=Math.ceil(Math.random()*3+1);
	switch(x){
		case 1:document.background="816c.jpg";break;
		case 2:document.background="321563.jpg";break;
		case 3:document.background="409335.jpg";break;
	}
}
//ejercicio 1
//ejercicio1(50,500);
//ejercicio 5
//resuelveecu(1,3,1);
//ejercicio 7
//tbseno(20);
//ejercicio 8
//rdimage();

