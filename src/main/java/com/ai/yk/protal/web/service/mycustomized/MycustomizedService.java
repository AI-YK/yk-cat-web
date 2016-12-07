package com.ai.yk.protal.web.service.mycustomized;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.CollectionUtil;
import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiUrlConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.addmyCustomized.AddMyCustomizedMessage;
import com.ai.yk.protal.web.content.addmyCustomized.AddMyCustomizedResponse;
import com.ai.yk.protal.web.content.addmyCustomized.City;
import com.ai.yk.protal.web.content.area.AreaVo;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedMessage;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.TypeReference;


@Service
public class MycustomizedService {
	
	/**
	 * 创建/修改   个人定制接口
	 */
	public YJResponse<AddMyCustomizedResponse> addMyCustomized(YJRequest<AddMyCustomizedMessage> req) {
		
		String url = null;
		
		if(StringUtil.isBlank(req.getMessage().getSrcID())){
			url = YeesightApiUrlConstants.getApiUrl(YeesightApiUrlConstants.API_YEESIGHTFORNEWS_ADDMYCUSTOMIZED);
		}else{
			url = YeesightApiUrlConstants.getApiUrl(YeesightApiUrlConstants.API_YEESIGHTFORNEWS_UPDATEMYCUSTOMIZED);
		}
		
		String json = change(req);
		String result =null;
		try {
			result = HttpClientUtil.sendPostRequest(url,json);
		} catch (Exception e) {
			
		}
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<AddMyCustomizedResponse>>(){});
			
		}
		return null;
	}
	
	
	private String change(YJRequest<AddMyCustomizedMessage> req){
		String json = JSON.toJSONString(req);
		JSONObject all = JSON.parseObject(json);
		JSONObject jsonObject = all.getJSONObject("message");
		jsonObject.remove("zhProvince");
		jsonObject.remove("enProvince");
		jsonObject.remove("provinceCode");
		jsonObject.remove("cityList");
		List<Object> countryList = new ArrayList<>();
		Map<String,Object> country = new HashMap<>();
		country.put("zhCountry", "中国");
		country.put("enCountry", "china");
		country.put("countryCode", "zh");
		AddMyCustomizedMessage message = req.getMessage();
		
		List<Map<String,Object>> cityList = new ArrayList<>();
		if(!CollectionUtil.isEmpty(message.getCityList())){
			for(City city :message.getCityList()){
				Map<String,Object> c = new HashMap<>();
				c.put("provinceCode", message.getProvinceCode());
				c.put("zhProvince", message.getZhProvince());
				c.put("enProvince", message.getEnProvince());
				c.put("code", city.getCode());
				c.put("zhCity", city.getZhCity());
				c.put("enCity",city.getEnCity());
				cityList.add(c);
			}
			
		}
		country.put("cityList", cityList);
		countryList.add(country);
		jsonObject.put("countryList", countryList);
		all.put("message", jsonObject);
		return JSON.toJSONString(all);
	}
	
	/**
	 * 查询个人定制详情
	 */
	public YJResponse<MyCustomizedVo> queryEventDataEntityForSrcId(YJRequest<MyCustomizedMessage> req) {
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
		
	}
}
