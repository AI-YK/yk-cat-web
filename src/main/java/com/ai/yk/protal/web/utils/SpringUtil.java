package com.ai.yk.protal.web.utils;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public final class SpringUtil {
    private SpringUtil() {
    }

    private static ApplicationContext context = new ClassPathXmlApplicationContext("/context/core-context.xml");
    
    public static ApplicationContext getApplicationContext() {
         return context;
    }
    
    public static <T> T getBean(Class<T> requiredType) {
        return context.getBean(requiredType);
    }
}
