function addcircle(cnvs, id){
	var clr=document.createElement("circle");
	var n= document.createAttribute("id");
	var cx= document.createAttribute("cx");
	var cy= document.createAttribute("cy");
	var r= document.createAttribute("r");
	var fll= document.createAttribute("fill");
	var alt= cnvs.height;
	var anc= cnvs.width;
	var rad=Math.floor(Math.random()*15+10);
	n.value=id;
	r.value=rad;
	cx.value=Math.floor(Math.random()*(alt-2*rad)+rad);
	cy.value=Math.floor(Math.random()*(alt-2*rad)+rad);
	fll.value="red";
}
/*function color(){
}