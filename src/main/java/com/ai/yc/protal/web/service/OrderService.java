package com.ai.yc.protal.web.service;

import com.ai.opt.base.vo.ResponseHeader;
import com.ai.opt.sdk.dubbo.util.DubboConsumerFactory;
import com.ai.yc.order.api.orderpay.interfaces.IOrderPayProcessedResultSV;
import com.ai.yc.order.api.orderpay.param.*;
import com.ai.yc.protal.web.constants.OrderConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;

/**
 * 订单相关服务
 * Created by liutong on 16/11/14.
 */
@Service
public class OrderService {
    private static final Logger LOGGER = LoggerFactory.getLogger(OrderService.class);
    /**
     * 订单支付处理
     * @param userId 用户ID
     * @param accountId 账号ID,可为空
     * @param orderId 订单ID
     * @param orderType 订单类型 企业/个人
     * @param totalFee 订单金额
     * @param payStyle 支付方式,对应支付机构
     * @param outOrderId 支付流水号
     * @param notifyTime 支付时间
     */
    public void orderPayProcessResult(
            String userId,Long accountId,long orderId,String orderType,long totalFee,
            String payStyle,String outOrderId,Timestamp notifyTime){
        LOGGER.info("order pay process result,\r\n" +
                "userId:{},orderId:{},orderType:{},totalFee:{},payStyle:{},outOrderId:{}",
                userId,orderId,orderType,totalFee,payStyle,outOrderId);
        //TODO...若是企业订单,需要查询企业信息,一阶段暂不实现
        OrderPayProcessedResultRequest payResultReq = new OrderPayProcessedResultRequest();
        //基本信息
        OrderPayProcessedResultBaseInfo payResultReqBase = new OrderPayProcessedResultBaseInfo();
        payResultReq.setBaseInfo(payResultReqBase);
        payResultReqBase.setOrderId(orderId);
        payResultReqBase.setOrderType(orderType);
        payResultReqBase.setUserId(userId);
        payResultReqBase.setAccountId(accountId);
        //用户类型
        if (OrderConstants.ORDER_TYPE_PERSON.equals(orderType)) {
            payResultReqBase.setUserType(OrderConstants.USER_TYPE_PERSON);
        }//TODO... 缺少代理人的检查,后续二阶段实现
        else if (OrderConstants.ORDER_TYPE_ENTERPRISE.equals(orderType)){
            payResultReqBase.setUserType(OrderConstants.USER_TYPE_ENTERPRISE);
            //添加企业ID
        }
        //费用信息
        OrderPayProcessedResultFeeInfo payResultFeeInfo = new OrderPayProcessedResultFeeInfo();
        payResultReq.setFeeInfo(payResultFeeInfo);
        payResultFeeInfo.setPayStyle(payStyle);//支付机构
        payResultFeeInfo.setTotalFee(totalFee);
        payResultFeeInfo.setExternalId(outOrderId);
        payResultFeeInfo.setPayTime(notifyTime);
        //产品信息
        OrderPayProcessedResultProdInfo payResultProdInfo = new OrderPayProcessedResultProdInfo();
        payResultReq.setProdInfo(payResultProdInfo);
        payResultProdInfo.setStateTime(notifyTime);
        IOrderPayProcessedResultSV payResultSv= DubboConsumerFactory.getService(IOrderPayProcessedResultSV.class);
        OrderPayProcessedResultResponse resultResponse = payResultSv.orderPayProcessedResult(payResultReq);
        ResponseHeader header = resultResponse.getResponseHeader();
        LOGGER.info("The order pay process result:{},orderId:{}",
                header==null?true:header.getIsSuccess(),resultResponse.getOrderId());
    }
}
