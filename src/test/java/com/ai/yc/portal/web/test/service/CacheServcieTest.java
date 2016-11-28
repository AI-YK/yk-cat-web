package com.ai.yk.portal.web.test.service;

import com.ai.yk.common.api.cachekey.key.CacheKey;
import com.ai.yk.protal.web.service.CacheServcie;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Locale;

/**
 * Created by liutong on 16/11/21.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:context/core-context.xml")
public class CacheServcieTest {
    @Autowired
    CacheServcie cacheServcie;

    @Test
    public void getAllDuadTest(){
        cacheServcie.getAllDuad(Locale.CHINESE, CacheKey.OrderType.ORDER_TYPE_DOC);
    }
}
