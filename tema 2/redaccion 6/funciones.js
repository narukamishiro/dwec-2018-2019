function lanzamiento(){
	var x=Math.floor(Math.random()*6+1);
	return "el resultado ha sido "+ x;
}
//ejercicio 2
var btn=document.body.getElementById("btn");
btn.addEventListener("Click",lanzamiento);