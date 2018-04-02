//轮播图效果
{
    let imgs=document.querySelectorAll(".imgbox li");
    let pagers=document.querySelectorAll(".pagerbox li");
    let banner=document.querySelector(".banner_img");
    let next=document.querySelector(".next");
    let prev=document.querySelector(".prev");
    pagers.forEach(function(ele,index){
        ele.onclick=function(){
            for(let i=0;i<imgs.length;i++){
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            //this  ele   pagers[index]
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    });
    let n=0;
    let t=setInterval(move,3000);
    function move(){
        n++;
        // n=n%5;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }

    banner.onmouseenter=function(){
        clearInterval(t);
    };
    banner.onmouseleave=function(){
        t=setInterval(move,3000);
    };

    next.onclick=function(){
        move();
    };
    prev.onclick=function(){
        n-=2;
        move();
    };
}

//下划出现搜索栏，左侧点击栏
{
    let topbar=document.querySelector(".topbar");
    let leftbar=document.querySelector(".leftbar");
    window.onscroll=function(){
        let st=document.documentElement.scrollTop;
        if(st>1000){
            topbar.style.display="block";
        }else{
            topbar.style.display="none";
        }
        if(st>2300){
            leftbar.style.display="block";
        }else{
            leftbar.style.display="none";
        }
    }
}

//点哪到哪效果
{
    let tips=document.querySelectorAll(".tips");
    let containers=document.querySelectorAll(".container");
    let flag=true;
    tips.forEach(function(ele,index){
        ele.onclick=function(){
            let ot=containers[index].offsetTop-50;
            //document.documentElement.scrollTop=ot;
            let now=document.documentElement.scrollTop;
            let speed=(ot-now)/10;
            let time=0;
            let t=setInterval(function(){
                time+=25;
                now+=speed;
                if(time===250){
                    clearInterval(t);
                    flag=true;
                }
                document.documentElement.scrollTop=now;
            },25);
        }
    });
    window.addEventListener("scroll",function(ele,index){
        if(flag){
            let st=document.documentElement.scrollTop;
            for(let i=0;i<containers.length;i++){
                if(st>containers[i].offsetTop-500){
                    for(let i=0;i<tips.length;i++){
                        tips[i].classList.remove("active");
                    }
                    tips[i].classList.add("active");
                }
            }
        }
    })

    let totop=document.querySelector(".leftbar_totop");
    totop.onclick=function () {
        // document.documentElement.scrollTop=0;
        let st=document.documentElement.scrollTop;
        let t=setInterval(function () {
            st-=200;
            if(st<0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },25)
    }
}

//rightbar效果
{
    let labels=document.querySelectorAll(".rightbar_label");
    let menus=document.querySelectorAll(".rightbar_label_item");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        }
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    })

    let totop=document.querySelector(".rightbar_totop");
    totop.onclick=function () {
        // document.documentElement.scrollTop=0;
        let st=document.documentElement.scrollTop;
        let t=setInterval(function () {
          st-=200;
          if(st<0){
              st=0;
              clearInterval(t);
          }
            document.documentElement.scrollTop=st;
        },25)
    }
}




{
    let topbar=document.querySelector(".topbar");
    let leftbar=document.querySelector(".leftbar");
    window.onscroll=function(){
        let st=document.documentElement.scrollTop;
        if(st>700){
            topbar.style.display="block";
        }else{
            topbar.style.display="none";
        }
        if(st>900){
            leftbar.style.display="block";
        }else{
            leftbar.style.display="none";
        }
    };
}
// 顶端选项卡内容
{
    let labels=document.querySelectorAll(".head_wzk");
    let menus=document.querySelectorAll(".wangzhan_box");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        };
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    })
}

//大聚惠无缝循环内容
{
    let container=document.querySelector(".container_dajuhui");
    let prev=document.querySelector("#prev_dajuhui");
    let next=document.querySelector("#next_dajuhui");
    let inner=document.querySelector("#inner_dajuhui");
    container.onmouseenter=function(){
        prev.style.display="block";
        next.style.display="block";
    };
    container.onmouseleave=function(){
        prev.style.display="none";
        next.style.display="none";
    };
    let n=1;
    let flag=true;
    next.onclick=function(){
        if(flag){
            flag=false;
            n++;
            inner.style.transition="all .5s";

            inner.style.marginLeft=-1000*n+"px";
        }
    };
    prev.onclick=function(){
        if(flag){
            flag=false;
            n--;
            inner.style.transition="all .5s";
            inner.style.marginLeft=-1000*n+"px";
        }

    };
    inner.addEventListener("transitionend",function(){
        flag=true;
        if(n===4){
            inner.style.transition="none";
            inner.style.marginLeft="-1000px";
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-3000px";
            n=3;
        }
    })
}

//banner侧导航选项卡内容
{
    let labels=document.querySelectorAll(".banner_cenav1");
    let menus=document.querySelectorAll(".cenave_big");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        };
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    })
}
