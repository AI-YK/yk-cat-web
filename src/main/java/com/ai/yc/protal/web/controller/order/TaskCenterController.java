package com.ai.yc.protal.web.controller.order;

import com.ai.opt.base.exception.BusinessException;
import com.ai.opt.base.vo.PageInfo;
import com.ai.opt.base.vo.ResponseHeader;
import com.ai.opt.sdk.dubbo.util.DubboConsumerFactory;
import com.ai.opt.sdk.util.DateUtil;
import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.paas.ipaas.i18n.ResWebBundle;
import com.ai.paas.ipaas.i18n.ZoneContextHolder;
import com.ai.yc.order.api.orderquery.interfaces.IOrderQuerySV;
import com.ai.yc.order.api.orderquery.param.*;
import com.ai.yc.order.api.orderreceive.interfaces.IOrderReceiveSV;
import com.ai.yc.order.api.orderreceive.param.OrderReceiveBaseInfo;
import com.ai.yc.order.api.orderreceive.param.OrderReceiveRequest;
import com.ai.yc.order.api.orderreceive.param.OrderReceiveResponse;
import com.ai.yc.order.api.orderreceivesearch.interfaces.IOrderWaitReceiveSV;
import com.ai.yc.order.api.orderreceivesearch.param.OrderWaitReceiveSearchInfo;
import com.ai.yc.order.api.orderreceivesearch.param.OrderWaitReceiveSearchRequest;
import com.ai.yc.order.api.orderreceivesearch.param.OrderWaitReceiveSearchResponse;
import com.ai.yc.protal.web.constants.OrderConstants;
import com.ai.yc.protal.web.service.CacheServcie;
import com.ai.yc.protal.web.utils.UserUtil;
import org.apache.commons.lang.StringUtils;
import org.owasp.esapi.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.sql.Timestamp;
import java.util.*;

/**
 * 订单大厅
 * Created by liutong on 16/11/15.
 */
@Controller
@RequestMapping("/p/taskcenter")
public class TaskCenterController {
    private static final Logger LOGGER = LoggerFactory.getLogger(TaskCenterController.class);
    @Autowired
    private CacheServcie cacheServcie;
    @Autowired
    ResWebBundle rb;
    /**
     * 订单大厅页面
     * @return
     */
    @RequestMapping("/view")
    public String taskCenterView(Model uiModel){
        //获取译员信息
        String userId = UserUtil.getUserId();
        /* TODO... 模拟数据 */
//        IYCUserServiceSV userServiceSV = DubboConsumerFactory.getService(IYCUserServiceSV.class);
//        SearchYCTranslatorSkillListRequest searchYCUserReq = new SearchYCTranslatorSkillListRequest();
//        searchYCUserReq.setTenantId(Constants.DEFAULT_TENANT_ID);
//        searchYCUserReq.setUserId(userId);
//        YCTranslatorSkillListResponse userInfoResponse = userServiceSV.getTranslatorSkillList(searchYCUserReq);
        //包括译员的等级,是否为LSP译员,LSP中的角色,支持的语言对
//        uiModel.addAttribute("lspId",userInfoResponse.getLspId());//lsp标识
//        uiModel.addAttribute("lspRole",userInfoResponse.getLspRole());//lsp角色
//        uiModel.addAttribute("vipLevel",userInfoResponse.getVipLevel());//译员等级
        uiModel.addAttribute("lspId","");//lsp标识
        uiModel.addAttribute("lspRole","1");//lsp角色
        uiModel.addAttribute("vipLevel","4");//译员等级

        //查询订单大厅数量
        IOrderQuerySV iOrderQuerySV = DubboConsumerFactory.getService(IOrderQuerySV.class);
        QueryOrdCountRequest ordCountReq = new QueryOrdCountRequest();
        QueryOrdCountResponse taskNumRes = iOrderQuerySV.queryOrderCount(ordCountReq);
        Map<String,Integer> taskNumMap = taskNumRes.getCountMap();
        Integer taskNum = taskNumMap.get(OrderConstants.State.UN_RECEIVE);
        if (taskNum==null||taskNum<0) {
            taskNum = 0;
        }
        uiModel.addAttribute("taskNum",taskNum>99?"99+":taskNum);
        //获取领域,用途
        uiModel.addAttribute("domainList",cacheServcie.getAllDomain(rb.getDefaultLocale()));
        uiModel.addAttribute("purposeList",cacheServcie.getAllPurpose(rb.getDefaultLocale()));
        return "transOrder/taskCenter";
    }

