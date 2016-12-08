package com.ai.yk.protal.web.controller.common;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.common.DicVo;
import com.ai.yk.protal.web.content.queryAreaList.QueryAreaListVo;
import com.ai.yk.protal.web.content.savemyCustomized.SaveMyCustomizedMessage;
import com.ai.yk.protal.web.content.savemyCustomized.SaveMyCustomizedResponse;
import com.ai.yk.protal.web.model.user.SSOClientUser;
import com.ai.yk.protal.web.service.common.CommonService;
import com.ai.yk.protal.web.service.common.QueryAreaListService;
import com.ai.yk.protal.web.service.mycustomized.MycustomizedService;
import com.ai.yk.protal.web.utils.SessionUtil;

@Controller
@RequestMapping("/common")
public class AreaController {
	/**
	 * 配置信息省市
	 */
	@Autowired
	QueryAreaListService queryAreaListService;
	
	@Autowired
	CommonService commonService;
	@Autowired
	MycustomizedService mycustomizedService;
	/**
	 * 获得省列表
	 * 
	 */
	  @RequestMapping("/getProvince")
	  @ResponseBody
	  public ResponseData<Map<String,List<QueryAreaListVo>>> getProvice(
			  @RequestParam(value="parentCode",defaultValue="as_100000") String parentCode,
			  @RequestParam(value="classify",defaultValue="province") String classify
			  ){
		  /*QueryAreaListMessage queryAreaListMessage = new  QueryAreaListMessage();
		  queryAreaListMessage.setParentCode(parentCode);
		  queryAreaListMessage.setClassify(classify);
		  YJRequest<QueryAreaListMessage> req = new YJRequest<QueryAreaListMessage>();
		  req.setMessage(queryAreaListMessage);
		  YJResponse<QueryAreaListReponse> res = queryAreaListService.queryEventDataList(req);
		  List<QueryAreaListVo> areaList = (List<QueryAreaListVo>) res.getData();
		  
		  Map<String,List<QueryAreaListVo>> map = new HashMap<String,List<QueryAreaListVo>>();
		  */
		  Map<String,List<QueryAreaListVo>> map = mockData();
		  
		  return new ResponseData<Map<String,List<QueryAreaListVo>>>(ResponseData.AJAX_STATUS_SUCCESS,"查询所有省",map);
	    }
	    
