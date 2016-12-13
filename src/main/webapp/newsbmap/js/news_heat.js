 
var myChart;

var start_datetime='';//开始时间
var end_datetime='';//结束时间
var event_code='';//事件分类表
var country_class='';//国家种族分类

function fmoney(s, n) {  
    n = n > 0 && n <= 20 ? n : 2;  
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";  
    var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];  
    t = "";  
    for (i = 0; i < l.length; i++) {  
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
    }  
    return t.split("").reverse().join("");  
} 

$(function(){
	//初始化
	$('.echarts_name').html('<h1>全球热点事件<font color="#1d78d2">分布图</font></h1>')
	$('.container').css({'height':$('body').height()-110});
	$('.news_list .news_list_bg,.news_list .list_box').css({'height':$('body').height()-131});
	$('.news_list .div_list').css({'height':$('body').height()-231});
	
	//$('.type_class').show();
 
	get_eventcode();//获取事件分类
	
    var daynum=$(this).attr('data-day');
	var start_d = new Date();
	var end_d = new Date(start_d.getTime() - (24 * 3600 * 1000 * 30));
	start_datetime= start_d.getFullYear()+"-"+(start_d.getMonth()+1)+"-"+start_d.getDate();
	end_datetime=end_d.getFullYear()+"-"+(end_d.getMonth()+1)+"-"+end_d.getDate();
 
	//左侧日期选择
	$('.date_qj li').unbind().bind('click',function(){
		$('input[name="start_time"]').val('');
		$('input[name="end_time"]').val('');
		$(this).addClass('on').siblings().removeClass('on');
		var daynum=$(this).attr('data-day');
		var start_d = new Date();
		var end_d = new Date(start_d.getTime() - (24 * 3600 * 1000*parseInt(daynum)));
		start_datetime= start_d.getFullYear()+"-"+(start_d.getMonth()+1)+"-"+start_d.getDate();
		end_datetime=end_d.getFullYear()+"-"+(end_d.getMonth()+1)+"-"+end_d.getDate();
	});
 

	
	//右侧分类选择
	$('.menu_right').on('click','ul li.list',function(){
		$(this).addClass('on').siblings().removeClass('on');
	});
    $('.menu_right').on('click','ul dl dd',function(){
		$(this).addClass('on').siblings().removeClass('on');
	});
 
	//国家 宗教选择
    $('.type_class ul li').unbind().bind('click',function(){
    	event_code=$(this).attr('data-code');
    	$(this).addClass('on').siblings().removeClass('on');
    });
    
    //选择事件地图
	$('.levitate_menu ul li').unbind().bind('click',function(){
		$(this).addClass('on').siblings().removeClass();
		switch($(this).index()){
			case 0:
			   $('.type_class').show();
			   $('.echarts_name').html('<h1>全球话题<font color="#1d78d2">热力图</font></h1>')
			   echart0();
			   break;
			case 1:
			   $('.type_class').hide();
			   $('.echarts_name').html('<h1>全球热点事件<font color="#1d78d2">分布图</font></h1>')
			   echart1();
			   break;
		}
	});
 
    //宽高变换
    $(window).resize(function(){ 
         $('.container').css({'height':$('body').height()-110});
         $('.news_list .news_list_bg,.news_list .list_box').css({'height':$('body').height()-131});
         $('.news_list .div_list').css({'height':$('body').height()-231});
         try{myChart.resize();}catch(e){};
    });

    //点击事件
    $('.bottom_btn').bind('click',function(){
    	 if($(this).hasClass('open')){
    	 	$(this).removeClass('open').addClass('close');
    	 	$('.right_btn .news_list').show();
    	 }else{
    	 	$(this).removeClass('close').addClass('open');
    	 	$('.right_btn .news_list').hide();
    	 }
    });
});

//日期选择
function pickedFunc(){
	if($('input[name="start_time"]').val()!='' && $('input[name="end_time"]').val()!=''){
		    start_datetime = $('input[name="start_time"]').val();
		    end_datetime = $('input[name="end_time"]').val();
	        $('.date_qj li').removeClass('on');
	}
}

function get_eventcode(){
	var ajax_url='news/evenNameData';
	var ajax_data={};
	var shownum=5;
	$.post(ajax_url,ajax_data,function(result){ 
		    //console.log('result11=', result );
		    //console.log('result=',JSON.parse(result));
	        var result=JSON.parse(result);
	        $('.menu_right ul').empty();
	        var html='';
	        $.each(result.list,function(i,o){
	        	
	        	    html='<li class="list" data-code="'+ o.eventcode +'" data-zh="'+ o.chinese +'" data-en="'+ o.eventdescription +'">'
	        	        +'<a title="'+ o.chinese +'" href="javascript:;">'+ o.chinese +'</a>'
	        	        +'</li>';
	        	if(i<shownum){
	        	    $('.menu_right ul').append(html);
	        	}else{
	        		 if($('.menu_right ul .more').length>0){
	        		 	html='<dd data-code="'+ o.eventcode +'" data-zh="'+ o.chinese +'" data-en="'+ o.eventdescription +'">'
	        	        +'<a title="'+ o.chinese +'" href="javascript:;">'+ o.chinese +'</a>'
	        	        +'</dd>';
	        	        $('.menu_right ul dl').append(html);     
	        		 }else{
	        		 	html='<li class="more">'
				 			+'<a href="javascript:;">更多<i></i></a>'
				 			+'<dl></dl>'
				 	        +'</li>';
				 	    $('.menu_right ul').append(html); 
				 	    html='<dd data-code="'+ o.eventcode +'" data-zh="'+ o.chinese +'" data-en="'+ o.eventdescription +'">'
	        	        +'<a title="'+ o.chinese +'" href="javascript:;">'+ o.chinese +'</a>'
	        	        +'</dd>';
				 	    $('.menu_right ul dl').append(html);     
	        		 }
	        	}
	        });
	});	
}
 
 
 
