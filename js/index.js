
{
	let imgs = document.querySelectorAll(".banner-img li");
	let pagings = document.querySelectorAll(".xiaoyuandian li");
	let banners = document.querySelector(".banner");
	let next = document.querySelector(".jiantou-right");
	let prev = document.querySelector(".jiantou-left");
	pagings.forEach(function(ele, index) {
		ele.onclick = function() {
			for(let i = 0; i < pagings.length; i++) {
				pagings[i].classList.remove("active");
				imgs[i].classList.remove("active");
			}
			ele.classList.add("active");
			imgs[index].classList.add("active");
			n = index;
		}
	})
	let n = 0;

	function bannerdh(x) {
		if(x) {
			n--;
		} else {
			n++;
		}
		if(n === -1) {
			n = imgs.length - 1
		}
		if(n == imgs.length) {
			n = 0
		}
		for(let i = 0; i < pagings.length; i++) {
			pagings[i].classList.remove("active");
			imgs[i].classList.remove("active");
		}
		pagings[n].classList.add("active");
		imgs[n].classList.add("active");
	}
	let st = setInterval(bannerdh, 3000);
	banners.onmouseover = function() {
		clearInterval(st)
	};
	banners.onmouseout = function() {
		st = setInterval(bannerdh, 3000);
	}
	let flat = true
	next.onclick = function() {
		if(flat) {
			flat = false
			bannerdh()
		}
	}
	prev.onclick = function() {
		if(flat) {
			flat = false
			bannerdh(1)
		}
	}
	imgs.forEach(function(ele) {
		ele.addEventListener("transitionend", function() {
			flat = true
		})
	})
} 
//{
//	let n=0
//	$(".xiaoyuandian li").click(function(){
//		let index=$(this).index()
//		$(".xiaoyuandian li").removeClass("active");
//		$(this).addClass("active")
//		$(".banner-img li").removeClass("active").eq(index).addClass("active")
//	})
//	function move(){
//		n++
//		if(n===$(".xiaoyuandian li").length){
//			n=0
//		}
//		$(".xiaoyuandian li").removeClass("active").eq(n).addClass("active")
//		$(".banner-img li").removeClass("active").eq(n).addClass("active")
//	}
//	let st=setInterval(move,3000)
//}
{
	let next = document.querySelector(".jiantou-you");
	let prev = document.querySelector(".jiantou-zuo");
	let danping = document.querySelector(".danping-xia");
	next.onclick = function() {
		this.classList.remove("active");
		prev.classList.add("active");
		danping.style.transform = "translateX(-1240px)";
	}
	prev.onclick = function() {
		this.classList.remove("active");
		next.classList.add("active");
		danping.style.transform = "translatex(0)";
	}
	let n = 0;

	function stay() {
		n++;
		if(n % 2 == 0) {
			next.onclick()
		} else {
			prev.onclick()
		}
	}
	let st = setInterval(stay, 3000);
	danping.onmouseover = function() {
		clearInterval(st)
	}
	danping.onmouseout = function() {
		st = setInterval(stay, 3000);
	}
}
{   
	let list=document.querySelectorAll(".nx .nierongxiao")
			list.forEach(function(ele){
				ggb(ele)
			})
	function ggb(lyq){
	let inner=lyq.querySelector(".neirongkuangjia")
	let prev=lyq.querySelector(".next")
	let next=lyq.querySelector(".prev")
	let item=lyq.querySelectorAll(".neirongxiaokuangjia")
	let pages=lyq.querySelectorAll(".diandian li")
	let items=item.length
	let n = 0;
	console.log(inner)
	next.onclick = function() {
		n++
		if(n >= items) {
			n = items - 1
				return
			}
			inner.style.marginLeft = -n * 300 + "px"
			for(let i = 0; i < pages.length; i++) {
				pages[i].classList.remove("active")
			}
				pages[n].classList.add("active")
			}
			prev.onclick = function() {
				n--
				if(n < 0) {
				    n = 0
					return
				}
		    inner.style.marginLeft = -n * 300 + "px"
			for(let i = 0; i < pages.length; i++) {
				pages[i].classList.remove("active")
			}
			pages[n].classList.add("active")
			}
			pages.forEach(function(ele, index) {
				let m = index
				ele.onclick = function() {
					for(let i = 0; i < pages.length; i++) {
						pages[i].classList.remove("active")
					}
					ele.classList.add("active")
					inner.style.marginLeft = -m * 300 + "px"
					n = index
				}
			})	
		}
}
{
	let list=document.querySelectorAll(".beijing .jiadian")
			list.forEach(function(ele){
				jiadian(ele)
			})
	function jiadian(jd){
		let pagers=jd.querySelectorAll('.youbuyou .text-remen')
	let imgs=jd.querySelectorAll('.jiadian_bottom .jiadaindi')
	pagers.forEach(function(ele,index){
		ele.onmouseover=function(){
			for(let i=0;i<imgs.length;i++){
				pagers[i].classList.remove('active');
				imgs[i].classList.remove('active')
				
			}
			this.classList.add('active');
			imgs[index].classList.add('active')
		}
	})
	}
}
{
	let list1=document.querySelectorAll(".daohang-ul .figure img");
	let list=document.querySelectorAll(".daohang-text li");
	let info=document.querySelector(".header-nav-menu");
	info.style.width=window.innerWidth+"px";
	info.style.left=-(window.innerWidth-1226)/2+"px";
	list.forEach(function(ele,index){
		ele.onmouseenter=()=>{
			if(index==0||index==1||index==3||index==4||index==6||index==8){
				info.style.height="229px";
				for(let i=0;i<list1.length;i++){
					list1[i].src="img/daohang/"+index+".png";
				}
			}
			else{
				info.style.height=0;
			}
		}
		onmouseleave=ele.onmouseleave=()=>{
			info.style.height=0;
		}
	});
	info.onmouseenter=()=>{
		info.style.height="229px";
	}
	info.onmouseleave=()=>{
		info.style.height="0px";
	}
}
{
	let input=document.querySelector("#input");
	let inputText=document.querySelector(".search-hot-words");
	let div=document.querySelector(".keyword-list");
	let img=document.querySelector(".shousuoimg");
	console.log(img);
	input.onfocus=function(){
		input.style.border="1px solid #ff6700";
		input.style.borderRight="none";
		inputText.style.display="none";
		div.style.display="block";
		img.style.border="1px solid #ff6700";
	}
	input.onblur=()=>{
		input.style.border="";
		input.style.borderRight="";
		inputText.style.display="";
		div.style.display="";
		img.style.border="";
	}
}
{
	let list=document.querySelectorAll(".banner-left li");
	let list1=document.querySelectorAll(".banner .children");
	let list2;
	list.forEach(function(ele,index){
		list1[index].onmouseenter=ele.onmouseenter=function(){ 
			for(let i=0;i<list.length;i++){
				list1[i].style.display="none";
			}
			list1[index].style.display="block";
			list2=list1[index];
		}
		list1[index].onmouseleave=ele.onmouseleave=()=>{
			list2.style.display="none";
		}
	});
}
{
	let list=document.querySelectorAll(".neirong .neirong-img1");
	list.forEach(function(ele){
		lunbo(ele);
	});
	function lunbo(ele){
		let list=ele.querySelector(".neirong-img1 .list");
		let list1=ele.querySelectorAll(".neirong-img1 .list1");
		let left=ele.querySelector(".neirong-jiaotou2");
		let right=ele.querySelector(".neirong .neirong-jiaotou3");
		let yuan=ele.querySelectorAll(".neirong .neirong-yuan1");
		let size=list1.length;
		let n=0;
		left.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			list.style.marginLeft=-n*296+"px";
			yuanColor();
			
		}
		right.onclick=function(){
			n++;
			if(n>=size){
				n=size-1;
				return;
			}
			list.style.marginLeft=-n*296+"px";
			yuanColor();
			
		}
		yuan.forEach(function(ele,index){
			console.log(ele);
			ele.onclick=function(){
				list.style.marginLeft=-index*296+"px";
				n=index;
				yuanColor();
			}
		});
		function yuanColor(){
			for(let i=0;i<size;i++){
				yuan[i].classList.remove("neirong-yuan2");
			}
			console.log(n);
			yuan[n].classList.add("neirong-yuan2")
		}
	}
}