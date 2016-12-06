package com.ai.yk.protal.web.utils;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Map;

import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

public final class HttpClientUtil {
	private HttpClientUtil() {
	}

	public static String sendPostRequest(String url, String data,
			Map<String, String> header) throws Exception {
		CloseableHttpClient httpclient = HttpClients.createDefault();
		HttpPost httpPost = new HttpPost(new URL(url).toURI());
		for (Map.Entry<String, String> entry : header.entrySet()) {
			httpPost.setHeader(entry.getKey(), entry.getValue());
		}
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
						entity.getContent(), "UTF-8"));
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
