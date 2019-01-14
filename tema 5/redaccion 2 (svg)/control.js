function init(){
	var init=[];
	var cnv=document.getElementById("cn");
	var pyr=new player();
	var listene=new array();
	var nm;
	var ene;
	do{
		nm=prompt("numero de bolas enemigas (de 2 a 10)");
	}while(nm%2!=0 || 2>nm || 10<nm);
	for(x=0;x<nm;x++){
		ene=new enemyBall();
		if(x==0 ||x%2==0){
			ene.setcolor("blue");
		}else{
			ene.setcolor("black");
		}
		listene.push(ene);
	}
	init.push(cnv);
	init.push(pyr);
	init.push(listene);
	return init;
}
function eventHolder(cnv,pyr){
	cnv.addEventListener("mousemove",cnvMove);
	pyr.addEventListener("mousedown",chanceclr);
	cnv.addEventListener("mouseout",pause);
	pyr.addEventListener("mousein",reanudar)
}
function cnvMove(e){
	var x=e.clientX;
	var y=e.clientY;
	var cnv=document.getElementById("cn");
	if(24<x<cnv.width-24 && 24<y<cnv.height-24){
		var coor=[x,y];
		pyr.move(coor);
	}
}
function pause(e){
	document.getElementById("pausa").innerHTML="move the cursor into the player ball for resume the game";
}
function chanceclr(e){
	var val=e.button;
	switch(val){
		case 0: pyr.setcolor("blue");break;
		case 1: pyr.setcolor("white");break;
		case 2: pyr.setcolor("black");break;
	}
}
function reanudar(e){
	document.getElementById("pausa").innerHTML="you can change the color or your ball with the mouse buttons left:blue / central or whirl: white(default) /right:black";
}

function main(){
	var points=0;
	var dat=init();
	var cnv=document.getElementById("cn");
	var pyr=dat[1];
	var listene=dat[2];
	var pyr=document.getElementById("pru");
	eventHolder(cnv,pyr);
	do{
		
	}while (pyr.getlv>=0);
	
}
function draw(cnv,pyr,listene){
	var cr;
	forEach(cr in pyr){
		cr.dibuja(cnv,cr.id);
	}
	forEach(cr in listene){
		cr.dibuja(cnv,cr.id);
	}
}
document.body.onload=main;