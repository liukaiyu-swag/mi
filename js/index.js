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
				n==0;
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
{
	let all=document.querySelectorAll(".jiadian");
	all.forEach(function(ele,index){
		let list=ele.querySelectorAll(".jiadian .list");
//		list[0].style.display="block";
		let daohang=ele.querySelectorAll(".jiadian-a");
		for(let i=0;i<daohang.length;i++){
			daohang[i].onmouseover=function(){
				console.log(list[i]);
				for(let j=0;j<daohang.length;j++){
					daohang[j].classList.remove("color");
					list[j].style.display="none";
				}
				daohang[i].classList.add("color");
				list[i].style.display="block";
			}
		}
	});
}
{
	let banner=document.querySelector(".banner");
	let list=document.querySelectorAll(".banner-ul1 li");
	let n=0;
	let yuan=document.querySelectorAll(".banner .banner-yuan li");
	let left=document.querySelector("#banner-jiantou1");
	let right=document.querySelector("#banner-jiantou2");
	console.log(left)
	console.log(right)
	function lunbo(){
		n++;
		if(n==5){
			n=0;
		}
		if(n<0){
			n=4;
		}
		for(let i=0;i<list.length;i++){
			list[i].style.opacity=0;
			yuan[i].classList.remove("style");
		}
		list[n].style.opacity=1;
		yuan[n].classList.add("style");
	}
	let time=setInterval(lunbo,1000);
	banner.onmouseover=function(){
		clearInterval(time);
	}
	banner.onmouseout=function(){
		time=setInterval(lunbo,1000);
	}
	left.onclick=function(){
		n=n-2;
		lunbo();
	}
	right.onclick=function(){
		lunbo();
	}
	yuan.forEach(function(ele,index){
		ele.onclick=function(){
			n=index-1;
			lunbo();
		}
	});
}
{
	let big=document.querySelector("#danping-ul");
	let list=document.querySelectorAll("#danping-ul li");
	let right=document.querySelector(".danping .jiantou1");
	let left=document.querySelector(".danping .jiantou2");
	let n=0;
	left.onclick=function(){
		if(n==0){
			return;
		}
		n=0;
		big.style.marginLeft="0px";
		left.style.color="";
		left.style.fontWeight="normal";
		right.style.color="#ccc";
		right.style.fontWeight="bold";
	}
	right.onclick=function(){
		if(n==1){
			return;
		}
		n=1;
		big.style.marginLeft="-1226px";
		right.style.color="";
		right.style.fontWeight="normal";
		left.style.color="#ccc";
		left.style.fontWeight="bold";
	}
	function move(){
		if(n==0){
			big.style.marginLeft="-1226px";
			n=1;
			right.style.color="";
			right.style.fontWeight="normal";
			left.style.color="#ccc";
			left.style.fontWeight="bold";
			return;
		}
		if(n==1){
			n=0;
			big.style.marginLeft="0px";
			left.style.color="";
			left.style.fontWeight="normal";
			right.style.color="#ccc";
			right.style.fontWeight="bold";
		}
	}
	let time=setInterval(move,5000);
	left.onmouseenter=()=>{
		clearInterval(time);
		if(n==1){
			left.style.color="#FF8D40";
		}
	}
	right.onmouseenter=()=>{
		clearInterval(time);
		if(n==0){
			right.style.color="#FF8D40";
		}
	}
	left.onmouseleave=right.onmouseleave=function(){
		time=setInterval(move,5000);
		left.style.color="";
	}
	right.onmouseleave=function(){
		time=setInterval(move,5000);
		right.style.color="";
	}
	
}
{
	let list=document.querySelectorAll(".banner-daohang-ul1 li");
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
