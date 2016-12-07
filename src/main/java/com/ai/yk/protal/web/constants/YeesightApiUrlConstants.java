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
	// 查询个人定制详情
	public final static String API_YEESIGHTFORNEWS_QUERYMYCUSTOMIZED = "/api/yeesightForNews/queryMyCustomized";
	// 查询个人定制详情
	public final static String API_CONMMON_QUERYAREALIST = "/api/common/queryAreaList";
	
	// 拼接头部信息url
	public static String getApiUrl(String ulr) {
		return "http://192.168.59.14:9300/yeesight" + ulr;
	}

}
