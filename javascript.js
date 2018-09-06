window.onload = function () {

    var cat = document.querySelector('.cat');
    var Ringht = document.querySelector('.right_t');
    var li = document.querySelector('.head_nav_right li:nth-of-type(4)');
    var Three1 = document.querySelectorAll('.ul_a ul li');
    var Three = document.querySelector('.three');
    var ImgThree = document.querySelectorAll('.img_three');
    var length = Three1.length;
    var num = null;
    var Bannera = document.querySelectorAll('.banner_a ul li');
    var Bannerb = document.querySelector('.banner_b');
    var Four = document.querySelectorAll('.img_four');
    var sdiv = document.querySelector('.banner_c');
    var oli = document.querySelectorAll('.dot li');
    var oimg = ['mi/1-1.jpg', 'mi/4-4.jpg', 'mi/7-7.jpg', 'mi/8.jpg', 'mi/1-1.jpg'];
    var length1 = oli.length;
    var index = 0;
    var timer = null;
    // 小米闪购
    var Ringhts = document.querySelector('.right');
    var Lefts = document.querySelector('.left');
    var ULs  = document.querySelector('.box_cd');
    var Navbag = document.querySelectorAll('.household_nav .navbag li');
    var ImgFive = document.querySelectorAll('.img_five');
    var len = Navbag.length;
    console.log(Navbag);
    // 智能
    var Navbags = document.querySelectorAll('.household_navs .navbag li');
    var ImgFives = document.querySelectorAll('.img_fives');
    var len1 = Navbags.length;
    console.log(Navbags);
    // 搭配
    var Navbaga = document.querySelectorAll('.household_nava .navbag li');
    var ImgFivea = document.querySelectorAll('.img_fivea');
    var len2 = Navbaga.length;
    //配件
    var Navbagb = document.querySelectorAll('.household_navb .navbag li');
    var ImgFiveb = document.querySelectorAll('.img_fiveb');
    var lens = Navbagb.length;
    // 周边
    var Navbagc = document.querySelectorAll('.household_navc .navbag li');
    var ImgFivec = document.querySelectorAll('.img_fivec');
    var lenx = Navbagc.length;
    // 为你推荐
    var Wras = document.querySelector('.wras');
    var lefts = document.querySelector('.lefts');
    var rights = document.querySelector('.rights');
    // 导航栏1//////////////////////////////////////////////////////////////////
    cat.addEventListener('mousemove', function () {
        Ringht.style.height = 90 + 'px';
        Ringht.addEventListener('mousemove',function(){
            Ringht.style.height = 90 + 'px';

        })
        console.log('asd');
    })

    cat.addEventListener('mouseout', function () {
        Ringht.style.height = '0px';
        Ringht.addEventListener('mouseout', function () {
            Ringht.style.height = '0px';
        })
    })


    // 导航栏 隐藏部分////////////////////////////////////////////////////////////////
    var Threebox = this.document.querySelectorAll(".img_three figure");
    for (var i = 0; i < length; i++) {
        Three1[i].index = i;
        Three1[i].addEventListener('mousemove', function () {
            num = this.index;
            for (var q = 0; q < ImgThree.length; q++) {
                ImgThree[q].style.display = 'none';
            }
            ImgThree[num].style.display = 'block';
            Three.style.height = '230px';
            Three.style.boxShadow = '0px 3px 4px  0px #ccc';
            Three.style.borderTop = '1px solid #ccc';
            for(var q = 0;q < Threebox.length;q++){
                Threebox[q].addEventListener('mousemove',function(){
                    ImgThree[num].style.display = 'block';
                     Three.style.height = '230px';
                     Three.style.boxShadow = '0px 3px 4px  0px #ccc';
                     Three.style.borderTop = '1px solid #ccc';
                })
            }
        })
        Three1[i].addEventListener('mouseout', function () {
            // ImgThree[num].style.display = 'none';
            Three.style.height = '0px';
            Three.style.boxShadow = '0px 3px 4px  0px transparent';
            Three.style.borderTop = 'none';
            for(var q = 0;q < Threebox.length;q++){
                Threebox[q].addEventListener('mouseout',function(){
                    Three.style.height = '0px';
            Three.style.boxShadow = '0px 3px 4px  0px transparent';
            Three.style.borderTop = 'none';
                })
            }
        })


        // Three.addEventListener('mousemove', function () {
        //     // ImgThree[num].style.display = 'block';
        //     Three.style.height = '230px';
        //     Three.style.boxShadow = '0px 3px 4px  0px #ccc';
        //     Three.style.borderTop = '1px solid #ccc';
        // })
        // Three.addEventListener('mouseout', function () {
        //     ImgThree[num].style.display = 'none';
        //     Three.style.height = '0px';
        //     Three.style.boxShadow = '0px 3px 4px  0px transparent';
        //     Three.style.borderTop = 'none';
        // })
    }
    // 主体部分 隐藏//////////////////////////////////////////////////////////////
    function List() {
        for (var k = 0; k < Bannera.length; k++) {
            Bannera[k].index = k;

            Bannera[k].onmouseover = function () {
                for (var f = 0; f < Bannera.length; f++) {
                    // console.log(f);
                    Four[f].style.display = 'none';
                    Four[f].style.borderTop = '1px solid #ccc';
                    Four[this.index].style.height = '462px';
                }
                Four[this.index].style.display = 'block';
                console.log(k)
            }
            Bannera[k].onmouseout = function () {
                Four[this.index].style.display = 'none';
            }
            Four[k].onmouseover = function () {
                this.style.display = 'block';
            }
            Four[k].onmouseout = function () {
                this.style.display = 'none';
            }
        }
    }
    List();

    // banner轮播图/////////////////////////////////////////////////////////
     // 定义并调用自动播放函数  
        function aa(){
            if(index > 4){
                index = 1;
            }
            sdiv.style.backgroundImage = "url(" + oimg[index] + ')'
            // console.log(oimg[index]);
            index++;
           
        }
        setInterval(aa,1000);









    
    // update();
    // 小米闪购手动轮播//////////////////////////////////////////////////////////////////
    var a = 0;
    
    Lefts.onclick = function(){
        if(a >= -732){
            a = a-244;
            ULs.style.marginLeft = a + 'px';
            console.log(a);
        }
       
    }
    Ringhts.onclick = function(){
        if(a <= -244){
            a = a+244;
            ULs.style.marginLeft = a + 'px';
            console.log(a);
        }
     
    }


    // 家电////////////////////////////////////////////////////
for(var i=0;i<len;i++){
    // console.log(i);
    Navbag[i].index = i;
    // ImgFive[i].index = i;
    // console.log(ImgFive);
    Navbag[i].onmouseover = function(){
        for(var j = 0;j<len;j++){
            Navbag[j].className = '';
            ImgFive[j].style.display = 'none';
            console.log(ImgFive);
        }
        Navbag[this.index].className = 'active';
        ImgFive[this.index].style.display = 'block';
    }
}
// 智能//////////////////////////////////////////////
for(var i=0;i<len1;i++){
    // console.log(i);
    Navbags[i].index = i;
    Navbags[i].onmouseover = function(){
        for(var j = 0;j<len1;j++){
            Navbags[j].className = '';
            ImgFives[j].style.display = 'none';
            console.log(ImgFives);
        }
        Navbags[this.index].className = 'active';
        ImgFives[this.index].style.display = 'block';
    }
}
// 搭配////////////////////////////////////////////////////////
for(var i=0;i<len2;i++){
    // console.log(i);
    Navbaga[i].index = i;
    Navbaga[i].onmouseover = function(){
        for(var j = 0;j<len2;j++){
            Navbaga[j].className = '';
            ImgFivea[j].style.display = 'none';
        }
        Navbaga[this.index].className = 'active';
        ImgFivea[this.index].style.display = 'block';
    }
}
// 配件/////////////////////////////////////////////////////////////
for(var i=0;i<lens;i++){
    Navbagb[i].index = i;
    Navbagb[i].onmouseover = function(){
        for(var j = 0;j<len2;j++){
            Navbagb[j].className = '';
            ImgFiveb[j].style.display = 'none';
        }
        Navbagb[this.index].className = 'active';
        ImgFiveb[this.index].style.display = 'block';
    }
}
for(var i=0;i<lenx;i++){
    Navbagc[i].index = i;
    Navbagc[i].onmouseover = function(){
        for(var j = 0;j<lenx;j++){
            Navbagc[j].className = '';
            ImgFivec[j].style.display = 'none';
        }
        Navbagc[this.index].className = 'active';
        ImgFivec[this.index].style.display = 'block';
    }
}

// 为你推荐/////////////////////////////////////////////////////
lefts.onclick = function(){
    //点击left偏移量减少,不能为0
    if(Wras.offsetLeft > -3556){
        Wras.style.left = (Wras.offsetLeft -245) + 'px';
        Wras.style.transition = 'left 0.4s linear';
    }
}
rights.onclick = function(){
    //点击right偏移量增加,增加不能超过2240;
    //第一次点击  left=320;
     if(Wras.offsetLeft < 0){
        Wras.style.left = (Wras.offsetLeft + 245) + 'px';
     }    
}


var btn = document.querySelector('.side li:nth-of-type(4)');
var clientHeight=document.documentElement.clientHeight;

var timer=null;
var istop=true;

window.onscroll=function(){
    if(!istop){
        clearInterval(timer);
    }
    istop=false;

    var high=document.documentElement.scrollTop||document.body.scrollTop;
    if(high>=clientHeight){
        btn.style.display='block';
    }else{
        btn.style.display='none';
    }
}
btn.onclick=function(){

    timer=setInterval(function() {

    var high=document.documentElement.scrollTop||document.body.scrollTop;

    var speed=Math.floor(-high/6);
    document.documentElement.scrollTop=document.body.scrollTop=high+speed;
  
    istop=true;
    if(high==0){
        clearInterval(timer);
    }
    },30);

    
}

}