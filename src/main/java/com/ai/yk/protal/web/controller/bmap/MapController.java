package com.ai.yk.protal.web.controller.bmap;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.sdk.web.model.ResponseData;
import com.alibaba.fastjson.JSON;


@Controller
@RequestMapping("/bmap")
public class MapController {
	
	 /**
     * 获得分类数据 
     */
	/*
	GET /news/classify/selectAll HTTP/1.1
	 */
    @RequestMapping("/getSelectAllData")
    @ResponseBody
    public String getSelectAllData(){
    	String json = "";
    	return json;
    }
   /**
    * 获得
    * 
    */
    /*
    POST /news/topicListInteface HTTP/1.1
     */
    @RequestMapping("/getTopicListIntefaceData")
    @ResponseBody
    public String getTopicListIntefaceData(){
    	String json ="";
    			
    	return json;
    }
    
    //POST /news/getNewsHeatPointListInformationInteface HTTP/1.1
    @RequestMapping("/getNewsHeatPointListInformationInteface")
    @ResponseBody
    public ResponseData<String> getNewsHeatPointListInformationInteface(){
    	String json = "";
    	return new ResponseData<String>(ResponseData.AJAX_STATUS_SUCCESS,"查询成功",json);
    }
    
    /*
    POST /news/getNewsHeatPointListNewInteface HTTP/1.1
     */
    @RequestMapping("/getNewsHeatPointListNewInteface")
    @ResponseBody
    public ResponseData<String> getNewsHeatPointListNewInteface(){
    	String json = "";
    	return new ResponseData<String>(ResponseData.AJAX_STATUS_SUCCESS,"查询成功",json);
    }
    
    /*
    POST /news/getNewsHeatPointListInteface HTTP/1.1
	*/

    @RequestMapping("/getNewsHeatPointListInteface")
    @ResponseBody
    public ResponseData<String> getNewsHeatPointListInteface(){
    	String json = "";
    	return new ResponseData<String>(ResponseData.AJAX_STATUS_SUCCESS,"查询成功",json);
    }
    
    
    
    
}
