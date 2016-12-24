//我的订单 table
$(function(){
$(".level-left-table ul li a").click(function () {
                $(".level-left-table ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('.level-left-table ul li a').click(function(){
  var index=$('.level-left-table ul li a').index(this);
     if(index==0){
     $('#le-tba1').show();
  	 $('#le-tba2').hide();
   }
   if(index==1){
     $('#le-tba2').show();
  	 $('#le-tba1').hide();
   }
  }); 
});

//昵称
$(function () {
    var st = 100;
    $('.mainbav ul .iphone-show').mouseenter(function () {
		$('#user-show').show(1);
    })
		$("#user-show").click(function () {
                $(this).hide(1);
           });	
		$('.mainbav').mouseleave(function () {
        $('#user-show').hide(1);
    });	
 }); 
//数据
$(function () {
    var st = 100;
    $('.mainbav  #shuj').mouseenter(function () {
		$('#data-show').show(1);
		$('#user-show').hide(1);
    })
		$("#data-show").click(function () {
                $(this).hide(1);
           });	
		$('.mainbav').mouseleave(function () {
        $('#data-show').hide(1);
    });	
 });  
//二维
$(function () {
    var st = 100;
    $('.breadcrumb-main ul .iphone').mouseenter(function () {
		$('#erw-show').show(1);
    })
		$("#erw-show").click(function () {
                $(this).hide(1);
           });	
		$('.breadcrumb-main').mouseleave(function () {
        $('#erw-show').hide(1);
        $('#user-show').hide(1);
    });	
 }); 
 
//专题
$(function () {
    var st = 100;
    $('.news-detail-information ul #yuyan').mouseenter(function () {
  	  	$(this).css("background-image","url(images/yy-2.png)");
		$('#typesetting').show(1);
    })
		$("#typesetting").click(function () {
                $(this).hide(1);
                $('.news-detail-information ul #yuyan').css("background-image","url(images/yy-1.jpg)");
           });	
		$('.news-detail-information ul #yuyan').mouseleave(function () {
        $('#typesetting').hide(1);
        $('.news-detail-information ul #yuyan').css("background-image","url(images/yy-1.jpg)");
    });	
 });  
 
//分享
$(function () {
    var st = 100;
    $('.news-detail-information ul #share1').mouseenter(function () {
  	  	$('.news-detail-information ul #share1 .shareicon').css("color","#3382ee");
		$('#share-show').show(1);
    })
		$("#share-show").click(function () {
                $(this).hide(1);
                $('.news-detail-information ul #share1 .shareicon').css("color","#ddd");
           });	
		$('.news-detail-information ul #share1').mouseleave(function () {
        $('#share-show').hide(1);
        $('.news-detail-information ul #share1 .shareicon').css("color","#ddd");
    });	
 });  
 

//二维
$(function () {
    var st = 100;
    $('.user-show ul #typesetting-1').click(function () {
		$('#drag').show(1);
    })
		$("#deag-close").click(function () {
                $('#drag').hide(1);
          });	
 }); 
 

