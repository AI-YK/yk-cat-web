package com.ai.yk.protal.web.controller.common;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.common.DicListResonse;
import com.ai.yk.protal.web.content.common.DicMessage;
import com.ai.yk.protal.web.content.common.DicVo;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedListMessage;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.content.queryAreaList.QueryAreaListMessage;
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
public class BaseInfoController {
	
	private static final Logger log = LoggerFactory.getLogger(BaseInfoController.class);
	
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
		  QueryAreaListMessage queryAreaListMessage = new  QueryAreaListMessage();
		  queryAreaListMessage.setParentCode(parentCode);
		  queryAreaListMessage.setClassify(classify);
		  YJRequest<QueryAreaListMessage> req = new YJRequest<QueryAreaListMessage>();
		  req.setMessage(queryAreaListMessage);
		  YJResponse<List<QueryAreaListVo>> res = queryAreaListService.QueryAreaList(req);
		  
		  Map<String,List<QueryAreaListVo>> map = new HashMap<String,List<QueryAreaListVo>>();
		  
		  List<QueryAreaListVo> areaListAll =  res.getData();
		  
		  List<QueryAreaListVo> areaListA = new ArrayList<QueryAreaListVo>();
		  
		  List<QueryAreaListVo> areaListH = new ArrayList<QueryAreaListVo>();
		  
		  List<QueryAreaListVo> areaListL = new ArrayList<QueryAreaListVo>();
		  
		  List<QueryAreaListVo> areaListT = new ArrayList<QueryAreaListVo>();
		  
		  for(QueryAreaListVo vo : areaListAll){
			  String firstEn = vo.getNameEnFirst().toLowerCase();
			  if("abcdefg".contains(firstEn)){
				  areaListA.add(vo);
			  }else if("hijk".contains(firstEn)){
				  areaListH.add(vo);
			  }else if("lmiopqrs".contains(firstEn)){
				  areaListL.add(vo);
			  }else if("tuvwxyz".contains(firstEn)){
				  areaListT.add(vo);
			  }
		  }
		  map.put("1", areaListA);
		  map.put("2", areaListH);
		  map.put("3",areaListL);
		  map.put("4",areaListT);
		  
