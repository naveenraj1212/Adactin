package com.pom.org;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Book_Hotel {
	public WebDriver driver;

	public Book_Hotel(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//input[@name='first_name']")
	WebElement firstname;
	@FindBy(xpath = "//input[@name='last_name']")
	WebElement lastname;
	@FindBy(xpath = "//textarea[@name='address']")
	WebElement address;
	@FindBy(xpath = "//input[@name='cc_num']")
	WebElement cardnumber;
	@FindBy(xpath = "//select[@name='cc_type']")
	WebElement cardtype;
	@FindBy(xpath = "//select[@name='cc_exp_month']")
	WebElement cardmonth;
	@FindBy(xpath = "//select[@name='cc_exp_year']")
	WebElement cardyear;
	@FindBy(xpath = "//input[@name='cc_cvv']")
	WebElement cVV;
	@FindBy(xpath = "//input[@name='book_now']")
	WebElement booknow;

	public WebDriver getDriver(WebDriver driver) {
		return driver;
	}

	public WebElement getFirstname(WebDriver driver) {
		return firstname;
	}

	public WebElement getLastname(WebDriver driver) {
		return lastname;
	}

	public WebElement getAddress(WebDriver driver) {
		return address;
	}

	public WebElement getCardnumber(WebDriver driver) {
		return cardnumber;
	}

	public WebElement getCardtype(WebDriver driver) {
		return cardtype;
	}

	public WebElement getCardmonth(WebDriver driver) {
		return cardmonth;
	}

	public WebElement getCardyear(WebDriver driver) {
		return cardyear;
	}

	public WebElement getcVV(WebDriver driver) {
		return cVV;
	}

	public WebElement getBooknow(WebDriver driver) {
		return booknow;
	}

}
