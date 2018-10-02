function dtinfo(){
	var d=new Date();
	document.write("actual year: "+d.getFullYear()+"<br>");
	document.write("actual month: "+d.getMonth()+"<br>");
	document.write("actual day: "+d.getDate()+"<br>");
	document.write("actual hour: "+d.getHours()+"<br>");
	document.write("actual minutes: "+d.getMinutes()+"<br>");
	document.write("actual seconds: "+d.getSeconds()+"<br>");
}
function fchvaris(){
	var fechahoy=new Date();
	var fecha85=fechahoy.setDate(fechahoy.getDate()+85);
	var fecha187=fechahoy.setDate(fechahoy.getDate()-187);
	fecha85.setFullYear(fecha85.getFullYear()+2);
	fecha187.setHours(fecha187.getHours()-24);
	document.write(fecha85-fecha187+"")
	
}
function chrono(cont){
	document.write(cont+"<br>");
	cont--;
	if(cont>=0){
		setTimeout(chrono(cont),1000);
	}
}
//ejercicio 1
//dtinfo();
//ejercicio 2
//fchvaris();
//ejercicio 3
chrono(60);