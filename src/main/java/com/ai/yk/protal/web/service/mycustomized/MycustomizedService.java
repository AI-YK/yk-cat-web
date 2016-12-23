package com.ai.yk.protal.web.service.mycustomized;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.CollectionUtil;
import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.area.AreaVo;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedListMessage;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedListResponse;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedMessage;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.content.savemyCustomized.SaveMyCustomizedMessage;
import com.ai.yk.protal.web.content.savemyCustomized.SaveMyCustomizedResponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.TypeReference;


@Service
public class MycustomizedService {
    private static final Logger LOGGER = LoggerFactory.getLogger(MycustomizedService.class);

	/**
	 * 创建/修改   个人定制接口
	 */
	public YJResponse<String> saveMyCustomized(YJRequest<SaveMyCustomizedMessage> req) {
		
		String url = null;
		
		if(StringUtil.isBlank(req.getMessage().getSrcId())){
			url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_YEESIGHTFORNEWS_ADDMYCUSTOMIZED);
		}else{
			url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_YEESIGHTFORNEWS_UPDATEMYCUSTOMIZED);
		}
		
		String json = change(req);
		String result =null;
		try {
			result = HttpClientUtil.sendPostRequest(url,json);
		} catch (Exception e) {
			
		}
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<String>>(){});
			
		}
		return null;
	}
	
	
	private String change(YJRequest<SaveMyCustomizedMessage> req){
		String json = JSON.toJSONString(req);
		JSONObject all = JSON.parseObject(json);
		JSONObject jsonObject = all.getJSONObject("message");
		jsonObject.remove("provinceCode");
		jsonObject.remove("cityList");
		List<Object> countryList = new ArrayList<>();
		Map<String,Object> country = new HashMap<>();
		country.put("zhCountry", "中国");
		country.put("enCountry", "china");
		country.put("countryCode", YeesightApiConstants.API_CHINA_CODE);
		SaveMyCustomizedMessage message = req.getMessage();
		
		List<Map<String,Object>> cityList = new ArrayList<>();
		if(!CollectionUtil.isEmpty(message.getCityList())){
			for(String cid :message.getCityList()){
				Map<String,Object> c = new HashMap<>();
				c.put("provinceCode",message.getProvinceCode());
				c.put("code", cid);
				
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
	 * 查询个人定制列表
	 */
	public YJResponse<MyCustomizedListResponse> queryMyCustomizedList(YJRequest<MyCustomizedListMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_YEESIGHTFORNEWS_MYCUSTOMIZEDLIST);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			YJResponse<MyCustomizedListResponse> res = 
					JSON.parseObject(result, new TypeReference<YJResponse<MyCustomizedListResponse>>(){});
			return res;
		}
		return null;
	}
	/**
	 * 查询个人定制详情
	 */
	public YJResponse<MyCustomizedVo> queryMyCustomized(YJRequest<MyCustomizedListMessage> req) {
		YJResponse<MyCustomizedListResponse> myCustomizedList = queryMyCustomizedList(req);
		if(myCustomizedList==null||myCustomizedList.getData()==null
				||CollectionUtil.isEmpty(myCustomizedList.getData().getResults())){
			LOGGER.info("查询个人定制列表为空");
			return null;
		}
		String srcId = myCustomizedList.getData().getResults().get(0).getSrcId();
		YJRequest<MyCustomizedMessage> req2 = new YJRequest<>();
		MyCustomizedMessage m = new MyCustomizedMessage();
		m.setSrcId(srcId);
		req2.setMessage(m);
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_YEESIGHTFORNEWS_QUERYMYCUSTOMIZED);
		String result =HttpClientUtil.getYJBaseResponse(url,req2);
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
				List<AreaVo> allCityList = new ArrayList<>();
				for(int i=0; i<provinceList.size();i++){
					provinceObject =  (JSONObject)provinceList.get(i);
					JSONArray cityList= provinceObject.getJSONArray("cityList");
					if(!CollectionUtil.isEmpty(cityList)){
						//城市
						List<AreaVo> city = JSON.parseArray(JSON.toJSONString(cityList), AreaVo.class);
						allCityList.addAll(city);
					}
				}
				res.getData().setCity(allCityList);
			}
		}
	}
	public static void main(String[] args) {
		MycustomizedService service = new MycustomizedService();
		YJRequest<MyCustomizedListMessage> req = new YJRequest<MyCustomizedListMessage>();
		MyCustomizedListMessage message = new MyCustomizedListMessage();
		message.setCreateId(1);
		req.setMessage(message);
		//System.out.println(JSON.toJSON(req));
		YJResponse<MyCustomizedVo> res = service.queryMyCustomized(req);
		//System.out.println(JSON.toJSONString(res));
	}
}
