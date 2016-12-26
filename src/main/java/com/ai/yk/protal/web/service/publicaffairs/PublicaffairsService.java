package com.ai.yk.protal.web.service.publicaffairs;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.CollectionUtil;
import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.ResponseHead;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.publicaffairs.IocSentimentVo;
import com.ai.yk.protal.web.content.publicaffairs.MediaCoverageVo;
import com.ai.yk.protal.web.content.publicaffairs.PublicAffairsMessage;
import com.ai.yk.protal.web.content.publicaffairs.PublicAffairsResponse;
import com.ai.yk.protal.web.content.thematicAnalysis.GenderVo;
import com.ai.yk.protal.web.content.thematicAnalysis.ListNCSDVo;
import com.ai.yk.protal.web.content.thematicAnalysis.ThematicAnalysisMessage;
import com.ai.yk.protal.web.content.thematicAnalysis.ThematicAnalysisResponse;
import com.ai.yk.protal.web.service.thematicAnalysis.ThematicAnalysisService;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.ai.yk.protal.web.utils.ReflectUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

@Service
public class PublicaffairsService {
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
			message.setModelNo(Arrays.asList(msg.getModelNo().split(",")));
		}
		if (!StringUtil.isBlank(msg.getBeginTime())) {
			message.setStartDate(msg.getBeginTime());
		}
		if (!StringUtil.isBlank(msg.getEndTime())) {
			message.setEndDate(msg.getEndTime());
		}
		req.setMessage(message);
		YJResponse<ThematicAnalysisResponse> res = thematicAnalysisService
				.getAnalysis(req);
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
	}

	/**
	 * 设置舆情走势
	 * 
	 * @param responseData
	 * @param resultData
	 */
	private void setLocSentimentCount(ThematicAnalysisResponse responseData,
			PublicAffairsResponse resultData) {
		List<ListNCSDVo> ListNCSD = responseData.getListNCSD();
		if (CollectionUtil.isEmpty(ListNCSD)) {
			return;
		}
		List<IocSentimentVo> locSentimentCount = new ArrayList<>();
		for (ListNCSDVo v : ListNCSD) {
			IocSentimentVo vo = new IocSentimentVo();
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
}
