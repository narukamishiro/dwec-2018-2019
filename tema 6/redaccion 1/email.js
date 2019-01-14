class email{
	constructor(){
		this.title="prueba";
		this.cc="";
		this.body="esto es una prueba";
	}
	constructor(data){
		this.title=data[0];
		this.cc=data[1];
		this.body=data[2];
	}
	mostrar(cnv){
		var alr=document.createElement("div");
		var ttl=document.createElement("h1");
		var bd=document.createElement("textarea");
		ttl.innerHTML=title;
		bd.innerHTML=body;
		alr.apprendchild(ttl);
		alr.apprendchild(bd);
		cnv.apprendchild(alr);
	}
}