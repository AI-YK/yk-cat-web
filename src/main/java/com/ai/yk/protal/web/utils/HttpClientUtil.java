package com.ai.yk.protal.web.utils;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;

import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

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

	public static String sendPostRequest(String url, String data)
			throws Exception {
		CloseableHttpClient httpclient = HttpClients.createDefault();
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
}
