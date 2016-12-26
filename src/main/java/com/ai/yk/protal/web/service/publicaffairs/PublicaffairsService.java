package com.ai.yk.protal.web.service.publicaffairs;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.CollectionUtil;
import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.ResponseHead;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.publicaffairs.ListMediaVo;
import com.ai.yk.protal.web.content.publicaffairs.ListNSTVo;
import com.ai.yk.protal.web.content.publicaffairs.LocSentimentVo;
import com.ai.yk.protal.web.content.publicaffairs.MediaCoverageVo;
import com.ai.yk.protal.web.content.publicaffairs.PublicAffairsMessage;
import com.ai.yk.protal.web.content.publicaffairs.PublicAffairsResponse;
import com.ai.yk.protal.web.content.thematicAnalysis.GenderVo;
import com.ai.yk.protal.web.content.thematicAnalysis.NCSDVo;
import com.ai.yk.protal.web.content.thematicAnalysis.NMSDVo;
import com.ai.yk.protal.web.content.thematicAnalysis.NSTVo;
import com.ai.yk.protal.web.content.thematicAnalysis.ThematicAnalysisMessage;
import com.ai.yk.protal.web.content.thematicAnalysis.ThematicAnalysisResponse;
import com.ai.yk.protal.web.service.thematicAnalysis.ThematicAnalysisService;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.ai.yk.protal.web.utils.ReflectUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

@Service
public class PublicaffairsService {
	private static final Logger LOG = LoggerFactory
			.getLogger(PublicaffairsService.class);
	@Autowired
	ThematicAnalysisService thematicAnalysisService;

	/**
	 * 查询媒体覆盖，查询舆情走势
	 */
	public YJResponse<PublicAffairsResponse> queryMediaCoverageList(
			YJRequest<PublicAffairsMessage> req) {
		PublicAffairsMessage msg = req.getMessage();
		if (!StringUtil.isBlank(msg.getInfoId())) {
			// 专题模式
			return queryAnalysis(msg);
		}
		String url = YeesightApiConstants
				.getApiUrl(YeesightApiConstants.API_YEESIGHTFORPUBLICAFFAIRS_QUICKANALYZE);
		String result = HttpClientUtil.getYJBaseResponse(url, req);
		if (!StringUtil.isBlank(result)) {
			YJResponse<PublicAffairsResponse> res = JSON.parseObject(result,
					new TypeReference<YJResponse<PublicAffairsResponse>>() {
					});
			return res;
		}
		return null;
	}

	/**
	 * 专题分析模型
	 * 
	 * @param msg
	 * @return
	 */
	private YJResponse<PublicAffairsResponse> queryAnalysis(
			PublicAffairsMessage msg) {
		YJRequest<ThematicAnalysisMessage> req = new YJRequest<>();
		ThematicAnalysisMessage message = new ThematicAnalysisMessage();
		message.setInfoId(msg.getInfoId());
		if (!StringUtil.isBlank(msg.getModelNo())) {
			String[] temp = msg.getModelNo().split(",");
			List<String> modelNos = new ArrayList<>();
			for (String t : temp) {
				String model = changeModel(t);
				if (!StringUtil.isBlank(model)) {
					modelNos.add(model);
				}
			}
			message.setModelNo(modelNos);
		}
		if (!StringUtil.isBlank(msg.getBeginTime())) {
			message.setStartDate(msg.getBeginTime());
		}
		if (!StringUtil.isBlank(msg.getEndTime())) {
			message.setEndDate(msg.getEndTime());
		}
		req.setMessage(message);
		LOG.info("专题模式查询图表参数：\n" + JSON.toJSONString(req));
		YJResponse<ThematicAnalysisResponse> res = thematicAnalysisService
				.getAnalysis(req);
		LOG.info("专题模式查询图表返回：\n" + JSON.toJSONString(res));
		if (res == null)
			return null;
		ResponseHead responseHead = res.getHead();
		ThematicAnalysisResponse responseData = res.getData();
		PublicAffairsResponse resultData = new PublicAffairsResponse();
		if (resultData != null) {
			setData(responseData, resultData);
		}
		YJResponse<PublicAffairsResponse> res2 = new YJResponse<>();
		res2.setHead(responseHead);
		res2.setData(resultData);
		return res2;
	}

