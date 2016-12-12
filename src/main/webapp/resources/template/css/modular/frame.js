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
