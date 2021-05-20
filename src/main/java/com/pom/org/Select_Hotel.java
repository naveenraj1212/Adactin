package com.pom.org;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Select_Hotel {
	public WebDriver driver;

	public Select_Hotel(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//input[@name='radiobutton_0']")
	private WebElement select;
	@FindBy(xpath = "//input[@name='continue']")
	private WebElement continuebtn;

	public WebElement getSelect(WebDriver driver) {
		return select;
	}

	public WebElement getContinuebtn(WebDriver driver) {
		return continuebtn;
	}

}
