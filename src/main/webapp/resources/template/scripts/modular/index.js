
//banner table
$(function(){
$(".list-left ul li").mouseenter(function () {
                $(".list-left ul li").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('.list-left ul li').mouseenter(function(){
  var index=$('.list-left ul li').index(this);
     if(index==0){
     $('#chart-date1').show();
  	 $('#chart-date2').hide();
  	 $('#chart-date3').hide();
  	 $('#chart-date4').hide();
  	 $('#chart-date5').hide();
  	 $('#chart-date6').hide();
  	 $('#chart-date7').hide();
   }
   if(index==1){
   $('#chart-date2').show();
   $('#chart-date1').hide();
   $('#chart-date3').hide();
   $('#chart-date4').hide();
   $('#chart-date5').hide();
   $('#chart-date6').hide();
   $('#chart-date7').hide();
   }
   if(index==2){
   $('#chart-date3').show();
   $('#chart-date1').hide();
   $('#chart-date2').hide();
   $('#chart-date4').hide();
   $('#chart-date5').hide();
   $('#chart-date6').hide();
   $('#chart-date7').hide();
   }
   if(index==3){
   $('#chart-date4').show();
   $('#chart-date3').hide();
   $('#chart-date2').hide();
   $('#chart-date1').hide();
    $('#chart-date5').hide();
   $('#chart-date6').hide();
   $('#chart-date7').hide();
   }
    if(index==4){
   $('#chart-date5').show();
   $('#chart-date3').hide();
   $('#chart-date2').hide();
   $('#chart-date1').hide();
   $('#chart-date4').hide();
   $('#chart-date6').hide();
   $('#chart-date7').hide();
   }
   if(index==5){
   $('#chart-date6').show();
   $('#chart-date3').hide();
   $('#chart-date2').hide();
   $('#chart-date1').hide();
   $('#chart-date4').hide();
   $('#chart-date5').hide();
   $('#chart-date7').hide();
   }
   if(index==6){
   $('#chart-date7').show();
   $('#chart-date3').hide();
   $('#chart-date2').hide();
   $('#chart-date1').hide();
   $('#chart-date4').hide();
   $('#chart-date5').hide();
   $('#chart-date6').hide();
   }
  }); 
});

//news table
$(function(){
$("#hot-news-main-tab ul li a").click(function () {
                $("#hot-news-main-tab ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('#hot-news-main-tab ul li a').click(function(){
  var index=$('#hot-news-main-tab ul li a').index(this);
     if(index==0){
     $('#hottab1').show();
  	 $('#hottab2').hide();
  	 $('#hottab3').hide();
  	 $('#hottab4').hide();
  	 $('#hottab5').hide();
  	 $('#hottab6').hide();
  	 $('#hottab7').hide();
  	 $('#hottab8').hide();
  	 $('#hottab9').hide(); 
   }
 	 if(index==1){
     $('#hottab2').show();
  	 $('#hottab1').hide();
  	 $('#hottab3').hide();
  	 $('#hottab4').hide();
  	 $('#hottab5').hide();
  	 $('#hottab6').hide();
  	 $('#hottab7').hide();
  	 $('#hottab8').hide();
  	 $('#hottab9').hide(); 
   }
 	 if(index==2){
     $('#hottab3').show();
  	 $('#hottab2').hide();
  	 $('#hottab1').hide();
  	 $('#hottab4').hide();
  	 $('#hottab5').hide();
  	 $('#hottab6').hide();
  	 $('#hottab7').hide();
  	 $('#hottab8').hide();
  	 $('#hottab9').hide(); 
   }
 	 if(index==3){
     $('#hottab4').show();
  	 $('#hottab3').hide();
  	 $('#hottab2').hide();
  	 $('#hottab1').hide();
  	 $('#hottab5').hide();
  	 $('#hottab6').hide();
  	 $('#hottab7').hide();
  	 $('#hottab8').hide();
  	 $('#hottab9').hide(); 
   }
 	 if(index==4){
     $('#hottab5').show();
  	 $('#hottab4').hide();
  	 $('#hottab3').hide();
  	 $('#hottab2').hide();
  	 $('#hottab1').hide();
  	 $('#hottab6').hide();
  	 $('#hottab7').hide();
  	 $('#hottab8').hide();
  	 $('#hottab9').hide(); 
   }
 	 if(index==5){
     $('#hottab6').show();
  	 $('#hottab5').hide();
  	 $('#hottab4').hide();
  	 $('#hottab3').hide();
  	 $('#hottab2').hide();
  	 $('#hottab1').hide();
  	 $('#hottab7').hide();
  	 $('#hottab8').hide();
  	 $('#hottab9').hide(); 
   }
 	 if(index==6){
     $('#hottab7').show();
  	 $('#hottab6').hide();
  	 $('#hottab5').hide();
  	 $('#hottab4').hide();
  	 $('#hottab3').hide();
  	 $('#hottab2').hide();
  	 $('#hottab1').hide();
  	 $('#hottab8').hide();
  	 $('#hottab9').hide(); 
   }
 	 if(index==7){
     $('#hottab8').show();
  	 $('#hottab6').hide();
  	 $('#hottab5').hide();
  	 $('#hottab4').hide();
  	 $('#hottab3').hide();
  	 $('#hottab2').hide();
  	 $('#hottab1').hide();
  	 $('#hottab7').hide();
  	 $('#hottab9').hide(); 
   }
 	 if(index==8){
     $('#hottab9').show();
  	 $('#hottab6').hide();
  	 $('#hottab5').hide();
  	 $('#hottab4').hide();
  	 $('#hottab3').hide();
  	 $('#hottab2').hide();
  	 $('#hottab1').hide();
  	 $('#hottab7').hide();
  	 $('#hottab8').hide(); 
   }
  }); 
});

//社交 table
$(function(){
$("#social-tab ul li a").click(function () {
                $("#social-tab ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('#social-tab ul li a').click(function(){
  var index=$('#social-tab ul li a').index(this);
     if(index==0){
     $('#social1').show();
  	 $('#social2').hide();
  	 $('#social3').hide();
  	 $('#social4').hide();
   }
   if(index==1){
     $('#social2').show();
  	 $('#social1').hide();
  	 $('#social3').hide();
  	 $('#social4').hide();
   }
   if(index==2){
     $('#social3').show();
  	 $('#social2').hide();
  	 $('#social1').hide();
  	 $('#social4').hide();
   }
   if(index==3){
     $('#social4').show();
  	 $('#social3').hide();
  	 $('#social2').hide();
  	 $('#social1').hide();
   }
  }); 
});
//走势 table
$(function(){
$("#trend ul li a").click(function () {
                $("#trend ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('#trend ul li a').click(function(){
  var index=$('#trend ul li a').index(this);
     if(index==0){
     $('#trendtab1').show();
  	 $('#trendtab2').hide();
  	 $('#trendtab3').hide();
   }
   if(index==1){
     $('#trendtab2').show();
  	 $('#trendtab1').hide();
  	 $('#trendtab3').hide();
   }
   if(index==2){
     $('#trendtab3').show();
  	 $('#trendtab2').hide();
  	 $('#trendtab1').hide();
   }
  }); 
});
//走势 table
$(function(){
$("#trend1 ul li a").click(function () {
                $("#trend1 ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('#trend1 ul li a').click(function(){
  var index=$('#trend1 ul li a').index(this);
     if(index==0){
     $('#trendtab4').show();
  	 $('#trendtab5').hide();
  	 $('#trendtab6').hide();
   }
   if(index==1){
     $('#trendtab5').show();
  	 $('#trendtab4').hide();
  	 $('#trendtab6').hide();
   }
   if(index==2){
     $('#trendtab6').show();
  	 $('#trendtab5').hide();
  	 $('#trendtab4').hide();
   }
  }); 
});
//语言切换
$(function () {
    var st = 100;
    $('.mainbav ul .language').mouseenter(function () {
		$('#language-show').show(1);
		$('#data-show').hide(1);
		$('#user-show').hide(1);
    })
		$("#language-show").click(function () {
                $(this).hide(1);
           });	
		$('.mainbav').mouseleave(function () {
        $('#language-show').hide(1);
    });	
 }); 

//昵称
$(function () {
    var st = 100;
    $('.mainbav ul .iphone-show').mouseenter(function () {
		$('#user-show').show(1);
		$('#data-show').hide(1);
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
 //更多
$(function () {
    var st = 100;
    $('.right-list  #more').mouseenter(function () {
		$('#more-show').show(1);
    })
		$("#more-show").click(function () {
                $(this).hide(1);
           });	
		$('.right-list').mouseleave(function () {
        $('#more-show').hide(1);
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
    $('.right-list ul #in-border1').mouseenter(function () {
		$('#special-one').show(1);
    })
		$("#special-one").click(function () {
                $(this).hide(1);
           });	
		$('.right-list ul #in-border1').mouseleave(function () {
        $('#special-one').hide(1);
    });	
 });  
 //专题
$(function () {
    var st = 100;
    $('.right-list ul #in-border2').mouseenter(function () {
		$('#special-tow').show(1);
    })
		$("#special-tow").click(function () {
                $(this).hide(1);
           });	
		$('.right-list ul #in-border2').mouseleave(function () {
        $('#special-tow').hide(1);
    });	
 }); 
//选择城市
$(function () {
    var st = 100;
    $('.left-list ul li #choice-city').click(function () {
		$('#index-city').toggle();
    })
    $('#btn-close').click(function () {
		$('#index-city').hide();
    })	
   }); 
   
$(function(){
$("#merge ul li a").click(function () {
                $("#merge ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('#merge ul li a').click(function(){
  var index=$('#merge ul li a').index(this);
     if(index==0){
     $('#mtab1').show();
  	 $('#mtab2').hide();
   }
   if(index==1){
     $('#mtab2').show();
  	 $('#mtab1').hide();
   }
 }); 
});
$(function(){
$("#merge1 ul li a").click(function () {
                $("#merge1 ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('#merge1 ul li a').click(function(){
  var index=$('#merge1 ul li a').index(this);
     if(index==0){
     $('#mtab3').show();
  	 $('#mtab4').hide();
   }
   if(index==1){
     $('#mtab4').show();
  	 $('#mtab3').hide();
   }
 }); 
});
$(function(){
$("#merge2 ul li a").click(function () {
                $("#merge2 ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('#merge2 ul li a').click(function(){
  var index=$('#merge2 ul li a').index(this);
     if(index==0){
     $('#mtab5').show();
  	 $('#mtab6').hide();
   }
   if(index==1){
     $('#mtab6').show();
  	 $('#mtab5').hide();
   }
 }); 
});
$(function(){
$("#merge3 ul li a").click(function () {
                $("#merge3 ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('#merge3 ul li a').click(function(){
  var index=$('#merge3 ul li a').index(this);
     if(index==0){
     $('#mtab7').show();
  	 $('#mtab8').hide();
   }
   if(index==1){
     $('#mtab8').show();
  	 $('#mtab7').hide();
   }
 }); 
});
$(function(){
$("#merge4 ul li a").click(function () {
                $("#merge4 ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('#merge4 ul li a').click(function(){
  var index=$('#merge4 ul li a').index(this);
     if(index==0){
     $('#mtab9').show();
  	 $('#mtab10').hide();
   }
   if(index==1){
     $('#mtab10').show();
  	 $('#mtab9').hide();
   }
 }); 
});
$(function(){
$("#merge5 ul li a").click(function () {
                $("#merge5 ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('#merge5 ul li a').click(function(){
  var index=$('#merge5 ul li a').index(this);
     if(index==0){
     $('#mtab11').show();
  	 $('#mtab12').hide();
   }
   if(index==1){
     $('#mtab12').show();
  	 $('#mtab11').hide();
   }
 }); 
});
$(function(){
$("#merge6 ul li a").click(function () {
                $("#merge6 ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('#merge6 ul li a').click(function(){
  var index=$('#merge6 ul li a').index(this);
     if(index==0){
     $('#mtab13').show();
  	 $('#mtab14').hide();
   }
   if(index==1){
     $('#mtab14').show();
  	 $('#mtab13').hide();
   }
 }); 
});
