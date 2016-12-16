package com.ai.yk.protal.web.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ConfigUtil {

	public static Properties config;
	private static String default_config_1 = "/config.properties";
	static {
		config = new Properties();
		InputStream is = null;
		try {
			@SuppressWarnings("rawtypes")
			Class config_class = ConfigUtil.class;
			is = new FileInputStream(new File(config_class.getResource(
					default_config_1).toURI()));
			config.load(is);

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (is != null) {
				try {
					is.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}

	}

	public static String getProperty(String key) {
		return config.getProperty(key);
	}
}
