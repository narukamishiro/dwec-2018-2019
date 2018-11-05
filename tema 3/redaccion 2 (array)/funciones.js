function parImpar(){
	var x;
	var nm;
	var arr;
	var par;
	var impar;
	for(x=0;x<100;x++){
		nm=Math.floor(Math.random()*1000+1);
		arr[x]=nm;
	}
	for(x=0;x<arr.length;x++){
		document.write(nm+" | ");
		if(nm%2==0){
			par.push(nm);
		}else{
			impar.push(nm);
		}
	}
	arr=[];
	arr
}