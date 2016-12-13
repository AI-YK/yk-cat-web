//var domain="http://192.168.12.54:8080/zyFrontJava";
var myChart;

var fg = "1";//默认所有分类
var fg_1 = "1";//默认为选中时间
var start_datetime = '';//开始时间
var end_datetime = '';//结束时间
var event_code = '';//事件分类表
var country_class = '';//国家种族分类
var classify = '';//新闻分类
var imgs = "images/temp/nopic.jpg";///zypublish-web/src/main/webapp/resources/images/news/nopic.jpg
var imgszx = "images/temp/nopic.jpg";///zypublish-web/src/main/webapp/resources/images/news/nopic.jpg
var flags = true;//控制第一次
var flagszt = true;//控制第一次
var timeId;

var bmap = null;//百度地图数据

//临时经纬度
var lang = "";//经度
var lat = "";//维度


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
//截取日期
function strDate(s, n) {
    var str = s;
    if (s != null || s != '') {
        if (s.length > 16) {
            str = s.substring(0, 16);
        }
    } else {
        str = "";
    }
    return str;
}

function listenAnimationEnd($el, fn) {
    $el.on('transitionend', function () {
        $el.off('transitionend');
        fn.call();
    })
}

/***
 * 格式化时间
 */
var formatDate = function (date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
};
//滚动条
var addscoll_new_note1, addscoll_new_note2;

