package com.ai.yk.protal.web.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.security.GeneralSecurityException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLException;
import javax.net.ssl.SSLSession;
import javax.net.ssl.SSLSocket;
import javax.servlet.http.HttpServletRequest;

import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLContextBuilder;
import org.apache.http.conn.ssl.TrustStrategy;
import org.apache.http.conn.ssl.X509HostnameVerifier;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.ai.yk.protal.web.content.YJRequest;
import com.alibaba.fastjson.JSON;

public final class HttpClientUtil {
	private static final Logger LOGGER = LoggerFactory
			.getLogger(HttpClientUtil.class);
	private HttpClientUtil() {
	}
    private static final String DEFAULT_ENCODING="UTF-8";
   
    public static String getYJBaseResponse(String url, @SuppressWarnings("rawtypes") YJRequest req){
		try {
			return sendPostRequest(url, JSON.toJSONString(req));
		} catch (Exception e) {
			LOGGER.error(e.getMessage(),e);
		}
		return null;
	}
    /**
     * http 请求
     * @param url
     * @param data
     * @return
     */
    public static String sendPostRequest(String url, String data){
    	try {
			return sendPostRequest(url,data,false);
		} catch (Exception e) {
			LOGGER.error(e.getMessage(),e);
		}
    	return null;
    }
	public static String sendPostRequest(String url, String data,boolean isHttps)
			throws Exception {
		CloseableHttpClient httpclient = null;
		if(isHttps){
			httpclient = HttpClients.custom().setSSLSocketFactory(createSSLConnSocketFactory()).build();
		}else{
			/*try {
				 WebApplicationContext web = ContextLoader.getCurrentWebApplicationContext();  
				 httpclient = (CloseableHttpClient) web.getBean("httpClient");
			} catch (Exception e) {
				LOGGER.error("spring 获取失败 httpclient，自动创建");
				httpclient =HttpClients.createDefault();	
			}*/
			httpclient =HttpClients.createDefault();	
		}
		HttpPost httpPost = new HttpPost(new URL(url).toURI());

		StringEntity dataEntity = new StringEntity(data,
				ContentType.APPLICATION_JSON);
		httpPost.setEntity(dataEntity);
		CloseableHttpResponse response = null;
		BufferedReader reader = null;
		if (null != httpclient) {
			response = httpclient.execute(httpPost);
		}
		try {
			if (null != response
					&& response.getStatusLine().getStatusCode() == 200) {
				HttpEntity entity = response.getEntity();
				if (null == entity) {
					throw new Exception("error code entity is null "
							+ response.getStatusLine().getStatusCode() + ":"
							+ response.getStatusLine().getReasonPhrase());
				}
				reader = new BufferedReader(new InputStreamReader(
						entity.getContent(),DEFAULT_ENCODING));
				StringBuilder buffer = new StringBuilder();
				String tempStr;
				while ((tempStr = reader.readLine()) != null) {
					buffer.append(tempStr);
				}

				return buffer.toString();

			} else if (null != response
					&& response.getStatusLine().getStatusCode() != 200) {
				throw new Exception("error code "
						+ response.getStatusLine().getStatusCode() + ":"
						+ response.getStatusLine().getReasonPhrase());
			} else {
				throw new Exception("调用接口：url=" + url + "响应为空");
			}
		} finally {
			if (null != response) {
				response.close();
			}
			if (null != httpclient) {
				httpclient.close();
			}
			if (null != reader) {
				reader.close();
			}
		}
	}
	/** 
     * 创建SSL安全连接 
     * 
     * @return 
     */  
    @SuppressWarnings({ "unused", "deprecation" })
	private static SSLConnectionSocketFactory createSSLConnSocketFactory() {  
        SSLConnectionSocketFactory sslsf = null;  
        try {  
            SSLContext sslContext = new SSLContextBuilder().loadTrustMaterial(null, new TrustStrategy() {  
  
                public boolean isTrusted(X509Certificate[] chain, String authType) throws CertificateException {  
                    return true;  
                }  
            }).build();  
            sslsf = new SSLConnectionSocketFactory(sslContext, new X509HostnameVerifier() {  
  
                @Override  
                public boolean verify(String arg0, SSLSession arg1) {  
                    return true;  
                }  
  
                @Override  
                public void verify(String host, SSLSocket ssl) throws IOException {  
                }  
  
                @Override  
                public void verify(String host, X509Certificate cert) throws SSLException {  
                }  
  
                @Override  
                public void verify(String host, String[] cns, String[] subjectAlts) throws SSLException {  
                }  
            });  
        } catch (GeneralSecurityException e) {  
        	LOGGER.error(e.getMessage(),e);
        }  
        return sslsf;   
    }
    private HttpServletRequest getRequest(){
    	HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		return request;
    }
}
