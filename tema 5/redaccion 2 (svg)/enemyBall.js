public class enemyBall extends ball{
	 var r;
	 var cx;
	 var velx;
	 var cy;
	 var vely;
	 constructor(){
		 this.r=25;
		 this.cx=Math.floor(Math.random()*(100-2*r)+r);
		 this.velx=Math.floor(Math.random()*10+1)-5;
		 this.cy=Math.floor(Math.random()*(100-2*r)+r);
		 this.vely=Math.floor(Math.random()*10+1)-5;
		 this.clr="white";
	 }
	 constructor(cnv){
		 this.r=25;
		 this.min=r;
		 this.maxX=cnv.width;
		 this.maxY=cnv.height;
		 this.velx=Math.floor(Math.random()*10+1)-5;
		 this.vely=Math.floor(Math.random()*10+1)-5;
		 this.cx=Math.floor(Math.random()*(maxX-2*r)+r);
		 this.cy=Math.floor(Math.random()*(maxY-2*r)+r);
		 this.clr="white";
	 }
	 move(){
		this.setcx(cx+velx);
		this.setcy(cy+vely);
	 }
	 setcx(x){
		 this.cx=x;
		 var y=collice(ccl);
		 switch(y){
			 case 0:
				setvelx(-1);
				break;
			 case 1:
				setvelx(-1);
				setvely(-0.5);
				break;
			 case 2:
				setvelY(-1);
				break;
			 case 3:
				setvelx(-1);
				setvely(-0.5);
				break;
			 case 4:
				setvelx(-1);
				break;
			 case 5:
				setvelx(-1);
				setvely(-0.5);
				break;
			 case 6:
				setvelY(-1);
				break;
			 case 7:
				setvelx(-1);
				setvely(-0.5);
				break;
		
		 }
	 }
	 setcy(x){
		 this.cy=x;
		 var y=collice(ccl);
		 switch(y){
			 case 0:
				setvelx(-1);
				break;
			 case 1:
				setvelx(-1);
				setvely(-0.5);
				break;
			 case 2:
				setvelY(-1);
				break;
			 case 3:
				setvelx(-1);
				setvely(-0.5);
				break;
			 case 4:
				setvelx(-1);
				break;
			 case 5:
				setvelx(-1);
				setvely(-0.5);
				break;
			 case 6:
				setvelY(-1);
				break;
			 case 7:
				setvelx(-1);
				setvely(-0.5);
				break;
		
		 }
	 }
	 setvelx(x){
		 this.velx=x;
	 }
	 setvely(x){
		 this.vely=x;
	 }
	 setcolor(c){
		 this.clr=c;
	 }
	 getcolor(){
		return clr;
	}
	 setradio(x){
		 this r=x;
	 }
 }