$(function () {
    //时间轴拖拽功能 开始
    var startval = null, eleEndValue = null;
    $('.time').bind('mousedown', function () {
        startval = parseInt($(this).attr('value'));
        return false;
    });
    //时间轴拖拽功能结束
    $('.time').bind('mouseup', function () {
        eleEndValue = parseInt($(this).attr('value'));
        if ($('.time[value=' + startval + ']').hasClass('rqxz') && (!$(this).hasClass('rqxz'))) {
            if ($('.rqxz').length <= 1) {
                startval = startval;
            }
            ;
            if ($('.rqxz').length > 1) {
                if (eleEndValue >= startval) {
                    startval = $('.rqxz').eq(0).attr('value');
                } else {
                    startval = $('.rqxz').eq($('.rqxz').length - 1).attr('value');
                }
            }
            ;
        }

        if (Math.abs(startval - eleEndValue) <= 6) {
            $('.time').removeClass('rqxz');           //取消状态
            $('.timeleft').remove();
            $('.timeright').remove();
            if (startval >= eleEndValue) {    //向左
                //console.log('向左')
                for (var i = eleEndValue - 1; i < startval; i++) {
                    $('.time').eq(i).addClass('rqxz');
                    if (i == (eleEndValue - 1)) {
                        $('.time').eq(i).append('<img id="timeleft" class="timeleft" style="margin-right:3px;vertical-align:middle;" src="images/news/time_left.png">');
                    }
                    ;
                    if (i == (startval - 1)) {
                        $('.time').eq(i).append('<img id="timeright"  class="timeright" style="margin-left:3px;vertical-align:middle;" src="images/news/time_right.png">');
                    }
                    ;

                }
                ;
            } else {     //向右
                //console.log('向右')
                for (var i = startval - 1; i < eleEndValue; i++) {
                    $('.time').eq(i).addClass('rqxz');
                    if (i == (startval - 1)) {
                        $('.time').eq(i).append('<img id="timeleft" class="timeleft" style="margin-right:3px;vertical-align:middle;" src="images/news/time_left.png">')
                    }
                    ;
                    if (i == (eleEndValue - 1)) {
                        $('.time').eq(i).append('<img id="timeright"  class="timeright" style="margin-left:3px;vertical-align:middle;" src="images/news/time_right.png">')
                    }
                    ;

                }
                ;
            }
            ;
        }
        ;

        var newdate = document.getElementsByClassName('rqxz');
        start_datetime = $('.rqxz').eq(0).parents('.time1').attr('data-value') + " 00:00:00";  //开始时间
        end_datetime = $('.rqxz').eq($('.rqxz').length - 1).parents('.time1').attr('data-value') + " 23:59:59";     //结束时间
        //country_class="";
        fg_1 = "0";
        fg = "0";
        /**
         * 切换地图
         */
        //$("#echates").show();
        //$("#echart_bmap").hide();
        //隐藏国家选择
        if ($('.nav_left').hasClass('top')) {
            $('.xzzhou').hide();
            $('.xiala').attr('src', 'images/news/xiala.png');
            $('.nav_left').removeClass('top');
            $('.chengshi_xz').removeClass("content");
            $('.guojia_xz').removeClass("content");
        }

        //$(".echart_tip").remove();
        if (ympd == '0') {//全球热点
            //隐藏国家选择
            get_event_point_data();
        } else {
            getBMapData();
        }
        get_event_point_data_zixun();//资讯
        get_event_point_data_new();//右侧新闻数据
        return false;
    });


    //初始化
    $('.echarts_name').html('<h1>全球热点事件<font color="#1d78d2">分布图</font></h1>')
    $('.container').css({'height': $('body').height() - 137});
    $('.news_list .news_list_bg,.news_list .list_box').css({'height': $('body').height() - 93});
    $('.news_list .div_list').css({'height': $('body').height() - 193});

    //默认时间轴日期
    /*if(undefined !=$('.rqxz').eq(0).parent().attr('data-value')){
     start_datetime=$('.rqxz').eq(0).parent().attr('data-value')+" 00:00:00";  //开始时间
     end_datetime=$('.rqxz').eq($('.rqxz').length-1).parent().attr('data-value')+" 23:59:59";     //结束时间
     }*/

    //前后7天
    var curDate = new Date();
    end_datetime = formatDate(new Date(curDate.getTime())) + " 23:59:59";  //后一天
    start_datetime = formatDate(new Date(curDate.getTime() - (30 * 24 * 60 * 60 * 1000))) + " 00:00:00";  //前一天

    //右侧切换
    $('.tab_list li').unbind().bind('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('.div_list .con_notes').hide().eq($(this).index()).show();

        if (!$('.con_notes').eq(0).is(":hidden") && $('#mainBox_note1 .scrDiv_note').length < 1) {
            addscoll_new_note1 = new addScroll('mainBox_note1', 'newsinfo', 'scrDiv_note');
        }
        if (!$('.con_notes').eq(1).is(":hidden") && $('#mainBox_note2 .scrDiv_note').length < 1) {
            addscoll_new_note2 = new addScroll('mainBox_note2', 'newsVal', 'scrDiv_note');
        }
    });


    //宽高变换
    $(window).resize(function () {
        $('.container').css({'height': $('body').height() - 137});
        $('.news_list .news_list_bg,.news_list .list_box').css({'height': $('body').height() - 93});
        $('.news_list .div_list').css({'height': $('body').height() - 193});
        //滚动条
        if (!$('.con_notes').eq(0).is(":hidden")) {
            addscoll_new_note1 = new addScroll('mainBox_note1', 'newsinfo', 'scrDiv_note');
        } else {
            $('#mainBox_note1 .scrDiv_note').remove();
        }
        if (!$('.con_notes').eq(1).is(":hidden")) {
            addscoll_new_note2 = new addScroll('mainBox_note2', 'newsVal', 'scrDiv_note');
        } else {
            $('#mainBox_note1 .scrDiv_note').remove();
        }
        $("#echartTips").empty();//清空所有提示框

        myChart.resize();
    });

    //点击事件
    $('.bottom_btn').bind('click', function () {
        if ($('.nav_left').hasClass('top')) {
            $('.nav_left').removeClass('top');
            $('.nav_left').find('.xiala').attr('src', 'images/news/xiala.png');
            $('.xzzhou').hide();
            $('.guojia_xz').removeClass("content");
            $('.chengshi_xz').removeClass("content");
        }
        if ($(this).hasClass('open')) {
            var $navTop = $('.nav2topr'),
                $navBottom = $('.navtbot'),
                $sideList = $('.right_btn .news_list');

            $navTop.addClass('expanded');
            $navBottom.addClass('expanded');
            $sideList.show();
            $sideList.css('transform');
            $sideList.addClass('expanded');

            listenAnimationEnd($sideList,function(){
                myChart.resize();
            });

            $(this).removeClass('open').addClass('close');

            //container盒子
            $('.container').width($('body').width() - $('.news_list').width());
            //窗口变化
            $('.container').css({'height': $('body').height() - 137});
            $('.news_list .news_list_bg,.news_list .list_box').css({'height': $('body').height() - 93});
            $('.news_list .div_list').css({'height': $('body').height() - 193});
            //滚动条
            if (!$('.con_notes').eq(0).is(":hidden")) {
                addscoll_new_note1 = new addScroll('mainBox_note1', 'newsinfo', 'scrDiv_note');
            } else {
                $('#mainBox_note1 .scrDiv_note').remove();
            }
            if (!$('.con_notes').eq(1).is(":hidden")) {
                addscoll_new_note2 = new addScroll('mainBox_note2', 'newsVal', 'scrDiv_note');
            } else {
                $('#mainBox_note1 .scrDiv_note').remove();
            }
            $("#echartTips").empty();//清空所有提示框

            //列表
            $('.nav2topr').css('margin-right', '15px');
        } else {
            var $navTop = $('.nav2topr'),
                $navBottom = $('.navtbot'),
                $sideList = $('.right_btn .news_list');

            $navTop.removeClass('expanded');
            $navBottom.removeClass('expanded');
            $sideList.removeClass('expanded');

            listenAnimationEnd($sideList,function(){
                $sideList.hide();
                myChart.resize();
            });


            $(this).removeClass('close').addClass('open');

            $('.container').width('100%');
            $(".echart_tip").remove();//清空所有提示框

            /* $('#echates').width('100%');*/

            //列表
            $('.nav2topr').css('margin-right', '50px');
        }


        if (!$('.con_notes').eq(0).is(":hidden") && $('#mainBox_note1 .scrDiv_note').length < 1) {
            addscoll_new_note1 = new addScroll('mainBox_note1', 'newsinfo', 'scrDiv_note');
        }
        if (!$('.con_notes').eq(1).is(":hidden") && $('#mainBox_note2 .scrDiv_note').length < 1) {
            addscoll_new_note2 = new addScroll('mainBox_note2', 'newsVal', 'scrDiv_note');
        }


    });

    initEchart();
    init();//加载分类
    get_event_point_data();//地图数据
    get_event_point_data_zixun();//资讯
    get_event_point_data_new();//右侧新闻数据
    //全球选择鼠标离开
    $(document).on('mouseleave', '.xzzhou', function () {
        $('.guojia_xz').removeClass("content");
        $('.chengshi_xz').removeClass("content");
        $('.xzzhou').hide();
        $('.xiala').attr('src', 'images/news/xiala.png');
        $('.nav_left').removeClass('top');
    })

    //选择全球
    $(document).on('click', ".quanqiu", function () {
        ympd = "0";
        //收起全球
        $('.xzzhou').hide();
        $('.xiala').attr('src', 'images/news/xiala.png');
        $('.nav_left').removeClass('top');
        //不跳
        $(".xzzhou .xz_nr .guojia_xz").addClass("show").removeClass("close");
        $(".xzzhou .xz_nr .chengshi_xz").addClass("close").removeClass("show");
        $(".xzzhou .xzgj .gj_sz").addClass("tzbj");
        $(".xzzhou .xzcs .cs_sz").removeClass("tzbj");
        $(".xzzhou .qq_xz").removeClass("tzbj1");


        gj = "全球";
        cs = '';
        bs = 1;
        selectCity(mc, jd, wd, gj, cs, start_datetime, end_datetime, classify);

        $('.nav_left .guojia').html(gj);
    })
    //选择城市
    $(document).on('click', ".chengshi_a", function () {
        ympd = "1";
        $('.xz_bottom_left .xz_chengshi').text($(this).html());
        $(".dian").show();
        $(".xz_chengshi").show();
        $(".ssk").val("");
        jd = $(this).next().html();
        wd = $(this).next().next().html();
        //收起全球
        $('.xzzhou').hide();
        $('.xiala').attr('src', 'images/news/xiala.png');
        $('.nav_left').removeClass('top');
        //时间轴
        /*$('.timeleft').remove();
         $('.timeright').remove();
         $('.navtbot li div').parent().siblings().find('.time').removeClass('rqxz');*/

        if ($(".ssk").val() != "") {
            mc = $(".ssk").val();//搜索
            if (pd == '1') {
                gj = mc;
                $('.nav_left .guojia').html(gj);
            } else {
                gj = $('.xz_bottom_left .xz_guojia').text();
                cs = mc;
                if ($('.xz_bottom_left .xz_guojia').text() != "国家") {
                    $('.nav_left .guojia').html(gj + $('.dian').html() + mc);
                } else {
                    $('.nav_left .guojia').html($(".ssk").val());
                }
            }
            bs = 10;

        }
        else if ($('.xz_bottom_left .xz_guojia').text() != "国家" && $('.xz_bottom_left .xz_chengshi').text() == "城市") {
            mc = $('.xz_bottom_left .xz_guojia').text();
            gj = $('.xz_bottom_left .xz_guojia').text();
            cs = '';
            bs = 5;
            $('.nav_left .guojia').html(gj);
        }
        else {
            mc = $('.xz_bottom_left .xz_chengshi').text();
            gj = $('.xz_bottom_left .xz_guojia').text();
            cs = $('.xz_bottom_left .xz_chengshi').text();
            bs = 10;
            $('.nav_left .guojia').html(gj + $('.dian').html() + cs);
        }

        selectCity(mc, jd, wd, gj, cs, start_datetime, end_datetime, classify);
    })
    //搜索
    $(document).on("click", '.shousuo', function () {
        if ($('.xz_bottom_left .xz_guojia').text() != "国家" && $(this).text() == '全部') {
            $(".ssk").val('');
            gj = $('.xz_bottom_left .xz_guojia').text();
            $('.xz_bottom_left .xz_chengshi').text("城市");
            cs = '';
            bs = 5;
            $('.nav_left .guojia').html(gj);
            $('.xzzhou').hide();
            $('.xiala').attr('src', 'images/news/xiala.png');
            $('.nav_left').removeClass('top');
            $(".dian").val('');
            //alert(mc+"--"+jd+"--"+wd+"--"+bs+"--"+gj+"--"+cs);
            selectCity(mc, jd, wd, gj, cs, start_datetime, end_datetime, classify);
            $(".dian").hide();
            $('.xz_bottom_left .xz_chengshi').hide();
            $(".dian").val('');
            $('.nav_left .guojia').html(gj);
            return;
        }
        $('.guojia_xz').removeClass("content");
        $('.chengshi_xz').removeClass("content");
        //alert("-----111----"+$(".ssk").val());
        if ($(".ssk").val() != "") {
            mc = $(".ssk").val();//搜索
            if (pd == '1') {//国家框内

                var gjName = mc;
                if ("全球" != gjName) {
                    initCity(gjName);
                }
                gj = mc;
                if (isData == '1') {//存在
                    pd = '2';
                    $('.chengshi_xz').addClass("content");
                    $('.guojia_xz').removeClass("content");
                    $(".xzzhou .xz_nr .guojia_xz").removeClass("show").addClass("close");
                    $(".xzzhou .xz_nr .chengshi_xz").removeClass("close").addClass("show");
                    $(".xzzhou .xzgj .gj_sz").removeClass("tzbj");
                    $(".xzzhou .xzcs .cs_sz").addClass("tzbj");
                    $(".xzzhou .qq_xz").addClass("tzbj1");

                    $('.nav_left .guojia').html(gj);
                    $('.xz_bottom_left .xz_guojia').text(gj);
                    $(".xz_guojia").show();
                    $(".ssk").val('');
                    $(".content").mCustomScrollbar({
                        autoHideScrollbar: true,
                        theme: "light-thin"
                    });
                }

            } else {
                mc = $(".ssk").val();
                gj = $('.xz_bottom_left .xz_guojia').text();
                cs = mc;
                bs = 5;
                selectCity(mc, jd, wd, gj, cs, start_datetime, end_datetime, classify);
            }


        }
        else if ($('.xz_bottom_left .xz_guojia').text() != "国家" && $('.xz_bottom_left .xz_chengshi').text() == "城市") {
            mc = $('.xz_bottom_left .xz_guojia').text();
            gj = $('.xz_bottom_left .xz_guojia').text();
            cs = '';
            bs = 5;
            //alert(mc+"--"+jd+"--"+wd+"--"+bs+"--"+gj+"--"+cs);
            selectCity(mc, jd, wd, gj, cs, start_datetime, end_datetime, classify);

        }
        else if ($('.xz_bottom_left .xz_guojia').text() != "国家" && $('.xz_bottom_left .xz_chengshi').text() != "城市") {
            mc = $('.xz_bottom_left .xz_chengshi').text();
            gj = $('.xz_bottom_left .xz_guojia').text();
            cs = $('.xz_bottom_left .xz_chengshi').text();
            bs = 10;

            //alert(mc+"--"+jd+"--"+wd+"--"+bs+"--"+gj+"--"+cs);
            selectCity(mc, jd, wd, gj, cs, start_datetime, end_datetime, classify);
        } else {
            layer.alert("请选择国家");
            return false;
        }


    })

});


