package com.ai.yc.protal.web.constants;

/**
 * Created by liutong on 16/11/11.
 */
public final class OrderConstants {
    private OrderConstants(){

    }
    //个人类型订单
    public static final String ORDER_TYPE_PERSON = "1";
    //企业类型订单
    public static final String ORDER_TYPE_ENTERPRISE = "2";

    //用户类型 个人
    public static final String USER_TYPE_PERSON = "10";
    //用户类型 企业
    public static final String USER_TYPE_ENTERPRISE = "11";
    //用户类型 代理人
    public static final String USER_TYPE_AGENT = "12";

    public static class ErrorCode{
        private ErrorCode(){}

        /**
         * 订单领取到达上限
         */
        public static final String NUM_MAX_LIMIT = "100001";
        /**
         * 订单已被领取
         */
        public static final String ALREADY_CLAIM = "100002";
    }
   
    /**
     * 后台状态
     */
    public static class State{
        private State(){}
        
        /**
         *提交
         */
        public static final String SUBMIT = "10";
        
        /**
         * 待支付
         */
        public static final String UN_PAID = "11";
        
        /**
         * 已支付
         */
        public static final String PAID = "12";
        
        /**
         * 待报价
         */
        public static final String UN_PRICE = "13";
        
        /**
         * 待领取
         */
        public static final String UN_RECEIVE = "20";
        
        /**
         * 已领取
         */
        public static final String RECEIVE = "21";
        
        /**
         * 已分配
         */
        public static final String ASSIGNED = "211";
        
        /**
         * 翻译中
         */
        public static final String TRANSLATING = "23";
        
        /**
         * 已提交
         */
        public static final String SUBMITTED = "24";
        
        /**
         * 修改中
         */
        public static final String MODIFIY = "25";
        
        /**
         * 待审核
         */
        public static final String UN_CHECK = "40";
        
        /**
         * 审核失败
         */
        public static final String CHECK_FAIL = "42";
        
        /**
         * 待确认
         */
        public static final String UN_CONFIRM = "50";
        
        /**
         * 已确认
         */
        public static final String CONFIRMED = "51";
        
        /**
         * 待评价
         */
        public static final String UN_EVALUATE = "52";
        
        /**
         * 已评价
         */
        public static final String EVALUATED = "53";
        
        /**
         * 完成 
         */
        public static final String FINISH = "90";
        
        /**
         * 关闭（取消）
         */
        public static final String CLOSE = "91";
        
        /**
         * 已退款
         */
        public static final String REFUNDED = "92";
    }

    /**
     * 客户端显示状态
     */
    public static class DisplayState{
        private DisplayState(){}
        
        /**
         * 待支付
         */
        public static final String UN_PAID = "11";
        
        /**
         * 待报价
         */
        public static final String UN_PRICE = "13";
        
        /**
         * 翻译中
         */
        public static final String TRANSLATING = "23";
        
        /**
         * 待确认
         */
        public static final String UN_CONFIRM = "50";
        
        /**
         * 待评价
         */
        public static final String UN_EVALUATE = "52";
        
        /**
         * 完成 
         */
        public static final String FINISH = "90";
        
        /**
         * 关闭（取消）
         */
        public static final String CLOSE = "91";
        
        /**
         * 已退款
         */
        public static final String REFUNDED = "92";
    }
}
