package com.ai.yk.protal.web.controller.news;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.queryInformation.QueryInformationMessage;
import com.ai.yk.protal.web.content.queryInformation.QueryInformationResponse;
import com.ai.yk.protal.web.controller.BaseController;
import com.ai.yk.protal.web.service.information.InformationService;

/**
 * 新闻<br>
 * Date: 2016年12月12日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author xuyw
 */
@RestController
@RequestMapping("news")
public class NewsController extends BaseController {
	private static final Logger LOG = LoggerFactory
			.getLogger(NewsController.class);
	/*新闻详情view*/
	private static final String NEWS_DETAILS_VIEW ="/news/newsDetail";
	@Autowired
	private InformationService informationService;

	/**
	 * 新闻详情
	 * 
	 * @return
	 */
	@RequestMapping("/detail/{informationId}")
	public ModelAndView newsDetails(YJRequest<QueryInformationMessage> req,
			@PathVariable String informationId) {
		LOG.info("---------新闻详情-【"+informationId+"】-----------");
		QueryInformationMessage message = new QueryInformationMessage();
		message.setInformationId(informationId);
		req.setMessage(message);
		YJResponse<QueryInformationResponse> res = informationService.queryNewsDetail(req);
		
		ModelAndView view = new ModelAndView(NEWS_DETAILS_VIEW);
		if(res!=null&&res.getData()!=null){
			view.addObject("newsDetails", res.getData());
		}
		return view;
	}
}
