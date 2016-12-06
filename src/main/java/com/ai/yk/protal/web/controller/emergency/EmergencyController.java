package com.ai.yk.protal.web.controller.emergency;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.paas.ipaas.i18n.ResWebBundle;
import com.ai.yk.protal.web.controller.IndexController;

@Controller
public class EmergencyController {
/**
 * 突发事件	
	 */
		 private static final Logger LOGGER = LoggerFactory.getLogger(IndexController.class);
		    @Autowired
		    ResWebBundle rb;
	    /**
	     * 突发事件前四条列表
	     * @return
	     */
	    @RequestMapping("/getEmergencyIndexList")
	    @ResponseBody
	    public ResponseData<String> getEmergencyIndexList(){ 
	        return new ResponseData<String>(ResponseData.AJAX_STATUS_SUCCESS, "", "1223");
	        
	    }
}
