package com.consumerpayments.utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class TestBase {
public static Properties pro;
public static WebDriver driver;
	
	public TestBase()
	{
		
		try {
			pro = new Properties();
			FileInputStream fis = new FileInputStream("/Applications/A.Dhamodharan Sakthivel/Master Automation Testing/BDD_Cucumber_Framework_POM/Configuration/config.properties");
			pro.load(fis);
		} catch(Exception e) {
			System.out.println("Exception is " + e.getMessage());
			
		}
	}
	
	public static  void intialization() {
		System.out.println("Intialization method starts");
		String browserName = pro.getProperty("browserName");
		if(browserName.equals("chrome")){
			System.setProperty("webdriver.chrome.driver","/Applications/A.Dhamodharan Sakthivel/Master Automation Testing/BDD_Cucumber_Framework_POM/Drivers/chromedriver");
			driver = new ChromeDriver();
			System.out.println("Chrome Browser opened successfully");
		}
		
		else if(browserName.equals("firefox")){
			System.setProperty("webdriver.gecko.driver","/Applications/A.Dhamodharan Sakthivel/Master Automation Testing/BDD_Cucumber_Framework_POM/Drivers/geckodriver");
			driver = new FirefoxDriver();
		}
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(20,TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		driver.get(pro.getProperty("baseURL"));
		System.out.println("URL entered succesfully");
		}
	
	public void captureScreen(WebDriver driver, String tname) throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File source = ts.getScreenshotAs(OutputType.FILE);
		File target = new File(System.getProperty("user.dir") + "/Screenshots/" + tname + ".png");
		FileUtils.copyFile(source, target);
		System.out.println("Screenshot taken");
	}
	
	public String getReportConfigPath(){
		 String reportConfigPath = pro.getProperty("reportConfigPath");
		 if(reportConfigPath!= null) return reportConfigPath;
		 else throw new RuntimeException("Report Config Path not specified in the Configuration.properties file for the Key:reportConfigPath"); 
		}
	
	public String getUsername()
	{
		String username = pro.getProperty("Username");
		return username;
	}
	
	public String getPassword()
	{
		String password = pro.getProperty("Password");
		return password;
	}
	
	public String getacceptpaymentsearchdata()
	{
		String acceptpaymentsearchdata = pro.getProperty("acceptpaymentsearchdata");
		return acceptpaymentsearchdata;
	}
	
	public String getPaymentAmount()
	{
		String PaymentAmount = pro.getProperty("paymentAmount");
		return PaymentAmount;
	}
	
	public String getComments()
	{
		String Comments = pro.getProperty("comments");
		return Comments;
	}
	
	
	public String getVisaCardNumber()
	{
		String VisaCardNumber = pro.getProperty("VisaCardNumber");
		return VisaCardNumber;
	}
	
	public String getMasterCardNumber()
	{
		String MasterCardNumber = pro.getProperty("MasterCardNumber");
		return MasterCardNumber;
	}
	
	
	public String getCVV()
	{
		String CVV = pro.getProperty("CVV");
		return CVV;
	}
	
	public String getAMEXCVV()
	{
		String AmexCVV = pro.getProperty("AmexCVV");
		return AmexCVV;
	}
	
	public String getAddressLine2()
	{
		String AddressLine2 = pro.getProperty("AddressLine2");
		return AddressLine2;
	}
	
	public String getPhoneNumber()
	{
		String PhoneNumber = pro.getProperty("PhoneNumber");
		return PhoneNumber;
	}
	
	
	
	
	

}
