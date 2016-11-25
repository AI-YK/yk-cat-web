//提示弹出框 
jQuery(document).ready(function($) {
	$('#recharge-popo').click(function(){
	$('#eject-mask').fadeIn(100);
	$('#rechargepop').slideDown(100);
	})
	$('#completed').click(function(){
	$('#eject-mask').fadeOut(200);
	$('#rechargepop').slideUp(200);
	})
	$('#close-completed').click(function(){
	$('#eject-mask').fadeOut(200);
	$('#rechargepop').slideUp(200);
	})
})

//译员弹出框 
jQuery(document).ready(function($) {
	$('#tran-popo').click(function(){
	$('#eject-mask').fadeIn(100);
	$('#tran').slideDown(100);
	})
	$('#tran-determine').click(function(){
	$('#eject-mask').fadeOut(200);
	$('#tran').slideUp(200);
	})
	$('#tran-close').click(function(){
	$('#eject-mask').fadeOut(200);
	$('#tran').slideUp(200);
	})
})

//订单大厅弹出框 
jQuery(document).ready(function($) {
	$('#receive-btn').click(function(){
	$('#eject-mask').fadeIn(100);
	$('#receive').slideDown(100);
	})
	$('#receive-determine').click(function(){
	$('#eject-mask').fadeOut(200);
	$('#receive').slideUp(200);
	})
	$('#receive-close').click(function(){
	$('#eject-mask').fadeOut(200);
	$('#receive').slideUp(200);
	})
})

//安全设置有 
jQuery(document).ready(function($) {
	$('#password-btn').click(function(){
	$('#eject-mask').fadeIn(100);
	$('#modify-password').slideDown(100);
	})
	$('#modify-determine').click(function(){
	$('#eject-mask').fadeOut(200);
	$('#modify-password').slideUp(200);
	})
	$('#modify-close').click(function(){
	$('#eject-mask').fadeOut(200);
	$('#modify-password').slideUp(200);
	})
})