window.onload=function(){
	var box=document.getElementById("box");
	var arr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
	var account=0;
	var timer=setInterval(function(){
		var spanColor = randomColor();
		box.innerHTML += "<span style='background:"+spanColor+"'>"+spanColor+"</span>";
		account=box.getElementsByTagName('span').length;
		console.log(account);
		if(account>299){
			clearInterval(timer);
		}
	},10 );
	
	
	
	function randomColor(){
		var str="#";
		for(var i=0;i<6;i++){
			str += arr[Math.floor(Math.random()*16)];
		}
		return str;
	}  
};
