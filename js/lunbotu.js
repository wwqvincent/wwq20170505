function $(str){
				return document.getElementById(str);
			}
			function getStyle(obj,attr){
				if(obj.currentStyle){
					return obj.currentStyle[attr];
				}else{
					return getComputedStyle(obj,null)[attr];
				}
			}
			
			var oWrap = $("wrap");
			var oSlide = $("slide");
			var iWidth = parseInt(getStyle(oWrap,"width"));
			var oList = $("list");
			var oLi = oList.getElementsByTagName("li");
			var oLen = oLi.length;
			var oNext = $("next");
			var oPrev = $("prev");
			var m = 0;  //当前第几张图的索引
			var timer = null;
			oSlide.innerHTML+=oSlide.innerHTML;
			
			function autoPlay(){
				timer = setInterval(function(){
					m++;
					if(m==oLen+1){
						oSlide.style.left = "0";
						m=1;
					}
					move(oSlide,{"left":(-1)*m*iWidth+"px"});
					for(var i=0;i<oLen;i++){
						oLi[i].className = "";
					}
					oLi[m%oLen].className = "active";
				},3000)
			}	
			autoPlay();
			
			//当鼠标移动到图片上时停止
			oWrap.onmouseover = function(){
				clearInterval(timer);
			}
			oWrap.onmouseout = function(){
				autoPlay();
			}
			
			for(var i=0;i<oLen;i++){
				oLi[i].index = i;  
				oLi[i].onmouseover = function(){
					for(var j=0;j<oLen;j++){
						oLi[j].className = "";
					}
					oLi[this.index].className = "active";
					m = this.index; 
					move(oSlide,{"left":(-1)*m*iWidth+"px"});
				}
			}
			oNext.onclick = function(){
				m++;
				if(m==oLen+1){
					oSlide.style.left = "0";
					m=1;
				}
				move(oSlide,{"left":(-1)*m*iWidth+"px"});	
				for(var i=0;i<oLen;i++){
					oLi[i].className = "";
				}
				oLi[m%oLen].className = "active";
			}
			//跳转到指定图片
			oPrev.onclick = function(){
				m--;
				if(m==-1){ 
					m=oLen-1;
					oSlide.style.left = (-1)*oLen*iWidth+"px";
				}
				move(oSlide,{"left":(-1)*m*iWidth+"px"});
				for(var i=0;i<oLen;i++){
					oLi[i].className = "";
				}
				oLi[m%oLen].className = "active";
			}