//获取热点信息
function get_event_hot_data(){
	 var ajax_url='news/eventAllData';
	 var ajax_data={
	 };
	 $.post(ajax_url,ajax_data,function(result){ 

	 });
}
//获取热力图
get_event_point_data();
var p_map_geo={};
var p_map_point=[];
var count = 0;
function get_event_point_data(){
	 var ajax_url='news/getNewsHeatPointList';
	 var ajax_data={
	 	'beginDate':start_datetime,
	 	'endDate':end_datetime,
	 	'countrychinaname':country_class,
	 	'eventcode':event_code
	 };
	 $.post(ajax_url,ajax_data,function(result){
	 	    var result=JSON.parse(result);
	 	    console.log('result=',result);
 
	 	    $('.div0 .ul1').empty();
	 	    $.each(result.data,function(i,o){
	 	    	 if(i<8){
	 	    		 var name = '';
	 	    		if(o.chineseTopic!=null && o.chineseTopic!='' && o.chineseTopic!='null'){
	    		    	name = o.chineseTopic;
	    		    }else{
	    		    	name = o.topic;
	    		    }
	 	    		
	 	    		$('.div0 .ul1').append('<li><span class="span1"><img src="images/news/num/no_0'+(i+1)+'.png" /></span><a title="'+name+'" href="javascript:openDia(\''+o.globaleventid+'\')" class="span2" style="font-size:16px;">'+name+'</a></li>');
	 	    	    //$('.div0 .ul1').append('<li><span class="span1"><img src="images/news/num/no_0'+(i+1)+'.png" /></span><a title="'+name+'" href="javascript:newInfoDialog(\''+o.globaleventid+'\')" class="span2" style="font-size:16px;">'+name+'</a></li>');
	 	    	 }
	 	    	 if(o.topic && o.topic!='' && o.geoLat && o.geoLat!='' && o.geoLong && o.geoLong!=''){
	 	    	    p_map_geo[o.topic]=[];
	 	    	    p_map_geo[o.topic].push(o.geoLong);
	 	    	    p_map_geo[o.topic].push(o.geoLat);
	 	    	    
	 	    	    var data_list={
	 		 	    	 	 'name': o.topic,
	 		 	    	     'value': i<30?o.avgtone_num:4,
	 		 	    	 	 'geoLat': o.geoLat,
	 		 	    	 	 'geoLong': o.geoLong,
	 		 	    	 	 'eventchinaname': o.eventchinaname,
	 		 	    	 	 'eventcode': o.eventcode,
	 		 	    	 	 'globaleventid':o.globaleventid,
	 		 	    	 	 'sourceurl':o.sourceurl,
	 		 	    	 	 'countryengname': o.topic,
	 		 	    	 	 'countrychinaname':o.countrychinaname,
	 		 	    	 	 'avgtone_num':o.avgtone_num,
	 		 	    	 	 'newsdateview':o.newsdateview,
	 		 	    	 	 'heatnum':fmoney(o.heatnum,2),
	 		 	    	 	 'lat':o.geoLat,
	 		 	    	 	 'lng':o.geoLong,
	 		 	    	 	 'source':o.source,
	 		 	    	 	 'chineseTopic':o.chineseTopic,
	 		 	    	 	 'chineseKeywords':o.chineseKeywords,
	 		 	    	 	 'topicId':o.topicId,
	 		 	    	 	 'id':o.id
	 		 	     }
	 		 	     p_map_point.push(data_list);
	 	    	 }
	 	    	 
	 	    });
	 	    
	 	   // console.log('aaaabbbcc=',p_map_geo,p_map_point);
	 	   echart0();
	 });
}


