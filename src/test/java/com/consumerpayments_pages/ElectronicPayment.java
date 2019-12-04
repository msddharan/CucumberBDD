package com.consumerpayments_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.consumerpayments.utilities.TestBase;

public class ElectronicPayment extends TestBase{
	
	// PageFactory - OR:
	
	@FindBy(name="creditdebitradio")
	WebElement CreditDebitCheckbox;
	
	@FindBy(xpath="//*[@id=\"cardtype\"]")
	WebElement cardtypedropdown;
	
	@FindBy(name="cardnumber")
	WebElement EnterCardNumber;
	
	@FindBy(name="year")
	WebElement SelectExpirationDateYear;
	
	
	@FindBy(name="cvn")
	WebElement EnterCVV;
	
	@FindBy(name="addressLine2")
	WebElement EnterAddressLine2;
	
	@FindBy(name="phonenumber")
	WebElement EnterPhoneNumber;
	
	@FindBy(id="eCheckradioPersonal")
	WebElement ClickPersonalCheckCheckbox;
	
	@FindBy(id="routingnumber")
	WebElement EnterRoutingNumber;
	
	@FindBy(id="reenterroutingnumber")
	WebElement ReEnterRoutingNumber;
	
	@FindBy(id="accountnumber")
	WebElement EnterAccountNumber;
	
	@FindBy(id="reenteraccountnumber")
	WebElement ReEnterAccountNumber;
	
	
	@FindBy(id="checkserialnumber")
	WebElement EnterCheckSerialNumber;
	
	@FindBy(id="review-payment")
	WebElement ClickReviewPaymentButton;
	
	@FindBy(xpath="//*[@id=\"frmReviewPayment\"]/div[2]/a[2]")
	WebElement ClickSubmitPaymentButton;
	
	// Intialization:
	
	public ElectronicPayment()
	{
		PageFactory.initElements(driver,this);
	}

	// Actions:
	public void EnterCardNumber(String creditcardnumber)
	{
		EnterCardNumber.sendKeys(creditcardnumber);
	}
	
	
	public void SelectMasterCard()
	{
		Select dropdown1 = new Select(cardtypedropdown);
		dropdown1.selectByIndex(1);
	}
	
	public void SelectDiscoverCard()
	{
		Select dropdown1 = new Select(cardtypedropdown);
		dropdown1.selectByIndex(2);
	}
	
	public void SelectAmexCard()
	{
		Select dropdown1 = new Select(cardtypedropdown);
		dropdown1.selectByIndex(3);
	}
	
	
	public void SelectExpYear()
	{
		Select dropdown = new Select(SelectExpirationDateYear);
		dropdown.selectByIndex(5);
	}
	
	public void EnterCVV(String cvv)
	{
		EnterCVV.sendKeys(cvv);
	}
	
	public void EnterAddressLine2(String AddressLine2)
	{
		EnterAddressLine2.sendKeys(AddressLine2);
	}
	
	public void EnterPhoneNumber()
	{
		EnterPhoneNumber.sendKeys("1234567890");
	}
	
	public void ClickReviewPaymentButton()
	{
		ClickReviewPaymentButton.click();
	}
	
	public void ClickSubmitPaymentButton()
	{
		ClickSubmitPaymentButton.click();
	}
	
}
