package com.ai.yk.protal.web.controller.bmap;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.mytopics.MyTopicsMessage;
import com.ai.yk.protal.web.content.mytopics.MyTopicsResponse;
import com.ai.yk.protal.web.content.mytopics.MyTopicsVo;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyMessage;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyResponse;
import com.ai.yk.protal.web.service.eventdata.EventDataService;
import com.ai.yk.protal.web.service.mytopics.MytopicsService;
import com.ai.yk.protal.web.service.search.SearchService;
import com.ai.yk.protal.web.utils.SessionUtil;
import com.esotericsoftware.kryo.factories.PseudoSerializerFactory;


@Controller
@RequestMapping("/newsbmap")
public class MapController {
	
	private static final Logger log = LoggerFactory.getLogger(MapController.class);
	
	@Autowired
	EventDataService eventDataService;
	@Autowired
	SearchService searchService;
	@Autowired
	private MytopicsService mytopicsSercice;

	
	
		/**
		 * 跳转热点发现页面
		 */
		@RequestMapping("/toHeat")
		public String toBmap(Model model){
			return "/hot/toHeat";
		}
		
	    /**
	    * 获得新闻热点信息
	    * 
	    */
	    /*
	    POST /news/topicListInteface HTTP/1.1
	     */
	    @RequestMapping("/getTopicListIntefaceData")
	    @ResponseBody
		public ResponseData<SearchPublicSafetyResponse> getTopicListIntefaceData(
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
				    @RequestParam(value="mediaId",defaultValue="") String mediaId,
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
			searchPublicSafetyMessage.setMediaId(mediaId);
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
			return new ResponseData<SearchPublicSafetyResponse>(ResponseData.AJAX_STATUS_SUCCESS,"查询新闻热点和社交热点",searchPublicSafetyResponse);
	    }
<<<<<<< HEAD
    
    @RequestMapping("/queryMyTopicsList")
    @ResponseBody
    public ResponseData<List<MyTopicsVo>> queryMyTopicsList(
    		@RequestParam(value="pageNo",defaultValue="1") Integer pageNo,
    		@RequestParam(value="pageSize",defaultValue="10") Integer pageSize
    		){
    	MyTopicsMessage myTopicsMessage=new MyTopicsMessage();
    	myTopicsMessage.setPageNo(pageNo);
    	myTopicsMessage.setPageSize(pageSize);
    	String userId= SessionUtil.getLoginUser().getUserId();
    	myTopicsMessage.setCreateId(Integer.parseInt(userId));
    	YJRequest<MyTopicsMessage> req=new YJRequest<MyTopicsMessage>();
    	req.setMessage(myTopicsMessage);
    	YJResponse<MyTopicsResponse> yjr=mytopicsSercice.queryMyTopicsList(req);
    	if(yjr==null){
    		return new ResponseData<List<MyTopicsVo>>(ResponseData.AJAX_STATUS_SUCCESS,"查询不到专题列表",null);
    	}
    	SessionUtil.setTopics(yjr.getData().getResults());
    	return new ResponseData<List<MyTopicsVo>>(ResponseData.AJAX_STATUS_SUCCESS,"查询专题列表成功",yjr.getData().getResults());
    }
    

}
