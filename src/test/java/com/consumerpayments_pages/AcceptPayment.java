package com.consumerpayments_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.consumerpayments.utilities.TestBase;

public class AcceptPayment extends TestBase{

	//Page Factory - OR:
	
	@FindBy(xpath="//*[@id=\"nav\"]/ul/li[2]/a")
	WebElement Ecashieringhover;
	
	@FindBy(xpath="//*[@id=\"nav\"]/ul/li[2]/ul/li[1]/a")
	WebElement AcceptPaymentLink;
	
	@FindBy(name="txtSearch")
	WebElement AcceptPaymentSearchTextBox;
	
	@FindBy(name="btnSearch")
	WebElement AcceptPaymentButtonSearch;
	
	@FindBy(name="chkDocId_5547867")
	WebElement AcceptPaymentSearchResultsSelection;
	
	@FindBy(name="btnPaySelectedAccount")
	WebElement PayselectedAccountButton;
	
	@FindBy(name="Ctrl3_1")
	WebElement PaymentAmountTextBox;
	
	@FindBy(name="card-reader")
	WebElement CardReaderCheckBox;
	
	@FindBy(xpath="//*[@id=\"frmAccountPayment\"]/div[6]/table/tbody/tr[1]/td[2]/input")
	WebElement ElectronicPaymentButton;
	
	@FindBy(name="comments")
	WebElement CommentsTextBox;
	
	// Intialization:
	
	public AcceptPayment()
	{
		PageFactory.initElements(driver,this);
	}
	
	//  Actions
	
	public void Ecashieringhover()
	{
		Ecashieringhover.click();
	}
	
	public void ClickAcceptPaymentLink()
	{
		AcceptPaymentLink.click();
	}
	
	public void setAcceptPaymentSearchCondition(String acceptpaymentsearchdata)
	{
		AcceptPaymentSearchTextBox.sendKeys(acceptpaymentsearchdata);
	}
	
	public void AcceptPaymentSearchResultsSelection()
	{
		AcceptPaymentSearchResultsSelection.click();
	}
	
	public void AcceptPaymentButtonSearch()
	{
		AcceptPaymentButtonSearch.click();
	}
	
	public void PayselectedAccountButton()
	{
		PayselectedAccountButton.click();
	}
	
	public void setPaymentAmount(String PaymentAmount)
	{
		PaymentAmountTextBox.clear();
		PaymentAmountTextBox.sendKeys(PaymentAmount);
	}
	
	public void cardReaderCheckBoxSelect()
	{
		CardReaderCheckBox.click();
	}
	
	public void electronicPaymentButtonClick()
	{
		ElectronicPaymentButton.click();
	}
	
	public void EnterComments(String Comments)
	{

		CommentsTextBox.sendKeys(Comments);
	}
}
