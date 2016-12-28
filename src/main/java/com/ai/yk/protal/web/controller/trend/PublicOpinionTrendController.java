package com.ai.yk.protal.web.controller.trend;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.sdk.util.DateUtil;
import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.publicaffairs.LocSentimentVo;
import com.ai.yk.protal.web.content.publicaffairs.MediaCoverageVo;
import com.ai.yk.protal.web.content.publicaffairs.PublicAffairsMessage;
import com.ai.yk.protal.web.content.publicaffairs.PublicAffairsResponse;
import com.ai.yk.protal.web.service.publicaffairs.PublicaffairsService;

@Controller
@RequestMapping("/trend")
public class PublicOpinionTrendController {
	
	private static final Logger log = LoggerFactory.getLogger(PublicOpinionTrendController.class);
	/**
	 * 舆情走势和媒体覆盖
	 */
	@Autowired
	PublicaffairsService publicaffairsService;
	
	@RequestMapping("/pubTrend")
	@ResponseBody
	public ResponseData<PublicAffairsResponse> getPubTrend(
			/**
			 * 专题ID
			 */
		     @RequestParam(value="infoId",defaultValue="") String infoId,
				/**
				 * 城市列表（多个用逗号隔开）
				 */
			  @RequestParam(value="busCode",defaultValue="") String busCode,
			  	/**
				 * 模型名称
				 * 媒体覆盖出 mediaCoverage 
				 * 舆情走势 locSentimentCount
				 */
			  @RequestParam(value="modelNo",defaultValue="") String modelNo,
			  /**
				 * 舆情分类类型（多个用逗号隔开）
				 */
			  @RequestParam(value="categoryId",defaultValue="") String categoryId,
			  /**
			   * 今日：0，本周：1，本月：2
			   **/
			  @RequestParam(value="timeType",defaultValue="") String timeType
			){
		
		Calendar calendar = Calendar.getInstance();
		String beginTime="";
		String endTime="";
		int n = calendar.get(Calendar.DAY_OF_WEEK);
		if(timeType.equals("0")){
			beginTime = DateUtil.getDateString("yyyy-MM-dd 00:00:00");
			endTime = DateUtil.getDateString("yyyy-MM-dd 23:59:59");
		}else if(timeType.equals("1")){
			endTime = DateUtil.getDateString("yyyy-MM-dd 00:00:00");
			beginTime = getDateBefore(new Date(), -n);
		}else if(timeType.equals("2")){
			endTime = DateUtil.getDateString("yyyy-MM-dd 00:00:00");
			beginTime = getDateBefore(new Date(), -30);
		}
		
		PublicAffairsMessage message =new PublicAffairsMessage();
		message.setBusCode(busCode);
		message.setModelNo(modelNo);
		message.setCategoryId(categoryId);
		message.setBeginTime(beginTime);
		message.setEndTime(endTime);
		YJRequest<PublicAffairsMessage> req = new YJRequest<PublicAffairsMessage>();
		req.setMessage(message);
		
		YJResponse<PublicAffairsResponse> res = publicaffairsService.queryMediaCoverageList(req);
		
		PublicAffairsResponse publicAffairsResponse = res.getData();
		/*PublicAffairsResponse publicAffairsResponse = new PublicAffairsResponse();
		if(modelNo.equals("locSentimentCount")){
			publicAffairsResponse = mockTrendData();
		}else if(modelNo.equals("mediaCoverage")){
			publicAffairsResponse = mockMediaData();
		}*/
		
		return new ResponseData<PublicAffairsResponse>(ResponseData.AJAX_STATUS_SUCCESS,"查询舆情趋势或媒体覆盖",publicAffairsResponse);
	}
	
	
	@RequestMapping("/queryMediaCoverageTrend")
	@ResponseBody
	public ResponseData<PublicAffairsResponse> queryMediaCoverageTrend(PublicAffairsMessage message){
		if(message==null){
			return new ResponseData<PublicAffairsResponse>(ResponseData.AJAX_STATUS_FAILURE,"参数不能为空",null);
		}
		YJRequest<PublicAffairsMessage> req = new YJRequest<PublicAffairsMessage>();
		req.setMessage(message);
		YJResponse<PublicAffairsResponse> resp = publicaffairsService.queryMediaCoverageList(req);
		if(resp==null||resp.getHead()==null){
			  log.error("系统异常，请联系管理员");
			  return new ResponseData<PublicAffairsResponse>(ResponseData.AJAX_STATUS_FAILURE,"系统异常，请联系管理员",null);
		 
		}
		if("false".equals(resp.getHead().getResult())){
			  log.error(resp.getHead().getMessage());
			  return new ResponseData<PublicAffairsResponse>(ResponseData.AJAX_STATUS_FAILURE,resp.getHead().getMessage(),null);
		}
		return new ResponseData<PublicAffairsResponse>(ResponseData.AJAX_STATUS_SUCCESS,"查询舆情趋势或媒体覆盖",resp.getData());
	}
	
