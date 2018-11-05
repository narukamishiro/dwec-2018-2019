function alertMouse(){
	alert("deja de pulsarme, pesao");
}
function geoMouse(e){
	var lx;
	var ly;
	lx=e.clientX;
	ly=e.clientY;
	document.getElementById("res").innerHTML=" x:"+lx+" y:"+ly;
}
function creacanvas(){
	var x;
	var y;
	document.write("<table>");
	for(x=0;x<100;x++0){
		document.write("<tr>");
		for(y=0;y<100;y++){
			document.write("<td>  </td>");
		}
		document.write("</tr>");
	}
	document.write("</table>");
}
function draw1(e){
	if(e.ctrlKey){
		e.target.backgroundColor="#DC143C";
	}
	if(e.shiftKey){
		e.target.backgroundColor="#2E9AFE";
	}
}
function draw2(e){
	if(e.ctrlKey){
		e.target.backgroundColor="#DC143C";
	}
	if(e.shiftKey){
		e.target.backgroundColor="#2E9AFE";
	}
	if(e.keyCode==67){
		e.target.backgroundColor="#FFFFFF";
	}
	if(e.keyCode==68){
		creacanvas();
	}
}
//ejercicio 1
//document.onclick=alertMouse;
//ejercicio 2
//document.onmousemove=function(event){geoMouse(event);};
//ejercicio 4
/*
var list=document.getElementsByTagName("<tr>");
list.forEach(function(item){item.onmousemove=function(event){draw1(event)}});
*/
//ejercicio 5
/*
var list=document.getElementsByTagName("<tr>");
list.forEach(function(item){item.onmousemove=function(event){draw1(event)}});
*/