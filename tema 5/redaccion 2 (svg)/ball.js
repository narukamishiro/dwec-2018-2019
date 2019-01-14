 public class ball{
	 var r;
	 var cx;
	 var cy;
	 var min;
	 var maxX;
	 var maxY;
	 var ptscont;
	 var clr;
	 var barr;
	 var lv;
	 constructor(){
		 this.r=25;
		 this.cx=Math.floor(Math.random()*(100-2*r)+r);
		 this.cy=Math.floor(Math.random()*(100-2*r)+r);
	 }
	 constructor(cnv){
		 this.r=25;
		 this.min=r;
		 this.maxX=cnv.width;
		 this.maxY=cnv.height;
		 this.cx=Math.floor(Math.random()*(maxX-2*r)+r);
		 this.cy=Math.floor(Math.random()*(maxY-2*r)+r);
		 this.barr=clr;
		 this.lv=0;
	 }
	 setcx(x){
		 this.cx=x;
	 }
	 setcy(x){
		 this.cy=x;
	 }
	 cont(){
		 var t;
		 var x;
		 var y;
		 var p=Math.PI;
		 var rad;
		 var cad;
		 rad[0,(p/4),(p/2),(3*p/4),p,(5*p/4),(3*p/2),(7*p/4)];
		 for(t=0;t<rad.length;t++){
			 x=Math.floor(r*Math.cos(rad[t])+cx);
			 y=Math.floor(r*Math.sin(rad[t])+cy);
			 cad[x,y];
			 ptscont.push(cad);
		 }
	 }
	 getcont(){
		 return cont;
	 }
	 getcollice(ccl){
		 var inv=true;
		 var y;
		 var z;
		 var pcl=this.cont;
		 var pcl2=ccl.getcont;
		 var ptcol=[0,0];
		 do(
			for(z=0;z<pcl2.length;z++){
				if(pcl[y][0]==pcl2[z][0] && pcl[y][1]==pcl2[z][1]){
					ptcol=pcl[y];
					inv=false;
				}
			}
			y++;
		 )while (y<pcl.length & inv);
	 return ptcol;
	 }
	 collice(ccl){
		 pt=getcollice(ccl);
		 var x;
		 for(x=0;x<cont.length;x++){
			 if(cont[x][0]==0 || cont[x][0]==pt[0] || cont[x][0]==maxX){
				 return x;
			 }
			 if(cont[x][1]==0 || cont[x][1]==pt[1] || cont[x][1]==maxY){
				 return x;
			 }
		 }
		 return -1;
	 }
	 dibuja(cnv,id){
		 var cir;
		if(document.getElementById(id)){
			cir=document.getElementById(id);
			cir.cx=cx;
			cir.cy=cy;
		}else{
			cir=document.createElement("circle");
			cir.setAttribute('id',id);
			cir.setAttribute('cx',this.cx);
			cir.setAttribute('cy',this.cy);
			cir.setAttribute('r',this.r);
			cir.setAttribute('fill',this.clr);
			cir.setAttribute('stroke',this.barr);
			cir.setAttribute('stroke-width',this.lv);
			cnv.apprendchild(cir);
		}
	 }
		
 }