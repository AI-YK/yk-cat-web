package com.ai.yk.protal.web.utils;

import java.beans.PropertyDescriptor;
import java.lang.reflect.Method;

/**
 * 反射工具类 <br>
 * Date: 2016年6月14日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author xuyw
 */
public class ReflectUtil {
	/**
	 * 反射获取bean属性
	 */
	public static Object getFiledValue(Object obj, String filed) {
		Object result = null;
		try {
			Class<?> clazz = obj.getClass();
			PropertyDescriptor pd = new PropertyDescriptor(filed, clazz);
			Method getMethod = pd.getReadMethod();
			if (pd != null) {

				result = getMethod.invoke(obj);

			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
    /**
     * 反射设置bean属性
     */
    public static Object setFiledValue(Object obj, String filed, Object... args) {
        Object result = null;
        try {
            Class<?> clazz = obj.getClass();
            PropertyDescriptor pd = new PropertyDescriptor(filed, clazz);
            Method getMethod = pd.getWriteMethod();
            if (pd != null) {

                result = getMethod.invoke(obj, args);

            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
}
