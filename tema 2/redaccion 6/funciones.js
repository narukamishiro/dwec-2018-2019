function numimg(){
	return document.getElementsByTagName("img").length;
}
function imgid(){
	return document.getElementsByTagName("img")[0].id;
}
function numEnl(){
	return document.getElementsByTagName("a").length;
}
function chngtitle(ttl){
	document.head.title.innerHTML=ttl;
}