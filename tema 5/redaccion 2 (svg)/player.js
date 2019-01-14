public class player extends ball{
	var lv;
	constructor(){
		 this.r=25;
		 this.cx=Math.floor(Math.random()*(100-2*r)+r);
		 this.cy=Math.floor(Math.random()*(100-2*r)+r);
		 this.clr="white";
		 this.lv=3;
	 }
	 move(coo){
		 cx=coo[0];
		 cy=coo[1];
	 }
	 collipse(ccl){
		 var y=collice(ccl);
		 var cl=ccl.getcolor();
		 if(-1<y<8 && clr!=cl){
			 this.lv--;
		 }
	 }
	 getlv(){return lv;}
	 setcolor(cl){
		 clr=cl;
	 }
	 setcolor(c){
		 this.clr=c;
	 }
	 getcolor(){
		return clr;
	}
}