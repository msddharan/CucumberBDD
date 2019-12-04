package com.consumerpayments_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.consumerpayments.utilities.TestBase;

public class LoginPage extends TestBase{

	// Page Factory - OR:
		
	@FindBy(name="LoginCredentials.UserName")
	WebElement Username;
	
	@FindBy(name="LoginCredentials.Password")
	WebElement Password;
	
	@FindBy(name="btnLogin")
	WebElement Submit;
	
	@FindBy(xpath="//*[@id=\"logged-in\"]/p/a")
	WebElement Logout;
	
	//Intializing the Page Objects:
	
	public LoginPage()
	{
		PageFactory.initElements(driver, this);
	}
	
	// Actions:
	
	public void setUsername(String uname)
	{
		Username.sendKeys(uname);
	}
	
	public void setPassword(String pwd)
	{
		Password.sendKeys(pwd);
	}
	
	public void clickSubmit()
	{
		Submit.click();
	}
	
	public void clickLogout()
	{
		Logout.click();
	}
	
}
