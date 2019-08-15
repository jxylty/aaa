window.onload=function(){
//计时器功能
		var buyit = document.getElementsByClassName("buyit");
//		var content=document.getElementById("buytime");
//		var content1=document.getElementById("buytime1");
//		var content2=document.getElementById("buytime2");
//		var content3=document.getElementById("buytime3");
//		var content4=document.getElementById("buytime4");
		//开始时间 当前时间
		var nowTime = new Date();
		//结束时间，未来时间
		var endTime = new Date("2019/8/18 11:21:10");
		//计算时间差，获取剩下的秒数
		var s = difTime(nowTime,endTime);
		//通过秒数可以计算出剩具体时间
		function computeTime(){
			if(s < 0){
				buyit.innerHTML = "商品活动已结束";
				return;
			}
			var hours = s/60/60;
			var d = parseInt(hours/24);
			var h = parseInt((hours/24 - d)*24);
			var m = parseInt(((hours/24 - d)*24-h)*60);
			var miao = parseInt((((hours/24 - d)*24-h)*60-m)*60);
			
			var buyit = document.getElementsByClassName("buyit");
			for(var i = 0;i < buyit.length;i++){
				buyit[i].innerHTML = "距离活动结束还剩"+d+"天"+h+"时"+m+"分"+miao+"秒"
			}
			
//			buyit[0].innerHTML = "距离活动结束还剩"+d+"天"+h+"时"+m+"分"+miao+"秒";
//			buyit[1].innerHTML = "距离活动结束还剩"+d+"天"+h+"时"+m+"分"+miao+"秒";
//			buyit[2].innerHTML = "距离活动结束还剩"+d+"天"+h+"时"+m+"分"+miao+"秒";
//			buyit[3].innerHTML = "距离活动结束还剩"+d+"天"+h+"时"+m+"分"+miao+"秒";
//			buyit[4].innerHTML = "距离活动结束还剩"+d+"天"+h+"时"+m+"分"+miao+"秒";
		
		}
		
		computeTime();
		
		
		//剩下的时间每一秒钟都在发生倒计时的变化
		//需要一个定时器
		var timer = setInterval(function(){
			//每一秒钟运行时间的变化
			s--;
			if(s < 0){
				buyit.innerHTML = "商品活动已结束";
				clearInterval(timer);
			}else{
				computeTime();
			}
		},1000);
		
		
		function difTime(startTime,endTime){
			return (endTime.getTime() - startTime.getTime())/1000;
		}
		
		
		
		
//选项卡功能
	var a=document.getElementsByClassName("selectbuy");
	var content=document.getElementsByClassName("todaybuy-content");
	
	for(var i=0;i<3;i++){
		a[i].index=i;
	}
	for(var i=0;i<3;i++){
		//a[i].index=i;
		a[i].onclick=function(){
			for(var j=0;j<3;j++){
				//alert(this.innerHTML);
				//a[j].className="";//先令全部a的classname为空
				content[j].style.display="none";//先令全部content的dislay为none
			}
			//this.className="on";//当前的对象为on
			content[this.index].style.display="block";
		}
	}
	
	
//分类框弹出
	var jxyhuaru=document.getElementById("jxyhuaru");
	var jxyhuaru2=document.getElementById("jxyhuaru2");
	function jxyfn(ele){
		ele.onmouseenter=function(){
			ele.style.borderBottom="1px solide red";
			jxyhuaru2.style.display="block";
		}
		ele.onmouseout=function(){
			jxyhuaru2.style.display="none";
		}
	}
	jxyfn(jxyhuaru);
	
	
//加载更多
	var box11=document.getElementById("box11");
  	var box22=document.getElementById("box22");
  	var items11=document.getElementById("makemoreclick");
  	items11.onclick=function(){
  		var yangshi1=box11.children[0].cloneNode(true);
		box22.appendChild(yangshi1);
		
  	}
}


			
