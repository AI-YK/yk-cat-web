//我的订单 table
$(function(){
$(".choice-left-title ul li a").click(function () {
                $(".choice-left-title ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('.choice-left-title ul li a').click(function(){
  var index=$('.choice-left-title ul li a').index(this);
     if(index==0){
     $('#citi-tab1').show();
  	 $('#citi-tab2').hide();
  	 $('#citi-tab3').hide();
  	 $('#citi-tab4').hide();
   }
   if(index==1){
     $('#citi-tab2').show();
  	 $('#citi-tab1').hide();
  	 $('#citi-tab3').hide();
  	 $('#citi-tab4').hide();
   }
   if(index==2){
     $('#citi-tab3').show();
  	 $('#citi-tab2').hide();
  	 $('#citi-tab1').hide();
  	 $('#citi-tab4').hide();
   }
   if(index==3){
     $('#citi-tab4').show();
  	 $('#citi-tab2').hide();
  	 $('#citi-tab3').hide();
  	 $('#citi-tab1').hide();
   }
  }); 
});

$(function(){
$(".choice-left-title ul li a").click(function () {
                $(".choice-left-title ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('.choice-left-title ul li a').click(function(){
  var index=$('.choice-left-title ul li a').index(this);
     if(index==0){
     $('#citi-tab1').show();
  	 $('#citi-tab2').hide();
  	 $('#citi-tab3').hide();
  	 $('#citi-tab4').hide();
   }
   if(index==1){
     $('#citi-tab2').show();
  	 $('#citi-tab1').hide();
  	 $('#citi-tab3').hide();
  	 $('#citi-tab4').hide();
   }
   if(index==2){
     $('#citi-tab3').show();
  	 $('#citi-tab2').hide();
  	 $('#citi-tab1').hide();
  	 $('#citi-tab4').hide();
   }
   if(index==3){
     $('#citi-tab4').show();
  	 $('#citi-tab2').hide();
  	 $('#citi-tab3').hide();
  	 $('#citi-tab1').hide();
   }
  }); 
});