var geoCoordMap = {'Afghanistan': [67.709953,33.93911],
				'Albania': [20.1683309999999,41.153332],
				'Algeria': [1.659626,28.033886],
				'Angola': [17.8738869999999,-11.202692],
				'Argentina': [-63.6166719999999,-38.416097],
				'Armenia': [45.0381889999999,40.069099],
				'Aruba': [-69.968338,12.52111],
				'Australia': [133.775135999999,-25.274398],
				'Austria': [14.550072,47.516231],
				'Azerbaijan': [47.576927,40.143105],
				'Bahamas': [-77.3962799999999,25.03428],
				'Bahrain': [50.5577,26.0667],
				'Bangladesh': [-77.3962799999999,25.03428],
				'Barbados': [-59.5431979999999,13.193887],
				'Belarus': [27.953389,53.709807],
				'Belgium': [4.46993599999996,50.503887],
				'Belize': [-88.49765,17.189877],
				'Benin': [2.31583399999999,9.30769],
				'Bhutan': [90.4336009999999,27.514162],
				'Bolivia': [-63.588653,-16.290154],
				'Bosnia & Herzegovina': [77.1609227,28.5630924],
				'Botswana': [24.684866,-22.328474],
				'Brazil': [-51.9252799999999,-14.235004],
				'Brunei': [114.727668999999,4.535277],
				'Bulgaria': [25.4858299999999,42.733883],
				'Burkina Faso': [-1.56159300000001,12.238333],
				'Burundi': [29.9188859999999,-3.373056],
				'Cambodia': [104.990962999999,12.565679],
				'Cameroon': [12.354722,7.36972199999999],
				'Canada': [-106.346770999999,56.130366],
				'Cape Verde': [-23.6051721,15.120142],
				'Central African Republic': [20.9394439999999,6.61111099999999],
				'Chad': [18.732207,15.454166],
				'Channel Islands': [-2.13249999999993,49.2166667],
				'Chile': [-71.5429689999999,-35.675147],
				'China': [104.195396999999,35.86166],
				'Colombia': [-74.2973329999999,4.570868],
				'Comoros': [43.3333,-11.6455],
				'Congo': [15.827659,-0.228021],
				'Costa Rica': [-83.7534279999999,9.74891699999999],
				'Croatia': [15.2,45.1],
				'Cuba': [-77.7811669999999,21.521757],
				'Cyprus': [33.4298589999999,35.126413],
				'Czech Republic': [15.472962,49.8174919999999],
				'Denmark': [9.50178500000004,56.26392],
				'Djibouti': [42.590275,11.825138],
				'Dominican Republic': [-70.1626509999999,18.735693],
				'DR Congo': [21.7586639999999,-4.038333],
				'Ecuador': [-78.1834059999999,-1.831239],
				'Egypt': [30.802498,26.820553],
				'El Salvador': [-88.8965299999999,13.794185],
				'Equatorial Guinea': [10.2678949999999,1.650801],
				'Eritrea': [39.7823339999999,15.179384],
				'Estonia': [25.0136069999999,58.595272],
				'Ethiopia': [40.489673,9.145],
				'Fiji': [178.065031999999,-17.713371],
				'Finland': [178.065031999999,-17.713371],
				'France': [2.213749,46.227638],
				'French Guiana': [-53.125782,3.933889],
				'French Polynesia': [-149.406842999999,-17.679742],
				'Gabon': [11.6094439999999,-0.803689],
				'Gambia': [-15.3101389999999,13.443182],
				'Georgia': [-82.9000750999999,32.1656221],
				'Germany': [10.451526,51.165691],
				'Ghana': [-1.02319399999998,7.946527],
				'Greece': [21.8243119999999,39.074208],
				'Grenada': [-61.6789999999999,12.1165],
				'Guadeloupe': [-61.5509999999999,16.265],
				'Guam': [144.793730999999,13.444304],
				'Guatemala': [-90.2307589999999,15.783471],
				'Guinea': [-9.69664499999999,9.945587],
				'Guinea-Bissau': [-15.180413,11.803749],
				'Guyana': [-58.93018,4.860416],
				'Haiti': [-72.285215,18.971187],
				'Honduras': [-86.2419049999999,15.199999],
				'Hong Kong': [114.109497,22.396428],
				'Hungary': [19.503304,47.162494],
				'Iceland': [114.109497,22.396428],
				'India': [78.96288,20.593684],
				'Indonesia': [113.921327,-0.789275],
				'Iran': [53.6880459999999,32.427908],
				'Iraq': [43.679291,33.223191],
				'Ireland': [-8.24388999999996,53.41291],
				'Israel': [34.8516119999999,31.046051],
				'Italy': [12.5673799999999,41.87194],
				'Ivory Coast': [-5.54708000000005,7.53998899999999],
				'Jamaica': [-77.297508,18.109581],
				'Japan': [138.252924,36.204824],
				'Jordan': [36.238414,30.585164],
				'Kazakhstan': [66.9236839999999,48.019573],
				'Kenya': [37.906193,-0.023559],
				'Kuwait': [47.4817659999999,29.31166],
				'Kyrgyzstan': [74.766098,41.20438],
				'Laos': [102.495496,19.85627],
				'Latvia': [24.6031889999999,56.879635],
				'Lebanon': [35.8622849999999,33.854721],
				'Lesotho': [28.233608,-29.609988],
				'Liberia': [-9.42949899999996,6.428055],
				'Libya': [17.228331,26.3351],
				'Lithuania': [23.8812749999999,55.169438],
				'Luxembourg': [6.12958300000002,49.815273],
				'Macao': [113.543873,22.198745],
				'Macedonia': [21.7452749999999,41.608635],
				'Madagascar': [46.8691069999999,-18.766947],
				'Malawi': [34.3015249999999,-13.254308],
				'Malaysia': [101.975766,4.210484],
				'Maldives': [73.5361034,1.977247],
				'Mali': [-3.99616600000001,17.570692],
				'Malta': [14.3754159999999,35.937496],
				'Martinique': [-61.024174,14.641528],
				'Mauritania': [-10.9408349999999,21.00789],
				'Mauritius': [57.5521519999999,-20.348404],
				'Mayotte': [45.166244,-12.8275],
				'Mexico': [-102.552783999999,23.634501],
				'Micronesia': [158.215071699999,6.8873508],
				'Moldova': [28.369885,47.411631],
				'Mongolia': [103.846655999999,46.862496],
				'Montenegro': [19.3743899999999,42.708678],
				'Morocco': [-7.09262000000001,31.791702],
				'Mozambique': [35.5295619999999,-18.665695],
				'Myanmar': [95.956223,21.913965],
				'Namibia': [18.4904099999999,-22.95764],
				'Nepal': [84.124008,28.394857],
				'Netherlands': [5.29126599999995,52.132633],
				'New Caledonia': [165.618042,-20.904305],
				'New Zealand': [174.885971,-40.900557],
				'Nicaragua': [-85.2072289999999,12.865416],
				'Niger': [8.08166600000004,17.607789],
				'Nigeria': [8.67527700000005,9.081999],
				'North Korea': [127.510092999999,40.339852],
				'Norway': [8.46894599999996,60.4720239999999],
				'Oman': [55.9232549999999,21.512583],
				'Pakistan': [69.3451159999999,30.375321],
				'Palestine': [35.233154,31.952162],
				'Panama': [-80.782127,8.537981],
				'Papua New Guinea': [143.95555,-6.31499299999999],
				'Paraguay': [-58.4438319999999,-23.442503],
				'Peru': [-75.015152,-9.189967],
				'Philippines': [121.774016999999,12.879721],
				'Poland': [19.1451359999999,51.919438],
				'Portugal': [-8.22445400000003,39.3998719999999],
				'Puerto Rico': [-66.590149,18.220833],
				'Qatar': [51.183884,25.354826],
				'Reunion': [55.536384,-21.115141],
				'Romania': [24.96676,45.943161],
				'Russia': [105.318756,61.52401],
				'Rwanda': [29.8738879999999,-1.940278],
				'Saint Lucia': [-60.9788929999999,13.909444],
				'Saint Vincent & Grenadines': [-61.1962509999999,13.253351],
				'Samoa': [-172.104629,-13.759029],
				'Sao Tome & Principe': [6.61308099999996,0.18636],
				'Saudi Arabia': [45.079162,23.885942],
				'Senegal': [-14.4523619999999,14.497401],
				'Serbia': [21.0058589999999,44.016521],
				'Sierra Leone': [-11.779889,8.460555],
				'Singapore': [103.819836,1.352083],
				'Slovakia': [19.699024,48.669026],
				'Slovenia': [14.9954629999999,46.151241],
				'Solomon Islands': [160.156194,-9.64571],
				'Somalia': [46.1996159999999,5.152149],
				'South Africa': [22.9375059999999,-30.559482],
				'South Korea': [127.766922,35.907757],
				'South Sudan': [30.1589303,7.9630921],
				'Spain': [-3.74922000000003,40.463667],
				'Sri Lanka': [80.7717969999999,7.87305399999999],
				'Sudan': [30.2176359999999,12.862807],
				'Suriname': [-56.027783,3.919305],
				'Swaziland': [31.465866,-26.522503],
				'Sweden': [18.643501,60.128161],
				'Switzerland': [8.22751199999993,46.818188],
				'Syria': [38.9968149999999,34.8020749999999],
				'Tajikistan': [71.2760929999999,38.861034],
				'Tanzania': [34.888822,-6.369028],
				'Thailand': [100.992541,15.870032],
				'Timor-Leste': [125.727538999999,-8.874217],
				'Togo': [0.824782000000027,8.619543],
				'Tonga': [-175.198242,-21.178986],
				'Trinidad & Tobago': [-61.222503,10.691803],
				'Tunisia': [9.53749900000002,33.886917],
				'Turkey': [9.53749900000002,33.886917],
				'Turkmenistan': [59.556278,38.969719],
				'Uganda': [32.290275,1.373333],
				'Ukraine': [31.1655799999999,48.379433],
				'United Arab Emirates': [53.8478179999999,23.424076],
				'United Kingdom': [-3.43597299999999,55.378051],
				'United States': [-95.712891,37.09024],
				'Uruguay': [-55.765835,-32.522779],
				'Uzbekistan': [64.585262,41.377491],
				'Vanuatu': [166.959158,-15.376706],
				'Venezuela': [-66.58973,6.42375],
				'Vietnam': [108.277199,14.058324],
				'Virgin Islands': [-64.896335,18.335765],
				'Western Sahara': [-12.8858339999999,24.215527],
				'Yemen': [48.516388,15.552727],
				'Zambia': [27.849332,-13.133897],
				'Zimbabwe': [29.1548569999999,-19.015438],
				"Cook Islands":[-159.77361,-21.20638],
				"Kiribati":[-157.35664,1.82449],
				"Columbia":[-73.96286,40.80783],
				"Dominica":[-70.63,18.93],
				"Antigua and Barbuda":[-61.84062,17.11651],
				"Cayman Islands":[-58.14677,6.80698],
				"Saint Helena":[-5.71186,-15.97038],
				"Andorra":[1.5242,42.50683],
				"Africa":[3.04263,36.80113],
				"Monaco":[7.4126,43.718],
				"Liechtenstein":[9.52439,47.139],
				"San Marino":[12.45292,43.94063],
				"Seychelles":[55.45,-4.6157],
				"South Asia":[120.97945,31.33525],
				"East Timor":[125.576,-8.55446],
				"Palau":[134.627506,7.515725393],
				"Tuvalu":[179.19877,-8.52097]
};
var geoCoorddata=[
        {name:'Angola',value:2554},
		{name:'Italy',value:74189},
		{name:'Germany',value:74377},
		{name:'Malaysia',value:74765},
		{name:'Pakistan',value:75833},
		{name:'Argentina',value:26430},
		{name:'Burkina Faso',value:76909},
		
		{name:'Austria',value:77892},
		{name:'Canada',value:79748},
		{name:'Spain',value:80196},
		{name:'Yemen',value:81031},

		{name:'Ukraine',value:89662},
		{name:'Guinea',value:11933},
		
		{name:'Venezuela',value:96465},
		{name:'United Arab Emirates',value:98457},
		{name:'Lebanon',value:98704},
		{name:'Mexico',value:101284},

		{name:'South Africa',value:127974},

		{name:'Cambodia',value:129575},
		{name:'Ivory Coast',value:132891},
		{name:'France',value:133306},
		{name:'Serbia',value:133451},
		
		{name:'DR Congo',value:136527},
		
		{name:'Kenya',value:144983},
		{name:'Singapore',value:150708},
		
		{name:'Hong Kong',value:166180},
		
		{name:'Sudan',value:187302},
		{name:'India',value:194416},
		{name:'Japan',value:198166},
		{name:'Jordan',value:212928},
		{name:'Uganda',value:214206},

		{name:'Greece',value:229298},
		{name:'Turkey',value:230694},
		
		{name:'Tanzania',value:236306},
		
		{name:'Burundi',value:272927},
		{name:'Croatia',value:303848},
		
		{name:'Saudi Arabia',value:310851},
		
		{name:'Ethiopia',value:339212},
		{name:'Russia',value:342382},
		
		{name:'Mozambique',value:563608},
		
		{name:'Afghanistan',value:1557365},
		{name:'United States',value:1850468},
		{name:'Afghanistan',value:2462482}
]

