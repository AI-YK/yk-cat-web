package com.ai.yk.protal.web.controller.bmap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.base.vo.PageInfo;
import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.event.EventListMessage;
import com.ai.yk.protal.web.content.event.EventListResponse;
import com.ai.yk.protal.web.content.event.EventVo;
import com.ai.yk.protal.web.controller.common.BaseInfoController;
import com.ai.yk.protal.web.service.eventdata.EventDataService;


@Controller
@RequestMapping("/bmap")
public class MapController {
	
	private static final Logger log = LoggerFactory.getLogger(MapController.class);
	
	@Autowired
	EventDataService eventDataService;
	
	 /**
     * 获得分类数据 
     */
	/*
	GET /news/classify/selectAll HTTP/1.1
	 */
    @RequestMapping("/getSelectAllData")
    @ResponseBody
    public String getSelectAllData(){
    	
    	String json = "";
    	
    	
    	return json;
    }
	    /**
	    * 获得全部事件数据
	    * 
	    */
	    /*
	    POST /news/topicListInteface HTTP/1.1
	     */
	    @RequestMapping("/getTopicListIntefaceData")
	    @ResponseBody
    	public ResponseData<PageInfo<EventVo>> getTopicListIntefaceData(
	    		@RequestParam(value="pageSize",defaultValue="") Integer pageSize,
	    		@RequestParam(value="pageNo",defaultValue="") Integer pageNo,
	    		// 所属分类 舆情分类，根据字典表
	    		@RequestParam(value="type",defaultValue="") Integer type,
	    		// 行业类型（行业分类，根据字典表）
	    		@RequestParam(value="industryType",defaultValue="") Integer industryType,
	    		// 数据类型（ 1 : 新闻 2 : 社交）
	    		@RequestParam(value="sourceType",defaultValue="") Integer sourceType,
	    		@RequestParam(value="countryCode",defaultValue="") String countryCode,
	    		@RequestParam(value="provinceCode",defaultValue="") String provinceCode,
	    		@RequestParam(value="cityCode",defaultValue="") String cityCode
	    		){ 
	    	YJRequest<EventListMessage> req = new YJRequest<EventListMessage>();
	    	EventListMessage eventListMessage = new EventListMessage();
	    	eventListMessage.setPageSize(pageSize);
	    	eventListMessage.setPageNo(pageNo);
	    	eventListMessage.setType(type);
	    	eventListMessage.setIndustryType(industryType);
	    	eventListMessage.setSourceType(sourceType);
	    	eventListMessage.setCountryCode(countryCode);
	    	eventListMessage.setProvinceCode(provinceCode);
	    	eventListMessage.setCityCode(cityCode);
	    	req.setMessage(eventListMessage);
	    	YJResponse<EventListResponse> resp = eventDataService.queryEventDataList(req);
	    	if(resp==null||resp.getHead()==null){
				  log.error("系统异常，请联系管理员");
				  return new ResponseData<PageInfo<EventVo>>(ResponseData.AJAX_STATUS_FAILURE,"系统异常，请联系管理员",null);
			 
			}
			if("false".equals(resp.getHead().getResult())){
				  log.error(resp.getHead().getMessage());
				  return new ResponseData<PageInfo<EventVo>>(ResponseData.AJAX_STATUS_FAILURE,resp.getHead().getMessage(),null);
			}
			PageInfo<EventVo> pageInfo = new PageInfo<EventVo>();
			pageInfo.setResult(resp.getData().getResults());
			pageInfo.setPageNo(pageNo);
    		pageInfo.setPageSize(pageSize);
    		pageInfo.setCount(resp.getData().getTotalRows());
	        return new ResponseData<PageInfo<EventVo>>(ResponseData.AJAX_STATUS_SUCCESS,"查询成功",pageInfo);
	    }
    			
    
    //POST /news/getNewsHeatPointListInformationInteface HTTP/1.1
    @RequestMapping("/getNewsHeatPointListInformationInteface")
    @ResponseBody
    public ResponseData<String> getNewsHeatPointListInformationInteface(){
    	String json = "";
    	return new ResponseData<String>(ResponseData.AJAX_STATUS_SUCCESS,"查询成功",json);
    }
    
    /*
    POST /news/getNewsHeatPointListNewInteface HTTP/1.1
     */
    @RequestMapping("/getNewsHeatPointListNewInteface")
    @ResponseBody
    public ResponseData<String> getNewsHeatPointListNewInteface(){
    	String json = "";
    	return new ResponseData<String>(ResponseData.AJAX_STATUS_SUCCESS,"查询成功",json);
    }
    
    /*
    POST /news/getNewsHeatPointListInteface HTTP/1.1
	*/

    @RequestMapping("/getNewsHeatPointListInteface")
    @ResponseBody
    public ResponseData<String> getNewsHeatPointListInteface(){
    	String json = "";
    	return new ResponseData<String>(ResponseData.AJAX_STATUS_SUCCESS,"查询成功",json);
    }
    
    
    
    
}