	/**
	 * 日期处理方法
	 */
	public static String  getDateBefore(Date d, int day) {  
        Calendar now = Calendar.getInstance();  
        now.setTime(d);  
        now.set(Calendar.DATE, now.get(Calendar.DATE) + day);
        SimpleDateFormat dateFormater = new SimpleDateFormat("yyyy-MM-dd 00:00:00");
        
        return dateFormater.format(now.getTime());  
    }
	
	/**
	 * 模拟舆情趋势
	 * @return
	 */
	public PublicAffairsResponse mockTrendData(){
		PublicAffairsResponse publicAffairsResponse = new PublicAffairsResponse();
		LocSentimentVo iocSentimentVo = new LocSentimentVo();
		iocSentimentVo.setCityNameZh("北京");
		iocSentimentVo.setPositiveCnt(100);
		iocSentimentVo.setNegativeCnt(80);
		
		LocSentimentVo iocSentimentVo2 = new LocSentimentVo();
		iocSentimentVo2.setCityNameZh("上海");
		iocSentimentVo2.setPositiveCnt(90);
		iocSentimentVo2.setNegativeCnt(79);
		
		LocSentimentVo iocSentimentVo3 = new LocSentimentVo();
		iocSentimentVo3.setCityNameZh("广州");
		iocSentimentVo3.setPositiveCnt(110);
		iocSentimentVo3.setNegativeCnt(80);
		
		LocSentimentVo iocSentimentVo4 = new LocSentimentVo();
		
		iocSentimentVo4.setCityNameZh("深圳");
		iocSentimentVo4.setPositiveCnt(140);
		iocSentimentVo4.setNegativeCnt(85);
		
		LocSentimentVo iocSentimentVo5 = new LocSentimentVo();
		iocSentimentVo5.setCityNameZh("郑州");
		iocSentimentVo5.setPositiveCnt(60);
		iocSentimentVo5.setNegativeCnt(55);
		LocSentimentVo iocSentimentVo6 = new LocSentimentVo();
		iocSentimentVo6.setCityNameZh("济南");
		iocSentimentVo6.setPositiveCnt(115);
		iocSentimentVo6.setNegativeCnt(90);
		List<LocSentimentVo> locSentimentCount = new ArrayList<LocSentimentVo>();
		locSentimentCount.add(iocSentimentVo);
		locSentimentCount.add(iocSentimentVo2);
		locSentimentCount.add(iocSentimentVo3);
		locSentimentCount.add(iocSentimentVo4);
		locSentimentCount.add(iocSentimentVo5);
		locSentimentCount.add(iocSentimentVo6);
		publicAffairsResponse.setLocSentimentCount(locSentimentCount);
		return publicAffairsResponse;
	}
	/**
	 * 媒体覆盖
	 * @return
	 */
	public PublicAffairsResponse mockMediaData(){
		PublicAffairsResponse publicAffairsResponse = new PublicAffairsResponse();
		MediaCoverageVo mediaCoverageVo = new MediaCoverageVo();
		/**
		 * {value:20.5, name:'微信'},
                {value:6.1, name:'APP'},
                {value:41.1, name:'新闻'},
                {value:2.5, name:'问答'},
                {value:5.4, name:'博客'},
                {value:24, name:'论坛'}
		 */
		mediaCoverageVo.setName("微信");
		mediaCoverageVo.setCount(20);
		MediaCoverageVo mediaCoverageVo2 = new MediaCoverageVo();
		mediaCoverageVo2.setName("APP");
		mediaCoverageVo2.setCount(18);
		MediaCoverageVo mediaCoverageVo3 = new MediaCoverageVo();
		mediaCoverageVo3.setName("新闻");
		mediaCoverageVo3.setCount(22);
		MediaCoverageVo mediaCoverageVo4 = new MediaCoverageVo();
		mediaCoverageVo4.setName("问答");
		mediaCoverageVo4.setCount(15);
		MediaCoverageVo mediaCoverageVo5 = new MediaCoverageVo();
		mediaCoverageVo5.setName("博客");
		mediaCoverageVo5.setCount(19);
		MediaCoverageVo mediaCoverageVo6 = new MediaCoverageVo();
		mediaCoverageVo6.setName("论坛");
		mediaCoverageVo6.setCount(21);
		List<MediaCoverageVo> mediaCoverage = new ArrayList<MediaCoverageVo>();
		mediaCoverage.add(mediaCoverageVo);
		mediaCoverage.add(mediaCoverageVo2);
		mediaCoverage.add(mediaCoverageVo3);
		mediaCoverage.add(mediaCoverageVo4);
		mediaCoverage.add(mediaCoverageVo5);
		mediaCoverage.add(mediaCoverageVo6);
		publicAffairsResponse.setMediaCoverage(mediaCoverage);
		return publicAffairsResponse;
	}
	
}
