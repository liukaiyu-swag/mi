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