function selectCity(mc, jd, wd, gj, cs, start_datetime, end_datetime, classify) {
    if ('国家' == gj) {
        gj = "";
    }
    var ajax_url = "";
    var ajax_data;
    if (pd == '1') {
        ajax_url = 'news/searchCountryInteface';//搜索国家
        ajax_data = {
            'countrychinaname': gj
        };
    } else {
        var ajax_url = 'news/searchCityInteface';//搜索城市
        ajax_data = {
            'countrychinaname': gj,
            'city': cs
        };
    }
    if ('全球' == gj) {
        gj = "";
        stopNewsShown();
        $("#echates").show();
        $("#echart_bmap").hide();
        $('.dialogLabel').remove();
        $('.dialogTitle').remove();
        // $("#kuang").attr("src","news/bmap?mc='"+gj+"'&jd=&wd="+"&bs="+bs+"&"+"gj='"+gj+"'&"+"cs='"+cs+"'")
        window.location.href = "news/newsHeatNew";
    } else {

        $.ajax({
            type: 'post',
            url: ajax_url,
            data: ajax_data,
            async: false,
            dataType: "json",
            success: function (data) {
                if (data.data.length == 0) {
                    layer.alert("该地区不存在热点事件");
                    return false;
                } else {
                    $.each(data.data, function (i, o) {
                        if (i == 0) {
                            if (isData == '1') {//存在
                                if ($(".ssk").val() == '') {
                                    if ($('.xz_bottom_left .xz_chengshi').text() != "城市") {
                                        $('.nav_left .guojia').html(gj + $('.dian').html() + cs);
                                    } else {
                                        $('.nav_left .guojia').html(gj);
                                    }
                                } else {
                                    $('.xz_bottom_left .xz_chengshi').text($(".ssk").val());
                                    gj = $('.xz_bottom_left .xz_guojia').text();
                                    cs = $(".ssk").val();
                                    $(".dian").show();
                                    $(".xz_chengshi").show();
                                    if ($('.xz_bottom_left .xz_guojia').text() != "国家") {
                                        $('.nav_left .guojia').html(gj + $('.dian').html() + mc);
                                    } else {
                                        $('.nav_left .guojia').html($(".ssk").val());
                                    }
                                }
                                $('.xzzhou').hide();
                                $('.xiala').attr('src', 'images/news/xiala.png');
                                $('.nav_left').removeClass('top');
                                ympd = "1";//控制页面是否在新闻大数据页面      还是在百度地图页面
                                stopNewsShown();

                                lang = o.geo_long;//经度
                                lat = o.geo_lat;//维度
                                //$(".echart_tip").remove();//清空所有提示框
                                getBMapData();
                                get_event_point_data_zixun();//资讯
                                get_event_point_data_new();//右侧新闻数据
                            }
                        }
                    })
                }
            }
        });
    }

    //alert(mc+"---"+jd+"---"+wd+"---"+bs);
    /*
     if('城市'==mc){
     layer.alert("请选择国家或者城市");
     return false;
     }else if('城市'!=mc && jd!='' && wd!='' && mc!='' && bs!='' ){
     alert("1");
     stopNewsShown();
     $("#echates").hide();
     $("#echart_bmap").show();
     $('.dialogLabel').remove();
     $('.dialogTitle').remove();
     $("#kuang").attr("src","news/bmap?mc='"+mc+"'&"+"jd="+jd+"&"+"wd="+wd+"&"+"bs="+bs+"&"+"gj='"+gj+"'&"+"cs='"+cs+"'");
     }else{
     alert("2");

     }*/


}

