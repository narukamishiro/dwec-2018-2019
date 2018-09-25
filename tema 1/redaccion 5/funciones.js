function creaH(){
	var x;
	var y;
	for (x=1;x<7;x++){
		y="h"+x;
		document.write('<'+y+'> cabecera '+y+'</'+y+'>');
	}
}
function creatb(col,alt,anc){
	var x;
	var p=col*anc;
	document.write('<table border=”0” cellspacing=”2” bgcolor=”black” width=”'+p+'”>');
	document.write('<tr bgcolor=”white” height= ”'+alt+'” >"');
	for(x=0;x<col;x++){
		document.write('<td width= ”'+anc+'”> &nbsp;</td>');
	}
	document.write('</tr>');
	document.write('</table>');
}
function creatbv2(col,alt,anc){
	var x;
	var p=col*anc;
	document.write('<table border=”0” cellspacing=”2” bgcolor=”black” width=”'+p+'”>');
	document.write('<tr bgcolor=”white” height= ”'+alt+'” >');
	for(x=0;x<col;x++){
		if((x)%2==0){
			document.write('<td width= ”'+anc+'” bgcolor="black"> &nbsp;</td>');
		}else{
			document.write('<td width= ”'+anc+'” bgcolor="white"> &nbsp;</td>');
		}
		
	}
	document.write('</tr>');
	document.write('</table>');
}
function creatbwm(col,alt,anc){
	var x=0;
	var p=col*anc;
	document.write('<table border=”0” cellspacing=”2” bgcolor=”black” width=”'+p+'”>');
	document.write('<tr bgcolor=”white” height= ”'+alt+'” >"');
	do{
		document.write('<td width= ”'+anc+'”> &nbsp;</td>');
		x++;
	}while(x<col);
	document.write('</tr>');
	document.write('</table>');
}
function creatbv2wm(col,alt,anc){
	var x=0;
	var p=col*anc;
	document.write('<table border=”0” cellspacing=”2” bgcolor=”black” width=”'+p+'”>');
	document.write('<tr bgcolor=”white” height= ”'+alt+'” >');
	do{
		if((x)%2==0){
			document.write('<td width= ”'+anc+'” bgcolor="black"> &nbsp;</td>');
		}else{
			document.write('<td width= ”'+anc+'” bgcolor="white"> &nbsp;</td>');
		}
		x++;
	}while(x<col);
	document.write('</tr>');
	document.write('</table>');
}
function adivinav1(){
	var nm=0;
	var adi;
	var cont=0;
	adi=Math.random()*100+1;
	adi=Math.floor(adi);
	do{
		do{
			nm=prompt("introduzca un numero entre 1 y 100");
		}while(nm<1 || nm>100);
		cont++;
		if(nm==adi){
			alert("has acertado en "+cont+" intento/os");
		}else{
			if(nm<adi){
				alert("el numero a adivinar es mayor");
			}else{
				alert("el numero a adivinar es menor");
			}
		}
		
	}while(nm!=adi)
}
function tbmulti(){
	var x;
	var y;
	for(x=1;x<=10;x++){
		document.write("tabla de "+x+"<br>");
		document.write("------------------------ <br>");
		for(y=1;y<=10;y++){
			document.write(x+"*"+y+"="+x*y+"<br>");
		}
		document.write("------------------------<br>");
	}
}
function creatb(col,fil,alt,anc){
	var x;
	var y;
	var p=col*anc;
	document.write('<table border=”0” cellspacing=”2” bgcolor=”black” width=”'+p+'”>');
	for(y=0;y<fil;y++){
		document.write('<tr bgcolor=”white” height= ”'+alt+'” >"');
		for(x=0;x<col;x++){
			document.write('<td width= ”'+anc+'”> &nbsp;</td>');
		}
		document.write('</tr>');
	}
	document.write('</table>');
}
function creatb(anc){
	var x;
	var y;
	var p=8*anc;
	var cont=0;
	document.write('<table border=”0” cellspacing=”2” bgcolor=”black” width=”'+p+'”>');
	for(y=0;y<8;y++){
		document.write('<tr bgcolor=”white” height= ”'+anc+'” >');
		for(x=0;x<8;x++){
			cont++;
			if(x%2==0){
				document.write('<td width= ”'+anc+'” bgColor="black"> &nbsp;</td>');
			}else{
				document.write('<td width= ”'+anc+'” bgColor="white"> &nbsp;</td>');
			}
			
		}
		document.write('</tr>');
	}
	document.write('</table>');
}



//ejercico 4.10
//creaH();
//ejercicio 4.11
//creatb(4,100,100);
//ejercicio 4.12
//creatbv2(4,100,100);
//ejercicio 4.13
//creatbwm(4,100,100);
//ejercicio 4.14
//creatbv2wm(4,100,100);
//ejercicio 4.15/4.16
//adivinav1();
//ejercicio 4.17
//tbmulti();
//ejercicio 4.18
//creatb(2,2,50,50);
//ejercicio 4.19
//creatb(50);