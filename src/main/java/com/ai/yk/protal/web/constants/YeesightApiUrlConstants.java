/**
 * 
 */
package com.ai.yk.protal.web.constants;

/**
 * 译见api常量<br>
 * Date: 2016年12月6日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author xuyw
 */
public class YeesightApiUrlConstants {
	private YeesightApiUrlConstants() {

	}

	// 搜索数据源列表url
	public final static String API_SEARCH_GETDATASOURCELIST = "/api/search/getDataSourceList";
	// 查询事件列表url
	public final static String API_EVENTDATA_QUERYEVENTDATALIST = "/api/eventData/queryEventDataList";
	// 查询事件详情
	public final static String API_EVENTDATA_QUERYEVENTDATAENTITYFORSRCID = "/api/eventData/queryEventDataEntityForSrcId";
	// 查询个人定制列表
	public final static String API_YEESIGHTFORNEWS_MYCUSTOMIZEDLIST = "/api/yeesightForNews/myCustomizedList";
	// 查询个人定制详情
	public final static String API_YEESIGHTFORNEWS_QUERYMYCUSTOMIZED = "/api/yeesightForNews/queryMyCustomized";
	// 查询省份
	public final static String API_CONMMON_QUERYAREALIST = "/api/common/queryAreaList";
	// 创建个人指定接口URL
	public final static String API_YEESIGHTFORNEWS_ADDMYCUSTOMIZED = "/api/yeesightForNews/addMyCustomized";
	// 修改个人指定接口URL
	public final static String API_YEESIGHTFORNEWS_UPDATEMYCUSTOMIZED = "/api/yeesightForNews/updateMyCustomized";
	// 查询新闻详情
	public final static String API_INFODETAIL_QUERYINFORMATION = "/api/infoDetail/queryInformation";
	// 查询社交详情
	public final static String API_INFODETAIL_SOCIALDETAIL = "/api/infoDetail/socialDetail";
	// 查询数据字典
	public final static String API_COMMON_QUERYDICBYTYPEANDLANGUAGEFORNEWS = "/api/common/queryDicByTypeAndLanguageForNews";
	// 查询媒体覆盖，查询舆情走势
	public final static String API_YEESIGHTFORPUBLICAFFAIRS_QUERYSHARECOUNT = "/api/ yeesightForPublicAffairs/queryShareCount";
	// 查询传播态势，事件态势
	public final static String API_EVENTDATA_EVENTMODEL = "/api/eventData/eventModel";	
	// 拼接头部信息url
	public static String getApiUrl(String ulr) {
		return "http://192.168.59.14:9300/yeesight" + ulr;
	}

}
