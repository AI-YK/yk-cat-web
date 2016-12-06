package com.ai.yk.protal.web.service.mycustomized;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.CollectionUtil;
import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiUrlConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.area.AreaVo;
import com.ai.yk.protal.web.content.event.EventListMessage;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.TypeReference;

@Service
public class MycustomizedService {
	/**
	 * 查询个人定制详情
	 */
	public YJResponse<MyCustomizedVo> queryEventDataEntityForSrcId(YJRequest<EventListMessage> req) {
		String url = YeesightApiUrlConstants.getApiUrl(YeesightApiUrlConstants.API_YEESIGHTFORNEWS_QUERYMYCUSTOMIZED);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			YJResponse<MyCustomizedVo> res = 
					JSON.parseObject(result, new TypeReference<YJResponse<MyCustomizedVo>>(){});
			setCityInfo(res,result);
			return res;
		}
		return null;
	}
	/**
	 * 设置省份城市信息
	 * @param res
	 * @param result
	 */
	private void setCityInfo(YJResponse<MyCustomizedVo> res,String result){
		JSONArray countryList =	JSON.parseObject(result).getJSONObject("data")
				.getJSONArray("countryList");
		if(!CollectionUtil.isEmpty(countryList)){
			//国家列表
			JSONObject country =  (JSONObject)countryList.get(0);
			JSONArray provinceList = country.getJSONArray("cityList");
			if(!CollectionUtil.isEmpty(provinceList)){
				//省份
				JSONObject provinceObject =  (JSONObject)provinceList.get(0);
				AreaVo province = JSON.parseObject(JSON.toJSONString(provinceObject), AreaVo.class);
				res.getData().setProvince(province);
				JSONArray cityList= provinceObject.getJSONArray("cityList");
				if(!CollectionUtil.isEmpty(cityList)){
					//城市
					AreaVo city = JSON.parseObject(JSON.toJSONString(cityList.get(0)), AreaVo.class);
					res.getData().setCity(city);
				}
			}
		}
	}
	public static void main(String[] args) {
       //String result ="{'head':{'result':'true','message':'操作成功'},'data':{'id':16,'fieldType':'自然灾害','countryList':[{'id':22,'zhCountry':'中国','enCountry':'china','countryCode':'zh','longitude':'12.12','latitude':'13.13','pid':16,'businessId':null,'cityList':[{'id':52,'nameZh':'北京','nameEn':'beijing','type':2,'level':1,'code':'hunan','longitude':'12.12','latitude':'13.13','pid':22,'businessId':null,'cityList':[{'id':51,'nameZh':'长沙','nameEn':'changsha','type':2,'level':2,'code':'hunan','longitude':'12.12','latitude':'13.13','pid':50,'businessId':null,'cityList':null}]},{'id':50,'nameZh':'湖南','nameEn':'hunan','type':1,'level':1,'code':'hunan','longitude':'12.12','latitude':'13.13','pid':22,'businessId':null,'cityList':[{'id':51,'nameZh':'长沙','nameEn':'changsha','type':2,'level':2,'code':'hunan','longitude':'12.12','latitude':'13.13','pid':50,'businessId':null,'cityList':null}]}]}]}}";
		
	}
}
