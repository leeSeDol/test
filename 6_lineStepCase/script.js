window.onload=function(){
	var step = document.getElementById("step");
	var li = step.getElementsByTagName("li");
	
	for( var i=0 ; i<li.length ; i++ ){
		 li[i].index=i;
		 li[i].onclick=function(){
		 	var i = this.index;
		 	for(var j=0;j<i;j++){
		 		li[j].className = "s-finish";
		 	}
		 	for(var j=li.length;j>i;){
		 		li[--j].className="";
		 		if(j==i+1){
		 			li[j].className="s-cur-next";
		 		}
		 	}
		 	this.className='s-cur';
		 };
	}
};
