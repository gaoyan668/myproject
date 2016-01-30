"use strict";

window.onload = function () {
    $(".other img").each(function () {
        var _this = this;
        var trueImg = $(this).attr("trueImg");

        var oImg = new Image;
        oImg.src = trueImg;
        oImg.onload = function () {
            $(_this).prop("src", trueImg).fadeIn(500);
        };
    });
};

(function () {
    var step = 1;
    var autoTimer = null;
    var $other = $(".other");
    var $count = $other.children("div").length;
    $other.css({
        width: $count * 1226,
        left: -1226
    });

    function autoMove() {
        step++;
        if (step >= $count) {
            $other.css("left", -1226);
            step = 2;
        }
        $other.stop().animate({left: -step * 1226}, 500, "linear");
        changeTip();
    }

    autoTimer = window.setInterval(autoMove, 3000);
    var $otherTip = $(".otherTip");
    var $otherTipList = $otherTip.children("li");

    function changeTip() {
        var tempStep = step;
        if (tempStep <= 0) {
            tempStep = $otherTipList.length - 1;
        } else if (tempStep >= ($count - 1)) {
            tempStep = 0;
        } else {
            tempStep--;
        }
        $otherTipList.each(function (index, curLi) {
            curLi.className = index === tempStep ? "select": null;
        });
    }

    $otherTipList.click(function () {
        window.clearInterval(autoTimer);

        var index = $(this).index();
        step = index + 1;
        $other.stop().animate({left: -step * 1226}, 500, "linear");
        changeTip();

        autoTimer = window.setInterval(autoMove, 3000);
    });

    var $link = $(".top>a");
    $link.click(function () {
        window.clearInterval(autoTimer);

        if ($(this).hasClass("otherLeft")) {
            step--;
            if (step < 0) {
                $other.css("left", -($count - 2) * 1226);
                step = $count - 3;
            }
            $other.stop().animate({left: -step * 1226}, 500, "linear");
            changeTip();
        } else {
            autoMove();
        }

        autoTimer = window.setInterval(autoMove, 3000);
    });
})();
//左侧导航鼠标滑过显示隐藏
(function($){
    $(".nn").hover(function(){
        $(this).find(".left").show();
        $(this).css("background","#ff6700");
    },function(){
        $(".left").hide();
        $(this).css("background","");
    });
})($);
//设置滑过导航下拉菜单
(function($){
    $(".nav").hover(function() {
        $(this).find(".navList").show();

    },function(){
        $(".navList").hide();
    })

})($);

//小米明星单品

(function($){
    var step=0;
    function autoMove(){
        step++;
        if(step>=2)step=0;
        $("#box-33").animate({left:step*-1240});

    }
    window.setInterval(autoMove,5000);
    $("#box-11>a").click(function(){

        var n=$(this).index();

            $("#box-33").stop().animate({left:n*-1240})




    })
})($);



//$(document).ready(function(){
//    $(".tip2-ul .tip-z").click(function(){
//        var Num=$(this).index(".tip-z");
//        $(".tip2-ul .tip-z").removeClass("tip2-li").eq(Num).addClass("tip2-li");
//        $(".tip2-U").hide().eq(Num).show();
//    });
//});

//搭配
$(function(){
    $(".tip-z").hover(function(){

        var n=$(this).index();

       $(".tip2-U").removeClass("select4").eq(n).addClass("select4");

    })
});

//配件
$(function(){
    $(".tip3-z").hover(function(){

        var n=$(this).index();

        $(".tip3-U").removeClass("select5").eq(n).addClass("select5");

    })
});
//遮挡
(function($){
    $(".tipR").hover(function() {
        $(this).find(".mask").show();

    },function(){
        $(".mask").hide();
    })

})($);
//周边
$(function(){
    $(".tip4-z").hover(function(){

        var n=$(this).index();

        $(".tip4-U").removeClass("select6").eq(n).addClass("select6");

    })
});
//为你推荐  左右点击切换


//(function($){
//    var step=0;
//    function autoMove(){
//        step++;
//        if(step>=2)step=0;
//        $("#box-33").animate({left:step*-1240});
//
//    }

(function($){
    var step=0;
    $(".tip5-a1").click(function(){
        step++;
        if(step>=4)step=3;
            $(".tip5-ul").animate({left:step*-1240})
    });

    $(".tip5-a2").click(function(){
        step--;
        if(step<=0){
            step=0;
        }
        $(".tip5-ul").animate({left:step*-1240})

    });
})($);










//$(function(){//window.onload
//    //var i,n,m,w;
//    $(".tip-z").click(function(){
//        var n=$(this).addClass("tip2-li").siblings().removeClass("tip2-li").end().index();
//
//        $(this).parent().next().children("tip2-b").removeClass("select4").get(n).className="tip2-U select4";
//        //.addClass("selectedContent");
//        //get返回的JS 原生DOM对象
//
//    })
//});
