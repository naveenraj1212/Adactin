package com.pom.org;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Search_Hotel {
	public WebDriver driver;

	public Search_Hotel(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//select[@name='location']")
	private WebElement location;//new york
	@FindBy(xpath = "//select[@name='hotels']")
	private WebElement hotel;//hotel creeks
	@FindBy(xpath = "//select[@name='room_type']")
	private WebElement roomtype;//superdelux
	@FindBy(xpath = "//select[@name='room_nos']")
	private WebElement norooms;//1
	@FindBy(xpath = "//input[@name='datepick_in']")
	private WebElement indate;
	@FindBy(xpath = "//input[@name='datepick_out']")
	private WebElement outdate;
	@FindBy(xpath = "//select[@name='adult_room']")
	private WebElement adults;
	@FindBy(xpath = "//select[@name='child_room']")
	private WebElement child;
	@FindBy(xpath = "//input[@type='submit']")
	private WebElement search;

	public WebElement getLocation(WebDriver driver) {
		return location;
	}

	public WebElement getHotel(WebDriver driver) {
		return hotel;
	}

	public WebElement getRoomtype(WebDriver driver) {
		return roomtype;
	}

	public WebElement getNorooms(WebDriver driver) {
		return norooms;
	}

	public WebElement getIndate(WebDriver driver) {
		return indate;
	}

	public WebElement getOutdate(WebDriver driver) {
		return outdate;
	}

	public WebElement getAdults(WebDriver driver) {
		return adults;
	}

	public WebElement getChild(WebDriver driver) {
		return child;
	}

	public WebElement getSearch(WebDriver driver) {
		return search;
	}

}
