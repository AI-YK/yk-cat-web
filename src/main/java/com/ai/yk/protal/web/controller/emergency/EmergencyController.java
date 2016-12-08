package com.ai.yk.protal.web.controller.emergency;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.yk.protal.web.content.event.EventVo;
import com.ai.yk.protal.web.content.event.chars.EventModelResponse;
import com.ai.yk.protal.web.content.event.chars.TimeTrendVo;
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
	    	/*ChartLeft chartLeft  = new ChartLeft();
	    	ChartRight chartRight = new ChartRight();
	    	ChartGroup chartGroup = new ChartGroup();
	    	chartGroup.setChartLeft(chartLeft);
	    	chartGroup.setChartRight(chartRight);
	    	List<ChartGroup> group = new ArrayList<ChartGroup>();
	    	group.add(chartGroup);
	    	homeEventVo.setGroup(group);*/
	    	return homeEventVo;
	    }
	    /**
	     * 首页事件态势
	     * @return
	     */
	    @RequestMapping("/getEventState")
	    @ResponseBody
	    public ResponseData<EventModelResponse> getEventState(
		    		/**
		    		 * 事件srcId
		    		 */
	    			@RequestParam(value="eventId",defaultValue="") String eventId,
	    			/**
	    			 * 模型名称
	    			 * timeTrend 事件态势
	    			 * spreadTrend 事件传播路径
	    			 */
				    @RequestParam(value="models",defaultValue="") String models,
				    @RequestParam(value="beginDate",defaultValue="") String beginDate,
				    @RequestParam(value="endDate",defaultValue="") String endDate
	    		){
	    	/*EventModelMessage eventModelMessage = new EventModelMessage();
	    	eventModelMessage.setEventId(eventId);
	    	eventModelMessage.setModels(models);
	    	eventModelMessage.setBeginDate(beginDate);
	    	eventModelMessage.setEndDate(endDate);
	    	YJRequest<EventModelMessage> req = new YJRequest<EventModelMessage>();
	    	req.setMessage(eventModelMessage);
	    	YJResponse<EventModelResponse> res = new YJResponse<EventModelResponse>();
	    	res = eventDataService.queryEventModel(req);
	    	EventModelResponse eventModelResponse = res.getData();*/
	    	
	    	EventModelResponse eventModelResponse = mockEventState();
	    	return new ResponseData<EventModelResponse>(ResponseData.AJAX_STATUS_SUCCESS,"查询事件态势",eventModelResponse);
	    }
	    public EventModelResponse mockEventState(){
	    	EventModelResponse eventModelResponse = new EventModelResponse();
	    	List<TimeTrendVo> timeTrend = new ArrayList<TimeTrendVo>();
	    	//[0, 200, 10, 230, 10,100,0,180,5,200]
	    	TimeTrendVo timeTrendVo = new TimeTrendVo();
	    	timeTrendVo.setTime("11-01");
	    	timeTrendVo.setCount(0);
	    	TimeTrendVo timeTrendVo2 = new TimeTrendVo();
	    	timeTrendVo2.setTime("11-02");
	    	timeTrendVo2.setCount(200);
	    	TimeTrendVo timeTrendVo3 = new TimeTrendVo();
	    	timeTrendVo3.setTime("11-03");
	    	timeTrendVo3.setCount(10);
	    	TimeTrendVo timeTrendVo4 = new TimeTrendVo();
	    	timeTrendVo4.setTime("11-04");
	    	timeTrendVo4.setCount(230);
	    	TimeTrendVo timeTrendVo5 = new TimeTrendVo();
	    	timeTrendVo5.setTime("11-05");
	    	timeTrendVo5.setCount(10);
	    	TimeTrendVo timeTrendVo6 = new TimeTrendVo();
	    	timeTrendVo6.setTime("11-06");
	    	timeTrendVo6.setCount(100);
	    	TimeTrendVo timeTrendVo7 = new TimeTrendVo();
	    	timeTrendVo7.setTime("11-07");
	    	timeTrendVo7.setCount(0);
	    	TimeTrendVo timeTrendVo8 = new TimeTrendVo();
	    	timeTrendVo8.setTime("11-08");
	    	timeTrendVo8.setCount(180);
	    	TimeTrendVo timeTrendVo9 = new TimeTrendVo();
	    	timeTrendVo9.setTime("11-09");
	    	timeTrendVo9.setCount(5);
	    	TimeTrendVo timeTrendVo10 = new TimeTrendVo();
	    	timeTrendVo10.setTime("11-10");
	    	timeTrendVo10.setCount(200);
	    	timeTrend.add(timeTrendVo);
	    	timeTrend.add(timeTrendVo2);
	    	timeTrend.add(timeTrendVo3);
	    	timeTrend.add(timeTrendVo4);
	    	timeTrend.add(timeTrendVo5);
	    	timeTrend.add(timeTrendVo6);
	    	timeTrend.add(timeTrendVo7);
	    	timeTrend.add(timeTrendVo8);
	    	timeTrend.add(timeTrendVo9);
	    	timeTrend.add(timeTrendVo10);
	    	eventModelResponse.setTimeTrend(timeTrend);
	    	return eventModelResponse;
	    }
	    
}
