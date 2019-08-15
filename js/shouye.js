var imgList = document.getElementById("img-list");
		var nav = document.getElementById("banner-nav-list");
		var banner = document.getElementById("banner");
		var arr = document.getElementById("arr");
		var toLeft = document.getElementById("toLeft");
		var toRight = document.getElementById("toRight");
		var navLi = nav.children;
		var imgs=document.getElementsByClassName("c1");

//		var timer1 = setInterval(autoPlay, 4000);

		var index = 0;
			
			imgs[1].style.marginTop="-29px";
			imgs[1].children[0].style.width="559px";
			imgs[1].children[0].style.height="258px";
			imgs[0].children[0].style.width="369px";
			imgs[2].children[0].style.width="369px";
			imgs[0].style.width="369px";
			imgs[2].style.width="369px";
			animate(arr, {
				opacity: 50
			}, 10);
		function autoPlay() {
			
			console.log(index);
//			console.log(imgs[index]);
			
			if(index == 6) {
				imgList.style.left = 0;
				index = 1;
			} else {
				index++;
			}
			animate(imgList, {
				left: -432 * index
			}, 100);
		}

		//左右按钮的点击 
		toLeft.onclick = function() {
			for(var i=0;i<imgs.length;i++){
				if(index!=i){
					console.log(i);
			imgs[i].style.width="432px"
			imgs[i].style.height="200px"
			imgs[i].style.marginTop="0";
			imgs[i].children[0].style.width="432px";
			imgs[i].children[0].style.height="200px";
				}
			}
			imgs[index].style.width="559px";
			imgs[index].style.height="258px";
			imgs[index].style.marginTop="-29px";
			imgs[index].children[0].style.width="559px";
			imgs[index].children[0].style.height="258px";
			imgs[index-1].children[0].style.width="369px";
			imgs[index+1].children[0].style.width="369px";
			imgs[index-1].style.width="369px";
			imgs[index+1].style.width="369px";
			console.log(index);
			if(index == 1) {
				imgList.style.left = -432 * 5;
				index = 5;
			}else {
				index--;
			}
			animate(imgList, {
				left: -432 * index
			}, 10);
			//			navLi[index].className = "active";
		}
		toRight.onclick = function() {
			for(var i=0;i<imgs.length;i++){
				if(index+2!=i){
			imgs[i].style.width="432px";
			imgs[i].style.height="200px";
			imgs[i].style.marginTop="0";
			imgs[i].children[0].style.width="432px";
			imgs[i].children[0].style.height="200px";
				}
			}
			imgs[index+2].style.width="559px";
			imgs[index+2].style.height="258px";
			imgs[index+2].style.marginTop="-29px";
			imgs[index+2].children[0].style.width="559px";
			imgs[index+2].children[0].style.height="258px";
			imgs[index+1].children[0].style.width="369px";
			imgs[index+3].children[0].style.width="369px";
			imgs[index+1].style.width="369px";
			imgs[index+3].style.width="369px";
			console.log(index);
			if(index == 4) {
				imgList.style.left = 0;
				index = 0;
			}else {
				index++;
			}
			for(var i = 0; i < navLi.length; i++) {
				navLi[i].className = "";
			}
			animate(imgList, {
				left: -432 * index
			}, 10);
			
		}
		//活动倒计时
		var content = document.getElementById("djs")
		//开始时间 当前时间
		var nowTime = new Date();
		//结束时间，未来时间
		var endTime = new Date("2019/8/12 22:21:10");
		//计算时间差，获取剩下的秒数
		function difTime(startTime, endTime) {
			return(endTime.getTime() - startTime.getTime()) / 1000;
		}
		var s = difTime(nowTime, endTime);
		//通过秒数可以计算出剩具体时间
		function computeTime() {
			if(s < 0) {
				content.innerHTML = "商品活动已结束";
				return;
			}
			var hours = s / 60 / 60;
			//			var d = parseInt(hours/24);
			var h = parseInt((hours / 24) * 24);
			var m = parseInt(((hours / 24) * 24 - h) * 60);
			var miao = parseInt((((hours / 24) * 24 - h) * 60 - m) * 60);
			content.innerHTML = h + "时" + m + "分" + miao + "秒";
		}

		computeTime();

		//剩下的时间每一秒钟都在发生倒计时的变化
		//需要一个定时器
		var timer2 = setInterval(function() {
			//每一秒钟运行时间的变化
			s--;
			if(s < 0) {
				content.innerHTML = "商品活动已结束";
				clearInterval(timer2);
			} else {
				computeTime();
			}
		}, 1000);





