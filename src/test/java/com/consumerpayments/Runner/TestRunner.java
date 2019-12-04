package com.consumerpayments.Runner;

import java.io.File;
import java.io.IOException;

import org.junit.runner.RunWith;	
import org.testng.annotations.AfterClass;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions (
		features ="/Applications/A.Dhamodharan Sakthivel/Master Automation Testing/BDD_Cucumber_Framework_POM/"
				+ "src/test/java/com/consumerpayments/Features/",
		glue= {"com/consumerpayments/stepDefinitions"},// path of step definition files
		format= {"pretty","html:test-output"},
		dryRun=false,
		monochrome= true, //display the console output in proper readable format
		plugin="com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html",
		strict= true// it will check with any step is not defined in Step definition file
		// tags	={"~@Smoketest" , "~RegressionTest , "~End2End""}
	)
	

public class TestRunner {
	@AfterClass
    public static void setup() throws IOException {
        Reporter.loadXMLConfig(new File("/Applications/A.Dhamodharan Sakthivel/Master Automation Testing/"
        		+ "BDD_Cucumber_Framework_POM/src/test/java/com/consumerpayments/Features/extent-config.xml"));
        Reporter.setSystemInfo("user", System.getProperty("user.name"));
        Reporter.setSystemInfo("os", "Mac OSX");
        Reporter.setTestRunnerOutput("Sample test runner output message");
        Reporter.addScreenCaptureFromPath("/Applications/A.Dhamodharan Sakthivel/Master Automation Testing/BDD_Cucumber_Framework_POM/Screenshots"); 
    }
	
}
