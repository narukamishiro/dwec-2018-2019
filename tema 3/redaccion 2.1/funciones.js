function max(arr){
	var x;
	arr.sort(function(a, b){return a - b});
	return arr(0);
}
function longerStg(arr){
	var x=1;
	var lg=0;
	var res="";
	do{
		if(arr[x-1].length>lg){
			res=arr[x-1];
			lg=res.length;
		}
	}while(x<=arr.length);
	return res;
} 
function fndever(arr){
	var x;
	var res;
	arr.forEach(function(){if(item%2==0){res.push(item);}});
	return res;
}
function fndodd(arr){
	var x;
	var res;
	arr.forEach(function(){if(item%2!=0){res.push(item);}});
	return res;
}
function lock(arr){
	var x;
	var res;
	arr.forEach(function(){if(item.co){res.push(item);}});
	return res;
}