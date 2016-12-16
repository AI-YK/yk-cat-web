/**
 * 
 */
package com.ai.yk.protal.web.constants;

import com.ai.yk.protal.web.utils.ConfigUtil;

/**
 * 译见api常量<br>
 * Date: 2016年12月6日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author xuyw
 */
public class YeesightApiConstants {
	private YeesightApiConstants() {

	}
	//接口请求基础url
    private static String remoteBaseUrl="";
    //专题url
    public  static String subjectAnalysisUrl="";
    static{
    	remoteBaseUrl = ConfigUtil.getProperty("remoteBaseUrl");
    	subjectAnalysisUrl = ConfigUtil.getProperty("subjectAnalysisUrl");
    }
    //系统来源
    public static final String API_SOURCE_SYSTEM="yeesightPublicSentiment";
    //中国code
    public static final String API_CHINA_CODE="as_100000";
    
    
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
	public final static String API_YEESIGHTFORPUBLICAFFAIRS_QUICKANALYZE = "/api/yeesightForPublicAffairs/quickAnalyze";
	// 查询传播态势，事件态势
	public final static String API_EVENTDATA_EVENTMODEL = "/api/eventData/eventModel";
	// 公共安全事件检索接口
	public final static String API_YEESIGHTFORPUBLICAFFAIRS_SEARCHPUBLICSAFETY = "/api/yeesightForPublicAffairs/searchPublicSafety";	
	// 查询定制专题列表
	public final static String API_MYTOPICS_QUERYMYTOPICSLIST = "/api/myTopics/queryMyTopicsList";
	// 我的采编列表接口
	public final static String API_MYINFORMATION_QUERYMYINFORMATION = "/api/myInformation/queryMyInformation";
	// 获取资讯语言接口
	public final static String API_COMMON_QUERYINFOLANGUAGE = "/api/common/queryInfoLanguage";
	// 获取资讯语言接口
	public final static String API_COMMON_QUERYAREAOREO = "/api/common/queryAreaOrEconomicOrganizations";
	//查询我的采编详情接口
	public final static String API_MYINFORMATION_QUERYMYINFORMATIONDETAILS = "/api/myInformation/queryMyInformationDetails";
	//增加分享接口
	public final static String API_MYINFORMATION_ADDSHAREMYINFORMATION = "/api/myInformation/addshareMyInformation";
	//查询分享收藏次数
	public final static String API_MYINFORMATION_QUERYSHARECOUNT = "/api/myInformation/queryShareCount";
	//查询是否收藏
	public final static String API_MYCOLLECTION_ISCOLLECTION = "/api/myCollection/isCollection";
	//删除收藏
	public final static String API_MYCOLLECTION_DELETEMYCOLLECTION = "/api/myCollection/deleteMyCollection";
	//添加收藏
	public final static String API_MYCOLLECTION_COLLECTIONMYINFORMATION = "/api/myInformation/collectionMyInformation";
	// 拼接头部信息url
	public static String getApiUrl(String url) {
		return new StringBuilder(remoteBaseUrl).append(url).toString();
	}

}
