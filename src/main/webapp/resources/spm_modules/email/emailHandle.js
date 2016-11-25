var emailHosts = {
	'qq.com' : 'http://mail.qq.com',
	'gmail.com' : 'http://mail.google.com',
	'sina.com' : 'http://mail.sina.com.cn',
	'163.com' : 'http://mail.163.com',
	'126.com' : 'http://mail.126.com',
	'yeah.net' : 'http://www.yeah.net/',
	'sohu.com' : 'http://mail.sohu.com/',
	'tom.com' : 'http://mail.tom.com/',
	'139.com' : 'http://mail.10086.cn/',
	'hotmail.com' : 'http://www.hotmail.com',
	'live.com' : 'http://login.live.com/',
	'live.cn' : 'http://login.live.cn/',
	'live.com.cn' : 'http://login.live.com.cn',
	'189.com' : 'http://webmail16.189.cn/webmail/',
	'yahoo.com.cn' : 'http://mail.cn.yahoo.com/',
	'yahoo.cn' : 'http://mail.cn.yahoo.com/',
	'eyou.com' : 'http://www.eyou.com/',
	'21cn.com' : 'http://mail.21cn.com/',
	'188.com' : 'http://www.188.com/',
	'foxmail.com' : 'http://mail.foxmail.com',
	'outlook.com' : 'http://www.outlook.com'
};
var $emailHandle = {};
/** 获取指定邮箱跳转链接* */
$emailHandle.getHost = function(_mail) {
	_mail = _mail.split('@')[1]; // 获取邮箱域
	var _host = emailHosts[_mail];
	if (!_host) {
		_host = 'http://mail.' + _mail;
	}
	return _host;
};
/**直接跳转邮箱* */
$emailHandle.goEmail = function(email) {
	location.href=$emailHandle.getHost(email);
};
/**新开窗口跳转邮箱* */
$emailHandle.openEmail = function(email) {
	window.open($emailHandle.getHost(email));
};