package com.adactin_helper;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.pom.org.Book_Hotel;
import com.pom.org.Itinerary;
import com.pom.org.Login_page;
import com.pom.org.Logout;
import com.pom.org.Search_Hotel;
import com.pom.org.Select_Hotel;

public class Page_Object_Manager {
	public WebDriver driver;
	private Login_page lp;
	private Search_Hotel sh;
	Select_Hotel s;
	Book_Hotel bh;
	Itinerary it;
	Logout lt;

	public Page_Object_Manager(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public Login_page getInstanceLogin() {
		lp = new Login_page(driver);
		return lp;
	}

	public Search_Hotel getInstanceSearch() {
		sh = new Search_Hotel(driver);
		return sh;
	}

	public Select_Hotel getInstanceSelect() {
		s = new Select_Hotel(driver);
		return s;

	}

	public Book_Hotel getBooked() {
		bh = new Book_Hotel(driver);
		return bh;
	}

	public Itinerary getItinerary() {
		it = new Itinerary(driver);
		return it;
	}

	public Logout getLogout() {
		lt = new Logout(driver);
		return lt;
	}

}
