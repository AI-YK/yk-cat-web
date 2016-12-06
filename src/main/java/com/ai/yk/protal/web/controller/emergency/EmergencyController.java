package com.ai.yk.protal.web.controller.emergency;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.yk.protal.web.service.eventdata.EventDataService;
import com.alibaba.fastjson.JSONObject;

@Controller
public class EmergencyController {
/**
 * 突发事件	
	 */
		 private static final Logger LOGGER = LoggerFactory.getLogger(EmergencyController.class);
		    @Autowired
		    EventDataService eventDataService;
	    /**
	     * 突发事件前四条列表
	     * @return
	     */
	    @RequestMapping("/getEmergencyIndexList")
	    @ResponseBody
	    public ResponseData<String> getEmergencyIndexList(){ 
	    	/*QueryEventDataVo queryEventDataVo =new QueryEventDataVo();
	    	queryEventDataVo.setId(1);
	    	queryEventDataVo.setZhCountry("中国");
	    	queryEventDataVo.setZhCity("北京");
	    	queryEventDataVo.setDayTime("2016-12-06");
	    	queryEventDataVo.setZhTitle("朴槿惠支持率暴跌至5%，就亲信干政事件道歉支");
	    	List<QueryEventDataVo> results = new ArrayList<QueryEventDataVo>();
	    	results.add(queryEventDataVo);
	    	results.add(queryEventDataVo);
	    	results.add(queryEventDataVo);
	    	results.add(queryEventDataVo);
	    	QueryEventDataListReponse queryEventDataListReponse =new QueryEventDataListReponse();
	    	queryEventDataListReponse.setIndustryType(1);
	    	queryEventDataListReponse.setPageNo(1);
	    	queryEventDataListReponse.setPageSize(4);
	    	queryEventDataListReponse.setResults(results);
	    	queryEventDataListReponse.setSourceType(1);
	    	queryEventDataListReponse.setType(1);
	    	String json = JSONObject.toJSONString(queryEventDataListReponse);*/
	    	return new ResponseData<String>("","","");
	        
	    }
}
