package com.ai.yk.protal.web.controller.event;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.ai.opt.base.vo.PageInfo;
import com.ai.opt.sdk.util.CollectionUtil;
import com.ai.opt.sdk.util.DateUtil;
import com.ai.opt.sdk.util.StringUtil;
import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.yk.protal.web.constants.Constants;
import com.ai.yk.protal.web.content.ResponseHead;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.event.EventDetailsMessage;
import com.ai.yk.protal.web.content.event.EventVo;
import com.ai.yk.protal.web.content.getInformationList.GetInformationListMessage;
import com.ai.yk.protal.web.content.getInformationList.GetInformationListReponse;
import com.ai.yk.protal.web.content.getInformationList.GetInformationListVo;
import com.ai.yk.protal.web.controller.BaseController;
import com.ai.yk.protal.web.service.eventdata.EventDataService;
import com.ai.yk.protal.web.service.getInformationList.GetInformationListService;
import com.alibaba.fastjson.JSON;
@RestController
@RequestMapping("event")
public class EventController extends BaseController {
	private static final Logger LOG = LoggerFactory
			.getLogger(EventController.class);
	/*事件详情view*/
	private static final String EVENT_DETAILS_VIEW ="/event/eventDetail";
	@Autowired
	private EventDataService eventService;
	@Autowired
	private GetInformationListService informationListService;
	@RequestMapping("detail/{srcId}")
	public ModelAndView eventDeatil(YJRequest<EventDetailsMessage> req,@PathVariable String srcId) {
		LOG.info("---------事件详情-【"+srcId+"】-----------");
		EventDetailsMessage msg = new EventDetailsMessage();
		msg.setSrcId(srcId);
		req.setMessage(msg);
		YJResponse<EventVo> res=eventService.queryEventDataEntityForSrcId(req);
		ModelAndView view = new ModelAndView(EVENT_DETAILS_VIEW);
		if(res==null||res.getData()==null||StringUtil.isBlank(res.getData().getSrcTitle())){
			view.setViewName(Constants.PAGE_404);
			return view;
		}
		view.addObject("eventDetail", res.getData());
		String end = DateUtil.getDateString(DateUtil.DATE_FORMAT);
		String begin =  DateUtil.getDateString(DateUtil.getOffsetDaysDate(new Date(),-3),DateUtil.DATE_FORMAT);
		view.addObject("begin", begin);
		view.addObject("end", end);
		return view;
	}
	/**
	 * 查询事件资讯
	 * @param req
	 * @param msg
	 * @return
	 */
	@RequestMapping("queryEventInformation")
	public ResponseData<PageInfo<GetInformationListVo>> queryEventInformation(YJRequest<GetInformationListMessage> req, GetInformationListMessage msg){
		if(msg.getPageSize()==null){
			msg.setPageSize(4);
		}
		if(msg.getPageNo()==null){
			msg.setPageNo(1);
		}
		req.setMessage(msg);
		LOG.info("事件相关资讯："+JSON.toJSONString(req));
		YJResponse<GetInformationListReponse> res = informationListService.getGetInformationList(req);
		ResponseHead responseHead = res==null?null:res.getHead();
		String result = responseHead==null?"false":responseHead.getResult();
		String resultMsg = responseHead==null?"查询相关资讯失败":responseHead.getMessage();
		GetInformationListReponse data = res==null?null:res.getData();
		Integer resultCount = 0;
		List<GetInformationListVo> resultList = new ArrayList<>();
		if("true".equals(result) && data!=null&&!CollectionUtil.isEmpty(data.getResultList())){
			resultCount = data.getResultCount();
			resultList = data.getResultList();
		}
		PageInfo<GetInformationListVo> pageInfo = new PageInfo<GetInformationListVo>();
		pageInfo.setPageNo(msg.getPageNo());
		pageInfo.setPageSize(msg.getPageSize());
		pageInfo.setCount(resultCount);
		pageInfo.setResult(resultList);
		return new ResponseData<PageInfo<GetInformationListVo>>(ResponseData.AJAX_STATUS_SUCCESS,resultMsg,pageInfo);
	}
}
