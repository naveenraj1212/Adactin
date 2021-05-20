package com.pom.org;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Itinerary {
	public static WebDriver driver;

	public Itinerary(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//input[@id='my_itinerary']")
	private WebElement itenerary;

	public WebDriver getDriver(WebDriver driver) {
		return driver;
	}

	public WebElement getItenerary(WebDriver driver) {
		return itenerary;
	}

}
