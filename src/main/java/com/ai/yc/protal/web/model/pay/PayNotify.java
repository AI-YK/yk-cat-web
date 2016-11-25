package com.ai.yc.protal.web.model.pay;

/**
 * 支付结果通知
 * Created by liutong on 16/11/11.
 */
public class PayNotify {
    //交易成功状态
    public static final String PAY_STATES_SUCCESS = "00";
    //交易失败状态
    public static final String PAY_STATES_FAIL = "01";
    //租户ID
    private String tenantId;
    //第三方交易平台流水号
    private String outOrderId;
    //订单号
    private String orderId;
    //商品名称
    private String subject;
    //订单金额
    private String orderAmount;
    //交易状态 支付成功00\支付失败01
    private String payStates;
    /*
    支付机构
     ZFB: 	支付宝
    YL: 	   银联
    WEIXIN: 微信
    XY ：兴业
    */
    private String payOrgCode;
    //加密信息
    private String infoMd5;
    //交易时间
    private String notifyTime;

    public String getTenantId() {
        return tenantId;
    }

    public void setTenantId(String tenantId) {
        this.tenantId = tenantId;
    }

    public String getOutOrderId() {
        return outOrderId;
    }

    public void setOutOrderId(String outOrderId) {
        this.outOrderId = outOrderId;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getOrderAmount() {
        return orderAmount;
    }

    public void setOrderAmount(String orderAmount) {
        this.orderAmount = orderAmount;
    }

    public String getPayStates() {
        return payStates;
    }

    public void setPayStates(String payStates) {
        this.payStates = payStates;
    }

    public String getPayOrgCode() {
        return payOrgCode;
    }

    public void setPayOrgCode(String payOrgCode) {
        this.payOrgCode = payOrgCode;
    }

    public String getInfoMd5() {
        return infoMd5;
    }

    public void setInfoMd5(String infoMd5) {
        this.infoMd5 = infoMd5;
    }

    public String getNotifyTime() {
        return notifyTime;
    }

    public void setNotifyTime(String notifyTime) {
        this.notifyTime = notifyTime;
    }
}
