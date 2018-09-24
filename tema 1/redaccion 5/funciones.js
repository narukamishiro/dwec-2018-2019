function creaH(){
	var x;
	var x1;
	var y;
	var eti;
	var div;
	var tn;
	var ele=document.getElementById("r");
	for (x=1;x<7;x++){
		if(x>1){
			y=x-1;
			ele=document.getElementsByTagName("h"+y);
		}
		x1=x.toString();
		eti="H";
		eti.concat(x1);
		div=document.body.createElement(eti);
		tn=document.body.createTextNode("cabezera "+eti);
		div.appemdChild(tn);
		document.body.insertBefore(div,ele);
	}
}
//ejercico 4.10
creaH();