//2.0百度地图展示
function setBMap() {
    $("#echartTips").empty();
    var option = {
        title: {
            show: false,
            text: '',
            left: 'left',
            textStyle: {
                color: '#ffffff'
            }
        },
        backgroundColor: 'transparent',
        visualMap: {
            show: false,
            type: 'continuous',
            itemWidth: 10,
            itemHeight: 180,
            min: 0,
            max: 10,
            left: 20,
            bottom: 20,
            inRange: {
                color: ['#d71345', '#ffd400', '#45b97c', '#145b7d'].reverse()//控制数值翻转
            },
            calculable: true,
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            show: true,
            showContent: true,
            enterable: true,
            trigger: 'item',
//			        showDelay:100,
            hideDelay: 1000,
            position: function (p) {
                return [p[0] - 130, p[1] - 90];
            },
            padding: [0, 0, 0, 0],
            width: 207,
            height: 110,
            //backgroundColor: 'rgba(13,43,67,0.7)',
            //borderColor:'rgba(31,120,214,1)',
            formatter: function (data) {
                $elList = [];
                $echartTips.empty();

                stopNewsShown();

                var $el = addNewsElem(data.data);


                return '';
            },
            textStyle: {
                color: '#ffffff'
            }
        },
        bmap: {
            center: [116.46, 39.92],
            zoom: 1.1,
            roam: 'move',
            mapStyle: {
                'styleJson': [
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#0d1f34",
                            "weight": "0.1"
                        }
                    },
                    {
                        "featureType": "label",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#999999",
                            "weight": "1.1"
                        }
                    },
                    {
                        "featureType": "label",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#060f1a",
                            "weight": "0.1"
                        }
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": {"visibility": "off"}
                    },
                    {
                        "featureType": "highway",
                        "elementType": "all",
                        "stylers": {
                            "color": "#262e34"
                        }
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": {
                            "color": "#262e34",
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "local",
                        "elementType": "all",
                        "stylers": {
                            "color": "#262e34"
                        }
                    },
                    {
                        "featureType": "building",
                        "elementType": "all",
                        "stylers": {"color": "#060f1a"}
                    },
                    {
                        "featureType": "manmade",
                        "elementType": "geometry",
                        "stylers": {"color": "#060f1a"}
                    },
                    {
                        "featureType": "land",
                        "elementType": "all",
                        "stylers": {"color": "#060f1a"}
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": {"visibility": "off"}
                    },
                    {
                        "featureType": "green",
                        "elementType": "all",
                        "stylers": {"color": "#0d1f34"}
                    }


                ]
            }
        },

        series: [
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                effectType: 'ripple',
                symbol: 'circle',
                data: bigData,//[[116.46, 39.92]]
                symbolSize: function (val) {
                    return val[2] * 1.2;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'fill',
                    scale: 3,
                    period: 2
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: function (param) {
                        },
                        position: 'right',
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }
        ]
    };

    //alert(jd+"------"+wd);
    if (lang != '' && lat != '') {
        option.bmap.center = [lang, lat];
    } else {
        option.bmap.center = [jd, wd];
    }
    option.bmap.zoom = bs;
    /* option.bmap.center=[-0.1929180000,51.5055190000]; */
    /* option.bmap.zoom=11; */
    //option.bmap.enableScrollWheelZoom(true);
    myChart.setOption(option, true);

    bmap = myChart.getModel().getComponent('bmap').getBMap();
    $('.ec-extension-bmap').css('background-color', 'transparent');//背景透明

    showBigDataIndex = 0;
    startBigDataShown();//
}

function initEchart() {
    myChart = echarts.init(document.getElementById('echates'));
}

function init() {
    $.ajax({
        url: "news/classify/selectAll",
        data: '',
        dataType: "json",
        success: function (data) {

            $("#type").empty();
            var s = "";
            var html = '<li class=" menu onnx" onclick="go(this,\'' + s + '\')">全部</li>';
            $("#type").append(html);
            if (data != '') {
                var num = 0;
                $.each(data.data.results, function (commentIndex, dv) {
                    var htmlV = '';
                    if (commentIndex < 10) {
                        htmlV += '<li class="menu " onclick="go(this,\'' + dv.dicName + '\')">' + dv.dicName + '</li>';
                        $("#type").append(htmlV);
                    }
                    if (commentIndex == 10) {
                        htmlV += '<li class="gengduo">更多   <span class="ico_gd"></span>';
                        htmlV += '<div class="gdxiala">';
                        htmlV += '<div class="sanjiao"></div>';
                        htmlV += '<div class="qiaol"></div>';
                        htmlV += '<ul class="liebiao" id="typechild">';
                        htmlV += '<li class="menu" onclick="go(this,\'' + dv.dicName + '\')">' + dv.dicName + '</li>';
                        htmlV += '</ul>';
                        htmlV += '</div>';
                        htmlV += '</li>';
                        $("#type").append(htmlV);
                    }
                    if (commentIndex > 10) {
                        htmlV += '<li class="menu" onclick="go(this,\'' + dv.dicName + '\')">' + dv.dicName + '</li>'
                        $("#typechild").append(htmlV);
                    }

                });

            }

        }
    });

}

//获取分类
function go(t, v) {
    classify = v;
    if ($(t).hasClass('onnx')) {
    } else {
        $('.menu').removeClass('onnx');
        $(t).addClass('onnx');
    }
    if ("" == v) {
        fg = "1";//所有
        //隐藏时间轴
        $('.navtbot li div').removeClass('rqxz');
        $('.timeleft').remove();
        $('.timeright').remove();
        var curDate = new Date();
        start_datetime = formatDate(new Date(curDate.getTime() - (30 * 24 * 60 * 60 * 1000))) + " 00:00:00";  //前一天
        end_datetime = formatDate(new Date(curDate.getTime())) + " 23:59:59";  //后一天

    } else {
        fg = "0";//选择分类
    }
    /*if($('.menu').eq(0).hasClass('onnx')){
     $('.navtbot li').removeClass('rqxz');
     }*/
    /**
     * 切换地图
     */
    //$("#echates").show();
    //$("#echart_bmap").hide();

    //控制百度地图与echart 国家共享问题
    //gj="";
    //cs="";
    // alert(end_datetime+"---"+start_datetime+"---"+classify);
    // if(''!=start_datetime){
    // 	fg='0';
    // }
    //隐藏国家选择
    if ($('.nav_left').hasClass('top')) {
        $('.xzzhou').hide();
        $('.xiala').attr('src', 'images/news/xiala.png');
        $('.nav_left').removeClass('top');
        $('.chengshi_xz').removeClass("content");
        $('.guojia_xz').removeClass("content");
    }
    //$(".echart_tip").remove();
    if (ympd == '0') {//全球热点
        //隐藏国家选择
        get_event_point_data();
    } else {
        getBMapData();
    }
    get_event_point_data_zixun();//资讯
    get_event_point_data_new();//右侧新闻数据

}
//日期选择
function pickedFunc() {
    if ($('input[name="start_time"]').val() != '' && $('input[name="end_time"]').val() != '') {
        start_datetime = $('input[name="start_time"]').val() + "00:00:00";
        end_datetime = $('input[name="end_time"]').val() + "23:59:59";
        $('.date_qj li').removeClass('on');
    }
}

//获取热力图

var p_map_geo = {};
var p_map_point = [];
var p_map_pointTop = [];
var p_map_pointNews = [];

var bigData = [];

var count = 0;
var isBig = 0;