//////////////加载更多/
var btn=document.getElementsByClassName("jzgd")[0];
var mb=document.getElementsByClassName("clMb")[0];
var tjmb=document.getElementById("tjMb");

btn.onclick=function(){
	console.log(mb);
	var newnode=mb.cloneNode(true);
	tjmb.appendChild(newnode);
	
	
}

var btn2=document.getElementsByClassName("jzgd2")[0];
btn2.onclick=function(){
	var newjd=document.createElement("div");
//	var dz;
	var xhr=new XMLHttpRequest();
			xhr.open('get','img.json');
			xhr.send();
			xhr.onreadystatechange = function(){
				//status==200  readyState=4
				if (xhr.readyState==4&&xhr.status==200) {
					var result = JSON.parse(xhr.responseText);//字符串格式,要转成json格式
					//判断data的值
					dz=result.one;
					console.log(dz);
						var str999=`
	<ul class="clMb">
				<a href="">
					<li><img src="${dz[0]}" />
						<a class="js1" href="#" title="#">
							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
						</a>
						<p class="price"><em class="unit">¥</em>22</p>
					</li>
				</a>

				<a href="">
					<li><img src="${dz[1]}" />
						<a class="js1" href="#" title="#">
							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
						</a>
						<p class="price"><em class="unit">¥</em>22</p>
					</li>
				</a>

				<a href="">
					<li><img src="${dz[2]}" />
						<a class="js1" href="#" title="#">
							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
						</a>
						<p class="price"><em class="unit">¥</em>22</p>
					</li>
				</a>

				<a href="">
					<li><img src="${dz[3]}" />
						<a class="js1" href="#" title="#">
							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
						</a>
						<p class="price"><em class="unit">¥</em>22</p>
					</li>
				</a>

				<a href="">
					<li><img src="${dz[4]}" />
						<a class="js1" href="#" title="#">
							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
						</a>
						<p class="price"><em class="unit">¥</em>22</p>
					</li>
				</a>

			</ul>

			<ul class="clMb" >
				<a href="">
					<li><img src="${dz[5]}" />
						<a class="js1" href="#" title="#">
							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
						</a>
						<p class="price"><em class="unit">¥</em>22</p>
					</li>
				</a>

				<a href="">
					<li><img src="${dz[6]}" />
						<a class="js1" href="#" title="#">
							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
						</a>
						<p class="price"><em class="unit">¥</em>22</p>
					</li>
				</a>

				<a href="">
					<li><img src="${dz[7]}" />
						<a class="js1" href="#" title="#">
							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
						</a>
						<p class="price"><em class="unit">¥</em>22</p>
					</li>
				</a>

				<a href="">
					<li><img src="${dz[8]}" />
						<a class="js1" href="#" title="#">
							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
						</a>
						<p class="price"><em class="unit">¥</em>22</p>
					</li>
				</a>

				<a href="">
					<li><img src="${dz[9]}" />
						<a class="js1" href="#" title="#">
							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
						</a>
						<p class="price"><em class="unit">¥</em>22</p>
					</li>
				</a>

			</ul>
	`
	newjd.innerHTML=str999;
	tjmb.appendChild(newjd);
					}
				}
	
	
//	var str999=`
//	<ul class="clMb">
//				<a href="">
//					<li><img src="${dz[0]}" />
//						<a class="js1" href="#" title="#">
//							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
//						</a>
//						<p class="price"><em class="unit">¥</em>22</p>
//					</li>
//				</a>
//
//				<a href="">
//					<li><img src="${dz[1]}" />
//						<a class="js1" href="#" title="#">
//							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
//						</a>
//						<p class="price"><em class="unit">¥</em>22</p>
//					</li>
//				</a>
//
//				<a href="">
//					<li><img src="${dz[2]}" />
//						<a class="js1" href="#" title="#">
//							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
//						</a>
//						<p class="price"><em class="unit">¥</em>22</p>
//					</li>
//				</a>
//
//				<a href="">
//					<li><img src="${dz[3]}" />
//						<a class="js1" href="#" title="#">
//							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
//						</a>
//						<p class="price"><em class="unit">¥</em>22</p>
//					</li>
//				</a>
//
//				<a href="">
//					<li><img src="${dz[4]}" />
//						<a class="js1" href="#" title="#">
//							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
//						</a>
//						<p class="price"><em class="unit">¥</em>22</p>
//					</li>
//				</a>
//
//			</ul>
//
//			<ul class="clMb" >
//				<a href="">
//					<li><img src="img/cnxh6.jpg" />
//						<a class="js1" href="#" title="#">
//							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
//						</a>
//						<p class="price"><em class="unit">¥</em>22</p>
//					</li>
//				</a>
//
//				<a href="">
//					<li><img src="img/cnxh7.jpg" />
//						<a class="js1" href="#" title="#">
//							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
//						</a>
//						<p class="price"><em class="unit">¥</em>22</p>
//					</li>
//				</a>
//
//				<a href="">
//					<li><img src="img/cnxh8.jpg" />
//						<a class="js1" href="#" title="#">
//							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
//						</a>
//						<p class="price"><em class="unit">¥</em>22</p>
//					</li>
//				</a>
//
//				<a href="">
//					<li><img src="img/cnxh9.jpg" />
//						<a class="js1" href="#" title="#">
//							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
//						</a>
//						<p class="price"><em class="unit">¥</em>22</p>
//					</li>
//				</a>
//
//				<a href="">
//					<li><img src="img/cnxh10.jpg" />
//						<a class="js1" href="#" title="#">
//							<p class="lineClamp2">【第二件半价】尤妮佳三分之一化妆棉 新款超省水卸妆棉极细纤维</p>
//						</a>
//						<p class="price"><em class="unit">¥</em>22</p>
//					</li>
//				</a>
//
//			</ul>
//	`
//	newjd.innerHTML=str999;
//	tjmb.appendChild(newjd);
	
	
}



		///多轮播