	/**
	 * 转换设置参数
	 * 
	 * @param responseData
	 * @param resultData
	 */
	private void setData(ThematicAnalysisResponse responseData,
			PublicAffairsResponse resultData) {
		setMediaCoverageVo(responseData, resultData);
		setLocSentimentCount(responseData, resultData);
		setListNST(responseData, resultData);
		setListMedia(responseData, resultData);
	}

	/**
	 * 设置媒体统计
	 * 
	 * @param responseData
	 * @param resultData
	 */
	private void setListMedia(ThematicAnalysisResponse responseData,
			PublicAffairsResponse resultData) {
		List<NMSDVo> listNMSDVo = responseData.getListNMSD();
		if (CollectionUtil.isEmpty(listNMSDVo)) {
			return;
		}
		List<ListMediaVo> listMedia = new ArrayList<>();
		for (NMSDVo v : listNMSDVo) {
			ListMediaVo vo = new ListMediaVo();
			vo.setCount(v.getCnt());
			vo.setMediaLevel(v.getMediaLevel());
			vo.setMediaName(v.getMediaName());
			listMedia.add(vo);
		}
		resultData.setListMedia(listMedia);
	}

	/**
	 * 设置时间趋势
	 * 
	 * @param responseData
	 * @param resultData
	 */
	private void setListNST(ThematicAnalysisResponse responseData,
			PublicAffairsResponse resultData) {
		List<NSTVo> listNST = responseData.getListNST();
		if (CollectionUtil.isEmpty(listNST)) {
			return;
		}
		List<ListNSTVo> listNSTVos = new ArrayList<>();
		for (NSTVo v : listNST) {
			ListNSTVo vo = new ListNSTVo();
			vo.setCount(v.getCount());
			vo.setCountNegative(vo.getCountNegative());
			vo.setCountNeutral(v.getCountNeutral());
			vo.setCountPositive(v.getCountPositive());
			vo.setDate(v.getDate());
			listNSTVos.add(vo);
		}
		resultData.setListNST(listNSTVos);
	}

	/**
	 * 设置舆情走势
	 * 
	 * @param responseData
	 * @param resultData
	 */
	private void setLocSentimentCount(ThematicAnalysisResponse responseData,
			PublicAffairsResponse resultData) {
		List<NCSDVo> listNCSD = responseData.getListNCSD();
		if (CollectionUtil.isEmpty(listNCSD)) {
			return;
		}
		List<LocSentimentVo> locSentimentCount = new ArrayList<>();
		for (NCSDVo v : listNCSD) {
			LocSentimentVo vo = new LocSentimentVo();
			vo.setCityNameZh(v.getCountryName());
			vo.setNegativeCnt(v.getCountNegative());
			vo.setPositiveCnt(v.getCountPositive());
			locSentimentCount.add(vo);
		}
		resultData.setLocSentimentCount(locSentimentCount);
	}

	/**
	 * 设置媒体覆盖
	 * 
	 * @param responseData
	 * @param resultData
	 */
	private void setMediaCoverageVo(ThematicAnalysisResponse responseData,
			PublicAffairsResponse resultData) {
		GenderVo gender = responseData.getGender();
		if (gender == null)
			return;
		Field[] fields = gender.getClass().getDeclaredFields();
		if (CollectionUtil.isEmpty(fields)) {
			return;
		}
		// String filedStrs = "twitter,weixin,facebook,weibo,news";
		List<MediaCoverageVo> mediaCoverage = new ArrayList<>();
		for (Field field : fields) {
			String fieldName = field.getName();
			String fieldType = field.getType().getName();
			// filedStrs.contains(fieldName)
			if ("java.lang.Integer".equals(fieldType)) {
				Integer fieldValue = (Integer) ReflectUtil.getFiledValue(
						gender, fieldName);
				MediaCoverageVo m = new MediaCoverageVo();
				fieldName = "news".equals(fieldName) ? "新闻" : fieldName;
				m.setName(fieldName);
				m.setCount(fieldValue);
				mediaCoverage.add(m);
			}

		}

		resultData.setMediaCoverage(mediaCoverage);
	}

	/**
	 * 转换模型
	 * 
	 * @param model
	 * @return
	 */
	private String changeModel(String model) {
		String result = model;
		switch (model) {
		case "mediaCoverage":
			result = "ListNCSD";
			break;
		case "locSentimentCount":
			result = "Gender";
			break;
		case "listNST":
			result = "ListNST";
			break;
		case "listMedia":
			result = "ListNMSD";
			break;
		}
		return result;
	}
}
