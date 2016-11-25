package com.ai.yc.portal.web.test.service;

import com.ai.yc.protal.web.model.pay.AccountBalanceInfo;
import com.ai.yc.protal.web.service.BalanceService;
import com.ai.yc.protal.web.utils.UserUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * Created by liutong on 16/11/14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:/context/core-context.xml")
public class BalanceServiceTest {
    @Autowired
    BalanceService balanceService;

    @Test
    public void queryOfUserTest(){
        AccountBalanceInfo balanceInfo = balanceService.queryOfUser("305234");
        System.out.println(balanceInfo.getAccountId());
    }
}