    /**
     * 获得待领取订单信息
     * 领域,用途,订单时间(单位:天),输入内容
     * @return
     */
    @RequestMapping("/list")
    @ResponseBody
    public ResponseData<PageInfo<OrderWaitReceiveSearchInfo>> taskCenter(
            @RequestParam(value = "lspId",required = false) String lspId,
            @RequestParam(value = "startDateStr",required = false)String startDateStr,
            @RequestParam(value = "endDateStr",required = false)String endDateStr,
            OrderWaitReceiveSearchRequest orderReq){
        ResponseData<PageInfo<OrderWaitReceiveSearchInfo> > resData =
                new ResponseData<PageInfo<OrderWaitReceiveSearchInfo>>(ResponseData.AJAX_STATUS_SUCCESS,"OK");
        try {
            //判断是国内还是国外业务
            String flag = Locale.SIMPLIFIED_CHINESE.equals(rb.getDefaultLocale())?"0":"1";
            orderReq.setFlag(flag);
            //订单状态 固定为待领取
            orderReq.setState(OrderConstants.State.UN_RECEIVE);
            //若没有页面,则使用第1页为默认
            if (orderReq.getPageNo()==null || orderReq.getPageNo()<1)
                orderReq.setPageNo(1);
            //获取当前用户所处时区
            TimeZone timeZone = TimeZone.getTimeZone(ZoneContextHolder.getZone());
            //添加下单开始时间
            if (StringUtils.isNotBlank(startDateStr)){
                String dateTmp = startDateStr+" 00:00:00";
                Timestamp date =DateUtil.getTimestamp(dateTmp,DateUtil.DATETIME_FORMAT,timeZone);
                orderReq.setStartStateTime(date);
            }
            //添加下单结束时间
            if (StringUtils.isNotBlank(endDateStr)){
                String dateTmp = endDateStr+" 23:59:59";
                Timestamp date =DateUtil.getTimestamp(dateTmp,DateUtil.DATETIME_FORMAT,timeZone);
                orderReq.setEndStateTime(date);
            }
            IOrderWaitReceiveSV iOrderQuerySV = DubboConsumerFactory.getService(IOrderWaitReceiveSV.class);
            OrderWaitReceiveSearchResponse orderRes = iOrderQuerySV.pageSearchWaitReceive(orderReq);

            ResponseHeader resHeader = orderRes==null?null:orderRes.getResponseHeader();
            //如果返回值为空,或返回信息中包含错误信息,返回失败
            if (orderRes==null|| (resHeader!=null && (!resHeader.isSuccess()))){
                throw new BusinessException("","");
            } else {
                //返回订单分页信息
                resData.setData(orderRes.getPageInfo());
            }
        } catch (Exception e) {
            LOGGER.error("查询订单分页失败:",e);
            resData = new ResponseData<PageInfo<OrderWaitReceiveSearchInfo>>(ResponseData.AJAX_STATUS_FAILURE, "查询订单失败");
        }
        return resData;
    }

    /**
     * 领取订单
     * @return
     */
    @RequestMapping("/claim")
    @ResponseBody
    public ResponseData<String> claimOrder(Long orderId,String lspId){
        ResponseData<String> responseData = new ResponseData<String>(ResponseData.AJAX_STATUS_SUCCESS,"OK");
        String userId = UserUtil.getUserId();
        //译员类型
        String transType = StringUtils.isBlank(lspId)?"1":"0";
        OrderReceiveRequest receiveRequest = new OrderReceiveRequest();
        OrderReceiveBaseInfo baseInfo = new OrderReceiveBaseInfo();
        baseInfo.setOrderId(orderId);
        baseInfo.setState(OrderConstants.State.RECEIVE);//状态为固定的
        baseInfo.setInterperId(userId);
        //译员类型 0:普通译员 1:LSP
        String interperType = StringUtils.isNotBlank(lspId)?"1":"0";
        baseInfo.setInterperType(interperType);
        baseInfo.setLspId(lspId);
        baseInfo.setLockTime(DateUtil.getFutureTime());
        receiveRequest.setBaseInfo(baseInfo);
        try {
            IOrderReceiveSV iOrderReceiveSV = DubboConsumerFactory.getService(IOrderReceiveSV.class);
            OrderReceiveResponse receiveResponse = iOrderReceiveSV.orderReceive(receiveRequest);
            ResponseHeader header =receiveResponse==null?null:receiveResponse.getResponseHeader();
            //出现错误
            if(header!=null && !header.isSuccess()){
                LOGGER.error("receiveOrder fail,head status:{},head info:{}",
                        header==null?"null":header.getIsSuccess(),header==null?"null":header.getResultMessage());
                //订单领取达到上限
                if (OrderConstants.ErrorCode.NUM_MAX_LIMIT.equals(header.getResultCode())){
                    //领取失败
                    responseData = new ResponseData<String>(ResponseData.AJAX_STATUS_FAILURE,
                            rb.getMessage("order.info.claim.max"));
                }//订单已被领取
                else if (OrderConstants.ErrorCode.ALREADY_CLAIM.equals(header.getResultCode())){
                    //领取失败
                    responseData = new ResponseData<String>(ResponseData.AJAX_STATUS_FAILURE,
                            rb.getMessage("order.info.already.claim"));
                }
            }

        }catch (Exception e){
            LOGGER.error("Claim order is fail",e);
            //领取失败
            responseData = new ResponseData<String>(ResponseData.AJAX_STATUS_FAILURE,rb.getMessage(""));
        }
        return responseData;
    }
}
