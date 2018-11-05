function inviertecadena(cad){
	var x;
	var l;
	var res="";
	for(x=0;x<cad.length;x++){
		l=cad.charAt(cad.length-x);
		res.concat(l);
	}
	return res;
}
function inviertepalabras(cad){
	var x;
	var l;
	var pr="";
	var res="";
	for(x=0;x<cad.length;x++){
		l=cad.charAt(cad.length-x);
		if(l==" "){
			res.concat(pr);
			pr="";
			res.concat(l);
		}else{
			res.concat(pr);
		}
	}
	return res;
}
function palabralarga(cad){
	var x;
	var ini=0;
	var fin;
	var pr;
	var res="";
	for(x=0;x<cad.length;x++){
		if(l==" "){
			fin=x-1;
			if()
			pr=cad.substr(ini,fin);
			if(pr.length>=res.length){
				res=pr;
			}
			pr="";
			ini=x+1;
		}
	}
	return res.length;
}
function filtropalabras(cad,log){
	var x;
	var fin;
	var pr;
	var cont=0;
	for(x=0;x<cad.length;x++){
		if(l==" "){
			fin=x-1;
			if()
			pr=cad.substr(ini,fin);
			if(pr.length>=log){
				cont++;
			}
			pr="";
			ini=x+1;
		}
	}
	return cont;
}
function bienformada(cad){
	var x;
	var l;
	var res="";
	for(x=0;x<cad.length;x++){
		if(x==0){
			l=string.toUpperCase(cad.charAt(x));
		}else{
			l=string.toLowerCase(cad.charAt(x));
		}
		res.concat(l);
	}
	return res;
}
function maymin(cad){
	var contMay=0;
	var contMin=0;
	var l=cad.length;
	var x=0;
	var p;
	var sig=true;
	do{
		p=cad.charAt(x);
		if(p!=" "){
			if(p==string.toLowerCase(p)){
				contMin++;
			}else{
				contMay++;
			}
		}
		x++;
		if(contMin!=0 & contMay!=0){
			sig=false;
		}
	}while(x<l & sig==true)
	if(contMin!=0 & contMay!=0){
		return "esta cadena tiene mezcla";
	}else{
		if(contMay!=0){
			return "esta cadena solo tiene mayusculas";
		}else{
			return "esta cadena solo tiene minusculas";
		}
	}
		
}
function pali(cad){
	var dac=inviertecadena(cad);
	if(cad==dac){
		return cad+" es una palabra palidroma";
	}
}
function cadrect(cad){
	var dac=inviertecadena(cad);
	var log=cad.length;
	var x;
	var y;
	document.write("<table>");
	for(x=0;x<log;x++){
		document.write("<tr>");
		for(y=0;y<log;y++){
			if(y==0){
				document.write("<td>"+cad.charAt(x)+"</td>");break;
			}
			if(y==log-1){
				document.write("<td>"+dac.charAt(x)+"</td>");break;
			}
			switch(x){
				case 0:document.write("<td>"+cad.charAt(y)+"</td>");break;
				case log-1:document.write("<td>"+dac.charAt(y)+"</td>");break;
			}
		}
		document.write("</tr>");
	}
	
	document.write("<td></td>");

	document.write("</table>");
	
}


