package com.testrunner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin_helper.File_Reader_Manager;
import com.baseclass.org.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@CucumberOptions(features = "src//test//java//com//feature_file", glue = "com.adactin_step_definition.org",
monochrome = true,dryRun = false,strict = true,
tags = "@smoketest,@sanitytest,~@regressiontest",
plugin= {
		"html:Report/Cucumber_Report",
		"pretty",
		"json:Report/Cucumber.json",
		"com.cucumber.listener.ExtentCucumberFormatter:ExtendReport/ExRep.html"
	
})
@RunWith(Cucumber.class)
public class Test_Runner {

	public static WebDriver driver;

	@BeforeClass
	public static void setup() throws Throwable {
		String browser = File_Reader_Manager.getInstance().getInstanceCR().getbrowser();
				driver = BaseClass.browserLaunch(browser);
	}

	@AfterClass
	public static void closebrows() throws InterruptedException {
		Thread.sleep(3000);
		driver.close();

	}

}
