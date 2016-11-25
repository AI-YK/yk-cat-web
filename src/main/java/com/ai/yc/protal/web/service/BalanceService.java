package com.ai.yc.protal.web.service;

import com.ai.opt.sdk.dubbo.util.DubboConsumerFactory;
import com.ai.opt.sdk.util.BeanUtils;
import com.ai.slp.balance.api.accountquery.interfaces.IAccountQuerySV;
import com.ai.slp.balance.api.fundquery.param.AccountIdParam;
import com.ai.slp.balance.api.accountquery.param.AccountInfoVo;
import com.ai.slp.balance.api.fundquery.interfaces.IFundQuerySV;
import com.ai.slp.balance.api.fundquery.param.FundInfo;
import com.ai.yc.protal.web.constants.BalanceConstants;
import com.ai.yc.protal.web.constants.Constants;
import com.ai.yc.protal.web.model.pay.AccountBalanceInfo;
import com.ai.yc.protal.web.utils.UserUtil;
import com.ai.yc.user.api.userservice.interfaces.IYCUserServiceSV;
import com.ai.yc.user.api.userservice.param.SearchYCUserRequest;
import com.ai.yc.user.api.userservice.param.YCUserInfoResponse;
import org.springframework.stereotype.Service;

/**
 * 账户对应服务
 * Created by liutong on 16/11/14.
 */
@Service
public class BalanceService {

    /**
     * 查询当前登录用户的余额信息
     *
     * @return 若没有余额信息,则返回null
     */
    public AccountBalanceInfo queryOfUser(String userId){
        AccountBalanceInfo accountBalanceInfo = null;
        //获取当前用户
        /* TODO... 等待获取用户账号*/
        IYCUserServiceSV userServiceSV = DubboConsumerFactory.getService(IYCUserServiceSV.class);
        SearchYCUserRequest searchYCUserReq = new SearchYCUserRequest();
        searchYCUserReq.setTenantId(Constants.DEFAULT_TENANT_ID);
        searchYCUserReq.setUserId(userId);
        YCUserInfoResponse userInfoResponse = userServiceSV.searchYCUserInfo(searchYCUserReq);
        //若没有账户信息,直接返回null
        if (userInfoResponse==null||userInfoResponse.getAccountId()==null){
            return null;
        }
        //用户账户
        long accountId = userInfoResponse.getAccountId();

        //查询用户余额
        IFundQuerySV fundQuerySV = DubboConsumerFactory.getService(IFundQuerySV.class);
        AccountIdParam accountIdParam = new AccountIdParam();
        accountIdParam.setTenantId(Constants.DEFAULT_TENANT_ID);
        accountIdParam.setAccountId(accountId);
        FundInfo fundInfo = fundQuerySV.queryUsableFund(accountIdParam);
        //查询账号设置
        IAccountQuerySV accountQuerySV = DubboConsumerFactory.getService(IAccountQuerySV.class);
        com.ai.slp.balance.api.accountquery.param.AccountIdParam accountInfoReq =
                new com.ai.slp.balance.api.accountquery.param.AccountIdParam();
        accountInfoReq.setTenantId(Constants.DEFAULT_TENANT_ID);
        accountInfoReq.setAccountId(accountId);
        AccountInfoVo accountInfoVo = accountQuerySV.queryAccontById(accountInfoReq);

        //TODO....模拟数据
//        FundInfo fundInfo = new FundInfo();
//        fundInfo.setAccountId(23423l);
//        fundInfo.setBalance(110000l);

//        AccountInfoVo accountInfoVo = new AccountInfoVo();
//        0 不验证 1 验证
//        accountInfoVo.setPayCheck(BalanceConstants.PAY_CHECK_TRUE);

        accountBalanceInfo = new AccountBalanceInfo();
        BeanUtils.copyProperties(accountBalanceInfo,fundInfo);
        accountBalanceInfo.setPayCheck(accountInfoVo.getPayCheck());
        return accountBalanceInfo;
    }
}
