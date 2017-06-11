window.onload=function(){
	var txt = document.getElementById('txt');
	var btn = document.getElementById('btn');
	var UL = document.querySelector('#list ul');
	var oimg = document.querySelectorAll('#wrap .box img');
	var src = oimg[0].src;

	//如果时分秒小于10就拼接上一个0，默认不会补零
	function toTow( num ){
		return num*1<10 ? "0"+num : num ;
	}

	btn.onclick=function(){
		var timeDom = new Date();

		var year = timeDom.getFullYear();
		var month = timeDom.getMonth() + 1;
		var date = timeDom.getDate();
		var hour = timeDom.getHours();
		var minutes = timeDom.getMinutes();
		var seconds = timeDom.getSeconds();

		if(txt.value){	//判断文本框有没有内容
			var time = "发表时间："+year+"年"+month+"月"+date+"日"+toTow(hour)+"时"+toTow(minutes)+"分"+toTow(seconds)+"秒";
			var val = txt.value;
			txt.value='';
			var oLi = document.createElement("li");
			oLi.innerHTML = '<img src="'+src+'" /><p>'+val+'</p><span>'+time+'</span>';
			UL.insertBefore(oLi,UL.firstChild);
		}else{
			alert('内容为空，请输入一些内容');
		}
	};
};
