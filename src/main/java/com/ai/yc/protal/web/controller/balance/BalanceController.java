package com.ai.yc.protal.web.controller.balance;

import com.ai.opt.base.vo.PageInfo;
import com.ai.opt.sdk.dubbo.util.DubboConsumerFactory;
import com.ai.opt.sdk.util.BeanUtils;
import com.ai.opt.sdk.util.UUIDUtil;
import com.ai.opt.sdk.web.model.ResponseData;

import com.ai.slp.balance.api.accountquery.interfaces.IAccountQuerySV;
import com.ai.slp.balance.api.accountquery.param.AccountInfoVo;
import com.ai.slp.balance.api.fundquery.interfaces.IFundQuerySV;
import com.ai.slp.balance.api.fundquery.param.AccountIdParam;
import com.ai.slp.balance.api.fundquery.param.FundInfo;
import com.ai.slp.balance.api.incomeoutquery.interfaces.IncomeOutQuerySV;
import com.ai.slp.balance.api.incomeoutquery.param.FundBookQueryResponse;
import com.ai.slp.balance.api.incomeoutquery.param.IncomeDetail;
import com.ai.slp.balance.api.incomeoutquery.param.IncomeQueryRequest;

import com.ai.yc.protal.web.constants.Constants;
import com.ai.yc.protal.web.model.pay.AccountBalanceInfo;
import com.ai.yc.protal.web.service.BalanceService;

import com.ai.yc.protal.web.utils.*;
import org.apache.commons.lang3.StringUtils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 我的帐户
 * Created by lixiaokui on 16/11/14.
 */
@Controller
@RequestMapping("/p/balance")
public class BalanceController {
    private static final Logger LOGGER = LoggerFactory.getLogger(BalanceController.class);
    @Autowired
    BalanceService balanceService;

    /**
     * 显示我的帐户页面
     * @return
     */
    @RequestMapping("/account")
    public String toMyAccount(Model uiModel){/*
        //帐户余额
        AccountBalanceInfo balanceInfo =  balanceService.queryOfUser("405411");
//        if (balanceInfo.equals(null)){
//
//        }
        //单位厘换算成元
        double balance = balanceInfo.getBalance()/1000.00;*/

        //查询用户余额
        IFundQuerySV fundQuerySV = DubboConsumerFactory.getService(IFundQuerySV.class);
        AccountIdParam accountIdParam = new AccountIdParam();
        accountIdParam.setTenantId(Constants.DEFAULT_TENANT_ID);
        accountIdParam.setAccountId(11531);
        FundInfo fundInfo = fundQuerySV.queryUsableFund(accountIdParam);
        //查询账号设置



//        uiModel.addAttribute("balanceInfo",accountInfoVo);
        uiModel.addAttribute("balance",String.valueOf(AmountUtil.changeLiToYuan(fundInfo.getBalance())));
        //
        return "balance/account";
    }

