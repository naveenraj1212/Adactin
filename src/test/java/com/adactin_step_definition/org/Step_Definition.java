package com.adactin_step_definition.org;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.adactin_helper.File_Reader_Manager;
import com.adactin_helper.Page_Object_Manager;
import com.baseclass.org.BaseClass;
import com.pom.org.Book_Hotel;
import com.pom.org.Itinerary;
import com.pom.org.Login_page;
import com.pom.org.Logout;
import com.pom.org.Search_Hotel;
import com.pom.org.Select_Hotel;
import com.testrunner.Test_Runner;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Definition extends BaseClass {
	public static WebDriver driver = Test_Runner.driver;
	public static Page_Object_Manager pom = new Page_Object_Manager(driver);

	@Given("^user launch the Application$")
	public void user_launch_the_Application() throws Throwable {
		String geturl = File_Reader_Manager.getInstance().getInstanceCR().geturl();
		openUrl(geturl);
	}

	@When("^user enter the \"([^\"]*)\" in username field$")
	public void user_enter_the_in_username_field(String username) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		inputValue(pom.getInstanceLogin().getUsername(), username);
	}

	@When("^user enter the \"([^\"]*)\" in password field$")
	public void user_enter_the_in_password_field(String password) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		inputValue(pom.getInstanceLogin().getPassword(), password);
	}

	@Then("^user click the Login Button$")
	public void user_click_the_Login_Button() throws Throwable {
		clickOnElement(pom.getInstanceLogin().getLogin());
	}
	///////////////////////

	@When("^user select the Location in Adactin Application$")
	public void user_select_the_Location_in_Adactin_Application() throws Throwable {
		dropdowns2(pom.getInstanceSearch().getLocation(driver), "New York");
		// dropdowns2(s.getLocation(driver), "");
	}

	@When("^user Select the Hotel in Adactin Application$")
	public void user_Select_the_Hotel_in_Adactin_Application() throws Throwable {

		dropdowns2(pom.getInstanceSearch().getHotel(driver), "Hotel Creek");
	}

	@When("^user select the Hotel type in Adactin Application$")
	public void user_select_the_Hotel_type_in_Adactin_Application() throws Throwable {
		dropdowns2(pom.getInstanceSearch().getRoomtype(driver), "Super Deluxe");
	}

	@When("^user select the No\\.of Rooms in Adactin Application$")
	public void user_select_the_No_of_Rooms_in_Adactin_Application() throws Throwable {
		dropdowns2(pom.getInstanceSearch().getNorooms(driver), "1");
	}

	@When("^user enter the check in date in Adactin Application$")
	public void user_enter_the_check_in_date_in_Adactin_Application() throws Throwable {
		inputValue(pom.getInstanceSearch().getIndate(driver), "11/05/2021");
	}

	@When("^User enter the check out date in Adactin Application$")
	public void user_enter_the_check_out_date_in_Adactin_Application() throws Throwable {
		inputValue(pom.getInstanceSearch().getOutdate(driver), "11/06/2021");
	}

	@When("^user select the Adult per Room in Adactin Application$")
	public void user_select_the_Adult_per_Room_in_Adactin_Application() throws Throwable {
		dropdowns2(pom.getInstanceSearch().getAdults(driver), "2");
	}

	@When("^user select the Children per Room in Adactin Application$")
	public void user_select_the_Children_per_Room_in_Adactin_Application() throws Throwable {

		dropdowns2(pom.getInstanceSearch().getChild(driver), "1");
	}

	@Then("^user click the search button in adactin application$")
	public void user_click_the_search_button_in_adactin_application() throws Throwable {
		clickOnElement(pom.getInstanceSearch().getSearch(driver));
	}

//	//
	@When("^user Select the Hotel in Adactin application$")
	public void user_Select_the_Hotel_in_Adactin_application() throws Throwable {
		clickOnElement(pom.getInstanceSelect().getSelect(driver));
	}

	@Then("^user click the Continue Button in Adactin application$")
	public void user_click_the_Continue_Button_in_Adactin_application() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		clickOnElement(pom.getInstanceSelect().getContinuebtn(driver));
	}

	//
	// scenaro 4
	@When("^user enter the first name in first name field$")
	public void user_enter_the_first_name_in_first_name_field() throws Throwable {
		inputValue(pom.getBooked().getFirstname(driver), "mani");
	}

	@When("^user enter the last name in last name field$")
	public void user_enter_the_last_name_in_last_name_field() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		inputValue(pom.getBooked().getLastname(driver), "prabhu");
	}

	@When("^user enter the Billing address in Adactin Application$")
	public void user_enter_the_Billing_address_in_Adactin_Application() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		inputValue(pom.getBooked().getAddress(driver), "H19.tami nagar,1st Street,Giri nagar park,ramapuram-600089");
	}

	@When("^user enter the \"([^\"]*)\" in Credit Card Number field$")
	public void user_enter_the_in_Credit_Card_Number_field(String cardnumber) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		inputValue(pom.getBooked().getCardnumber(driver), cardnumber);
	}

	@When("^user select the Credit card Type$")
	public void user_select_the_Credit_card_Type() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		dropdowns2(pom.getBooked().getCardtype(driver), "MAST");
	}

	@When("^user Select The Expiry Month$")
	public void user_Select_The_Expiry_Month() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		dropdowns2(pom.getBooked().getCardmonth(driver), "6");
	}

	@When("^user Select The Expiry Year$")
	public void user_Select_The_Expiry_Year() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		dropdowns2(pom.getBooked().getCardyear(driver), "2021");
	}

	@When("^user enter the \"([^\"]*)\" in CVV number Field$")
	public void user_enter_the_in_CVV_number_Field(String cvv) throws Throwable {
		inputValue(pom.getBooked().getcVV(driver), cvv);
	}

	@Then("^user click the Book Now Button in Adactin application$")
	public void user_click_the_Book_Now_Button_in_Adactin_application() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		clickOnElement(pom.getBooked().getBooknow(driver));
		Thread.sleep(3000);
	}

	//
	// scenario 5
	//

	@Then("^user click the My Itinerary Button in Adactin Application$")
	public void user_click_the_My_Itinerary_Button_in_Adactin_Application() throws Throwable {
		Thread.sleep(3000);
		clickOnElement(pom.getItinerary().getItenerary(driver));
	}
	//
	// scenario 6

	@Then("^user click the Logout Button In Adactin Application$")
	public void user_click_the_Logout_Button_In_Adactin_Application() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		clickOnElement(pom.getLogout().getLogout(driver));
	}

}