		//  Map<String,List<QueryAreaListVo>> map = mockData();
		  
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
				  /**上级编码**/
				  @RequestParam(value="parentCode",defaultValue="") String parentCode,
				  /**所属分类（continent：大洲   country：国家   province：省份  city:城市   是否必填：Y**/
				  @RequestParam(value="classify",defaultValue="city") String classify
				  ){
			  QueryAreaListMessage queryAreaListMessage = new  QueryAreaListMessage();
			  queryAreaListMessage.setParentCode(parentCode);
			  queryAreaListMessage.setClassify(classify);
			  YJRequest<QueryAreaListMessage> req = new YJRequest<QueryAreaListMessage>();
			  req.setMessage(queryAreaListMessage);
			  YJResponse<List<QueryAreaListVo>> res = queryAreaListService.QueryAreaList(req);
			  List<QueryAreaListVo> list = (List<QueryAreaListVo>) res.getData();
			 // List<QueryAreaListVo> list = mockCity();
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
			 * 获得数据字典信息
			 * 
			 */
		  @RequestMapping("/getDic")
		  @ResponseBody
		  public ResponseData<List<DicVo>> getDic(
				  	/**
					 * 领域分类 YQFL
					 * 行业分类 HYFL
					 * 数据源影响力 SJYYX
					 * 新闻热点 TJSJY 
					 * 社交热点 SJLY 
					 */
				  /**
					 * 类别（ HYFL 行业分类 SJYYXL 数据源影响力 QY 区域 GJ 国家 SJQYJJZZ 世界区域经济组织 YYTX 语言体系 ）
					 */
				  @RequestParam(value="type",defaultValue="YQFL") String type,
				  /**
					 * 语言（如zh、en）
					 */
				  @RequestParam(value="language",defaultValue="zh") String language
				  ){
			  DicMessage dicMessage = new DicMessage();
			  dicMessage.setLanguage(language);
			  dicMessage.setType(type);
			  YJRequest<DicMessage> req = new YJRequest<DicMessage>();
			  req.setMessage(dicMessage);
			  YJResponse<DicListResonse> res =  commonService.queryDicByTypeAndLanguageForNews(req);
			  DicListResonse dicListResonse = res.getData();
			  List<DicVo> list = dicListResonse.getResults();
			  /*List<DicVo> list = new ArrayList<DicVo>();
			  if(type.equals("YQFL")){
				  list = mockDic();
			  }else if(type.equals("TJSJY")){
				  list = mockNewsDic();
			  }else if(type.equals("SJLY")){
				  list = mockNewsDic();
			  }*/
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
		  /**新闻热点行业分类**/
		  public List<DicVo> mockNewsDic(){
			  DicVo dicVo = new DicVo();
			  dicVo.setDicName("新浪");
			  dicVo.setDicValue("1");
			  dicVo.setLanguage("zh");
			  
			  DicVo dicVo2 = new DicVo();
			  dicVo2.setDicName("搜狐");
			  dicVo2.setDicValue("2");
			  dicVo2.setLanguage("zh");
			  
			  DicVo dicVo3 = new DicVo();
			  dicVo3.setDicName("网易");
			  dicVo3.setDicValue("3");
			  dicVo3.setLanguage("zh");
			  
			  DicVo dicVo4 = new DicVo();
			  dicVo4.setDicName("腾讯");
			  dicVo4.setDicValue("4");
			  dicVo4.setLanguage("zh");
			  
			  DicVo dicVo5 = new DicVo();
			  dicVo5.setDicName("南方网");
			  dicVo5.setDicValue("5");
			  dicVo5.setLanguage("zh");
			  
			  DicVo dicVo6 = new DicVo();
			  dicVo6.setDicName("人民网");
			  dicVo6.setDicValue("6");
			  dicVo6.setLanguage("zh");
			  
			  DicVo dicVo7 = new DicVo();
			  dicVo7.setDicName("央广网");
			  dicVo7.setDicValue("7");
			  dicVo7.setLanguage("zh");
			  
			  DicVo dicVo8 = new DicVo();
			  dicVo8.setDicName("北青网");
			  dicVo8.setDicValue("8");
			  dicVo8.setLanguage("zh");
			  
			  List<DicVo> list = new ArrayList<DicVo>();
			  list.add(dicVo);
			  list.add(dicVo2);
			  list.add(dicVo3);
			  list.add(dicVo4);
			  list.add(dicVo5);
			  list.add(dicVo6);
			  list.add(dicVo7);
			  list.add(dicVo8);
			  return list;
		  }
		  
		  /**社交热点行业分类**/
		  public List<DicVo> mockSocialDic(){
			  DicVo dicVo = new DicVo();
			  dicVo.setDicName("微信");
			  dicVo.setDicValue("1");
			  dicVo.setLanguage("zh");
			  
			  DicVo dicVo2 = new DicVo();
			  dicVo2.setDicName("微博");
			  dicVo2.setDicValue("2");
			  dicVo2.setLanguage("zh");
			  
			  DicVo dicVo3 = new DicVo();
			  dicVo3.setDicName("论坛");
			  dicVo3.setDicValue("3");
			  dicVo3.setLanguage("zh");
			  
			  List<DicVo> list = new ArrayList<DicVo>();
			  list.add(dicVo);
			  list.add(dicVo2);
			  list.add(dicVo3);
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
			  String[] interestArr = interestStr.split(",");
				  interestList = java.util.Arrays.asList(interestArr);
			  List<String> cityList=new ArrayList<String>();
			  	  String[] cityArr = interestStr.split(",");
				  cityList =java.util.Arrays.asList(cityArr);
			  saveMyCustomizedMessage.setCityList(cityList);
			  saveMyCustomizedMessage.setInterestList(interestList);
			  saveMyCustomizedMessage.setProvinceCode(provinceCode);
			  saveMyCustomizedMessage.setSourceSystem(sourceSystem);
			  String userId = clientUser.getUserId();
			  saveMyCustomizedMessage.setSrcId(srcID);
			  saveMyCustomizedMessage.setCreateId(userId);
			  YJRequest<SaveMyCustomizedMessage> req = new YJRequest<SaveMyCustomizedMessage>();
			  req.setMessage(saveMyCustomizedMessage);
			  YJResponse<SaveMyCustomizedResponse> res = mycustomizedService.saveMyCustomized(req);
			  if(res==null||res.getHead()==null){
				  log.error("系统异常，请联系管理员");
				  return new ResponseData<SaveMyCustomizedResponse>(ResponseData.AJAX_STATUS_FAILURE,"系统异常，请联系管理员",null);
			 
			  }
			  if("false".equals(res.getHead().getResult())){
				  log.error(res.getHead().getMessage());
				  return new ResponseData<SaveMyCustomizedResponse>(ResponseData.AJAX_STATUS_FAILURE,res.getHead().getMessage(),null);
			  }
			  SaveMyCustomizedResponse  saveMyCustomizedResponse =  res.getData();
			  
			  //获取保存的配置信息
			  YJRequest<MyCustomizedListMessage> customizedListMessageReq= new YJRequest<MyCustomizedListMessage>();
			  MyCustomizedListMessage customizedListMessage = new MyCustomizedListMessage();
		      customizedListMessage.setCreateId(Integer.valueOf(clientUser.getUserId()));
		      customizedListMessageReq.setMessage(customizedListMessage);
		      YJResponse<MyCustomizedVo> resp = mycustomizedService.queryMyCustomized(customizedListMessageReq);
			  if(resp!=null){
				  SessionUtil.setUserConfig(resp.getData());
			  }
			  return new ResponseData<SaveMyCustomizedResponse>(ResponseData.AJAX_STATUS_SUCCESS,"保存配置信息成功",saveMyCustomizedResponse);
				
		  }
				  
		  
}
