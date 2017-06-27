window.onload=function(){
	var canUl = document.getElementById("canvas");
	var li = canUl.getElementsByTagName("li");
	var can = canUl.getElementsByTagName("canvas");
	var percent = canUl.getElementsByTagName("span");
	var can_arr = [];

	function Canvas_percent(json){
		this.w = json.w;
		this.h = json.h;
		this.obj = json.obj;
		this.deg=0;
		this.color = json.color;
		this.stroke_color = json.stroke_color;
		this.percent_f = json.percent_f;
		this.lineWidth = json.lineWidth;
		this.bg_color = json.bg_color;
	}
	Canvas_percent.prototype.draw=function(){
		var txt = this.deg+"%";
		this.obj.lineCap = "round";
		this.obj.lineWidth = this.lineWidth;
		this.obj.strokeStyle = this.stroke_color;
		this.obj.beginPath();
		this.obj.arc(this.w/2,this.h/2,this.w/2-this.lineWidth,0,this.deg/100*2*Math.PI);
		this.obj.fillStyle = "#fff";
		this.obj.font = "25px Arial";
		this.obj.fillText(txt,150-this.obj.measureText(txt).width/2,155);
		this.obj.stroke();
	};
	Canvas_percent.prototype.drawBg = function(){
		this.obj.beginPath();
		this.obj.strokeStyle = this.bg_color;
		this.obj.lineWidth = this.lineWidth;
		this.obj.arc(this.w/2,this.h/2,this.w/2-this.lineWidth,0,2*Math.PI);
		this.obj.stroke();
		this.obj.save();
		return this;
	};
	Canvas_percent.prototype.go_draw=function(){
		var _this=this;
		_this.timer=setInterval(function(){
			if( _this.deg == _this.percent_f){
				clearInterval(_this.timer);
			}else{
				_this.deg++;
				_this.obj.clearRect(0,0,300,300);
				_this.drawBg().draw();
			}
		},30);
		console.log(_this.deg);
		_this.drawBg();
	};
	for(var i=0;i<can.length;i++){
		can_arr[i] = new Canvas_percent({
			w:li[i].offsetWidth,
			h:li[i].offsetHeight,
			obj:can[i].getContext("2d"),
			color:"#a24565",
			stroke_color:"#a24565",
			percent_f:parseInt(percent[i].innerText),
			lineWidth:5,
			bg_color:"#fff"
		});
		can_arr[i].go_draw();

	}
};
