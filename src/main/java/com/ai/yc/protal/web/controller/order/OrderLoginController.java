package com.ai.yc.protal.web.controller.order;

import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.ai.opt.base.exception.BusinessException;
import com.ai.opt.base.vo.ResponseHeader;
import com.ai.opt.sdk.dubbo.util.DubboConsumerFactory;
import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.yc.order.api.ordersubmission.interfaces.IOrderSubmissionSV;
import com.ai.yc.order.api.ordersubmission.param.OrderSubmissionRequest;
import com.ai.yc.order.api.ordersubmission.param.OrderSubmissionResponse;
import com.ai.yc.protal.web.utils.UserUtil;
import com.alibaba.fastjson.JSONObject;

@Controller
@RequestMapping("/p/order")
public class OrderLoginController {
    private static final Logger LOGGER = LoggerFactory.getLogger(OrderLoginController.class);
    
    /**
     * 提交文本订单页面
     * @return
     */
    @RequestMapping(value = "/orderSubmit")
    public String submitTextView(HttpSession session){
        Long orderId;
        OrderSubmissionRequest subReq = new OrderSubmissionRequest();
        try {
            String userId = UserUtil.getUserId();
            subReq = (OrderSubmissionRequest) session.getAttribute("orderInfo");
            subReq.getBaseInfo().setUserId(userId);
            
            IOrderSubmissionSV orderSubmissionSV = DubboConsumerFactory.getService(IOrderSubmissionSV.class);
            OrderSubmissionResponse subRes = orderSubmissionSV.orderSubmission(subReq);
            ResponseHeader resHeader = subRes==null?null:subRes.getResponseHeader();
            LOGGER.info(JSONObject.toJSONString(subRes));
            //如果返回值为空,或返回信息中包含错误信息,则抛出异常
            if (subRes==null|| (resHeader!=null && (!resHeader.isSuccess()))){
                throw new BusinessException("","提交订单错误");
            }
            
            //保存orderId
            orderId = subRes.getOrderId();
        }catch (BusinessException e){
            LOGGER.error("提交订单失败:",e);
            if (subReq.getBaseInfo().getTranslateType().equalsIgnoreCase("2")) {
                return "order/createOralOrder"; 
            } else {
                return "order/createTextOrder"; 
            }
        }
        
        //快速翻译，跳转支付页面
        if (subReq.getBaseInfo().getTranslateType().equalsIgnoreCase("0")) {
            return "redirect:/p/customer/order/payOrder/"+orderId;
        } else { //跳转待报价
            return "redirect:/p/customer/order/orderOffer";
        }

        
    }
}