	  public Map<String,List<QueryAreaListVo>> mockData(){
		  QueryAreaListVo queryAreaListVo  =new QueryAreaListVo();
		  QueryAreaListVo queryAreaListVo2  =new QueryAreaListVo();
		  QueryAreaListVo queryAreaListVo3  =new QueryAreaListVo();
		  QueryAreaListVo queryAreaListVo4  =new QueryAreaListVo();
		  QueryAreaListVo queryAreaListVo5  =new QueryAreaListVo();
		  QueryAreaListVo queryAreaListVo6  =new QueryAreaListVo();
		  QueryAreaListVo queryAreaListVo7  =new QueryAreaListVo();
		  QueryAreaListVo queryAreaListVo8  =new QueryAreaListVo();
		  QueryAreaListVo queryAreaListVo9  =new QueryAreaListVo();
		  QueryAreaListVo queryAreaListVo10  =new QueryAreaListVo();
		  QueryAreaListVo queryAreaListVo11  =new QueryAreaListVo();
		  QueryAreaListVo queryAreaListVo12  =new QueryAreaListVo();
		  
		  queryAreaListVo.setId("1");
		  queryAreaListVo.setCode("1");
		  queryAreaListVo.setName("安徽");
		  
		  queryAreaListVo2.setId("2");
		  queryAreaListVo2.setCode("2");
		  queryAreaListVo2.setName("北京");
		  
		  queryAreaListVo3.setId("3");
		  queryAreaListVo3.setCode("3");
		  queryAreaListVo3.setName("重庆");
		  
		  queryAreaListVo4.setId("4");
		  queryAreaListVo4.setCode("4");
		  queryAreaListVo4.setName("湖南");
		  
		  queryAreaListVo5.setId("5");
		  queryAreaListVo5.setCode("5");
		  queryAreaListVo5.setName("吉林");
		  
		  queryAreaListVo6.setId("6");
		  queryAreaListVo6.setCode("6");
		  queryAreaListVo6.setName("湖北");
		  
		  queryAreaListVo7.setId("7");
		  queryAreaListVo7.setCode("7");
		  queryAreaListVo7.setName("上海");
		  
		  queryAreaListVo8.setId("8");
		  queryAreaListVo8.setCode("8");
		  queryAreaListVo8.setName("山东");
		  
		  queryAreaListVo9.setId("9");
		  queryAreaListVo9.setCode("9");
		  queryAreaListVo9.setName("山西");
		  
		  queryAreaListVo10.setId("10");
		  queryAreaListVo10.setCode("10");
		  queryAreaListVo10.setName("浙江");
		  
		  queryAreaListVo11.setId("11");
		  queryAreaListVo11.setCode("11");
		  queryAreaListVo11.setName("西藏");
		  
		  queryAreaListVo12.setId("12");
		  queryAreaListVo12.setCode("12");
		  queryAreaListVo12.setName("新疆");
		  
		  List<QueryAreaListVo> list1 = new ArrayList<QueryAreaListVo>();
		  List<QueryAreaListVo> list2 = new ArrayList<QueryAreaListVo>();
		  List<QueryAreaListVo> list3 = new ArrayList<QueryAreaListVo>();
		  List<QueryAreaListVo> list4 = new ArrayList<QueryAreaListVo>();
		  list1.add(queryAreaListVo);
		  list1.add(queryAreaListVo2);
		  list1.add(queryAreaListVo3);
		  
		  list2.add(queryAreaListVo4);
		  list2.add(queryAreaListVo5);
		  list2.add(queryAreaListVo6);
		  
		  list3.add(queryAreaListVo7);
		  list3.add(queryAreaListVo8);
		  list3.add(queryAreaListVo9);
		  
		  list4.add(queryAreaListVo10);
		  list4.add(queryAreaListVo11);
		  list4.add(queryAreaListVo12);
		  Map<String,List<QueryAreaListVo>> map = new HashMap<String,List<QueryAreaListVo>>();
		  map.put("1", list1);
		  map.put("2", list2);
		  map.put("3", list3);
		  map.put("4", list4);
		  return map;
	  }
	  
	  /**
		 * 获得市列表
		 * 
		 */
		  @RequestMapping("/getCity")
		  @ResponseBody
		  public ResponseData<List<QueryAreaListVo>> getCity(
				  @RequestParam(value="parentCode",defaultValue="") String parentCode,
				  @RequestParam(value="classify",defaultValue="city") String classify
				  ){
			 /* QueryAreaListMessage queryAreaListMessage = new  QueryAreaListMessage();
			  queryAreaListMessage.setParentCode(parentCode);
			  queryAreaListMessage.setClassify(classify);
			  YJRequest<QueryAreaListMessage> req = new YJRequest<QueryAreaListMessage>();
			  req.setMessage(queryAreaListMessage);
			  
			  YJResponse<QueryAreaListReponse> res = queryAreaListService.queryEventDataList(req);
			  List<QueryAreaListVo> list = (List<QueryAreaListVo>) res.getData();*/
			  List<QueryAreaListVo> list = mockCity();
			  return new ResponseData<List<QueryAreaListVo>>(ResponseData.AJAX_STATUS_SUCCESS,"获得所有城市",list);
		  }
		  
		  public List<QueryAreaListVo> mockCity(){
			  QueryAreaListVo vo = new QueryAreaListVo();
			  QueryAreaListVo vo2 = new QueryAreaListVo();
			  QueryAreaListVo vo3 = new QueryAreaListVo();
			  vo.setId("1");
			  vo.setCode("1");
			  vo.setName("济南");
			  
			  vo2.setId("2");
			  vo2.setCode("2");
			  vo2.setName("青岛");
			  
			  vo3.setId("3");
			  vo3.setCode("3");
			  vo3.setName("临沂");
			  
			  List<QueryAreaListVo> list = new  ArrayList<QueryAreaListVo>();
			  list.add(vo);
			  list.add(vo2);
			  list.add(vo3);
			  return list;
		  }
		  
