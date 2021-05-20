package com.adactin_helper;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class Configuration_Reader {
	public static Properties p;


	public Configuration_Reader() throws Throwable {
		// TODO Auto-generated constructor stub

		File f = new File(
				"C:\\Users\\Admin\\eclipse-workspace\\Selenium_Main_project\\src\\test\\java\\com\\adactin_properties\\org\\Adactin.properties");
		FileInputStream fis = new FileInputStream(f);
		p = new Properties();
		p.load(fis);
	}

	public String getbrowser() {
		// TODO Auto-generated method stub
		String browser = p.getProperty("browser");
		return browser;
	}

	public String geturl() {
		String url = p.getProperty("url");
		return url;
	}
}
