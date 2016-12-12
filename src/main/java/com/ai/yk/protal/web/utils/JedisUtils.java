package com.ai.yk.protal.web.utils;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

/**
 * <p> Jedis工具类 </p>
 */
public class JedisUtils {
	protected static Logger log = LoggerFactory.getLogger(JedisUtils.class);

	private String redisIp;
	private String redisPort;
	
	/** pool最多可分配的jedis实例数 **/
	private static final int MAX_TOTAL = 100;
	
	/** pool中状态为idle(空闲的)的jedis实例书 **/
	private static final int MAX_IDLE = 10;
	
	/** jedis实例最大的等待时间 **/
	private static final long MAX_WAIT_MILLIS = 5000L;
	
	private static final int TIME_OUT_MILLIS = 100000;
    private static Map<String, JedisPool> maps = new HashMap<String, JedisPool>();
    
    /**
     * 获取连接池.
     * @return 连接池实例
     */
    private static JedisPool getPool(String ip, int port) {
        String key = ip + ":" + port;
        JedisPool pool = null;
        if (!maps.containsKey(key)) {
            try {
                JedisPoolConfig poolConfig = new JedisPoolConfig();
                poolConfig.setMaxTotal(MAX_TOTAL);
                poolConfig.setMaxIdle(MAX_IDLE);
                poolConfig.setMaxWaitMillis(MAX_WAIT_MILLIS);
                poolConfig.setTestOnBorrow(true);
                pool = new JedisPool(poolConfig, ip, port, TIME_OUT_MILLIS);
                maps.put(key, pool);
            } catch (Exception e) {
                log.error(e.getMessage());
            }
        } else {
            pool = maps.get(key);
        }
        return pool;
    }

    /**
     * 获取Redis实例.
     * @return Redis工具类实例
     */
    @SuppressWarnings("deprecation")
    public Jedis getJedis() {
        Jedis jedis = null;
        int count = 0;
        do {
            try {
                jedis = getPool(redisIp, Integer.parseInt(redisPort)).getResource();
            } catch (Exception e) {
                log.error("get redis master failed!", e);
                getPool(redisIp, Integer.parseInt(redisPort)).returnBrokenResource(jedis);
            }
            count++;
        } while (jedis == null && count < 10);
        return jedis;
    }

    /**
     * 释放redis实例到连接池.
     * @param jedis  redis实例
     */
    @SuppressWarnings("deprecation")
	public void closeJedis(Jedis jedis, String ip, int port) {
        if (jedis != null) {
            getPool(ip, port).returnResourceObject(jedis);
        }
    }
    
    /**
     * 类级的内部类，也就是静态的成员式内部类，该内部类的实例与外部类的实例 
     * 没有绑定关系，而且只有被调用到时才会装载，从而实现了延迟加载。
     */
    private static class RedisUtilHolder {
        /**
         * 静态初始化器，由JVM来保证线程安全
         */
        private static JedisUtils instance = new JedisUtils();
    }

    public static JedisUtils getInstance() {
        return RedisUtilHolder.instance;
    }
    
	public void setRedisIp(String redisIp) {
		this.redisIp = redisIp;
	}

	public void setRedisPort(String redisPort) {
		this.redisPort = redisPort;
	}

//	public static void main(String[] args) {
//		JedisUtils jedisUtils = JedisUtils.getInstance();
//		Jedis test = jedisUtils.getJedis("10.1.245.224", 26379);
//		String key = "aaa";
//		String value = "12345";
//		test.set(key.getBytes(), value.getBytes());
//		byte[] bs = test.get(key.getBytes());
//		System.out.println(new String(bs));
//	}
}