		  /**
			 * 获得领域分类
			 * 
			 */
		  @RequestMapping("/getDic")
		  @ResponseBody
		  public ResponseData<List<DicVo>> getDic(
				  @RequestParam(value="type",defaultValue="YQFL") String type,
				  @RequestParam(value="language",defaultValue="zh") String language
				  ){
			 /* DicMessage dicMessage = new DicMessage();
			  dicMessage.setLanguage(language);
			  dicMessage.setType(type);
			  YJRequest<DicMessage> req = new YJRequest<DicMessage>();
			  req.setMessage(dicMessage);
			  YJResponse<DicListResonse> res =  commonService.queryDicByTypeAndLanguageForNews(req);
			  List<DicVo> list = (List<DicVo>) res.getData();*/
			  List<DicVo> list= mockDic();
			  return new ResponseData<List<DicVo>>(ResponseData.AJAX_STATUS_SUCCESS,"获得领域分类",list);
		  }
		  
		  public List<DicVo> mockDic(){
			  DicVo dicVo = new DicVo();
			  dicVo.setDicName("政治治理");
			  dicVo.setDicValue("1");
			  dicVo.setLanguage("zh");
			  
			  DicVo dicVo2 = new DicVo();
			  dicVo2.setDicName("官员腐败");
			  dicVo2.setDicValue("2");
			  dicVo2.setLanguage("zh");
			  
			  DicVo dicVo3 = new DicVo();
			  dicVo3.setDicName("公共安全");
			  dicVo3.setDicValue("3");
			  dicVo3.setLanguage("zh");
			  
			  DicVo dicVo4 = new DicVo();
			  dicVo4.setDicName("司法公正");
			  dicVo4.setDicValue("4");
			  dicVo4.setLanguage("zh");
			  
			  DicVo dicVo5 = new DicVo();
			  dicVo5.setDicName("伦理道德");
			  dicVo5.setDicValue("5");
			  dicVo5.setLanguage("zh");
			  List<DicVo> list = new ArrayList<DicVo>();
			  list.add(dicVo);
			  list.add(dicVo2);
			  list.add(dicVo3);
			  list.add(dicVo4);
			  list.add(dicVo5);
			  return list;
		  }
		  
		  /**
			 * 保存配置信息
			 * 
			 */
		  @RequestMapping("/saveConf")
		  @ResponseBody
		  public ResponseData<SaveMyCustomizedResponse> saveMyCustomized(
				  @RequestParam(value="sourceSystem",defaultValue="") String sourceSystem,
				  @RequestParam(value="provinceCode",defaultValue="") String provinceCode,
				  @RequestParam(value="interestStr",defaultValue="") String interestStr,
				  @RequestParam(value="cityStr",defaultValue="") String cityStr,
				  @RequestParam(value="srcID",defaultValue="") String srcID  
				  ){
			  SSOClientUser clientUser = SessionUtil.getLoginUser();
			  SaveMyCustomizedMessage saveMyCustomizedMessage = new SaveMyCustomizedMessage();
			  saveMyCustomizedMessage.setCreateId(clientUser.getUserId());
			  List<String> interestList=new ArrayList<String>();
			  String[] interestArr;
			  if(interestStr.contains(",")){
				  interestArr = interestStr.split(",");
				  interestList = java.util.Arrays.asList(interestArr);
			  }
			  List<String> cityList=new ArrayList<String>();
			  String[] cityArr;
			  if(interestStr.contains(",")){
				  cityArr = interestStr.split(",");
				  cityList =java.util.Arrays.asList(cityArr);
			  }
			  saveMyCustomizedMessage.setCityList(cityList);
			  saveMyCustomizedMessage.setInterestList(interestList);
			  saveMyCustomizedMessage.setProvinceCode(provinceCode);
			  saveMyCustomizedMessage.setSourceSystem(sourceSystem);
			  saveMyCustomizedMessage.setSrcID(srcID);
			  YJRequest<SaveMyCustomizedMessage> req = new YJRequest<SaveMyCustomizedMessage>();
			  req.setMessage(saveMyCustomizedMessage);
//			  YJResponse<SaveMyCustomizedResponse> res= mycustomizedService.saveMyCustomized(req);
			  YJResponse<SaveMyCustomizedResponse> res = new YJResponse<SaveMyCustomizedResponse>();
			  SaveMyCustomizedResponse  saveMyCustomizedResponse =  res.getData();
			  return new ResponseData<SaveMyCustomizedResponse>(ResponseData.AJAX_STATUS_SUCCESS,"保存配置信息成功",null);
				
		  }
				  
		  
}
