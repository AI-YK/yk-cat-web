package com.ai.yk.protal.web.controller;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.math.BigDecimal;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.paas.ipaas.i18n.ResWebBundle;

/**
 * 
 * Controller基础类 <br>
 * Date: 2016年12月12日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author xuyw
 */
public class BaseController {
	private Log LOG = LogFactory.getLog(BaseController.class);

	@Autowired
	protected HttpServletRequest request;

	@Autowired
	protected HttpSession session;

	@Autowired
	protected ResWebBundle rb;

	public int getInt(String name) {
		return getInt(name, 0);
	}

	public int getInt(String name, int defaultValue) {
		String resultStr = getRequestParameter(name);
		if (resultStr != null) {
			try {
				return Integer.parseInt(resultStr);
			} catch (Exception e) {
				return defaultValue;
			}
		}
		return defaultValue;
	}

	public BigDecimal getBigDecimal(String name) {
		return getBigDecimal(name, null);
	}

	public BigDecimal getBigDecimal(String name, BigDecimal defaultValue) {
		String resultStr = getRequestParameter(name);
		if (resultStr != null) {
			try {
				return BigDecimal.valueOf(Double.parseDouble(resultStr));
			} catch (Exception e) {
				return defaultValue;
			}
		}
		return defaultValue;
	}

	public String getString(String name) {
		return getString(name, null);
	}

	public String getString(String name, String defaultValue) {
		String resultStr = getRequestParameter(name);
		if (StringUtil.isBlank(resultStr) || "null".equalsIgnoreCase(resultStr)
				|| "undefined".equals(resultStr)) {
			return defaultValue;
		} else {
			return resultStr;
		}
	}

	public double getDouble(String name) {
		return getDouble(name, 0);
	}

	public double getDouble(String name, double defaultValue) {
		String resultStr = getRequestParameter(name);
		if (resultStr != null) {
			try {
				return Double.parseDouble(resultStr);
			} catch (Exception e) {
				return defaultValue;
			}
		}
		return defaultValue;
	}

	public String getIpAddr() {
		String ip = request.getHeader("x-forwarded-for");
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("WL-Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getRemoteAddr();
		}
		return ip;
	}

	public String getMACAddress(String ip) {
		String str = "";
		String macAddress = "";
		try {
			Process p = Runtime.getRuntime().exec("nbtstat -A " + ip);
			InputStreamReader ir = new InputStreamReader(p.getInputStream());
			LineNumberReader input = new LineNumberReader(ir);
			for (int i = 1; i < 100; i++) {
				str = input.readLine();
				if (str != null) {
					if (str.indexOf("MAC Address") > 1) {
						macAddress = str.substring(
								str.indexOf("MAC Address") + 14, str.length());
						break;
					}
					if (str.indexOf("MAC Address") > 1) {
						macAddress = str.substring(str.indexOf("MAC 地址") + 14,
								str.length());
						break;
					}
				}
			}
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}
		return macAddress;
	}

	private String getRequestParameter(String name) {
		return request.getParameter(name);
	}
}