var convertData = function (data) {
				    var res = [];
				    for (var i = 0; i < data.length; i++) {
				        var geoCoord = geoCoordMap[data[i].name];
				        if (geoCoord) {
				            res.push(geoCoord.concat(data[i].value));
				        }
				    }
				    return res;
};
//console.log('get=',convertData(geoCoorddata));
function echart0(){
				myChart = echarts.init(document.getElementById('echates'));
				var option = {
				    title: {
				    	show:false,
				        text: '全球话题热力图',
				        left: 'left',
				        textStyle: {
				            fontFamily: '微软雅黑',
							fontSize: 20,
							fontStyle: 'normal',
							fontWeight: 'normal',
				    		color:'#ffffff'
				        }
				    },
				    backgroundColor: '#384355',
				    visualMap: {
				        min: 0,
				        max: 100000,
				        splitNumber: 4,
				        inRange: {
				            color: ['#f1302b','#f8fd1c','#51f40d','#74bbff'].reverse()
				        },
				        textStyle: {
				            color: '#fff'
				        }
				    },
				    geo: {
				        show:true,
				         map: 'world',
				         roam: true,
				         zoom:1.1,
				         left:'center',
				         zlevel:2,
				         label: {
				             emphasis: {
				                show: false
				             }
				         },
				         itemStyle: {
				            normal:{
				        		areaColor:'#1e2538',
				        		borderColor:'#273049'
				            },
				            emphasis:{
				        		areaColor:'#1e2538',
				        		borderColor:'#273049'
				            }
				         },
				    },
				    bmap: {
			            center: [116.46, 39.92],
			            zoom: 10,
			            roam: true,
			            mapStyle: {
			              'styleJson': [
			                {
			                  'featureType': 'water',
			                  'elementType': 'all',
			                  'stylers': {
			                    'visibility': 'off'
			                  }
			                },
			                {
			                  'featureType': 'land',
			                  'elementType': 'geometry',
			                  'stylers': {
			                    'color': '#000102'
			                  }
			                },
			                {
			                  'featureType': 'highway',
			                  'elementType': 'all',
			                  'stylers': {
			                    'visibility': 'off'
			                  }
			                },
			                {
			                  'featureType': 'arterial',
			                  'elementType': 'geometry.fill',
			                  'stylers': {
			                    'color': '#000000'
			                  }
			                },
			                {
			                  'featureType': 'arterial',
			                  'elementType': 'geometry.stroke',
			                  'stylers': {
			                    'color': '#0b3d51'
			                  }
			                },
			                {
			                  'featureType': 'local',
			                  'elementType': 'geometry',
			                  'stylers': {
			                    'color': '#000000'
			                  }
			                },
			                {
			                  'featureType': 'railway',
			                  'elementType': 'geometry.fill',
			                  'stylers': {
			                    'color': '#000000'
			                  }
			                },
			                {
			                  'featureType': 'railway',
			                  'elementType': 'geometry.stroke',
			                  'stylers': {
			                    'color': '#08304b'
			                  }
			                },
			                {
			                  'featureType': 'subway',
			                  'elementType': 'geometry',
			                  'stylers': {
			                    'lightness': -70
			                  }
			                },
			                {
			                  'featureType': 'building',
			                  'elementType': 'geometry.fill',
			                  'stylers': {
			                    'color': '#000000'
			                  }
			                },
			                {
			                  'featureType': 'all',
			                  'elementType': 'labels.text.fill',
			                  'stylers': {
			                    'color': '#857f7f'
			                  }
			                },
			                {
			                  'featureType': 'all',
			                  'elementType': 'labels.text.stroke',
			                  'stylers': {
			                    'color': '#000000'
			                  }
			                },
			                {
			                  'featureType': 'building',
			                  'elementType': 'geometry',
			                  'stylers': {
			                    'color': '#022338'
			                  }
			                },
			                {
			                  'featureType': 'green',
			                  'elementType': 'geometry',
			                  'stylers': {
			                    'color': '#062032'
			                  }
			                },
			                {
			                  'featureType': 'boundary',
			                  'elementType': 'all',
			                  'stylers': {
			                    'color': '#465b6c'
			                  }
			                },
			                {
			                  'featureType': 'manmade',
			                  'elementType': 'all',
			                  'stylers': {
			                    'color': '#022338'
			                  }
			                },
			                {
			                  'featureType': 'label',
			                  'elementType': 'all',
			                  'stylers': {
			                    'visibility': 'off'
			                  }
			                }
			              ]
			            }
			        },
				    series: [
				        {
			            	name:'map_bg',
			            	type:'map',
			            	map: 'world',
			            	roam:true,
			            	zoom:1.1,
			            	zlevel:1,
			            	label: {
					             emphasis: {show: false }
					        },
			            	itemStyle: {
					            normal:{
					        		areaColor:'transparent',
					        		borderColor:'#060f1a',
					        		borderWidth:2,
					        		shadowColor:'rgba(20, 188, 236, 1)',
					        		shadowBlur:10
					            },
					            emphasis:{
					        		areaColor:'transparent',
					        		borderColor:'#060f1a',
					        		borderWidth:2,
					        		shadowColor:'rgba(20, 188, 236, 1)',
					        		shadowBlur:10
					            }
					        },
			            	data:[]
		               },
					    {
					        name: 'AQI',
					        type: 'heatmap',
					        coordinateSystem:'bmap',
					        blurSize:'28',
					        zlevel:3,
						    data: convertData(geoCoorddata)
					    }
				    ]
				};
                myChart.setOption(option);
}

