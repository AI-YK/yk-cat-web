 
var myChart;
var myChart_1,myChart_2,myChart_3,myChart_4;
var topicId='';
var hotId='';
 
$(function(){
	topicId=$("#topicId").val();
	hotId=$("#hotId").val();
	//初始化
	$('.container').css({'height':$('body').height()-102});
	$('.type_class').hide();
	echart0();
	//echart3();
	
	/*//左侧日期选择
	$('.date_qj li').unbind().bind('click',function(){
		$(this).addClass('on').siblings().removeClass();
	});
	//右侧分类选择
	$('.menu_right ul li').unbind().bind('click',function(){
		$(this).addClass('on').siblings().removeClass();
	});
 
	//国家 宗教选择
    $('.type_class ul li').unbind().bind('click',function(){
    	$(this).addClass('on').siblings().removeClass();
    });
    
    //选择事件地图
	$('.levitate_menu ul li').unbind().bind('click',function(){
		$(this).addClass('on').siblings().removeClass();

	});*/
 
    //宽高变换
    $(window).resize(function(){ 
         $('.container').css({'height':$('body').height()-102});
         try{myChart.resize();}catch(e){};
         try{myChart_1.resize();}catch(e){};
         try{myChart_2.resize();}catch(e){};
         try{myChart_3.resize();}catch(e){};
    });
 
});
 

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
};
var geoCoorddata=[
        {name:'Angola',value:2554},
		{name:'Italy',value:74189},
		{name:'Germany',value:74377},
		{name:'Malaysia',value:74765},
		{name:'Pakistan',value:75833},
		{name:'Argentina',value:26430},
		{name:'Burkina Faso',value:76909},
		{name:'Austria',value:77892}
]

