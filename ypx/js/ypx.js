/**
 * Created by y on 2017/3/1.
 */
$(document).ready(function(){
    $("#lo").html("Completed");
    $("#load").fadeOut();
    setTimeout(function(){
        $('#i1').animate({'top':'20%'},1000);
        $('#i2').animate({'bottom':'20%'},1000);
        $('#i3').animate({'top':'25%'},1000);
        $('#i4').animate({'bottom':'25%'},1000);
        $('#i5').animate({'top':'30%'},1000);
        $('#i6').animate({'bottom':'15%'},1000);
    },500)
})

$(function(){
    $(".btn1").mouseenter(function(){
        $(this).css({"background-color":"#1A1AE6","color":"white"});
    })
    $(".btn1").mouseleave(function(){
        $(this).css({"background-color":"#1169EE","color":"black"});
    })
    $(".btn2").mouseenter(function(){
        $(this).css({"background-color":"#11EE11","color":"white"});
    })
    $(".btn2").mouseleave(function(){
        $(this).css({"background-color":"#1AE694","color":"black"});
    })
})
$(function(){
    $(".btn1").click(function(){
        $(".introduction").show(500);
        $(".video").hide();
    })
})
$(function(){
    $(".btn2").click(function(){
        $(".video").show();
        $(".introduction").hide();
    })
})