//采用echarts2(正式使用)
function echart1(){
	  require.config({
		      paths:{
		         echarts: './js/news/echarts-2.2.7/build/dist'
		      }
	  });
	  require(['echarts','echarts/chart/map'],
	  function(ec){
	        myChart  = ec.init(document.getElementById('echates'));
	        var option = {
				    //backgroundColor: 'rgba(0,0,0,0)',
				    //color: ['gold','aqua','lime'],
				    title : {
				    	show:false,
				    	text: '',
				    	x:'left',
				    	y:'top',
				    	textStyle:{
				    		fontFamily: '微软雅黑',
							fontSize: 20,
							fontStyle: 'normal',
							fontWeight: 'normal',
				    		color:'#ffffff'
				    	}
				    },
				    calculable : false,
				    tooltip : {
				    	show:true,
				    	showContent:true,
				    	enterable:true,
				        trigger: 'item',
//				        showDelay:100,
 				        hideDelay:300,
				        position: function(p){
				            return [p[0]-130,p[1]-90];
				        },
				        padding:[0,0,0,0],
				        width:207,
				        height:110,
				        //backgroundColor: 'rgba(13,43,67,0.7)',
				        //borderColor:'rgba(31,120,214,1)',
				        formatter: function(param){
				        	 if(param.seriesName!=''){ 
				        		    var name = '';
				        		    
				        		    var currentPoint = param.data;
				        		    
					    		    if(currentPoint.chineseTopic!=null && currentPoint.chineseTopic!='' && currentPoint.chineseTopic!='null'){
					    		    	name = currentPoint.chineseTopic.length>35?currentPoint.chineseTopic.substring(0,35)+'...':currentPoint.chineseTopic;
					    		    }else{
					    		    	name = currentPoint.name.length>45?currentPoint.name.substring(0,45)+'...':currentPoint.name;
					    		    }
					    		    var heatnum = currentPoint.heatnum;
					    		    if(currentPoint.heatnum==null || currentPoint.heatnum=='' || currentPoint.heatnum.indexOf('null')!=-1){
					    		    	heatnum = 0;
					    		    }   
					    		    var url = 'javascript:void(0);';
					    		    var target = '';
					    		    if(currentPoint.topicId!=null && currentPoint.topicId!="" && currentPoint.topicId!="null"){
					    		    	
					    		    }
					    		    if(currentPoint.id!=null && currentPoint.eventcode!=null && currentPoint.id!="" && currentPoint.eventcode!=""){
					    		    	url = 'news/eventsToday/index?hotId='+currentPoint.id+'&eventcode='+currentPoint.eventcode;
					    		    	target = 'target="_blank"';
					    		    }
					    		    var arr = [currentPoint.lng,currentPoint.lat];
					        		var xypoint = myChart.chart.map.getPosByGeo("world",arr);
					    		    var w = xypoint[0];
					    		    var h = xypoint[1]-50;
					    		    $('.dialogLabel').remove();
					    		    
					    		    var html='<div class="dialogLabel" style="border:1px #1f78d6 solid;width:320px;z-index:10;position:absolute;left:'+w+'px;top:'+h+'px;display:none;padding:10px;">'
					     		       
					     		        +'<div style="overflow:hidden;width:275px;"><a title="'+currentPoint.name+'" href="javascript:newInfoDialog(\''+currentPoint.globaleventid+'\')" style="color:#afff00;font-size:18px;">'+name+'</a></div>'
					     		        +'<div style="width:275px;color:#899aa9;font-size:12px;padding-top:10px;">'+currentPoint.countrychinaname+'&nbsp;&nbsp;'+currentPoint.newsdateview+'</div>'
					     		        +'<div style="width:275px;color:#ffffff;font-size:20px;font-weight:bold;padding-top:10px;">'
					     		        +'<ul><li style="float:left;"><a href="'+url+'" '+target+'><img src="images/news/tjtbg.png" width="20" height="20" style="margin-top:3px;"/></a></li>'
					     		        +'<li style="float:left;">&nbsp;&nbsp;'+heatnum+'</li>'
					     		        +'<li style="float:right;"><a href="'+url+'" '+target+'><img src="images/news/arrow.png" width="23" height="13"/></a></li></ul></div>'
					    	            +'</div>';
					    		    $(document.body).append(html);
					    		    $(".dialogLabel").fadeIn(1500);
//					    		    $(".dialogLabel").animate({
//					    		        height:'+=100px',
//					    		        width:'+=220px'
//					    		    });
				        	 	   return '';
				        	 }else{
				        	 	   return '';
				        	 }
				          },
				        textStyle:{ 
				        	color:'#ffffff'
				        }
				    },
				    legend: {
				    	show: false,
				        orient:  'vertical' ,
				        x:'left',
				        y:530,
				        data:['zy_world','zy_hotpoint'],
				        selectedMode: 'single',
				        textStyle : {color: '#fff'}
				    },
				    dataRange: {
				        orient:'vertical',
				        x:'right',
				        y:'bottom',
				        min : 0,
				        max : 10,
				        calculable : true,
				        selectedMode:false,
				        itemWidth: 10,
				        itemHeight:14,
				        padding:10,
				        color: ['#f63419','#d1ce35','#25af24','#52b9db'],
				        textStyle:{
				             color:'#fff'
				        }
				    },
				    series : [
				        {
				            name: 'zy_world',
				            type: 'map',
				            mapType: 'world',
				            roam: true,
				            hoverable: false,
				            mapLocation:{
				            	x: "center",
				            	y: "center"
				            },
				            itemStyle:{
				                normal:{
				                	color:'#050c16',
				                    borderColor:'#050c16',
				                    borderWidth:1,
				                    areaStyle:{
				                        color: '#050c16'
				                    },
				                    label:{
				                    	show:false,
				                    	textStyle:{
				                    		color:'#050c16',
				                    		fontSize:0
				                    	}
				                        
				                    }
				                },
				                emphasis:{
				                	label:true
				                }
				            },
				            data:[],
				            markLine : {
				                smooth:true,
				                symbol: ['none', 'circle'],  
				                symbolSize : 1,
				                itemStyle : {
				                    normal: {
				                        color:'#fff',
				                        borderWidth:1,
				                        borderColor:'#677fa0'
				                    },
				                    emphasis:{
				                	    label:false
				                    }
				                },
				                data : []
				            },
				            geoCoord: p_map_geo
				        }, //添加背景线
				        {
				            name: 'zy_hotpoint',
				            type: 'map',
				            mapType: 'world',
				            itemStyle:{
				            	normal:{label:{show:false}},
				            	emphasis:{label:{show:true}}
				            },
				            data:[],
				            markLine : {
				                smooth:true,
				                effect : {
				                    show: true,
				                    scaleSize: 2,
				                    period: 40,
				                    shadowBlur: 10,
				                    shadowColor: '#fff'
				                },
				                itemStyle : {
				                    normal: {
				                        borderWidth:0,
				                         lineStyle: {
				                            type: 'solid',
				                            shadowBlur: 10
				                        }
				                    }
				                },
				                data : []//data_1995
				            },
				            markPoint : {
				                symbol:'emptyCircle',
				                symbolSize : function(v){
				                    return v/1.2
				                },
				                effect : {
				                    show: true,
				                    type:'scale',
				                    loop:true,
				                    shadowBlur : 0
				                },
				                itemStyle:{
					                normal:{label:{ show:false}},
					                emphasis:{label:{show:false}}
					            },
				                data : p_map_point
				            }
				        }
				    ]
			};
			
			//console.log('00000=',p_map_geo,p_map_point)
			//console.log('aaaa=',data_geo,data_1995t)
			
	        myChart.setOption(option);
	        
	        window.setInterval(showalert, 6000);
	        function showalert()
	        {
	        	if(p_map_point.length>0){
	        		var currentPoint = p_map_point[count];
	        		var arr = [currentPoint.lng,currentPoint.lat];
	        		var xypoint = myChart.chart.map.getPosByGeo("world",arr);
	    		    var w = xypoint[0];
	    		    var h = xypoint[1]-50;
	    		    var dialogTitle = $(".dialogTitle");
	        		if(dialogTitle){
	        			$(".dialogTitle").fadeOut(1500);
	        		}
	    		    $('.dialogLabel').remove();
	    		    var name = '';
	    		    if(currentPoint.chineseTopic!=null && currentPoint.chineseTopic!='' && currentPoint.chineseTopic!='null'){
	    		    	name = currentPoint.chineseTopic.length>35?currentPoint.chineseTopic.substring(0,35)+'...':currentPoint.chineseTopic;
	    		    }else{
	    		    	name = currentPoint.name.length>45?currentPoint.name.substring(0,45)+'...':currentPoint.name;
	    		    }
	    		    var heatnum = currentPoint.heatnum;
	    		    if(currentPoint.heatnum==null || currentPoint.heatnum=='' || currentPoint.heatnum.indexOf('null')!=-1){
	    		    	heatnum = 0;
	    		    }   
	    		    var url = 'javascript:void(0);';
	    		    var target = '';
	    		    if(currentPoint.topicId!=null && currentPoint.topicId!="" && currentPoint.topicId!="null"){
	    		    	/*url = 'news/eventsToday/index?topicId='+currentPoint.topicId+'&hotId='+currentPoint.id+'&eventcode='+currentPoint.eventcode;
	    		    	target = 'target="_blank"';*/
	    		    }
	    		    if(currentPoint.id!=null && currentPoint.eventcode!=null && currentPoint.id!="" && currentPoint.eventcode!=""){
	    		    	url = 'news/eventsToday/index?hotId='+currentPoint.id+'&eventcode='+currentPoint.eventcode;
	    		    	target = 'target="_blank"';
	    		    }
	    		    
	    		    //url(./images/news/dialogbg.png)
	    		    var html='<div class="dialogLabel" style="border:1px #1f78d6 solid;z-index:10;position:absolute;left:'+w+'px;top:'+h+'px;display:none;padding:10px;">'
	     		       
	     		        +'<div style="overflow:hidden;width:275px;"><a title="'+currentPoint.name+'" href="javascript:newInfoDialog(\''+currentPoint.globaleventid+'\')" style="color:#afff00;font-size:18px;">'+name+'</a></div>'
	     		        +'<div style="width:275px;color:#899aa9;font-size:12px;padding-top:10px;">'+currentPoint.countrychinaname+'&nbsp;&nbsp;'+currentPoint.newsdateview+'</div>'
	     		        +'<div style="width:275px;color:#ffffff;font-size:20px;font-weight:bold;padding-top:10px;">'
	     		        +'<ul><li style="float:left;"><a href="'+url+'" '+target+'><img src="images/news/tjtbg.png" width="20" height="20" style="margin-top:3px;"/></a></li>'
	     		        +'<li style="float:left;">&nbsp;&nbsp;'+heatnum+'</li>'
	     		        +'<li style="float:right;"><a href="'+url+'" '+target+'><img src="images/news/arrow.png" width="23" height="13"/></a></li></ul></div>'
	    	            +'</div>';
	     	         $(document.body).append(html);
	     	         $(".dialogLabel").fadeIn(2000);
//		     	     $(".dialogLabel").animate({
//		    		        height:'+=100px',
//		    		        width:'+=220px'
//		    		 });
	     	        var len = p_map_point.length>30?30:p_map_point.length-1;
	        		if(count==len){
		        		count=0;
		        	}else{
		        		count++;
		        	}
	        	}
	        }
	        
	        window.setInterval(showTitle, 5000);
	        
	        //var point = [[15.472962,49.8174919999999],[9.50178500000004,56.26392],[42.590275,11.825138],[-70.1626509999999,18.735693],[21.7586639999999,-4.038333]];
	        var titleCount = 30;
	        function showTitle(){
	        	if(p_map_point.length>30){
	        		var currentPoint = p_map_point[titleCount];
	        		var arr = [currentPoint.lng,currentPoint.lat];
		        	var xypoint = myChart.chart.map.getPosByGeo("world",arr);
		        	var w = xypoint[0];
	    		    var h = xypoint[1]-50;
	    		    var name = '';
	    		    if(currentPoint.chineseTopic!=null && currentPoint.chineseTopic!='' && currentPoint.chineseTopic!='null'){
	    		    	name = currentPoint.chineseTopic;
	    		    }else{
	    		    	name = currentPoint.name;
	    		    }
	    		    if(name.length>30){
	    		    	name = name.substring(0,30)+"...";
	    		    }
	    		    $('.dialogTitle').remove();
		        	var html='<div class="dialogTitle" style="border-bottom:1px #1f78d6 solid;color:#ffffff;padding-left:10px;padding-bottom:5px;padding-right:10px;height:auto;width:auto;font-size:14px;text-align:left;z-index:10;position:absolute;left:'+w+'px;top:'+h+'px"><a title="'+currentPoint.name+'" href="javascript:newInfoDialog(\''+currentPoint.globaleventid+'\')" style="color:#ffffff;font-size:14px;">'+name+'</a></div>';
		        	$(document.body).append(html);
		        	if(!isOverlapped('dialogLabel','dialogTitle')){
		        		$(".dialogTitle").fadeOut(5000);
		        	}else{
		        		$('.dialogTitle').remove();
		        	}
		        	if(p_map_point.length-1==titleCount){
		        		titleCount = 30;
		        	}else{
		        		titleCount++;
		        	}
	        	}
	        }
	        
	        function isOverlapped(classOne,classTwo){
	            var objOne=$("."+classOne);
	                objTwo=$("."+classTwo);
	                if(objOne && objTwo){
	                	var offsetOne = objOne.offset(),
		                offsetTwo = objTwo.offset(),
		                topOne=offsetOne.top,
		                topTwo=offsetTwo.top,
		                leftOne=offsetOne.left,
		                leftTwo=offsetTwo.left,
		                widthOne = objOne.width(),
		                widthTwo = objTwo.width(),
		                heightOne = objOne.height(),
		                heightTwo = objTwo.height();
		                var leftTop = leftTwo > leftOne && leftTwo < leftOne+widthOne 
		                    && topTwo > topOne && topTwo < topOne+heightOne,
		                rightTop = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne 
		                    && topTwo > topOne && topTwo < topOne+heightOne,
		                leftBottom = leftTwo > leftOne && leftTwo < leftOne+widthOne 
		                    && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne,
		                rightBottom = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne 
		                    && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne;
		                return leftTop || rightTop || leftBottom || rightBottom;
	                }else{
	                	return false;
	                }
	        }
	        //触发鼠标事件
	        /*var ecConfig = require('echarts/config');
            myChart.on(ecConfig.EVENT.HOVER, function (param){
                  var selected = param;
                  
		          //write your code here
		          //console.log('selected=',selected);//打印参数
		          //hoverin();调用自定义函数
		          //document.getElementById(‘wrong-message‘).innerHTML = str;
            });*/
	  });
}
 
