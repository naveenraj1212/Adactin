$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Booking Hotel In Adactin Application",
  "description": "",
  "id": "booking-hotel-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login Page in Adactin Application",
  "description": "",
  "id": "booking-hotel-in-adactin-application;login-page-in-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the \"9715804519\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter the \"anjanmani\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click the Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_launch_the_Application()"
});
formatter.result({
  "duration": 10698715500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9715804519",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_enter_the_in_username_field(String)"
});
formatter.result({
  "duration": 2686991400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anjanmani",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_enter_the_in_password_field(String)"
});
formatter.result({
  "duration": 270186500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_click_the_Login_Button()"
});
formatter.result({
  "duration": 1234722700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search the Hotel in Adactin Application",
  "description": "",
  "id": "booking-hotel-in-adactin-application;search-the-hotel-in-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanitytest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user select the Location in Adactin Application",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user Select the Hotel in Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user select the Hotel type in Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user select the No.of Rooms in Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enter the check in date in Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter the check out date in Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user select the Adult per Room in Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user select the Children per Room in Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user click the search button in adactin application",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_select_the_Location_in_Adactin_Application()"
});
formatter.result({
  "duration": 449462600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_the_Hotel_in_Adactin_Application()"
});
formatter.result({
  "duration": 243455200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_select_the_Hotel_type_in_Adactin_Application()"
});
formatter.result({
  "duration": 189678300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_select_the_No_of_Rooms_in_Adactin_Application()"
});
formatter.result({
  "duration": 144037300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_enter_the_check_in_date_in_Adactin_Application()"
});
formatter.result({
  "duration": 186311800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_enter_the_check_out_date_in_Adactin_Application()"
});
formatter.result({
  "duration": 127061700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_select_the_Adult_per_Room_in_Adactin_Application()"
});
formatter.result({
  "duration": 175367800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_select_the_Children_per_Room_in_Adactin_Application()"
});
formatter.result({
  "duration": 194841300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_click_the_search_button_in_adactin_application()"
});
formatter.result({
  "duration": 939977800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Select hotel Page in Adactin application",
  "description": "",
  "id": "booking-hotel-in-adactin-application;select-hotel-page-in-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@sanitytest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user Select the Hotel in Adactin application",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user click the Continue Button in Adactin application",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_the_Hotel_in_Adactin_application()"
});
formatter.result({
  "duration": 134175100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_click_the_Continue_Button_in_Adactin_application()"
});
formatter.result({
  "duration": 657447600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Hotel Booking Page in Adactin Application",
  "description": "",
  "id": "booking-hotel-in-adactin-application;hotel-booking-page-in-adactin-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "user enter the first name in first name field",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user enter the last name in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user enter the Billing address in Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user enter the \"\u003ccardnumber\u003e\" in Credit Card Number field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user select the Credit card Type",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Select The Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Select The Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user enter the \"\u003ccvv\u003e\" in CVV number Field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user click the Book Now Button in Adactin application",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "booking-hotel-in-adactin-application;hotel-booking-page-in-adactin-application;",
  "rows": [
    {
      "cells": [
        "cardnumber",
        "cvv"
      ],
      "line": 41,
      "id": "booking-hotel-in-adactin-application;hotel-booking-page-in-adactin-application;;1"
    },
    {
      "cells": [
        "12345678",
        "0"
      ],
      "line": 42,
      "id": "booking-hotel-in-adactin-application;hotel-booking-page-in-adactin-application;;2"
    },
    {
      "cells": [
        "62662",
        "11233"
      ],
      "line": 43,
      "id": "booking-hotel-in-adactin-application;hotel-booking-page-in-adactin-application;;3"
    },
    {
      "cells": [
        "1234567887654321",
        "765"
      ],
      "line": 44,
      "id": "booking-hotel-in-adactin-application;hotel-booking-page-in-adactin-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 42,
  "name": "Hotel Booking Page in Adactin Application",
  "description": "",
  "id": "booking-hotel-in-adactin-application;hotel-booking-page-in-adactin-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "user enter the first name in first name field",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user enter the last name in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user enter the Billing address in Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user enter the \"12345678\" in Credit Card Number field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user select the Credit card Type",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Select The Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Select The Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user enter the \"0\" in CVV number Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user click the Book Now Button in Adactin application",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_enter_the_first_name_in_first_name_field()"
});
formatter.result({
  "duration": 692852500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_enter_the_last_name_in_last_name_field()"
});
formatter.result({
  "duration": 240911000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_enter_the_Billing_address_in_Adactin_Application()"
});
formatter.result({
  "duration": 510863800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_enter_the_in_Credit_Card_Number_field(String)"
});
formatter.result({
  "duration": 234964400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_select_the_Credit_card_Type()"
});
formatter.result({
  "duration": 223217300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Expiry_Month()"
});
formatter.result({
  "duration": 187674500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Expiry_Year()"
});
formatter.result({
  "duration": 225888000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_enter_the_in_CVV_number_Field(String)"
});
formatter.result({
  "duration": 117654000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_click_the_Book_Now_Button_in_Adactin_application()"
});
formatter.result({
  "duration": 3149067100,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Hotel Booking Page in Adactin Application",
  "description": "",
  "id": "booking-hotel-in-adactin-application;hotel-booking-page-in-adactin-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "user enter the first name in first name field",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user enter the last name in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user enter the Billing address in Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user enter the \"62662\" in Credit Card Number field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user select the Credit card Type",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Select The Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Select The Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user enter the \"11233\" in CVV number Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user click the Book Now Button in Adactin application",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_enter_the_first_name_in_first_name_field()"
});
formatter.result({
  "duration": 145782400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_enter_the_last_name_in_last_name_field()"
});
formatter.result({
  "duration": 107869700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_enter_the_Billing_address_in_Adactin_Application()"
});
formatter.result({
  "duration": 277764400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "62662",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_enter_the_in_Credit_Card_Number_field(String)"
});
formatter.result({
  "duration": 98561800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_select_the_Credit_card_Type()"
});
formatter.result({
  "duration": 112495600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Expiry_Month()"
});
formatter.result({
  "duration": 106297300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Expiry_Year()"
});
formatter.result({
  "duration": 107368600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11233",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_enter_the_in_CVV_number_Field(String)"
});
formatter.result({
  "duration": 91199700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_click_the_Book_Now_Button_in_Adactin_application()"
});
formatter.result({
  "duration": 3093870500,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Hotel Booking Page in Adactin Application",
  "description": "",
  "id": "booking-hotel-in-adactin-application;hotel-booking-page-in-adactin-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "user enter the first name in first name field",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user enter the last name in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user enter the Billing address in Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user enter the \"1234567887654321\" in Credit Card Number field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user select the Credit card Type",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Select The Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Select The Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user enter the \"765\" in CVV number Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user click the Book Now Button in Adactin application",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_enter_the_first_name_in_first_name_field()"
});
formatter.result({
  "duration": 109297700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_enter_the_last_name_in_last_name_field()"
});
formatter.result({
  "duration": 127976200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_enter_the_Billing_address_in_Adactin_Application()"
});
formatter.result({
  "duration": 326806300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567887654321",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_enter_the_in_Credit_Card_Number_field(String)"
});
formatter.result({
  "duration": 143861400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_select_the_Credit_card_Type()"
});
formatter.result({
  "duration": 99680700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Expiry_Month()"
});
formatter.result({
  "duration": 140647700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Expiry_Year()"
});
formatter.result({
  "duration": 185016500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "765",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_enter_the_in_CVV_number_Field(String)"
});
formatter.result({
  "duration": 135061900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_click_the_Book_Now_Button_in_Adactin_application()"
});
formatter.result({
  "duration": 3120596100,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "My Itinerary page in Adactin Application",
  "description": "",
  "id": "booking-hotel-in-adactin-application;my-itinerary-page-in-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@sanitytest"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "user click the My Itinerary Button in Adactin Application",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_click_the_My_Itinerary_Button_in_Adactin_Application()"
});
formatter.result({
  "duration": 4218823600,
  "status": "passed"
});
});