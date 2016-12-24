package com.ai.yk.protal.web.controller.news;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.base.vo.PageInfo;
import com.ai.opt.sdk.util.StringUtil;
import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyMessage;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyNewsVo;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyResponse;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetySocialVo;
import com.ai.yk.protal.web.service.search.SearchService;
import com.alibaba.fastjson.JSON;

@Controller
@RequestMapping("/news")
public class NewsHotAndSocialHotController {
	
	private static final Logger log = LoggerFactory.getLogger(NewsHotAndSocialHotController.class);
/**
 * 新闻热点和社交热点
 */
	@Autowired
	SearchService searchService;
	
	@RequestMapping("/getHotInfoList")
	@ResponseBody
	public ResponseData<SearchPublicSafetyResponse> getHotInfoList(
				/**媒体类型 新闻热点：news，社交热点：social **/
			 	@RequestParam(value="mediaType",defaultValue="") String mediaType,
			 	/**情感ID(1正面，0：中性 -1负面)**/
			    @RequestParam(value="sentimentId",defaultValue="") String sentimentId,
			    /**省份**/
			    @RequestParam(value="provincecityCode",defaultValue="") String provincecityCode,
			    /**城市**/
			    @RequestParam(value="cityCode",defaultValue="") String cityCode,
			    /**舆情分类类型（多个用逗号隔开）**/
			    @RequestParam(value="categoryId",defaultValue="") String categoryId,
			    /**数据源类型微信微博新闻等媒体**/
			    @RequestParam(value="mediaList",defaultValue="") String mediaList,
			    /**媒体级别id**/
			    @RequestParam(value="mediaLevel",defaultValue="") String mediaLevel,
			    /**指定排序字段**/
			    @RequestParam(value="fieldName",defaultValue="") String fieldName,
			    /**排序字段
				_score：相关度,pubdate：时间，权重mediaLevel, 转载量transfer
				**/
			    @RequestParam(value="order",defaultValue="") String order,
			    @RequestParam(value="pageNo",defaultValue="") String pageNo,
			    @RequestParam(value="pageSize",defaultValue="") String pageSize
			){
		SearchPublicSafetyMessage searchPublicSafetyMessage = new SearchPublicSafetyMessage();
		searchPublicSafetyMessage.setMediaType(mediaType);
		searchPublicSafetyMessage.setSentimentId(sentimentId);
		searchPublicSafetyMessage.setProvincecityCode(provincecityCode);
		searchPublicSafetyMessage.setCityCode(cityCode);
		searchPublicSafetyMessage.setCategoryId(categoryId);
		searchPublicSafetyMessage.setMediaList(mediaList);
		searchPublicSafetyMessage.setMediaLevel(mediaLevel);
		searchPublicSafetyMessage.setFieldName(fieldName);
		searchPublicSafetyMessage.setOrder(order);
		searchPublicSafetyMessage.setPageNo(pageNo);
		searchPublicSafetyMessage.setPageSize(pageSize);
		YJRequest<SearchPublicSafetyMessage> req = new YJRequest<SearchPublicSafetyMessage>();
		req.setMessage(searchPublicSafetyMessage);
		YJResponse<SearchPublicSafetyResponse> res = new YJResponse<SearchPublicSafetyResponse>();
		res = searchService.getSearchPublicSafety(req);
		SearchPublicSafetyResponse searchPublicSafetyResponse = new SearchPublicSafetyResponse();
		searchPublicSafetyResponse = res.getData();
		
		/*SearchPublicSafetyResponse searchPublicSafetyResponse = new SearchPublicSafetyResponse();
		if(mediaType.equals("news")){
			searchPublicSafetyResponse = mockHotInfoList();
		}else if(mediaType.equals("social")){
			searchPublicSafetyResponse = mockHotInfoList();
		}*/
		return new ResponseData<SearchPublicSafetyResponse>(ResponseData.AJAX_STATUS_SUCCESS,"查询新闻热点和社交热点",searchPublicSafetyResponse);
	}
	/**
	 * 模拟新闻热点信息
	 * @return
	 */
	public SearchPublicSafetyResponse mockHotNewsList(){
		SearchPublicSafetyResponse searchPublicSafetyResponse = new SearchPublicSafetyResponse();
		List<SearchPublicSafetyNewsVo> resultList  = new ArrayList<SearchPublicSafetyNewsVo>();
		SearchPublicSafetyNewsVo searchPublicSafetyVo = new SearchPublicSafetyNewsVo();
		searchPublicSafetyVo.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo.setMediaNameZh("新浪网");
		searchPublicSafetyVo.setTransfer(30);
		SearchPublicSafetyNewsVo searchPublicSafetyVo2 = new SearchPublicSafetyNewsVo();
		searchPublicSafetyVo2.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo2.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo2.setMediaNameZh("新浪网");
		searchPublicSafetyVo.setTransfer(60);
		SearchPublicSafetyNewsVo searchPublicSafetyVo3 = new SearchPublicSafetyNewsVo();
		searchPublicSafetyVo3.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo3.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo3.setMediaNameZh("新浪网");
		searchPublicSafetyVo.setTransfer(12);
		SearchPublicSafetyNewsVo searchPublicSafetyVo4 = new SearchPublicSafetyNewsVo();
		searchPublicSafetyVo4.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo4.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo4.setMediaNameZh("新浪网");
		searchPublicSafetyVo4.setTransfer(12);
		SearchPublicSafetyNewsVo searchPublicSafetyVo5 = new SearchPublicSafetyNewsVo();
		searchPublicSafetyVo5.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo5.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo5.setMediaNameZh("新浪网");
		searchPublicSafetyVo.setTransfer(12);
		SearchPublicSafetyNewsVo searchPublicSafetyVo6 = new SearchPublicSafetyNewsVo();
		searchPublicSafetyVo6.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo6.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo6.setMediaNameZh("新浪网");
		searchPublicSafetyVo6.setTransfer(12);
		SearchPublicSafetyNewsVo searchPublicSafetyVo7 = new SearchPublicSafetyNewsVo();
		searchPublicSafetyVo7.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo7.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo7.setMediaNameZh("新浪网");
		searchPublicSafetyVo7.setTransfer(12);
		SearchPublicSafetyNewsVo searchPublicSafetyVo8 = new SearchPublicSafetyNewsVo();
		searchPublicSafetyVo8.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo8.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo8.setMediaNameZh("新浪网");
		searchPublicSafetyVo8.setTransfer(12);
		SearchPublicSafetyNewsVo searchPublicSafetyVo9 = new SearchPublicSafetyNewsVo();
		searchPublicSafetyVo9.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo9.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo9.setMediaNameZh("新浪网");
		searchPublicSafetyVo9.setTransfer(12);
		SearchPublicSafetyNewsVo searchPublicSafetyVo10 = new SearchPublicSafetyNewsVo();
		searchPublicSafetyVo10.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo10.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo10.setMediaNameZh("新浪网");
		searchPublicSafetyVo10.setTransfer(12);
		resultList.add(searchPublicSafetyVo);
		resultList.add(searchPublicSafetyVo2);
		resultList.add(searchPublicSafetyVo3);
		resultList.add(searchPublicSafetyVo4);
		resultList.add(searchPublicSafetyVo5);
		resultList.add(searchPublicSafetyVo6);
		searchPublicSafetyResponse.setResultList(resultList);
		return searchPublicSafetyResponse;
	}
	/**
	 * 模拟社交热点
	 * @return
	 */
	public SearchPublicSafetyResponse mockHotInfoList(){
		SearchPublicSafetyResponse searchPublicSafetyResponse = new SearchPublicSafetyResponse();
		List<SearchPublicSafetySocialVo> resultList  = new ArrayList<SearchPublicSafetySocialVo>();
		SearchPublicSafetySocialVo searchPublicSafetySocialVo = new SearchPublicSafetySocialVo();
		searchPublicSafetySocialVo.setTextZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetySocialVo.setUpdateTimeStr("2016.8.23 10:09");
		searchPublicSafetySocialVo.setSourceType("微博");
		searchPublicSafetySocialVo.setRpsCnt(30);
		SearchPublicSafetySocialVo searchPublicSafetySocialVo2 = new SearchPublicSafetySocialVo();
		searchPublicSafetySocialVo2.setTextZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetySocialVo2.setUpdateTimeStr("2016.8.23 10:09");
		searchPublicSafetySocialVo2.setSourceType("微博");
		searchPublicSafetySocialVo.setRpsCnt(60);
		SearchPublicSafetySocialVo searchPublicSafetySocialVo3 = new SearchPublicSafetySocialVo();
		searchPublicSafetySocialVo3.setTextZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetySocialVo3.setUpdateTimeStr("2016.8.23 10:09");
		searchPublicSafetySocialVo3.setSourceType("论坛");
		searchPublicSafetySocialVo3.setRpsCnt(12);
		SearchPublicSafetySocialVo searchPublicSafetySocialVo4 = new SearchPublicSafetySocialVo();
		searchPublicSafetySocialVo4.setTextZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetySocialVo4.setUpdateTimeStr("2016.8.23 10:09");
		searchPublicSafetySocialVo4.setSourceType("论坛");
		searchPublicSafetySocialVo4.setRpsCnt(12);
		
		resultList.add(searchPublicSafetySocialVo);
		resultList.add(searchPublicSafetySocialVo2);
		resultList.add(searchPublicSafetySocialVo3);
		resultList.add(searchPublicSafetySocialVo4);
		searchPublicSafetyResponse.setResultSocialList(resultList);
		return searchPublicSafetyResponse;
	}
	
	
	/**
	 * 查询搜索列表页面
	 * @param mediaType
	 * @param cityCode
	 * @param languageCode
	 * @param fieldName
	 * @return
	 */
	@RequestMapping("/getSearchPublicSafety")
	@ResponseBody
	public ResponseData<Object> getSearchPublicSafety(SearchPublicSafetyMessage message){
		if(message==null){
			return new ResponseData<Object>(ResponseData.AJAX_STATUS_FAILURE,"参数不能为空",null);
		}
		if(StringUtil.isBlank(message.getPageNo())||StringUtil.isBlank(message.getPageSize())){
			return new ResponseData<Object>(ResponseData.AJAX_STATUS_FAILURE,"分页参数不能为空",null);
		}
		YJRequest<SearchPublicSafetyMessage> req = new YJRequest<SearchPublicSafetyMessage>();
		req.setMessage(message);
		YJResponse<SearchPublicSafetyResponse> res = new YJResponse<SearchPublicSafetyResponse>();
		res = searchService.getSearchPublicSafety(req);
		if(res==null||res.getHead()==null){
			  log.error("系统异常，请联系管理员");
			  return new ResponseData<Object>(ResponseData.AJAX_STATUS_FAILURE,"系统异常，请联系管理员",null);
		}
		if("false".equals(res.getHead().getResult())){
			  log.error(res.getHead().getMessage());
			  return new ResponseData<Object>(ResponseData.AJAX_STATUS_FAILURE,res.getHead().getMessage(),null);
		}
		if("news".equals(message.getMediaType())){
			PageInfo<SearchPublicSafetyNewsVo> resultPageInfo  = new PageInfo<SearchPublicSafetyNewsVo>();
			List<SearchPublicSafetyNewsVo> resultList = res.getData().getResultList();
			resultPageInfo.setResult(resultList);
			resultPageInfo.setCount(res.getData().getResultCount());
			resultPageInfo.setPageNo(Integer.valueOf(message.getPageNo()));
			resultPageInfo.setPageSize(Integer.valueOf(message.getPageSize()));
			return new ResponseData<Object>(ResponseData.AJAX_STATUS_SUCCESS,"查询成功",resultPageInfo);
		}else{
			PageInfo<SearchPublicSafetySocialVo> resultPageInfo  = new PageInfo<SearchPublicSafetySocialVo>();
			List<SearchPublicSafetySocialVo> resultSocialList = res.getData().getResultSocialList();
			resultPageInfo.setCount(res.getData().getResultCount());
			resultPageInfo.setResult(resultSocialList);
			resultPageInfo.setPageNo(Integer.valueOf(message.getPageNo()));
			resultPageInfo.setPageSize(Integer.valueOf(message.getPageSize()));
			return new ResponseData<Object>(ResponseData.AJAX_STATUS_SUCCESS,"查询成功",resultPageInfo);
		}
	}
	
}
