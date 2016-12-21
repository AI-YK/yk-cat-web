package com.ai.yk.protal.web.controller.event;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.ai.opt.sdk.util.DateUtil;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.event.EventDetailsMessage;
import com.ai.yk.protal.web.content.event.EventVo;
import com.ai.yk.protal.web.controller.BaseController;
import com.ai.yk.protal.web.service.eventdata.EventDataService;
@RestController
@RequestMapping("event")
public class EventController extends BaseController {
	private static final Logger LOG = LoggerFactory
			.getLogger(EventController.class);
	/*事件详情view*/
	private static final String EVENT_DETAILS_VIEW ="/event/eventDetail";
	@Autowired
	private EventDataService eventService;
	@RequestMapping("detail/{srcId}")
	public ModelAndView eventDeatil(YJRequest<EventDetailsMessage> req,@PathVariable String srcId) {
		LOG.info("---------事件详情-【"+srcId+"】-----------");
		EventDetailsMessage msg = new EventDetailsMessage();
		msg.setSrcId(srcId);
		req.setMessage(msg);
		YJResponse<EventVo> res=eventService.queryEventDataEntityForSrcId(req);
		ModelAndView view = new ModelAndView(EVENT_DETAILS_VIEW);
		if(res!=null&&res.getData()!=null){
			view.addObject("eventDetail", res.getData());
		}
		
		String end = DateUtil.getDateString(DateUtil.DATE_FORMAT);
		String begin =  DateUtil.getDateString(DateUtil.getOffsetDaysDate(new Date(),-3),DateUtil.DATE_FORMAT);
		view.addObject("begin", begin);
		view.addObject("end", end);
		return view;
	}
}
