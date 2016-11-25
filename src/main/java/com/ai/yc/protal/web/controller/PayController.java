package com.ai.yc.protal.web.controller;

import com.ai.opt.sdk.dubbo.util.DubboConsumerFactory;
import com.ai.opt.sdk.util.DateUtil;
import com.ai.yc.order.api.orderpay.interfaces.IOrderPayProcessedResultSV;
import com.ai.yc.order.api.orderpay.param.OrderPayProcessedResultBaseInfo;
import com.ai.yc.order.api.orderpay.param.OrderPayProcessedResultFeeInfo;
import com.ai.yc.order.api.orderpay.param.OrderPayProcessedResultProdInfo;
import com.ai.yc.order.api.orderpay.param.OrderPayProcessedResultRequest;
import com.ai.yc.protal.web.constants.Constants;
import com.ai.yc.protal.web.constants.OrderConstants;
import com.ai.yc.protal.web.model.pay.PayNotify;
import com.ai.yc.protal.web.service.OrderService;
import com.ai.yc.protal.web.utils.AmountUtil;
import com.ai.yc.protal.web.utils.ConfigUtil;
import com.ai.yc.protal.web.utils.PaymentUtil;
import com.ai.yc.protal.web.utils.VerifyUtil;
import com.ai.yc.user.api.userservice.interfaces.IYCUserServiceSV;
import com.ai.yc.user.api.userservice.param.SearchYCUserRequest;
import com.alibaba.fastjson.JSON;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by liutong on 16/11/10.
 */
@Controller
@RequestMapping("/pay")
public class PayController {
    private static final Logger LOG = LoggerFactory.getLogger(PayController.class);
    @Autowired
    OrderService orderService;

    /**
     * 订单支付结果
     * @return
     */
    @RequestMapping("/payResultView")
    public String orderPayResultView(PayNotify payNotify, Model uiModel){
        //订单号
        uiModel.addAttribute("orderId",payNotify.getOrderId());
        //若哈希验证不通过,则表示支付结果有问题
        if (!verifyData(payNotify)){
            payNotify.setPayStates(PayNotify.PAY_STATES_FAIL);
        }
        //支付结果
        uiModel.addAttribute("payResult",PayNotify.PAY_STATES_SUCCESS.equals(payNotify.getPayStates()));
        return "order/orderPayResult";
    }
    /**
     * 订单支付结果
     * @return
     */
    @RequestMapping("/payResult/{orderType}/{userId}")
    public void orderPayResult(
            @PathVariable("orderType")String orderType, @PathVariable("userId")String userId,
            PayNotify payNotify){
        LOG.info("The pay result.orderType:{},\r\n{}", orderType,JSON.toJSONString(payNotify));
        //若哈希验证不通过或支付失败,则表示支付结果有问题
        if (!verifyData(payNotify)
                || !PayNotify.PAY_STATES_SUCCESS.equals(payNotify.getPayStates())){
            LOG.error("The pay is fail.");
            return;
        }
        //获取交易时间 20161111181026
        Timestamp notifyTime = DateUtil.getTimestamp(payNotify.getNotifyTime(),"yyyyMMddHHmmss");
        //支付费用
        Double totalFee = Double.valueOf(payNotify.getOrderAmount())*1000;
        orderService.orderPayProcessResult(userId,null,Long.parseLong(payNotify.getOrderId()),orderType,
                totalFee.longValue(),payNotify.getPayOrgCode(),payNotify.getOutOrderId(),notifyTime);
    }

    /**
     * 验证签名是否正常
     * @param payNotify
     * @return
     */
    private boolean verifyData(PayNotify payNotify){
        String infoStr = payNotify.getOutOrderId()+ VerifyUtil.SEPARATOR
                + payNotify.getOrderId() + VerifyUtil.SEPARATOR
                + payNotify.getOrderAmount() + VerifyUtil.SEPARATOR
                + payNotify.getPayStates()+ VerifyUtil.SEPARATOR
                + payNotify.getTenantId();
        String infoMd5 = VerifyUtil.encodeParam(infoStr, ConfigUtil.getProperty("REQUEST_KEY"));
        return payNotify.getInfoMd5().equals(infoMd5);
    }
}
