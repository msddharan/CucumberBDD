package com.consumerpayments.stepDefinitions;


import java.io.IOException;

import com.consumerpayments.utilities.TestBase;
import com.consumerpayments_pages.AcceptPayment;
import com.consumerpayments_pages.ElectronicPayment;
import com.consumerpayments_pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Ecashiering_Steps extends TestBase{

	LoginPage lp;
	AcceptPayment ap;
	ElectronicPayment ep;
	
	@Given("^user opens browser$")
	public void user_opens_browser() throws Throwable{
		TestBase.intialization();
	}

	@Then("^user enters username$")
	public void user_enters_username()  {
	lp = new LoginPage();
	lp.setUsername(getUsername());
	}

	@And("^User enters password$")
	public void user_enters_password()  {
	lp.setPassword(getPassword());
	}

	@And("^user clicks on Submit button$")
	public void user_clicks_on_Submit_button()  {
	 lp.clickSubmit();
	}

	@Then("^user clicks on AcceptPayment link$")
	public void user_clicks_on_AcceptPayment_link() {
		ap = new AcceptPayment();
		ap.Ecashieringhover();
	}

	@And("^User enters the patient name in Search text box$")
	public void user_enters_the_patient_name_in_Search_text_box()  {
		ap.setAcceptPaymentSearchCondition(getacceptpaymentsearchdata());
	}

	@And("^User clicks on Accept Payment Search button$")
	public void user_clicks_on_Accept_Payment_Search_button()  {
		ap.AcceptPaymentButtonSearch();
	}


	@And("^User selects a document from Search Results$")
	public void user_selects_a_document_from_Search_Results()  {
	  ap.AcceptPaymentSearchResultsSelection();
	}

	@And("^User clicks on Pay on Selected Account Button$")
	public void User_clicks_on_Pay_on_Selected_Account_Button()  {
		ap.PayselectedAccountButton();
	}


	@Then("^User unselects CardReaderCheckbox$")
	public void user_unselects_CardReaderCheckbox()  {
	  ap.cardReaderCheckBoxSelect();
	}

	@Then("^User updates PaymentAmount$")
	public void user_updates_PaymentAmount()  {
		ap.setPaymentAmount(getPaymentAmount());
	}

	@Then("^User enters comments$")
	public void user_enters_comments() throws InterruptedException  {
	 ap.EnterComments(getComments());
	 Thread.sleep(1000);
	}

	@Then("^User clicks on ElectronicPaymentButton$")
	public void user_clicks_on_ElectronicPaymentButton() throws InterruptedException  {
		ap.electronicPaymentButtonClick();
		Thread.sleep(2000);
	}


	@Then("^User enters Visa CreditCard Number$")
	public void user_enters_Visa_CreditCard_Number()  {
	 ep = new ElectronicPayment();
	  ep.EnterCardNumber(getVisaCardNumber());
	}

	@Then("^User selects expirationYear$")
	public void user_selects_expirationYear()  {
	ep.SelectExpYear();
	}

	@Then("^User enters CVV Number$")
	public void user_enters_CVV_Number() {
	 ep.EnterCVV(getCVV());  
	}

	@Then("^User enters Address Line$")
	public void user_enters_Address_Line() {
		ep.EnterAddressLine2(getAddressLine2());
	}

	@Then("^User enters PhoneNumber$")
	public void user_enters_PhoneNumber()  {
		ep.EnterPhoneNumber();
	}

	@Then("^User clicks on ReviewPayment Button$")
	public void user_clicks_on_ReviewPayment_Button() throws InterruptedException  {
	 ep.ClickReviewPaymentButton();
	 Thread.sleep(1000);
	}


	@Then("^User clicks on SubmitPayment button$")
	public void user_clicks_on_SubmitPayment_button() throws InterruptedException, IOException  {
	ep.ClickSubmitPaymentButton();
	Thread.sleep(1000);
	System.out.println(driver.getTitle());
	captureScreen(driver,"Visa Payment_Receipt Page");
	
	}

	@Then("^Receipt Page should be displayed$")
	public void receipt_Page_should_be_displayed()  {
		String receiptPage = driver.getTitle();
		System.out.println(receiptPage);
		driver.quit();
	}
	
}
   
	
