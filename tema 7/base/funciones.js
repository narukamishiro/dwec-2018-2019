function addcircle(cnvs, id){
	var clr=document.createElement("circle");
	var alt= cnvs.height;
	var anc= cnvs.width;
	var rad=Math.floor(Math.random()*15+10);

	r.value=rad;
	cx.value=Math.floor(Math.random()*(alt-2*rad)+rad);
	cy.value=Math.floor(Math.random()*(alt-2*rad)+rad);
	fll.value="red";
}
/*function color(){
}