package com.ai.yk.protal.web.controller.news;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyMessage;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyResponse;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyVo;
import com.ai.yk.protal.web.service.search.SearchService;

@Controller
@RequestMapping("/news")
public class NewsHotAndSocialHotController {
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
			    @RequestParam(value="publicAffairsType",defaultValue="") String publicAffairsType,
			    /**数据源类型微信微博新闻等媒体**/
			    @RequestParam(value="mediaId",defaultValue="") String mediaId,
			    /**媒体级别id**/
			    @RequestParam(value="mediaLevel",defaultValue="") String mediaLevel,
			    /**指定排序字段**/
			    @RequestParam(value="fieldName",defaultValue="") String fieldName,
			    /**排序字段
				_score：相关度,pubdate：时间，权重mediaLevel, 转载量transfer
				**/
			    @RequestParam(value="order",defaultValue="") String order
			){
		/*SearchPublicSafetyMessage searchPublicSafetyMessage = new SearchPublicSafetyMessage();
		searchPublicSafetyMessage.setMediaType(mediaType);
		searchPublicSafetyMessage.setSentimentId(sentimentId);
		searchPublicSafetyMessage.setProvincecityCode(provincecityCode);
		searchPublicSafetyMessage.setCityCode(cityCode);
		searchPublicSafetyMessage.setPublicAffairsType(publicAffairsType);
		searchPublicSafetyMessage.setMediaId(mediaId);
		searchPublicSafetyMessage.setMediaLevel(mediaLevel);
		searchPublicSafetyMessage.setFieldName(fieldName);
		searchPublicSafetyMessage.setOrder(order);
		YJRequest<SearchPublicSafetyMessage> req = new YJRequest<SearchPublicSafetyMessage>();
		req.setMessage(searchPublicSafetyMessage);
		YJResponse<SearchPublicSafetyResponse> res = new YJResponse<SearchPublicSafetyResponse>();
		res = searchService.getNewsList(req);
		SearchPublicSafetyResponse searchPublicSafetyResponse = new SearchPublicSafetyResponse();
		searchPublicSafetyResponse = res.getData();*/
		
		SearchPublicSafetyResponse searchPublicSafetyResponse = new SearchPublicSafetyResponse();
		if(mediaType.equals("news")){
			searchPublicSafetyResponse = mockHotInfoList();
		}else if(mediaType.equals("social")){
			searchPublicSafetyResponse = mockHotInfoList();
		}
		return new ResponseData<SearchPublicSafetyResponse>(ResponseData.AJAX_STATUS_SUCCESS,"查询新闻热点和社交热点",searchPublicSafetyResponse);
	}
	/**
	 * 模拟新闻热点信息
	 * @return
	 */
	public SearchPublicSafetyResponse mockHotNewsList(){
		SearchPublicSafetyResponse searchPublicSafetyResponse = new SearchPublicSafetyResponse();
		List<SearchPublicSafetyVo> resultList  = new ArrayList<SearchPublicSafetyVo>();
		SearchPublicSafetyVo searchPublicSafetyVo = new SearchPublicSafetyVo();
		searchPublicSafetyVo.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo.setMediaNameZh("新浪网");
		searchPublicSafetyVo.setTransfer(30);
		SearchPublicSafetyVo searchPublicSafetyVo2 = new SearchPublicSafetyVo();
		searchPublicSafetyVo2.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo2.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo2.setMediaNameZh("新浪网");
		searchPublicSafetyVo.setTransfer(60);
		SearchPublicSafetyVo searchPublicSafetyVo3 = new SearchPublicSafetyVo();
		searchPublicSafetyVo3.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo3.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo3.setMediaNameZh("新浪网");
		searchPublicSafetyVo.setTransfer(12);
		SearchPublicSafetyVo searchPublicSafetyVo4 = new SearchPublicSafetyVo();
		searchPublicSafetyVo4.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo4.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo4.setMediaNameZh("新浪网");
		searchPublicSafetyVo4.setTransfer(12);
		SearchPublicSafetyVo searchPublicSafetyVo5 = new SearchPublicSafetyVo();
		searchPublicSafetyVo5.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo5.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo5.setMediaNameZh("新浪网");
		searchPublicSafetyVo.setTransfer(12);
		SearchPublicSafetyVo searchPublicSafetyVo6 = new SearchPublicSafetyVo();
		searchPublicSafetyVo6.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo6.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo6.setMediaNameZh("新浪网");
		searchPublicSafetyVo6.setTransfer(12);
		SearchPublicSafetyVo searchPublicSafetyVo7 = new SearchPublicSafetyVo();
		searchPublicSafetyVo7.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo7.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo7.setMediaNameZh("新浪网");
		searchPublicSafetyVo7.setTransfer(12);
		SearchPublicSafetyVo searchPublicSafetyVo8 = new SearchPublicSafetyVo();
		searchPublicSafetyVo8.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo8.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo8.setMediaNameZh("新浪网");
		searchPublicSafetyVo8.setTransfer(12);
		SearchPublicSafetyVo searchPublicSafetyVo9 = new SearchPublicSafetyVo();
		searchPublicSafetyVo9.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo9.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo9.setMediaNameZh("新浪网");
		searchPublicSafetyVo9.setTransfer(12);
		SearchPublicSafetyVo searchPublicSafetyVo10 = new SearchPublicSafetyVo();
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
		List<SearchPublicSafetyVo> resultList  = new ArrayList<SearchPublicSafetyVo>();
		SearchPublicSafetyVo searchPublicSafetyVo = new SearchPublicSafetyVo();
		searchPublicSafetyVo.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo.setMediaNameZh("新浪网");
		searchPublicSafetyVo.setTransfer(30);
		SearchPublicSafetyVo searchPublicSafetyVo2 = new SearchPublicSafetyVo();
		searchPublicSafetyVo2.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo2.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo2.setMediaNameZh("新浪网");
		searchPublicSafetyVo.setTransfer(60);
		SearchPublicSafetyVo searchPublicSafetyVo3 = new SearchPublicSafetyVo();
		searchPublicSafetyVo3.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo3.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo3.setMediaNameZh("新浪网");
		searchPublicSafetyVo.setTransfer(12);
		SearchPublicSafetyVo searchPublicSafetyVo4 = new SearchPublicSafetyVo();
		searchPublicSafetyVo4.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo4.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo4.setMediaNameZh("新浪网");
		searchPublicSafetyVo4.setTransfer(12);
		SearchPublicSafetyVo searchPublicSafetyVo5 = new SearchPublicSafetyVo();
		searchPublicSafetyVo5.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo5.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo5.setMediaNameZh("新浪网");
		searchPublicSafetyVo.setTransfer(12);
		SearchPublicSafetyVo searchPublicSafetyVo6 = new SearchPublicSafetyVo();
		searchPublicSafetyVo6.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo6.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo6.setMediaNameZh("新浪网");
		searchPublicSafetyVo6.setTransfer(12);
		SearchPublicSafetyVo searchPublicSafetyVo7 = new SearchPublicSafetyVo();
		searchPublicSafetyVo7.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo7.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo7.setMediaNameZh("新浪网");
		searchPublicSafetyVo7.setTransfer(12);
		SearchPublicSafetyVo searchPublicSafetyVo8 = new SearchPublicSafetyVo();
		searchPublicSafetyVo8.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo8.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo8.setMediaNameZh("新浪网");
		searchPublicSafetyVo8.setTransfer(12);
		SearchPublicSafetyVo searchPublicSafetyVo9 = new SearchPublicSafetyVo();
		searchPublicSafetyVo9.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo9.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo9.setMediaNameZh("新浪网");
		searchPublicSafetyVo9.setTransfer(12);
		SearchPublicSafetyVo searchPublicSafetyVo10 = new SearchPublicSafetyVo();
		searchPublicSafetyVo10.setTitleZh("运动员，一度只能自费在拥挤的小游泳馆");
		searchPublicSafetyVo10.setPubdate("2016.8.23 10:09");
		searchPublicSafetyVo10.setMediaNameZh("新浪网");
		searchPublicSafetyVo10.setTransfer(12);
		resultList.add(searchPublicSafetyVo);
		resultList.add(searchPublicSafetyVo2);
		resultList.add(searchPublicSafetyVo3);
		resultList.add(searchPublicSafetyVo4);
		searchPublicSafetyResponse.setResultList(resultList);
		return searchPublicSafetyResponse;
	}
	
	
}
