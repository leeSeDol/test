window.onload=function(){

	var can=document.getElementById("can");
	var ctx=can.getContext("2d");

	var w = can.width = window.innerWidth;
	var h = can.height = window.innerHeight;

	window.onresize=function(){
		w = can.width = window.innerWidth;
		h = can.height = window.innerHeight;
	};

	function random(min,max){						//生成指定范围的随机数
		return (max-min)*Math.random()+min;
	}

	/*把雨滴当作一个对象，然后开始面向对象编程*/
	function Drop(){

	}
	Drop.prototype={
		/*雨滴初始化方法*/
		init:function(){
			this.x = random(0,w);
			this.y = 0;
			this.vy = random(4,7);

			this.r=1;
			this.vr=1;

			this.a = 1;
			this.va = 0.93;

			this.maxH= random(0.78*h,0.9*h);
		},
		/*雨滴绘制方法*/
		draw:function(){
			if(this.y>this.maxH){
				ctx.beginPath();
				ctx.arc(this.x,this.y,this.r,0,2*Math.PI,true);
				ctx.strokeStyle='rgba(0,255,255,'+this.a+')';
				ctx.stroke();
			}else{
				ctx.fillStyle='#0ff';
				ctx.fillRect(this.x,this.y,2,10);
			}
			this.update();
		},
		/*雨滴更新方法*/
		update:function(){
			if(this.y<this.maxH){
				this.y+=this.vy;
			}else{
				/*停止下落并绘制波纹*/
				if(this.a >= 0.03){
					this.a *= this.va;
					if(this.r < 50){
						this.r += this.vr;
					}
				}else{
					this.init();
				}
			}
		}
	};
	/*开始面向过程编程*/

	/*var drops = [];									//创建雨滴对象数组(容器)
	for(var i=0;i<300;i++){							//一次性创建300个雨滴对象
		(function(j){								//为了能够延迟创建雨滴，采用闭包的方式
			setTimeout(function(){					//开启延迟计时器
				var drop = new Drop();					//实例化雨滴
				drop.init();							//初始化雨滴
				drops.push(drop);						//把初始化的雨滴压倒数组(容器)
			},j*200);								//每个雨滴延迟200毫秒生成
			//console.log(j);
		})(i);										//这样的目的可以实现开始小于，越下越大
	}
	
	function move(){								//雨滴下落过程
		//ctx.clearRect(0,0,w,h);						//采用清除画布达不到预期的效果
		ctx.fillStyle = 'rgba(0,0,0,0.1)';			//采用绘制透明层的方法可以很好的达到预期的效果
		ctx.fillRect(0,0,w,h);						//绘制全屏透明层
		for (var i = 0;i<drops.length;i++){		
			drops[i].draw();						//再透明层上绘制雨滴(调用雨滴绘制方法)
		}
	}
	setInterval(move,35);*/
	var drops=[];
	for(var i=0;i<300;i++){
		(function(j){
			setTimeout(function(){
				var drop = new Drop();
				drop.init();
				drops.push(drop);
			},j*200);
		})(i);
	}
	function move(){
		ctx.fillStyle='rgba(0,0,0,0.1)';
		ctx.fillRect(0,0,w,h);
		for(var i=0;i<drops.length;i++){
			drops[i].draw();
		}
	}
	setInterval(move,35);
};
