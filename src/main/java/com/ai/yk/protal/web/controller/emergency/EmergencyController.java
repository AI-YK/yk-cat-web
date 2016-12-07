package com.ai.yk.protal.web.controller.emergency;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.yk.protal.web.content.event.EventVo;
import com.ai.yk.protal.web.model.emergency.ChartGroup;
import com.ai.yk.protal.web.model.emergency.ChartLeft;
import com.ai.yk.protal.web.model.emergency.ChartRight;
import com.ai.yk.protal.web.model.emergency.HomeEventVo;
import com.ai.yk.protal.web.service.eventdata.EventDataService;
/**
 * 突发事件	
	 */
@Controller
@RequestMapping("/emergency")
public class EmergencyController {
		    @Autowired
		    EventDataService eventDataService;
	    /**
	     * 突发事件前四条列表
	     * @return
	     */
	    @RequestMapping("/getEmergencyIndexList")
	    @ResponseBody
	    public ResponseData<HomeEventVo> getEmergencyIndexList(){ 
	    	return new ResponseData<HomeEventVo>(ResponseData.AJAX_STATUS_SUCCESS,"查询突发事件成功",mock());
	    }
	    
	    private HomeEventVo mock(){
	    	EventVo eventVo =new EventVo();
	    	eventVo.setId(1);
	    	eventVo.setZhCountry("中国");
	    	eventVo.setZhCity("北京");
	    	eventVo.setDayTime("2016-12-06");
	    	eventVo.setZhTitle("朴槿惠支持率暴跌至5%，就亲信干政事件道歉支");
	    	List<EventVo> results = new ArrayList<EventVo>();
	    	results.add(eventVo);
	    	results.add(eventVo);
	    	results.add(eventVo);
	    	results.add(eventVo);
	    	/**突发事件数据对象**/
	    	HomeEventVo homeEventVo =new HomeEventVo();
	    	homeEventVo.setEventList(results);
	    	/**突发事件chart图数据**/
	    	ChartLeft chartLeft  = new ChartLeft();
	    	ChartRight chartRight = new ChartRight();
	    	ChartGroup chartGroup = new ChartGroup();
	    	chartGroup.setChartLeft(chartLeft);
	    	chartGroup.setChartRight(chartRight);
	    	List<ChartGroup> group = new ArrayList<ChartGroup>();
	    	group.add(chartGroup);
	    	homeEventVo.setGroup(group);
	    	return homeEventVo;
	    }
	    
	    @RequestMapping("/getEmergencyIndexList2")
	    @ResponseBody
	    public ResponseData<Map<String,List<EventVo>>> getEmergencyIndexList2(){
	    	return null;
	    }
}