function echart2(){
	    var data={'keyword':'','lati':'','long':'','ztid':'','value':'','href':''}
        var myChart = echarts.init(document.getElementById('echates'));
		var option = {
		    backgroundColor: '#384355',
		    color: ['gold','aqua','lime'],
		    title : {
		    	show:false,
		        text: '全球热点分布图',
		        subtext: '',
		        left: 'left',
		        top: 'top',
		        textStyle: {
		            color: '#fff'
		        }
		    },
		    tooltip : {
		    	show:true,
		    	showContent:true,
		        trigger: 'item',
		        triggerOn:'mousemove',
		        enterable:true,
		        position: 'top',
		        padding:[10,20,10,20],
		        backgroundColor: 'rgba(45,99,161,0.7)',
		        borderColor:'rgba(45,99,161,0.7)',
		        formatter : function (params) {
		        	console.log(params.data);
		            var value = (params.value + '').split('.');
		            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')  + '.' + value[1];  
		            return '<p>'+params.seriesName + '</p><p>' + params.name + ' : ' + value+'</p>';
		        }
		    },
		    visualMap:{
		        show: true,
		        type:'continuous',
		        left:'center',
		        bottom:20,
		        orient:'horizontal',//horizontal',
		        inverse:true,
		        realtime:false,
		        min: 0,
		        max:300,
		        inRange: {
		            color: ['#52b9db','#25af24','#d1ce35','#f63419']//,
		            //symbolSize: [6, 60]
		        },
		        calculable: true,
		        itemWidth:10,
		        itemHeight:200,
		        align:'left',
		       // text:['High', 'Low'],
		        textStyle: {
		            color: '#fff'
		        }
		    },
		    geo: {
		        show:true,
		         map: 'world',
		         roam: true,
		         label: {
		             emphasis: {
		                show: false
		             }
		         },
		         itemStyle: {
		            normal:{
		        		areaColor:'#1e2538',
		        		borderColor:'#273049'
		            },
		            emphasis:{
		        		areaColor:'#1e2538',
		        		borderColor:'#273049'
		            }
		         },
		    },
		    series : [
		             {
		    	        name:'newsall',
		        	    type:'scatter',//第一层 散点图
		        	    coordinateSystem:'geo',
		        	    data: [
		        	             {name:'王宝强 离婚 娱乐', value:[116.7,39.53,100],datatime:'2016-08-07 16:20',href:'#',id:'12343'},
		        	             {name:'菏泽', value:[115.480656,35.23375,100],datatime:'2016-08-07 16:20',href:'#',id:'12343'}
		                      ],
		        	    symbolSize: function (val) {
		                      return val[2]/10;
		                },
		        	    label: {
			                normal: {
			                    formatter: '{b}',
			                    position: 'right',
			                    show: false
			                },
			                emphasis: {
			                    show: true
			                }
			            },
			            itemStyle: {
			                normal: {
			                    color: '#ddb926'
			                }
			            }
		            },
		            {
			            name: 'newstop5',
			            type: 'effectScatter',//带动画
			            symbol:'circle',
			            coordinateSystem: 'geo',
			            data: [
			                     {name:'廊坊', value:[-12.8333,45.1667,150],datatime:'2016-08-07 16:20',href:'#',id:'12343'},
		        	             {name:'菏泽', value:[-29,24,120],datatime:'2016-08-07 16:20',href:'#',id:'12343'}
			                  ],
			            effectType:'ripple',
			            legendHoverLink:false,
			            symbolSize: function (val) {
			                      return val[2] / 10;
			            },
			            showEffectOn: 'render',
			            rippleEffect: {
			                brushType: 'stroke'
			            },
			            hoverAnimation: false,
			            label: {
			                normal: {
			                    formatter: '{b}',
			                    position: 'right',
			                    show: false
			                }
			            },
			            itemStyle: {
			                normal: {
			                    color: '#1e2538',
			                    shadowBlur: 10,
			                    shadowColor: '#333'
			                }
			            },
			            markPoint:{
			            	symbol:'roundRect',
			            	symbolSize:[0,0]
			            },
			            zlevel: 1
		            }
		    ]
		};

        myChart.setOption(option);
}

