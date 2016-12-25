package com.ai.yk.protal.web.controller.news;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.ai.opt.sdk.util.CollectionUtil;
import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.Constants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.collection.CollectionMessage;
import com.ai.yk.protal.web.content.collection.CollectionResponse;
import com.ai.yk.protal.web.content.queryInformation.QueryInformationMessage;
import com.ai.yk.protal.web.content.queryInformation.QueryInformationResponse;
import com.ai.yk.protal.web.content.relatedInformation.RelatedInformationMessage;
import com.ai.yk.protal.web.content.relatedInformation.RelatedInformationResponse;
import com.ai.yk.protal.web.content.relatedInformation.RelatedInformationResults;
import com.ai.yk.protal.web.content.share.ShareCountVo;
import com.ai.yk.protal.web.content.share.ShareMessage;
import com.ai.yk.protal.web.controller.BaseController;
import com.ai.yk.protal.web.service.collection.CollectionService;
import com.ai.yk.protal.web.service.information.InformationService;
import com.ai.yk.protal.web.service.relatedInformation.RelatedInformationService;
import com.ai.yk.protal.web.service.share.ShareService;

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
	@Autowired
	private ShareService shareService;
	@Autowired
	CollectionService collectionService;
	@Autowired
	RelatedInformationService relatedInformationService;
	/**
	 * 查询收藏分享数
	 * 
	 * @return
	 */
	@RequestMapping("/collOrShareCount")
	public ShareCountVo collOrShareCount(YJRequest<ShareMessage> req,ShareMessage message){
		req.setMessage(message);
		YJResponse<ShareCountVo> res=shareService.queryShareCount(req);
		if(res!=null&&res.getData()!=null){
			return res.getData();
		}else{
			LOG.error("查询分享或收藏数失败");
		}
		return  new ShareCountVo();
	}
	/**
	 * 收藏操作
	 * 
	 * @return
	 */
	@RequestMapping("/collectionHandle")
    public YJResponse<CollectionResponse> collectionHandle(YJRequest<CollectionMessage> req,CollectionMessage msg){
    	//msg.setId(SessionUtil.getLoginUser().getUserId());
    	req.setMessage(msg);
    	YJResponse<CollectionResponse> res = null;
    	int type = this.getInt("type");
    	switch (type) {
		case 1:
			//添加收藏
			res =collectionService.addCollection(req);
			break;
		case 2:
			//删除收藏
			res =collectionService.delCollection(req);
			break;
		case 3:
			//查询是否搜藏
			res =collectionService.queryIsCollection(req);
			break;

		}
    	return res;
    }
	
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
		if(res==null||res.getData()==null||StringUtil.isBlank(res.getData().getSrcTitle())){
			view.setViewName(Constants.PAGE_404);
			return view;
		}
		view.addObject("newsDetails", res.getData());
		/*String keyword = this.getString("keyword", "");
		if(!StringUtil.isBlank(keyword)){
			try {
				keyword = URLDecoder.decode(keyword ,Constants.DEFAULT_ENCODING);
			} catch (UnsupportedEncodingException e) {
				LOG.error(e.getMessage(),e);
			}
		}
		view.addObject("keyword", keyword);*/
		return view;
	}
	/**
	 * 相关资讯
	 * 
	 * @return
	 */
	@RequestMapping("/queryRelatedInformation")
	public List<RelatedInformationResults> queryRelatedInformation(YJRequest<RelatedInformationMessage> req,RelatedInformationMessage msg){
		req.setMessage(msg);
		List<RelatedInformationResults> resultList = new ArrayList<>();
		YJResponse<RelatedInformationResponse> res = relatedInformationService.getRelatedInformation(req);
		if(res!=null&&res.getData()!=null&&!CollectionUtil.isEmpty(res.getData().getResultList())){
			resultList =res.getData().getResultList(); 
		}
		return resultList;
	}
}
