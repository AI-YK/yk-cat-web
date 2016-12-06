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
   }
   if(index==1){
   $('#chart-date2').show();
   $('#chart-date1').hide();
   $('#chart-date3').hide();
   $('#chart-date4').hide();
   }
   if(index==2){
   $('#chart-date3').show();
   $('#chart-date1').hide();
   $('#chart-date2').hide();
   $('#chart-date4').hide();
   }
   if(index==3){
   $('#chart-date4').show();
   $('#chart-date3').hide();
   $('#chart-date2').hide();
   $('#chart-date1').hide();
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