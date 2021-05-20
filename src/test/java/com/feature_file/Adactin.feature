Feature: Booking Hotel In Adactin Application

@smoketest
Scenario: Login Page in Adactin Application
Given user launch the Application
When user enter the "9715804519" in username field 
And user enter the "anjanmani" in password field
Then user click the Login Button


@sanitytest
Scenario: Search the Hotel in Adactin Application
When user select the Location in Adactin Application
And user Select the Hotel in Adactin Application
And user select the Hotel type in Adactin Application
And user select the No.of Rooms in Adactin Application
And user enter the check in date in Adactin Application
And User enter the check out date in Adactin Application
And user select the Adult per Room in Adactin Application
And user select the Children per Room in Adactin Application
Then user click the search button in adactin application


@sanitytest
Scenario: Select hotel Page in Adactin application
When user Select the Hotel in Adactin application
Then user click the Continue Button in Adactin application 


Scenario Outline: Hotel Booking Page in Adactin Application
When user enter the first name in first name field
And user enter the last name in last name field
And user enter the Billing address in Adactin Application
And user enter the "<cardnumber>" in Credit Card Number field
And user select the Credit card Type
And user Select The Expiry Month
And user Select The Expiry Year
And user enter the "<cvv>" in CVV number Field
Then user click the Book Now Button in Adactin application
Examples:
|cardnumber|cvv|
|12345678|0|
|62662|11233|
|1234567887654321|765|

@sanitytest
Scenario: My Itinerary page in Adactin Application
Then user click the My Itinerary Button in Adactin Application

@regressiontest
Scenario: Logout Page In Adactin Application
Then user click the Logout Button In Adactin Application