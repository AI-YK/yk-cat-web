package com.ai.yc.protal.web.utils;


import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.UUID;


 /**
  * 中译-用户密码加密
  *
  * Date: 2016年11月11日 <br>
  * Copyright (c) 2015 asiainfo.com <br>
  * @author mengbo
  */
public final class PasswordMD5Util {

    private PasswordMD5Util(){
    }

  
 	/**
 	 * 自动生成32位的UUid，对应数据库的主键id进行插入用。
 	 * @return
 	 */
 	private static String getUUID() {

 		return UUID.randomUUID()+"".replace("-", "");
 	}

 	public static String creatSalt(){
 		StringBuffer salt = new StringBuffer(getUUID().substring(getUUID().length()-6));
 		return salt+"";
 	}
 	
	public static String getSalt(String username){
 		StringBuffer salt = new StringBuffer(getUUID().substring(getUUID().length()-6));
 		return salt+"";
 	}
 	
 	public static String getPassSaltMd5(String password,String salt){
 		
 		return Md5Utils.md5(password.concat(salt));
 		
 	}
 	public static String getPassSaltMd5Double(String password,String salt){
 		
 		return Md5Utils.md5(Md5Utils.md5(password).concat(salt));
 		
 	}

 	public static void main(String[] args) {
		String pass = Md5Utils.md5(Md5Utils.md5("111111q").concat("beccce"));
	
	}
    
     public static class Md5Utils {
    	    /**
    		 * 使用md5的算法进行加密
    		 */
    		public static String md5(String plainText) {
    			byte[] secretBytes = null;
    			try {
    				secretBytes = MessageDigest.getInstance("md5").digest(
    						plainText.getBytes());
    			} catch (NoSuchAlgorithmException e) {
    				throw new RuntimeException("没有md5这个算法！");
    			}
    			String md5code = new BigInteger(1, secretBytes).toString(16);
    			for (int i = 0; i < 32 - md5code.length(); i++) {
    				md5code = "0" + md5code;
    			}
    			return md5code;
    		}
    		
    

    	}
}