    @RequestMapping("/accountList")
    @ResponseBody
    public ResponseData<PageInfo<IncomeDetail>> accountList(Model model, IncomeQueryRequest incomeQueryRequest,
                                                            @RequestParam(value = "pageNo")int pageNO,
                                                            @RequestParam(value = "pageSize")int pageSize){
        ResponseData<PageInfo<IncomeDetail>> resData =
                new ResponseData<PageInfo<IncomeDetail>>(ResponseData.AJAX_STATUS_SUCCESS,"OK");
        AccountBalanceInfo balanceInfo =  balanceService.queryOfUser("405411");
        IncomeOutQuerySV incomeOutQuerySV =  DubboConsumerFactory.getService(IncomeOutQuerySV.class);
        incomeQueryRequest.setAccountId(balanceInfo.getAccountId());
        incomeQueryRequest.setTenantId(Constants.DEFAULT_TENANT_ID);
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

        if(StringUtils.isBlank(incomeQueryRequest.getBeginDate())){
            Date beginDate = new Date();
            beginDate.setMonth(beginDate.getMonth()-1);
            String date1 = formatter.format(beginDate);
            incomeQueryRequest.setBeginDate(date1+" 00:00:00");
        } else {
            incomeQueryRequest.setBeginDate(incomeQueryRequest.getBeginDate().toString()+" 00:00:00");
        }
        if(StringUtils.isBlank(incomeQueryRequest.getEndDate())){
            Date endDate = new Date();
            endDate.setMonth(endDate.getMonth());
            String date1 = formatter.format(endDate);
            incomeQueryRequest.setEndDate(date1+" 23:59:59");
        }else {
            incomeQueryRequest.setEndDate(incomeQueryRequest.getEndDate().toString()+" 23:59:59");
        }
        FundBookQueryResponse fundBookQueryResponse = new FundBookQueryResponse();
        PageInfo<IncomeDetail> pageInfo = new  PageInfo<IncomeDetail>();
        pageInfo.setPageNo(pageNO);
        pageInfo.setPageSize(pageSize);
        incomeQueryRequest.setPageInfo(pageInfo);
        fundBookQueryResponse = incomeOutQuerySV.incomeOutQuery(incomeQueryRequest);
        //总收支计算
        IncomeQueryRequest incomeQueryByDate = new IncomeQueryRequest();
        incomeQueryByDate.setTenantId(incomeQueryRequest.getTenantId());
        incomeQueryByDate.setAccountId(incomeQueryRequest.getAccountId());
        incomeQueryByDate.setBeginDate(incomeQueryRequest.getBeginDate());
        incomeQueryByDate.setEndDate(incomeQueryRequest.getEndDate());
        FundBookQueryResponse fundBookQueryResponseByDate = new FundBookQueryResponse();
        incomeQueryRequest.setPageInfo(pageInfo);
        fundBookQueryResponseByDate = incomeOutQuerySV.incomeOutQuery(incomeQueryByDate);
        Long incomeAmount = 0l;
        long outAmount = 0l;
        if (fundBookQueryResponse.getPageInfo()!=null){
            List<IncomeDetail> incomeDetails = fundBookQueryResponseByDate.getPageInfo().getResult();
            for (IncomeDetail incomeDetail:incomeDetails){
                if (incomeDetail.getIncomeFlag().equals("1")){
                    incomeAmount = incomeAmount + incomeDetail.getTotalAmount();
                }
                if (incomeDetail.getIncomeFlag().equals("0")){
                    outAmount = outAmount + incomeDetail.getTotalAmount();
                }
            }
            for (int i = 0;i<fundBookQueryResponse.getPageInfo().getResult().size();i++){
                fundBookQueryResponse.getPageInfo().getResult().get(i).setIncomeBalance(incomeAmount);
                fundBookQueryResponse.getPageInfo().getResult().get(i).setOutBalance(java.lang.Math.abs(outAmount));
            }

        }
        resData.setData(fundBookQueryResponse.getPageInfo());
        return resData;
    }

    //充值页面
    @RequestMapping("/depositFund")
    public String toDepositFund(Model uiModel, IncomeQueryRequest incomeQueryRequest){

        return "balance/depositFund";
    }

    /**
     * 跳转支付页面,需要登录后才能进行支付
     * @param
     * @param orderAmount
     * @param response
     * @throws Exception
     */
    @RequestMapping(value = "/gotoPay")
    public void gotoPay(
            Long orderAmount,String currencyUnit,String merchantUrl,String payOrgCode,
            String orderType,
            HttpServletResponse response)
            throws Exception {
        //租户
        String tenantId= ConfigUtil.getProperty("TENANT_ID");
        //服务异步通知地址
        String notifyUrl= ConfigUtil.getProperty("NOTIFY_URL");
        //商户交易单号(要求商户每次提交的支付请求交易单号不能重复，用于唯一标识每个提交给支付中心的支付请求)
        String orderId = UUIDUtil.genId32();
        //异步通知地址,默认为用户
        String amount = String.valueOf(orderAmount*1000);
        Map<String, String> map = new HashMap<String, String>();
        map.put("tenantId", tenantId);//租户ID
        map.put("orderId", orderId);//请求单号
        map.put("returnUrl", ConfigUtil.getProperty("RETURN_URL"));//页面跳转地址
        map.put("notifyUrl", notifyUrl);//服务异步通知地址
        map.put("merchantUrl",merchantUrl);//用户付款中途退出返回商户的地址
        map.put("requestSource", Constants.SELF_SOURCE);//终端来源
        map.put("currencyUnit",currencyUnit);//币种
        map.put("orderAmount", amount);//金额
        map.put("subject", "depositFund");//订单名称
        map.put("payOrgCode",payOrgCode);
        // 加密
        String infoStr = orderId+ VerifyUtil.SEPARATOR
                + amount + VerifyUtil.SEPARATOR
                + notifyUrl + VerifyUtil.SEPARATOR
                + tenantId;
        String infoMd5 = VerifyUtil.encodeParam(infoStr, ConfigUtil.getProperty("REQUEST_KEY"));
        map.put("infoMd5", infoMd5);
        LOGGER.info("开始前台通知:" + map);
        String htmlStr = PaymentUtil.generateAutoSubmitForm(ConfigUtil.getProperty("ACTION_URL"), map);
        LOGGER.info("发起支付申请:" + htmlStr);
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().write(htmlStr);
        response.getWriter().flush();
    }

}
