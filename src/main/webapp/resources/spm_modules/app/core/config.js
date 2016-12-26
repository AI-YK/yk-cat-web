(function () {
	seajs.config({
		base: _base+"/resources/spm_modules",
		alias:{
			'jquery' :"jquery/1.9.1/jquery",
			'cookie' :"jquery-cookie/1.4.1/jquery.cookie"
		},
		preload: ["jquery","cookie"],
		paths: {
			"centaurus":_base+"/resources/centaurus"
		}
	});
	
})();