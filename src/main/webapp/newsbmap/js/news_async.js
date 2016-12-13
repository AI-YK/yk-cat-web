//专题列表页开发
$(function(){
	init();
	init1();
	init2();
	init3();
});

function init(){
	 $.ajax({
		    url: "special/topic/news/blog",
		    data: {"infoId" : $("#infoId").val()},
		    dataType: "json",
		    success: function(result){ 
		    	var obj='';
		    	if(result!=null&&result.data!=null&&result.data.resultList!=null){
		    		$.each(result.data.resultList, function(commentIndex, dv){
		    			if(dv.userAvatar!=null && dv.userAvatar!=""){
		    				obj= '<dd><img  src="'+dv.userAvatar+'" onerror="this.src=\'images/userImg.png\'"  width="30" height="30"/><b>'+dv.name.replace(/\s/g, "").substring(0,8)+'</b></dd>';
		    				$("#fnf").append(obj);
		    			}else{
		    				obj= '<dd><img  src="images/userImg.png"  width="30" height="30"/><b>'+dv.name.replace(/\s/g, "").substring(0,8)+'</b></dd>';
			    			$("#fnf").append(obj);
		    			}
		    		});
		    	}
	         }
		});	
}

function init1(){
		  $("#oc").click(function(){
		  	  $(this).addClass('on').siblings().removeClass('on');
			  $("#fnf").empty();
			  $.ajax({
				    url: "special/topic/news/blog",
				    data: {"infoId" : $("#infoId").val()},
				    dataType: "json",
				    success: function(result){ 
				    	var obj='';
				    	
				    	if(result!=null&&result.data!=null&&result.data.resultList!=null){
				    		$.each(result.data.resultList, function(commentIndex, dv){
				    			if(dv.userAvatar!=null && dv.userAvatar!=""){
				    				obj= '<dd><img  src="'+dv.userAvatar+'"  width="30" height="30"/><b>'+dv.name.replace(/\s/g, "").substring(0,8)+'</b></dd>';
				    				$("#fnf").append(obj);
				    			}else{
				    				obj= '<dd><img  src="images/userImg.png"  width="30" height="30"/><b>'+dv.name.replace(/\s/g, "").substring(0,8)+'</b></dd>';
					    			$("#fnf").append(obj);
				    			}
				    		});
				    	}
			         }
				});	
		  });
}
function init2(){
		  $("#od").click(function(){
		  	  $(this).addClass('on').siblings().removeClass('on');
			  $("#fnf").empty();
			  $.ajax({
				    url: "special/topic/news/fackbook",
				    data: {"infoId" : $("#infoId").val()},
				    dataType: "json",
				    success: function(result){ 
				    	var obj='';
				    	if(result!=null&&result.data!=null&&result.data.resultList!=null){
				    		$.each(result.data.resultList, function(commentIndex, dv){
				    			if(dv.userAvatar!=null && dv.userAvatar!=""){
				    				obj= '<dd><img  src="'+dv.userAvatar+'"  width="30" height="30"/><b>'+dv.name.replace(/\s/g, "").substring(0,8)+'</b></dd>';
				    				$("#fnf").append(obj);
				    			}else{
				    				obj= '<dd><img  src="images/userImg.png"  width="30" height="30"/><b>'+dv.name.replace(/\s/g, "").substring(0,8)+'</b></dd>';
					    			$("#fnf").append(obj);
				    			}
				    		});
				    	}
			         }
				});	
		  });
}
function init3(){
		  $("#of").click(function(){
		  	  $(this).addClass('on').siblings().removeClass('on');
			  $("#fnf").empty();
			  $.ajax({
				    url: "special/topic/news/twitter",
				    data: {"infoId" : $("#infoId").val()},
				    dataType: "json",
				    success: function(result){ 
				    	var obj='';
				    	if(result!=null&&result.data!=null&&result.data.resultList!=null){
				    		$.each(result.data.resultList, function(commentIndex, dv){
				    			if(dv.userAvatar!=null && dv.userAvatar!=""){
				    				obj= '<dd><img  src="'+dv.userAvatar+'"  width="30" height="30"/><b>'+dv.name.replace(/\s/g, "").substring(0,8)+'</b></dd>';
				    				$("#fnf").append(obj);
				    			}else{
				    				obj= '<dd><img  src="images/userImg.png"  width="30" height="30"/><b>'+dv.name.replace(/\s/g, "").substring(0,8)+'</b></dd>';
					    			$("#fnf").append(obj);
				    			}
				    		});
				    	}
			         }
				});	
		  });
}
function initAntistop(){
	 $.ajax({
		    url: "special/topic/news/antistop",
		    data: {"infoId" : $("#infoId").val()},
		    dataType: "json",
		    success: function(result){ 
		    	var obj='';
		    		$.each(result.data.ListNKDZH, function(commentIndex, dv){
		    			obj+= '<a class="hota" data-value="'+dv.keyword+'">'+dv.keyword+'</a>';
		    			$("#my_keywordcloud").html(obj);
		    		});
	         }
		});	
}
function initAntistopTwo(){
	$.ajax({
		url:"",
		data:{"infoId": $("#infoId").val()},
		dataType:"json",
		success: function(result){
			var obj='';
			$.each(result.data.ListNKDZH, function(commentIndex,dv){
				obj='<a class="hota" data-value="'+dv.keyword+'">'+dv.keyword+'</a>';
				$("").append(obj);
			});
		}
	});
}