//echart 2.0 地图数据
function get_event_point_data() {
    p_map_geo = {};
    p_map_point = [];
    p_map_pointTop = [];
    p_map_pointNews = [];
    $(".dialogLabel").hide();
    $(".dialogTitle").hide();
    var ajax_url = 'news/topicListInteface';//大框
    var ajax_dataV = {
        'beginDate': start_datetime,
        'endDate': end_datetime,
        'countrychinaname': country_class,
        'classify': classify,
        'pageSize': 10,
        'pageSizeBig': 50,//所有
        'flag': fg,
        'gj': gj,
        'cs': cs
    };
    //热点 地图数据
    $.post(ajax_url, ajax_dataV, function (result) {
        var result = JSON.parse(result);
        //console.log('接口数据---=',result.data.results);
        $('.div0 .ul1').empty();
        $.each(result.data.results, function (i, o) {

            if (o.topic && o.topic != '' && o.geoLat && o.geoLat != '' && o.geoLong && o.geoLong != '') {
                p_map_geo[o.topic] = [];
                p_map_geo[o.topic].push(o.geoLong);
                p_map_geo[o.topic].push(o.geoLat);
                var url = "javascript:layer.alert('暂无生成专题');";
                if (o.id != null && o.subjectId != null && o.id != "" && o.subjectId != "") {
                    //url = 'special/topic/news?infoId='+o.subjectId;
                    //url=domain+'/analysis/topic/index?id='+o.subjectId+'&source=4&opType=&srcId=';
                    url = domain + '/analysis/topic/index?id=' + o.subjectId + '&source=4&keyWord=' + encodeURIComponent(o.keyWord) + '&opType=&srcId=';
                    //
                }

                var data_list = {
                    'name': valid(o.topic),
                    'value': [o.geoLong,o.geoLat, o.avgtoneNum],//9,o.avgtoneNum//---A
                    'geoLat': o.geoLat,
                    'geoLong': o.geoLong,
                    'eventchinaname': valid(o.topic),//eventchinaname
                    'eventcode': o.eventcode,//---A
                    'globaleventid': o.globaleventid,//---A
                    'sourceurl': valid(o.sourceurl),//---A
                    'countryengname': valid(o.topic),
                    'countrychinaname': valid(o.countryChinaName),
                    'avgtone_num': valid(o.avgtoneNum),
                    'newsdateview': valid(o.newDate),
                    'heatnum': valid(fmoney(o.referInformationNum, 2)),
                    'lat': o.geoLat,
                    'lng': o.geoLong,
                    'source': valid(o.source),
                    'chineseTopic': valid(o.topic),
                    'chineseKeywords': valid(o.keyWord),
                    'topicId': o.subjectId,//---A
                    'id': o.id,
                    'url': url,
                    'type': "1",
                    'classifyChinese': o.classifyChinese,
                    'city': o.city

                }
                p_map_point.push(data_list);
                p_map_pointTop.push(data_list);
            }

        });
        smilData(result.data.pageSize);
    });


    function smilData(preCount) {
        var ajax_url = 'news/getNewsHeatPointListInteface';//小框
        var count = 30;
        if (fg == '1' && '1' == fg_1) {
            count = 300;
        }
        if (fg == '0' && '0' == fg_1) {
            count = 30;
        }
        if (fg == '1' && '0' == fg_1) {
            count = 300;
        }
        vresult = count - preCount;
        var ajax_data = {
            'beginDate': start_datetime,
            'endDate': end_datetime,
            'countrychinaname': country_class,
            'classify': classify,
            'pageSize': vresult,
            'fg': fg,
            'gj': gj,
            'cs': cs
        };
        //热点 地图数据
        $.post(ajax_url, ajax_data, function (data) {
            var result = JSON.parse(data);
            $('.div0 .ul1').empty();
            $.each(result.data.results, function (i, o) {
                if (o.topic && o.topic != '' && o.geoLat && o.geoLat != '' && o.geoLong && o.geoLong != '') {
                    p_map_geo[o.topic] = [];
                    p_map_geo[o.topic].push(o.geoLong);
                    p_map_geo[o.topic].push(o.geoLat);

                    var url = "javascript:;;";
                    if (o.id != null && o.globaleventId != null && o.id != "" && o.globaleventId != "") {
                        url = 'news/detail/info?globaleventid=' + o.globaleventId;
                    }
                    var data_list = {
                        'name': valid(o.topic),
                        'value': [o.geoLong,o.geoLat, o.avgtoneNum], //o.avgtone_num<30?o.avgtone_num:14,
                        'geoLat': o.geoLat,
                        'geoLong': o.geoLong,
                        'eventchinaname': valid(o.topic),
                        'eventcode': o.eventcode,
                        'globaleventid': o.globaleventId,
                        'sourceurl': valid(o.sourceUrl),
                        'countryengname': valid(o.topic),
                        'countrychinaname': valid(o.countryName),//countrychinaname
                        'avgtone_num': valid(o.avgtoneNum),
                        'newsdateview': valid(o.newsDate),
                        'heatnum': valid(fmoney(o.heatNum, 2)),
                        'lat': o.geoLat,
                        'lng': o.geoLong,
                        'source': valid(o.source),
                        'chineseTopic': valid(o.chineseTopic),
                        'chineseKeywords': valid(o.chineseKeyWords),
                        'topicId': o.topicId,
                        'id': o.id,
                        'url': url,
                        'type': "0",
                        'city': o.region
                    }
                    //console.log("data_list-----小框----",data_list);
                    p_map_point.push(data_list);
                    p_map_pointNews.push(data_list);
                }

            });
            echart1();
        });
    }
}

function formatDate(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
};


//百度地图 2.0 
function getBMapData() {
    //console.log(bs);
    var ajax_url = 'news/topicListInteface';//大框
    // var startTime=formatDate(start_datetime)+" 00:00:00";
    // var endTime=formatDate(end_datetime)+" 23:59:59";

    var ajax_dataV = {
        'beginDate': start_datetime,
        'endDate': end_datetime,
        'countrychinaname': mc,
        'classify': classify,
        'pageSize': 10,
        'pageSizeBig': 50,//所有
        'flag': fg,
        'fparam': 1,
        'gj': gj,
        'cs': cs
    };
    //热点 地图数据
    /*  $.post(ajax_url,ajax_dataV,function(result){
     $.each(result.data,function(i,o){
     bigData.push([o.geoLong,o.geoLat]);
     });

     initMap();
     },"json");   */

    bigData = [];
    //热点 地图数据
    $.post(ajax_url, ajax_dataV, function (result) {
        var result = JSON.parse(result);
        //console.log('result=',result);

        $('.div0 .ul1').empty();
        $.each(result.data.results, function (i, o) {

            if (o.topic && o.topic != '' && o.geoLat && o.geoLat != '' && o.geoLong && o.geoLong != '') {
                var url = "javascript:layer.alert('暂无生成专题');";
                if (o.id != null && o.subjectId != null && o.id != "" && o.subjectId != "") {
                    //url = 'special/topic/news?infoId='+o.subjectId;
                    //url=domain+'/analysis/topic/index?id='+o.subjectId+'&source=4&opType=&srcId=';
                    //
                    url = domain + '/analysis/topic/index?id=' + o.subjectId + '&source=4&keyWord=' + encodeURIComponent(o.keyWord) + '&opType=&srcId=';
                }
                bigData.push({
                    name: valid(o.topic),
                    value: [o.geoLong, o.geoLat, o.avgtoneNum],
                    geoLat: o.geoLat,
                    geoLong: o.geoLong,
                    eventchinaname: valid(o.topic),
                    eventcode: o.eventcode,
                    globaleventid: o.globaleventid,
                    sourceurl: valid(o.sourceurl),
                    countryengname: valid(o.topic),
                    countrychinaname: valid(o.countryChinaName),
                    avgtone_num: valid(o.avgtoneNum),
                    newsdateview: valid(o.newDate),
                    heatnum: valid(fmoney(o.referInformationNum, 2)),
                    lat: o.geoLat,
                    lng: o.geoLong,
                    source: valid(o.source),
                    chineseTopic: valid(o.topic),
                    chineseKeywords: valid(o.keyWord),
                    topicId: o.subjectId,
                    id: o.id,
                    url: url,
                    type: "1",
                    classifyChinese: o.classifyChinese,
                    city: o.city

                });
            }
        });
        smilBMapData(result.data.pageSize)
    });


    function smilBMapData(preCount) {
        var ajax_url = 'news/getNewsHeatPointListInteface';//小框
        /*if(''==mc){//控制显示个数，是否全球
         count=300;
         }else{
         count=30;
         }*/

        var count = 30;
        if (fg == '1' && '1' == fg_1) {
            count = 300;
        }
        if (fg == '0' && '0' == fg_1) {
            count = 30;
        }
        if (fg == '1' && '0' == fg_1) {
            count = 300;
        }
        vresult = count - preCount;

        var vresult = count - preCount;
        var ajax_data = {
            'beginDate': start_datetime,
            'endDate': end_datetime,
            'countrychinaname': mc,
            'classify': classify,
            'pageSize': vresult,
            'fg': fg_1,
            'gj': gj,
            'cs': cs
        };
        //热点 地图数据
        $.post(ajax_url, ajax_data, function (result) {
            var result = JSON.parse(result);
            //console.log('result=',result);
            $('.div0 .ul1').empty();
            $.each(result.data.results, function (i, o) {
                if (o.topic && o.topic != '' && o.geoLat && o.geoLat != '' && o.geoLong && o.geoLong != '') {
                    var url = "javascript:;;";//javascript:layer.alert('暂无生成专题');
                    if (o.id != null && o.globaleventId != null && o.id != "" && o.globaleventId != "") {
                        url = 'news/detail/info?globaleventid=' + o.globaleventId;
                    }
                    bigData.push({
                        name: valid(o.topic),
                        value: [o.geoLong, o.geoLat, o.avgtoneNum],
                        geoLat: o.geoLat,
                        geoLong: o.geoLong,
                        eventchinaname: valid(o.topic),
                        eventcode: o.eventcode,
                        globaleventid: o.globaleventId,
                        sourceurl: valid(o.sourceUrl),
                        countryengname: valid(o.topic),
                        countrychinaname: valid(o.countryName),
                        avgtone_num: valid(o.avgtoneNum),
                        newsdateview: valid(o.newsDate),
                        heatnum: valid(fmoney(o.heatNum, 2)),
                        lat: o.geoLat,
                        lng: o.geoLong,
                        source: valid(o.source),
                        chineseTopic: valid(o.chineseTopic),
                        chineseKeywords: valid(o.chineseKeyWords),
                        topicId: o.topicId,
                        id: o.id,
                        url: url,
                        type: "0",
                        city: o.region
                    });

                }

            });
            setBMap();
        });
    }
}