//		var imgListj = document.getElementById("img-listj");
//		var imgList2j = document.getElementById("img-list2j");
//		var navj = document.getElementById("banner-nav-listj");
//		var bannerj = document.getElementById("bannerj");
//		var arrj = document.getElementById("arrj");
//		var toLeftj = document.getElementById("toLeftj");
//		var toRightj = document.getElementById("toRightj");
//		var navLij = navj.children;
//		
//		var timerj = setInterval(autoPlayj,20000);
//		
//		var index = 0;
//		function autoPlayj(){
//			if(index == 2){
//				imgListj.style.left = 0;
//				index = 1;
//			}else{
//				index ++;
//			}
//			console.log(index);
//			animate(imgListj,{left:-200*index},10);
//			animate(imgList2j,{left:-200*index},10);
//		}	
//		//鼠标移入banner停止轮播
//		bannerj.onmouseover = function(){
//			clearInterval(timerj);
//			//显示左右按钮
//			animate(arrj,{opacity:100},20);
//		}
//		//鼠标移出开启轮播
//		bannerj.onmouseout = function(){
//			timerj = setInterval(autoPlayj,20000);
//			//隐藏左右按钮
//			animate(arr,{opacity:50},20);
//		}
//		//左右按钮的点击 
//		toLeftj.onclick = function(){
//			if(index == 0){
//				imgListj.style.left = 1;
//				index = 1;
//			}else{
//				index --;
//			}
//			animate(imgListj,{left:-200*index},10);
//			animate(imgList2j,{left:-200*index},10);
//		}
//		toRightj.onclick = function(){
//			if(index == 1){
//				imgListj.style.left = 0;
//				index = 0;
//			}else{
//				index ++;
//			}
//			animate(imgListj,{left:-200*index},10);
//			animate(imgList2j,{left:-200*index},10);	
//		}


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

//var qwe=document.getElementById("qwe");
//
//		if(2!=3){
//			qwe.href="javascript:void(0);"
//		}