var maps={
    'Afghanistan':'阿富汗',
    'Angola':'安哥拉',
    'Albania':'阿尔巴尼亚',
    'United Arab Emirates':'阿联酋',
    'Argentina':'阿根廷',
    'Armenia':'亚美尼亚',
    'French Southern and Antarctic Lands':'法属南半球和南极领地',
    'Australia':'澳大利亚',
    'Austria':'奥地利',
    'Azerbaijan':'阿塞拜疆',
    'Burundi':'布隆迪',
    'Belgium':'比利时',
    'Benin':'贝宁',
    'Burkina Faso':'布基纳法索',
    'Bangladesh':'孟加拉国',
    'Bulgaria':'保加利亚',
    'The Bahamas':'巴哈马',
    'Bosnia and Herzegovina':'波斯尼亚和黑塞哥维那',
    'Belarus':'白俄罗斯',
    'Belize':'伯利兹',
    'Bermuda':'百慕大',
    'Bolivia':'玻利维亚',
    'Brazil':'巴西',
    'Brunei':'文莱',
    'Bhutan':'不丹',
    'Botswana':'博茨瓦纳',
    'Central African Republic':'中非共和国',
    'Canada':'加拿大',
    'Switzerland':'瑞士',
    'Chile':'智利',
    'China':'中国',
    'Ivory Coast':'象牙海岸',
    'Cameroon':'喀麦隆',
    'Democratic Republic of the Congo':'刚果民主共和国',
    'Republic of the Congo':'刚果共和国',
    'Colombia':'哥伦比亚',
    'Costa Rica':'哥斯达黎加',
    'Cuba':'古巴',
    'Northern Cyprus':'北塞浦路斯',
    'Cyprus':'塞浦路斯',
    'Czech Republic':'捷克共和国',
    'Germany':'德国',
    'Djibouti':'吉布提',
    'Denmark':'丹麦',
    'Dominican Republic':'多明尼加共和国',
    'Algeria':'阿尔及利亚',
    'Ecuador':'厄瓜多尔',
    'Egypt':'埃及',
    'Eritrea':'厄立特里亚',
    'Spain':'西班牙',
    'Estonia':'爱沙尼亚',
    'Ethiopia':'埃塞俄比亚',
    'Finland':'芬兰',
    'Fiji':'斐',
    'Falkland Islands':'福克兰群岛',
    'France':'法国',
    'Gabon':'加蓬',
    'United Kingdom':'英国',
    'Georgia':'格鲁吉亚',
    'Ghana':'加纳',
    'Guinea':'几内亚',
    'Gambia':'冈比亚',
    'Guinea Bissau':'几内亚比绍',
    'Equatorial Guinea':'赤道几内亚',
    'Greece':'希腊',
    'Greenland':'格陵兰',
    'Guatemala':'危地马拉',
    'French Guiana':'法属圭亚那',
    'Guyana':'圭亚那',
    'Honduras':'洪都拉斯',
    'Croatia':'克罗地亚',
    'Haiti':'海地',
    'Hungary':'匈牙利',
    'Indonesia':'印尼',
    'India':'印度',
    'Ireland':'爱尔兰',
    'Iran':'伊朗',
    'Iraq':'伊拉克',
    'Iceland':'冰岛',
    'Israel':'以色列',
    'Italy':'意大利',
    'Jamaica':'牙买加',
    'Jordan':'约旦',
    'Japan':'日本',
    'Kazakhstan':'哈萨克斯坦',
    'Kenya':'肯尼亚',
    'Kyrgyzstan':'吉尔吉斯斯坦',
    'Cambodia':'柬埔寨',
    'South Korea':'韩国',
    'Kosovo':'科索沃',
    'Kuwait':'科威特',
    'Laos':'老挝',
    'Lebanon':'黎巴嫩',
    'Liberia':'利比里亚',
    'Libya':'利比亚',
    'Sri Lanka':'斯里兰卡',
    'Lesotho':'莱索托',
    'Lithuania':'立陶宛',
    'Luxembourg':'卢森堡',
    'Latvia':'拉脱维亚',
    'Morocco':'摩洛哥',
    'Moldova':'摩尔多瓦',
    'Madagascar':'马达加斯加',
    'Mexico':'墨西哥',
    'Macedonia':'马其顿',
    'Mali':'马里',
    'Myanmar':'缅甸',
    'Montenegro':'黑山',
    'Mongolia':'蒙古',
    'Mozambique':'莫桑比克',
    'Mauritania':'毛里塔尼亚',
    'Malawi':'马拉维',
    'Malaysia':'马来西亚',
    'Namibia':'纳米比亚',
    'New Caledonia':'新喀里多尼亚',
    'Niger':'尼日尔',
    'Nigeria':'尼日利亚',
    'Nicaragua':'尼加拉瓜',
    'Netherlands':'荷兰',
    'Norway':'挪威',
    'Nepal':'尼泊尔',
    'New Zealand':'新西兰',
    'Oman':'阿曼',
    'Pakistan':'巴基斯坦',
    'Panama':'巴拿马',
    'Peru':'秘鲁',
    'Philippines':'菲律宾',
    'Papua New Guinea':'巴布亚新几内亚',
    'Poland':'波兰',
    'Puerto Rico':'波多黎各',
    'North Korea':'北朝鲜',
    'Portugal':'葡萄牙',
    'Paraguay':'巴拉圭',
    'Qatar':'卡塔尔',
    'Romania':'罗马尼亚',
    'Russia':'俄罗斯',
    'Rwanda':'卢旺达',
    'Western Sahara':'西撒哈拉',
    'Saudi Arabia':'沙特阿拉伯',
    'Sudan':'苏丹',
    'South Sudan':'南苏丹',
    'Senegal':'塞内加尔',
    'Solomon Islands':'所罗门群岛',
    'Sierra Leone':'塞拉利昂',
    'El Salvador':'萨尔瓦多',
    'Somaliland':'索马里兰',
    'Somalia':'索马里',
    'Republic of Serbia':'塞尔维亚共和国',
    'Suriname':'苏里南',
    'Slovakia':'斯洛伐克',
    'Slovenia':'斯洛文尼亚',
    'Sweden':'瑞典',
    'Swaziland':'斯威士兰',
    'Syria':'叙利亚',
    'Chad':'乍得',
    'Togo':'多哥',
    'Thailand':'泰国',
    'Tajikistan':'塔吉克斯坦',
    'Turkmenistan':'土库曼斯坦',
    'East Timor':'东帝汶',
    'Trinidad and Tobago':'特里尼达和多巴哥',
    'Tunisia':'突尼斯',
    'Turkey':'土耳其',
    'United Republic of Tanzania':'坦桑尼亚联合共和国',
    'Uganda':'乌干达',
    'Ukraine':'乌克兰',
    'Uruguay':'乌拉圭',
    'United States of America':'美国',
    'Uzbekistan':'乌兹别克斯坦',
    'Venezuela':'委内瑞拉',
    'Vietnam':'越南',
    'Vanuatu':'瓦努阿图',
    'West Bank':'西岸',
    'Yemen':'也门',
    'South Africa':'南非',
    'Zambia':'赞比亚',
    'Zimbabwe':'津巴布韦'
}


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

