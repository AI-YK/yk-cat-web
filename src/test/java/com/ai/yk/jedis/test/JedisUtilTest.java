package com.ai.yk.jedis.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.ai.yk.protal.web.utils.JedisUtils;

import redis.clients.jedis.Jedis;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({ "classpath:context/core-context.xml" })
public class JedisUtilTest {

	@Autowired
	JedisUtils jedisUtil;
	
	@Test
	public void testSetAndGet() {
		Jedis test = jedisUtil.getJedis();
		String key = "aaa";
		String value = "123456";
		test.set(key.getBytes(), value.getBytes());
		byte[] bs = test.get(key.getBytes());
		System.out.println(new String(bs));
	}
	
}
