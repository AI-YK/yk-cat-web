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
//第一个
$(function(){
$("#city-one ul li a").click(function () {
                $("#city-one ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('#city-one ul li a').click(function(){
  var index=$('#city-one ul li a').index(this);
     if(index==0){
     $('#province1').show();
  	 $('#province2').hide();
  	 $('#province3').hide();
  	 $('#province4').hide();
  	 $('#province5').hide();
  	 $('#province6').hide();
  	 $('#province7').hide();
  	 $('#province8').hide();
   }
   if(index==1){
     $('#province2').show();
  	 $('#province1').hide();
  	 $('#province3').hide();
  	 $('#province4').hide();
  	 $('#province5').hide();
  	 $('#province6').hide();
  	 $('#province7').hide();
  	 $('#province8').hide();
   }
   if(index==2){
     $('#province3').show();
  	 $('#province2').hide();
  	 $('#province1').hide();
  	 $('#province4').hide();
  	 $('#province5').hide();
  	 $('#province6').hide();
  	 $('#province7').hide();
  	 $('#province8').hide();
   }
   if(index==3){
     $('#province4').show();
  	 $('#province3').hide();
  	 $('#province2').hide();
  	 $('#province1').hide();
  	 $('#province5').hide();
  	 $('#province6').hide();
  	 $('#province7').hide();
  	 $('#province8').hide();
   }
   if(index==4){
     $('#province5').show();
  	 $('#province3').hide();
  	 $('#province2').hide();
  	 $('#province1').hide();
  	 $('#province4').hide();
  	 $('#province6').hide();
  	 $('#province7').hide();
  	 $('#province8').hide();
   }
   if(index==5){
     $('#province6').show();
  	 $('#province3').hide();
  	 $('#province2').hide();
  	 $('#province1').hide();
  	 $('#province4').hide();
  	 $('#province5').hide();
  	 $('#province7').hide();
  	 $('#province8').hide();
   }
    if(index==6){
     $('#province7').show();
  	 $('#province3').hide();
  	 $('#province2').hide();
  	 $('#province1').hide();
  	 $('#province4').hide();
  	 $('#province5').hide();
  	 $('#province6').hide();
  	 $('#province8').hide();
   }
    if(index==7){
     $('#province8').show();
  	 $('#province3').hide();
  	 $('#province2').hide();
  	 $('#province1').hide();
  	 $('#province4').hide();
  	 $('#province5').hide();
  	 $('#province6').hide();
  	 $('#province7').hide();
   }
  }); 
});

/*$(function(){
	  $("#finish").click(function(){
		  var diccheckname=document.getElementsByName("diccheckname");
		  var check_val = [];
		      for(k in diccheckname){
		          if(diccheckname[k].checked)
		              check_val.push(diccheckname[k].value);
		      }
		  if( $(".choice-list ul li a").hasClass('current')){
			  var hehe=$(this).next().attr("value");
		  }
		  var citycheckname=document.getElementsByName("citycheckname");
		  var check_city=[];
		  for(i in citycheckname){
			  if(citycheckname[i].checked)
				  check_city.push(citycheckname[i].value);
		  }
		  $.ajax({
			  url:_base+"/common/saveConf",
			  type:"POST",
			  dataType:"json",
			  data:{"interestStr":check_val,"cityStr":check_city,"provinceCode":"1"},
			  success:function(){
				  location.href = _base + '/home/index';
			  }
		  });
	  });
});*/