//[[22,222,111],[]]


function ins(ms){
	for(var key in maps){
		if(ms==maps[key]){
			return key;
		}
	}
}

function kss(ms1){
	for(var key in geoCoordMap){
		if(ms1==key){
			return geoCoordMap[key];
		}
	}
}
function GetRandomNum(Min,Max)
{   
var Range = Max - Min;   
var Rand = Math.random();   
return(Min + Math.round(Rand * Range));   
}   
function echart0(){
	var data1=[];
	$.ajax({
	    url: "special/x_y",  //x_y_n
	    data: {"topicId" : $("#topicId").val(),"hotId" : $("#hotId").val(),"eventcode" : $("#eventcode").val()},
	    dataType: "json",
	    success: function(data){
	    	//alert(data);
	    	$.each(data.data.results, function(commentIndex, dv){
	    		//调用谷尼数据接口
	    		//data1.push([dv.actor2geoLong ,dv.actor2geoLat ,Math.abs(dv.avgtone)]);
	    		
	    		//调用译见接口数据
	    		data1.push([dv.randomLatitudes,dv.randomLongitudes,GetRandomNum(0.1,12)]);
	    		
	    		//data1.push([dv.randomLatitudes,dv.randomLongitudes,2]);
	    		//data1.push([dv.randomLongitudes,dv.randomLatitudes,dv.volumn*100]);
	    		
	    		//data1.push([dv.actor2geoLat , dv.actor2geoLong,Math.abs(dv.nummentions)]);
	    		//var ks=ins(dv.countryName);
	    		//var maps=kss(ks);
	    		//data1.push([maps,100000]);
	    		//data1.push({name:dv.countryNameEn,value:dv.count});
	        }); 
	    	initM(data1);//resultsQuick       {name:'Angola',value:2554}, 	
        }
	});
	/*$.ajax({
	    url: "special/x_y",
	    data: {"topicId" : $("#topicId").val(),"hotId" : $("#hotId").val()},
	    dataType: "json",
	    success: function(data){
	    	//alert(data);
	    	$.each(data.data.results, function(commentIndex, dv){
	    		//data1.push([dv.randomLatitudes,dv.randomLongitudes,2]);
	    		//data1.push([dv.randomLongitudes,dv.randomLatitudes,dv.volumn*100]);
	    		
	    		data1.push([dv.randomLatitudes,dv.randomLongitudes,GetRandomNum(0.1,12)]);
	    		//var ks=ins(dv.countryName);
	    		//var maps=kss(ks);
	    		//data1.push([maps,100000]);
	    		//data1.push({name:dv.countryNameEn,value:dv.count});
	        }); 
	    	 initM(data1);//resultsQuick       {name:'Angola',value:2554}, 	
        }
	});*/
	/*$.ajax({
	    url: "special/x_y_z",
	    data: {"topicId" : topicId,"hotId" : hotId},
	    dataType: "json",
	    success: function(data){
	    	//alert(data);
	    	$.each(data, function(commentIndex, dv){
	    		//data1.push([dv.randomLatitudes,dv.randomLongitudes,10]);
	    		//var ks=ins(dv.countryName);
	    		//var maps=kss(ks);
	    		//data1.push([maps,100000]);
	    		data1.push({name:dv.country,value:dv.countNum});
	        }); 
	    	 initM(data1);//resultsQuick       {name:'Angola',value:2554}, 	
        }
	});*/
	function initM(data1){
		myChart = echarts.init(document.getElementById('echates'));
		var option = {
		    title: {
		    	show:false,
		        text: '',
		        left: 'left',
		        textStyle: {
		            color: '#ffffff'
		        }
		    },
		    backgroundColor: 'transparent',
		    visualMap: {
		    	show:false,
		    	type:'continuous',
		    	itemWidth: 10,
                itemHeight: 180,
		        min: 0,
		        max: 30,
		        left: 20,
				bottom: 20,
		        inRange: {
		            color: ['#f1302b','#f8fd1c','#51f40d','#74bbff'].reverse(),
		        },
		        textStyle: {
		            color: '#fff'
		        }
		    },
            /*
		    geo: {
		        show:true,
		         map: 'world',
		         roam: true,
		         zoom:1.18,
		         left:'center',
		         label: {
		             emphasis: {
		                show: false
		             }
		         },
		         itemStyle: {
		            normal:{
		        		areaColor:'#060f1a',
		        		borderColor:'#060f1a'
		            },
		            emphasis:{
		        		areaColor:'#060f1a',
		        		borderColor:'#060f1a'
		            }
		         },
		    },*/
		    bmap: {
	            center: [116.46, 39.92],
	            zoom: 1.18,
	            roam: true,
	            mapStyle: {
	              'styleJson': [
				                {
				                  'featureType': 'water',
				                  'elementType': 'all',
				                  'stylers': {
				                    'color': '#031628'
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
		    series: [{
		        name: 'AQI',
		        type: 'heatmap',
		        coordinateSystem: 'bmap',
		        blurSize:'18',
			    data:convertData(data1) //convertData(geoCoorddata) data1//
		    }]
		};
        myChart.setOption(option,true);
	}
				
}

 
function echart2(){
	    var data={'keyword':'','lati':'','long':'','ztid':'','value':'','href':''}
        var myChart = echarts.init(document.getElementById('echates'));
		var option = {
		    backgroundColor: '#384355',
		    color: ['gold','aqua','lime'],
		    title : {
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
			            coordinateSystem: 'geo',
			            data: [
			                     {name:'廊坊', value:[-12.8333,45.1667,250],datatime:'2016-08-07 16:20',href:'#',id:'12343'},
		        	             {name:'菏泽', value:[-29,24,200],datatime:'2016-08-07 16:20',href:'#',id:'12343'}
			                  ],
			            effectType:'ripple',
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
			            zlevel: 1
		            }
		    ]
		};

        myChart.setOption(option);
}


function echart3(){
	//  1 ListNST数据态势 2 ListNCSD 海外地区分布        3  ListNMTSD 数据分布
	$.ajax({
	    url:"special/index",//'test1',// 
	    data:  {"topicId" : $("#topicId").val()},
	    dataType: "json",
	    success: function(data){console.log('data=',data);
	    	if(data.head && data.head.result && data.head.result=='true'){
	    		//data.data.ListNST  //数据态势
	    		//data.data.ListNCSD  //海外地区分布 
	    		//data.data.ListNMTSD  //数据分布
        //3海外地区分布 
        var ch2_xAxis=[];
        var ch2_data=[];
        $.each(data.data.ListNCSD, function(i,o){
        	if(i>5){return false;}
        	ch2_xAxis.push(o.cityName);
        	ch2_data.push(o.count);
        });
        myChart_1=echarts.init(document.getElementById('chart_one'));
        myChart_1.setOption({
                grid: {
                    x: 60,
                    y: 30,
                    x2: 10,
                    y2: 30,
                    borderWidth: 0
                },
                noDataLoadingOption: {
                    text: '无图表数据',
                    effect: 'bubble',
                    effectOption: {
                        backgroundColor:'rgba(36,50,68,.1)',
                        effect: {
                            n: 0
                        }
                    }
                },
                yAxis: {
                    show: true,
                    type: 'value',
                    splitLine:{
                    	lineStyle:{
                    		color:'#202f3e'
                    	}
                    },
                    axisLabel:{
                    	textStyle:{
                    		color:'#3386c0'
                    	}
                    }
                },
                xAxis: {
                    splitLine: {show: false},
                    type: 'category',
                    axisLabel: {
                        textStyle: {
                            color: "#3386c0", //刻度颜色
                            fontSize: 12  //刻度大小
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    data:ch2_xAxis//["新闻", "论坛", "博客", "其他", "SNS"]
                },
                series: [
                    {
                        name: '',
                        type: 'bar',
                        barWidth: 10,
                        itemStyle: {
                            normal: {
                                color: "#35b057",
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        color: '#3386c0',
                                    },
                                    formatter: '\n{c}'
                                }
                            }

                        },
                        data:ch2_data//[128158, 5552, 1294, 249, 2]
                    }
                ]
            });




        //1数据态势
        var data_time=[];
        var data_num=[];
         $.each(data.data.ListNST, function(i,o){
         	data_num.push(o.count);
            data_time.push(o.date.substr(5,2) +'/'+o.date.substr(8,2));
         })
        
        myChart_2=echarts.init(document.getElementById('chart_two'));
        myChart_2.setOption({
                    title: {
                    	show:false,
				        text: ''
				    },
				    tooltip : {
				    	show:false,
				        trigger: 'axis'
				    },
				    legend: {
				    	show:false,
				        data:['line1']//['line1','line2','line3']
				    },
				    toolbox: {
				    	show:false
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis : [
				        {
				        	axisLabel:{
				        		textStyle:{
				        	     	color:'#3386c0'
				        		}
				        	},
				            type : 'category',
				            splitLine: {
					            show: false
					        },
				            boundaryGap : false,
				            data : data_time //['2010','2011','2012','2013','2014','2015','2016']
				        }
				    ],
				    yAxis : [
				        {
				        	axisLabel:{
				        		textStyle:{
				        	     	color:'#3386c0'
				        		}
				        	},
				            type : 'value',
				            splitLine: {
					            show: false
					        }
				        }
				    ],
				    series : [
				        {
				            name:'line3',
				            type:'line',
				            stack: '',
				            lineStyle:{ normal:{ color:'#b72f61' } },
				            areaStyle: {
							            	normal: {
							            	color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0.3, color: '#b72f61'}, { offset: 1, color: 'transparent'}], false),
							            	shadowBlur:{
											    shadowColor: 'rgba(0, 0, 0, 0.5)',
											    shadowBlur: 10
											},
											shadowColor:'#000000',
							            	opacity:0.5
							            }
				            },
				            itemStyle:{
				            	 normal:{color:'#b72f61'} 
				            },
				            data:data_num//[150, 232, 201, 154, 190, 330, 410]
			            }//	,
//				        {
//				            name:'line1',
//				            type:'line',
//				            stack: '',
//				            lineStyle:{ normal:{ color:'#ee9245' } },
//				            areaStyle: {
//							            	normal: {
//							            	color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0.3, color: '#ee9245'}, { offset:  1, color: 'transparent'}], false),
//							            	shadowBlur:{
//											    shadowColor: 'rgba(0, 0, 0, 0.5)',
//											    shadowBlur: 10
//											},
//											shadowColor:'#000000',
//							            	opacity:0.5
//							            }
//				            },
//				            data:[120, 132, 101, 134, 90, 230, 210]
//				        },
//				        {
//				            name:'line2',
//				            type:'line',
//				            stack: '',
//				            lineStyle:{ normal:{ color:'#35b057' } },
//				            areaStyle: {
//							            	normal: {
//							            	color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0.3, color: '#35b057'}, { offset:  1, color: 'transparent'}], false),
//							            	shadowBlur:{
//											    shadowColor: 'rgba(0, 0, 0, 0.5)',
//											    shadowBlur: 10
//											},
//											shadowColor:'#000000',
//							            	opacity:0.5
//							            }
//				            },
//				            data:[220, 182, 191, 234, 290, 330, 310]
//				        }
				    ]
            });
        
        
        //2数据分布
        var ch3_leg=[];
        var ch3_data=[];
        $.each(data.data.ListNMTSD,function(i,o){
        	 var obj={value:o.cnt, name:o.mediaTName};
        	 ch3_leg.push(o.mediaTName);
        	 ch3_data.push(obj);
        });
        myChart_3=echarts.init(document.getElementById('chart_three'));
        myChart_3.setOption({
                    title : {
                    	show:false,
				        text: '',
				        subtext: '',
				        x:'center'
				    },
				    tooltip : {
				    	show:false,
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				    	show:true,
				    	textStyle:{
				        		color:'#3386c0'
				        },
				        x : 'center',
				        y : 'bottom',
				        data: ch3_leg //['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
				    },
				    toolbox: {
				        show : false
				    },
				    calculable : true,
				    color:['#df654d', '#ee8618','#adcf25','#35b78e','#5f8fca'],
				    series : [
				        {
				            name:'面积模式',
				            type:'pie',
				            radius : [0, 100],
				            center : ['50%', '50%'],
				            roseType : 'area',
				            data:ch3_data
//				            [{value:10, name:'rose1'},
//				                {value:5, name:'rose2'},
//				                {value:15, name:'rose3'},
//				                {value:25, name:'rose4'},
//				                {value:20, name:'rose5'},
//				                {value:35, name:'rose6'},
//				                {value:30, name:'rose7'},
//				                {value:40, name:'rose8'}]
				        }
				    ]
            });
 
       /*
        var myChart_4 = echarts.init($("#chart_four").empty().get(0)).setOption({
                grid: {
                    x: 70,
                    y: 10,
                    x2: 55,
                    y2: 10,
                    borderWidth: 0,
                    containLabel: true
                },
                noDataLoadingOption: {
                    text: '无图表数据',
                    effect: 'bubble',
                    effectOption: {
                        backgroundColor:'rgba(36,50,68,.1)',
                        effect: {
                            n: 0
                        }
                    }
                },
//                tooltip : {
//                    trigger: 'axis',
//                    axisPointer : {            
//                        type : 'shadow'        
//                    }
//                },
                xAxis: {
                    show: false,
                    splitLine: {show: false},
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: "#8B96A4", //刻度颜色
                            fontSize: 12  //刻度大小
                        }
                    }
                },
                yAxis: {
                    splitLine: {show: false},
                    type: 'category',
                    axisLabel: {
                        textStyle: {
                            color: "#8B96A4", //刻度颜色
                            fontSize: 12  //刻度大小
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    data: ["日本", "俄罗斯", "美国", "德国", "韩国"]
                },
                series: [
                    {
                        name: '',
                        type: 'bar',
                        barWidth: 10,
                        itemStyle: {normal: {
                                color: "#2e95f3",
                                label: {
                                    show: true,
                                    position: 'right',
                                    textStyle: {
                                        color: '#8B96A4'
                                    },
                                    formatter: '{c}'
                                }
                            }

                        },
                        data: [40, 75, 99, 110, 157]
                    }
                ]
            });
        */

	    	}
	    }
	});
}

//data_count();
/*function data_count(){
	//alert(topicId);
		$.ajax({
	    url:"special/count", 
	    data: {"topicId" : $("#topicId").val()},
	    dataType: "json",
	    success: function(data){console.log('count=',data);
				    $('#alldata').text(numsplit(data.data.newsAllCount));
				    $('#weekdata').text(numsplit(data.data.newsLastWeekCount));
				    $('#todaydata').text(numsplit(data.data.todayAllCount));
			        $('#time_data').text(addDays(data.data.createTimeView)+"至"+checkDate(data.data.createTimeView));
 
					if(data.data.warnCount>0){
					  	$('#warm_data a').append('<b>'+ data.data.warnCount +'</b>');
					}else{
						$('#warm_data a b').remove();
					}
	        }
	   });
}
*/
function checkDate(d){
	if(d.length>10){
		return d.substring(0,10);
	}else{
		return d;
	}
}

function addDays(date){
	var d= new Date(date);//这里日期是传递过来的，可以自己改
	d.setDate(d.getDate() - 7);//天数+10
	var nd=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();//新日期
	return nd
}

//标千分号字符串进字符串出   
function numsplit(num){
	   if(null==num || ''==num ){
		   num=0;
	   }
	   var str_num='';
	   var fushu='';
	   var decimalPart='';
	   var arry_num='';
	   var index = -3;
	   //判断是否是数字类型
	   if(typeof(num) == 'number'){
	   	   str_num=num.toString();
	   }else{
	   	   str_num=num;
	   }
	   if(str_num.indexOf(',')>-1){str_num=str_num.replace(/,/g,'')};
	   if(str_num.indexOf('-')>-1){
	   	  fushu='-';
	   	  str_num=str_num.replace(/-/g,'');
	   }
	   if(str_num.indexOf('.')>-1){
	   	     decimalPart='.'+str_num.split('.')[1];
	   	     arry_num=str_num.split('.')[0]
	   }else{
	   	     arry_num=str_num;
	   }
 
	    var array = arry_num.toString().split('');
	    while (array.length + index > 0) {
	        array.splice(index, 0, ',');
	        index -= 4;
	    }
	    return fushu + array.join('') + decimalPart;
};