function valid(v) {
    if (v == '' || v == null || v == undefined || v == "undefined" || v == NaN || v == "NaN") {
        return "";
    } else {
        return v;
    }
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

/**
 * 新闻和资讯的index,为将要循环的index
 * @type {number}
 */
var showBigDataIndex = 0;

/**
 * 新闻轮循的index,为将要循环的index
 * @type {number}
 */
var showNewsIndex = 0;

/**
 * 资讯轮循的index,为将要循环的index
 * @type {number}
 */
var showTopicIndex = 0;

/**
 * 每次显示的数量，分别为资讯和新闻的数量
 * @type {number}
 */
var SHOW_NEWS_NUM = 2;

/**
 * echartTips内的提元素
 * @type {Array}
 */
var $elList = [];

/**
 * echart容器
 * @type {*|jQuery|HTMLElement}
 */
var $echart = $('#echates');

/**
 * echart弹出新闻提示的容器
 * @type {*|jQuery|HTMLElement}
 */
var $echartTips = $('#echartTips');

/**
 * 提示渐隐时间
 * @type {number}
 */
var TIP_SETTIMEOUT_TIME = 6000;

/**
 * 添加提示元素，若与其他提示元素重叠，则返回false
 * @param news对象
 * @returns {boolean}
 */
function addNewsElem(news) {
    var $el;

    if (news.type == '0') {//小框
        $el = getNewsHtml(news);
    } else {
        $el = getTopicHtml(news);
    }

    var divideLeft = $echart.width() / 2,
        divideTop = $echart.height() / 2;

    var left, top;
    if (ympd == '0') {//全球热点
        var xypoint = myChart.convertToPixel("geo", [news.geoLong, news.geoLat]);
        left = xypoint[0];
        top = xypoint[1];
    } else {
        var xypoint = bmap.pointToPixel({lng: news.geoLong, lat: news.geoLat});
        left = xypoint.x;
        top = xypoint.y;
    }

    $echartTips.append($el);

    $el.css({left: left, top: top});

    if (left > divideLeft) {
        $el.addClass('left');
    } else {
        $el.addClass('right');
    }

    if (top > divideTop) {
        $el.addClass('top');
    } else {
        $el.addClass('bottom');
    }

    var $content = $el.children('.echart_content'),
        contentOffset = $content.offset();

    var offset = {
        left: contentOffset.left,
        top: contentOffset.top,
        height: $content.outerHeight(),
        width: $content.outerWidth()
    };

    if (isElOverlap(offset)) {
        $el.remove();
    } else {
        $el.data('offset', offset);

        $elList.push($el);

        $el.hover(function () {
            fadeInElList([$el]);

            stopNewsShown();

        }, function () {
            fadeOutElList();

            if (ympd == '0') {//全球热点
                startNewsShown();
            } else {
                startBigDataShown();
            }
        });

        return $el;
    }

    return null;
}
/**
 * 渐隐 elList
 */
function fadeOutElList() {
    $.each($elList, function (i, $el) {
        $el.removeClass('fade_in').addClass('fade_out');
        listenAnimationEnd($el, function () {
            $el.remove();
        });
    });

    $elList = [];
}

/**
 * 渐入 elList
 */
function fadeInElList($list) {
    $.each($list, function (i, $el) {
        $el.off('transitionend');
        $el.removeClass('fade_out').addClass('fade_in');
    });

    $elList = $list;
}

/**
 * 每格一定时间显示资讯及新闻
 */
function showNews() {
    if (document.hidden) {
        return;
    }

    $elList = [];

    showNewsIndex = addEl(p_map_pointNews, showNewsIndex);
    showTopicIndex = addEl(p_map_pointTop, showTopicIndex);

    fadeOutElList();

    function addEl(list, index) {
        if (list.length == 0) {
            return;
        }

        for (var num = 0; num < SHOW_NEWS_NUM; num++) {
            var $el = addNewsElem(list[index]);
            if ($el) {
                if ((++index) >= list.length) {
                    return 0;
                }
            } else {
                return index;
            }
        }

        return index;
    }
}

/**
 * 每格一定时间显示资讯及新闻
 */
function showBigData() {
    if (document.hidden) {
        return;
    }

    $elList = [];

    showBigDataIndex = addEl(bigData, showBigDataIndex);

    fadeOutElList();

    function addEl(list, index) {
        if (list.length == 0) {
            return;
        }

        for (var num = 0; num < SHOW_NEWS_NUM; num++) {
            var $el = addNewsElem(list[index]);

            if ($el) {
                if ((++index) >= list.length) {
                    return 0;
                }
            } else {
                return index;
            }
        }

        return index;
    }
}

/**
 * 判断offset是否与$elList的元素重叠
 * @param offset
 * @returns {boolean}
 */
function isElOverlap(offset) {
    var result = false;
    $.each($elList, function (i, $el) {
        if (isOverlap(offset, $el.data('offset'))) {
            result = true;
            return false;
        }
    });
    return result;
}

/**
 * 根据2个offset判断是否重叠
 * @param offset1
 * @param offset2
 * @returns {boolean}
 */
function isOverlap(offset1, offset2) {
    var isXSplit = (offset2.left > offset1.left) ? (offset2.left > (offset1.left + offset1.width)) :
        ((offset2.left + offset2.width) < offset1.left);

    var isYSplit = (offset2.top > offset1.top) ? (offset2.top > (offset1.top + offset1.height)) :
        ((offset2.top + offset2.height) < offset1.top);
    return !(isXSplit || isYSplit);
}

/**
 * 生成专题元素
 * @param currentPoint
 * @returns {*|jQuery|HTMLElement}
 */
function getTopicHtml(currentPoint) {
    var name = currentPoint.chineseTopic || currentPoint.name;

    var heatnum = currentPoint.heatnum;
    if (currentPoint.heatnum == null || currentPoint.heatnum == '' || currentPoint.heatnum.indexOf('null') != -1) {
        heatnum = 0;
    }
    var city = "";
    if (currentPoint.city != '') {
        city = "." + currentPoint.city
    }

    return $('<div class="echart_tip"><div class="dialog_label echart_content">' +
    '<a title="' + currentPoint.name + '" href="' + currentPoint.url + '" target="_blank" >' + '<span style="color:#c82139;font-size:18px;">' + '【专题】' + '</span>' + name + '</a>' +
    '<div style="width:275px;color:#98bad8;font-size:12px;padding-top:10px;">' + currentPoint.classifyChinese + '&nbsp;&nbsp;' + currentPoint.countrychinaname + '' + city + '&nbsp;&nbsp;' + strDate(currentPoint.newsdateview) + '</div>' +
    '<div style="width:275px;color:#ffffff;font-size:20px;font-weight:bold;padding-top:10px;">' +
    '<ul><li style="float:left;"><a href="' + currentPoint.url + '" target="_blank"><img src="images/news/tjtbg_1.png" width="20" height="20" style="vertical-align: middle;"/></a></li>' +
    '<li style="float:left;font-weight:bold;font-size:24px;color:#98bad8;font-family:arial;">&nbsp;&nbsp;' + heatnum + '</li>' +
    '<li style="float:right;"><a href="' + currentPoint.url + '" target="_blank"><img src="images/news/arrow.png" width="23" height="13"/></a></li>' +
    '</ul>' +
    '</div>' +
    '</div>' +
    '<div class="echart_tip_arrow"><div class="echart_tip_line"></div><div class="echart_tip_head"></div></div></div>');
}

/**
 * 生成新闻元素
 * @param currentPoint
 * @returns {*|jQuery|HTMLElement}
 */
function getNewsHtml(currentPoint) {
    var name = currentPoint.chineseTopic || currentPoint.name;

    var city = "";
    if (currentPoint.city != '' && currentPoint.city != null) {
        city = currentPoint.city;
    } else {
        city = currentPoint.countrychinaname;
    }

    return $('<div class="echart_tip"><div class="dialog_title echart_content"><a title="' + currentPoint.name + '"  href="' + currentPoint.url + '" target="_blank" ><span style="color:#c82139;font-size:14px;">' +
    '【资讯】' + '</span>' + name + '</a>&nbsp;&nbsp;' + city + '&nbsp;&nbsp;' + strDate(currentPoint.newsdateview) + '</div>' +
    '<div class="echart_tip_arrow"><div class="echart_tip_line"></div><div class="echart_tip_head"></div></div></div>');
}

/**
 * 初始化资讯及新闻轮循
 */
function startNewsShown() {
    if (timeId == null) {
        timeId = setInterval(showNews, TIP_SETTIMEOUT_TIME);
    }
}

/**
 * 初始化资讯及新闻轮循
 */
function startBigDataShown() {
    if (timeId == null) {
        timeId = setInterval(showBigData, TIP_SETTIMEOUT_TIME);
    }
}


/**
 * 初始化资讯及新闻轮循
 */
function stopNewsShown() {
    clearInterval(timeId);
    timeId = null;
}

//采用echarts2(正式使用)
function echart1() {
    $("#echartTips").empty();

    stopNewsShown();

    var option = {
        geo: {
            map: 'world',
            label: {
                emphasis: {
                    show: false,
                    textStyle:{
                        color:'green'
                    }
                }
            },
            nameMap:{
                'China' : '中国'
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#060f1a',
                    borderColor: '#060f1a'
                },
                emphasis: null/*{
                 areaColor: 'yellow'
                 }*/
            }
        },
        visualMap: {
            show: false,
            type: 'continuous',
            itemWidth: 10,
            itemHeight: 180,
            min: 0,
            max: 10,
            left: 20,
            bottom: 20,
            inRange: {
                color: ['#d71345', '#ffd400', '#45b97c', '#145b7d'].reverse()//控制数值翻转
            },
            calculable: true,
            textStyle: {
                color: '#fff'
            }
        },
        title: {
            show: false
        },
        tooltip: {
            show: true,
            showContent: true,
            enterable: true,
            trigger: 'item',
            hideDelay: 1000,
            position: function (p) {
                return [p[0] - 130, p[1] - 90];
            },
            padding: [0, 0, 0, 0],
            width: 207,
            height: 110,
            formatter: function (param) {
                var news = param.data;

                $elList = [];
                $echartTips.empty();

                stopNewsShown();

                var $el = addNewsElem(news);

                return '';
            },
            textStyle: {
                color: '#ffffff'
            }
        },
        calculable: false,
        series: [
            {
                name: 'worldEchart',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                effectType: 'ripple',
                symbol: 'circle',
                data: p_map_point,
                symbolSize: function (val) {
                    return val[2] * 1.2;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'fill',
                    scale: 3,
                    period: 2
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: function (param) {
                        },
                        position: 'right',
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }
        ]
    };

    myChart.setOption(option, true);

    showNewsIndex = 0;
    showTopicIndex = 0;
    startNewsShown();
}


//判断2个div是否有交集,判断时以obj1作为固定的obj2作为移动的
function check(obj1, obj2) {
    //以obj1作为固定的参照物，使用时注意div是否有top与left，如果没有设置的话会是空值
    //obj2在obj1的上面 obj2.top+obj2.height<obj1.top
    //obj2在obj1的下面 obj2.top>obj1.top+obj1.height
    //obj2在obj1的左面 obj2.left+obj2.width<obj1.left
    //obj2在obj1的右面 obj2.left>obj1.left+obj1.width
    var obj1top = parseInt($(obj1).css("top"));
    //alert(obj1top);
    var obj1left = parseInt($(obj1).css("left"));
    var obj1width = parseInt($(obj1).width());
    var obj1height = parseInt($(obj1).height());
    var obj2top = parseInt($(obj2).css("top"));
    var obj2left = parseInt($(obj2).css("left"));
    var obj2width = parseInt($(obj2).width());
    var obj2height = parseInt($(obj2).height());
    //alert(obj1top+"----"+obj2top);
    if ((obj2top + obj2height < obj1top) || (obj2top > obj1top + obj1height) || (obj2left + obj2width < obj1left) || (obj2left > obj1left + obj1width)) {
        return true;
    }
    else {
        return false;
    }
}

////////////////////////////////////////////////////////////////////////////////右侧 的专题和资讯数据展示 
/***
 * 判断是否为空
 * @param v
 * @returns
 */
function isNull(v) {
    if ("" == v || null == v || "null" == v) {
        return "";
    } else {
        return v;
    }
}

var worldNameMap = {
    'Afghanistan': '阿富汗',
    'Angola': '安哥拉',
    'Albania': '阿尔巴尼亚',
    'United Arab Emirates': '阿联酋',
    'Argentina': '阿根廷',
    'Armenia': '亚美尼亚',
    'French Southern and Antarctic Lands': '法属南半球和南极领地',
    'Australia': '澳大利亚',
    'Austria': '奥地利',
    'Azerbaijan': '阿塞拜疆',
    'Burundi': '布隆迪',
    'Belgium': '比利时',
    'Benin': '贝宁',
    'Burkina Faso': '布基纳法索',
    'Bangladesh': '孟加拉国',
    'Bulgaria': '保加利亚',
    'The Bahamas': '巴哈马',
    'Bosnia and Herzegovina': '波斯尼亚和黑塞哥维那',
    'Belarus': '白俄罗斯',
    'Belize': '伯利兹',
    'Bermuda': '百慕大',
    'Bolivia': '玻利维亚',
    'Brazil': '巴西',
    'Brunei': '文莱',
    'Bhutan': '不丹',
    'Botswana': '博茨瓦纳',
    'Central African Republic': '中非共和国',
    'Canada': '加拿大',
    'Switzerland': '瑞士',
    'Chile': '智利',
    'China': '中国',
    'Ivory Coast': '象牙海岸',
    'Cameroon': '喀麦隆',
    'Democratic Republic of the Congo': '刚果民主共和国',
    'Republic of the Congo': '刚果共和国',
    'Colombia': '哥伦比亚',
    'Costa Rica': '哥斯达黎加',
    'Cuba': '古巴',
    'Northern Cyprus': '北塞浦路斯',
    'Cyprus': '塞浦路斯',
    'Czech Republic': '捷克共和国',
    'Germany': '德国',
    'Djibouti': '吉布提',
    'Denmark': '丹麦',
    'Dominican Republic': '多明尼加共和国',
    'Algeria': '阿尔及利亚',
    'Ecuador': '厄瓜多尔',
    'Egypt': '埃及',
    'Eritrea': '厄立特里亚',
    'Spain': '西班牙',
    'Estonia': '爱沙尼亚',
    'Ethiopia': '埃塞俄比亚',
    'Finland': '芬兰',
    'Fiji': '斐',
    'Falkland Islands': '福克兰群岛',
    'France': '法国',
    'Gabon': '加蓬',
    'United Kingdom': '英国',
    'Georgia': '格鲁吉亚',
    'Ghana': '加纳',
    'Guinea': '几内亚',
    'Gambia': '冈比亚',
    'Guinea Bissau': '几内亚比绍',
    'Equatorial Guinea': '赤道几内亚',
    'Greece': '希腊',
    'Greenland': '格陵兰',
    'Guatemala': '危地马拉',
    'French Guiana': '法属圭亚那',
    'Guyana': '圭亚那',
    'Honduras': '洪都拉斯',
    'Croatia': '克罗地亚',
    'Haiti': '海地',
    'Hungary': '匈牙利',
    'Indonesia': '印尼',
    'India': '印度',
    'Ireland': '爱尔兰',
    'Iran': '伊朗',
    'Iraq': '伊拉克',
    'Iceland': '冰岛',
    'Israel': '以色列',
    'Italy': '意大利',
    'Jamaica': '牙买加',
    'Jordan': '约旦',
    'Japan': '日本',
    'Kazakhstan': '哈萨克斯坦',
    'Kenya': '肯尼亚',
    'Kyrgyzstan': '吉尔吉斯斯坦',
    'Cambodia': '柬埔寨',
    'South Korea': '韩国',
    'Kosovo': '科索沃',
    'Kuwait': '科威特',
    'Laos': '老挝',
    'Lebanon': '黎巴嫩',
    'Liberia': '利比里亚',
    'Libya': '利比亚',
    'Sri Lanka': '斯里兰卡',
    'Lesotho': '莱索托',
    'Lithuania': '立陶宛',
    'Luxembourg': '卢森堡',
    'Latvia': '拉脱维亚',
    'Morocco': '摩洛哥',
    'Moldova': '摩尔多瓦',
    'Madagascar': '马达加斯加',
    'Mexico': '墨西哥',
    'Macedonia': '马其顿',
    'Mali': '马里',
    'Myanmar': '缅甸',
    'Montenegro': '黑山',
    'Mongolia': '蒙古',
    'Mozambique': '莫桑比克',
    'Mauritania': '毛里塔尼亚',
    'Malawi': '马拉维',
    'Malaysia': '马来西亚',
    'Namibia': '纳米比亚',
    'New Caledonia': '新喀里多尼亚',
    'Niger': '尼日尔',
    'Nigeria': '尼日利亚',
    'Nicaragua': '尼加拉瓜',
    'Netherlands': '荷兰',
    'Norway': '挪威',
    'Nepal': '尼泊尔',
    'New Zealand': '新西兰',
    'Oman': '阿曼',
    'Pakistan': '巴基斯坦',
    'Panama': '巴拿马',
    'Peru': '秘鲁',
    'Philippines': '菲律宾',
    'Papua New Guinea': '巴布亚新几内亚',
    'Poland': '波兰',
    'Puerto Rico': '波多黎各',
    'North Korea': '北朝鲜',
    'Portugal': '葡萄牙',
    'Paraguay': '巴拉圭',
    'Qatar': '卡塔尔',
    'Romania': '罗马尼亚',
    'Russia': '俄罗斯',
    'Rwanda': '卢旺达',
    'Western Sahara': '西撒哈拉',
    'Saudi Arabia': '沙特阿拉伯',
    'Sudan': '苏丹',
    'South Sudan': '南苏丹',
    'Senegal': '塞内加尔',
    'Solomon Islands': '所罗门群岛',
    'Sierra Leone': '塞拉利昂',
    'El Salvador': '萨尔瓦多',
    'Somaliland': '索马里兰',
    'Somalia': '索马里',
    'Republic of Serbia': '塞尔维亚共和国',
    'Suriname': '苏里南',
    'Slovakia': '斯洛伐克',
    'Slovenia': '斯洛文尼亚',
    'Sweden': '瑞典',
    'Swaziland': '斯威士兰',
    'Syria': '叙利亚',
    'Chad': '乍得',
    'Togo': '多哥',
    'Thailand': '泰国',
    'Tajikistan': '塔吉克斯坦',
    'Turkmenistan': '土库曼斯坦',
    'East Timor': '东帝汶',
    'Trinidad and Tobago': '特里尼达和多巴哥',
    'Tunisia': '突尼斯',
    'Turkey': '土耳其',
    'United Republic of Tanzania': '坦桑尼亚联合共和国',
    'Uganda': '乌干达',
    'Ukraine': '乌克兰',
    'Uruguay': '乌拉圭',
    'United States of America': '美国',
    'Uzbekistan': '乌兹别克斯坦',
    'Venezuela': '委内瑞拉',
    'Vietnam': '越南',
    'Vanuatu': '瓦努阿图',
    'West Bank': '西岸',
    'Yemen': '也门',
    'South Africa': '南非',
    'Zambia': '赞比亚',
    'Zimbabwe': '津巴布韦'
};