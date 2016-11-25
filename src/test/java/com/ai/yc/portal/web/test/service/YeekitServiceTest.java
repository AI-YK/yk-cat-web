package com.ai.yc.portal.web.test.service;

import com.ai.yc.protal.web.exception.HttpStatusException;
import com.ai.yc.protal.web.service.YeekitService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.io.IOException;

/**
 * Created by liutong on 16/11/10.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:context/core-context.xml")
public class YeekitServiceTest {
    @Autowired
    YeekitService yeekitService;

    @Test
    public void dotranslateTest(){
        try {
            System.out.println(yeekitService.dotranslate("zh","en","你好"));

        } catch (IOException e) {
            e.printStackTrace();
        } catch (HttpStatusException e) {
            e.printStackTrace();
        }
    }
}
