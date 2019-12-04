$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ECashiering.feature");
formatter.feature({
  "line": 1,
  "name": "Consumer Payment Ecashiering application Test",
  "description": "",
  "id": "consumer-payment-ecashiering-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "TC001_AccountSearch_CreditCard_Visa_Pay",
  "description": "",
  "id": "consumer-payment-ecashiering-application-test;tc001-accountsearch-creditcard-visa-pay",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters username",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on AcceptPayment link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User enters the patient name in Search text box",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Accept Payment Search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User selects a document from Search Results",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Pay on Selected Account Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User unselects CardReaderCheckbox",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User updates PaymentAmount",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters comments",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks on ElectronicPaymentButton",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters Visa CreditCard Number",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User selects expirationYear",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters Address Line",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters PhoneNumber",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on ReviewPayment Button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User clicks on SubmitPayment button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Receipt Page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Ecashiering_Steps.user_opens_browser()"
});
formatter.result({
  "duration": 15646835777,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps.user_enters_username()"
});
formatter.result({
  "duration": 245033713,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps.user_enters_password()"
});
formatter.result({
  "duration": 67505705,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 6957192123,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps.user_clicks_on_AcceptPayment_link()"
});
formatter.result({
  "duration": 75837915,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps.user_enters_the_patient_name_in_Search_text_box()"
});
formatter.result({
  "duration": 78310800,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps.user_clicks_on_Accept_Payment_Search_button()"
});
formatter.result({
  "duration": 2992388169,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps.user_selects_a_document_from_Search_Results()"
});
formatter.result({
  "duration": 58552148,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps.User_clicks_on_Pay_on_Selected_Account_Button()"
});
formatter.result({
  "duration": 4342247148,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps.user_unselects_CardReaderCheckbox()"
});
formatter.result({
  "duration": 49904457,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps.user_updates_PaymentAmount()"
});
formatter.result({
  "duration": 103489318,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps.user_enters_comments()"
});
formatter.result({
  "duration": 1094629579,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps.user_clicks_on_ElectronicPaymentButton()"
});
formatter.result({
  "duration": 6272017313,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps.user_enters_Visa_CreditCard_Number()"
});
formatter.result({
  "duration": 20342289746,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d78.0.3904.108)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Dhamodharans-iMac.local\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /var/folders/jn/qgh107891cx...}, goog:chromeOptions: {debuggerAddress: localhost:55946}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1e13cd0adc3dbd8a5ec661ad482d0471\n*** Element info: {Using\u003dname, value\u003dcardnumber}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\n\tat com.consumerpayments_pages.ElectronicPayment.EnterCardNumber(ElectronicPayment.java:71)\n\tat com.consumerpayments.stepDefinitions.Ecashiering_Steps.user_enters_Visa_CreditCard_Number(Ecashiering_Steps.java:95)\n\tat ✽.And User enters Visa CreditCard Number(ECashiering.feature:18)\n",
  "status": "failed"
});
formatter.match({
  "location": "Ecashiering_Steps.user_selects_expirationYear()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Ecashiering_Steps.user_enters_CVV_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Ecashiering_Steps.user_enters_Address_Line()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Ecashiering_Steps.user_enters_PhoneNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Ecashiering_Steps.user_clicks_on_ReviewPayment_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Ecashiering_Steps.user_clicks_on_SubmitPayment_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Ecashiering_Steps.receipt_Page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("ECashiering2.feature");
formatter.feature({
  "line": 1,
  "name": "Consumer Payment Ecashiering application Test",
  "description": "",
  "id": "consumer-payment-ecashiering-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "TC002_AccountSearch_CreditCard_MasterCard_Pay",
  "description": "",
  "id": "consumer-payment-ecashiering-application-test;tc002-accountsearch-creditcard-mastercard-pay",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User1 opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User1 enters User1name",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User1 enters password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User1 clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User1 clicks on AcceptPayment link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User1 enters the patient name in Search text box",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User1 clicks on Accept Payment Search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User1 selects a document from Search Results",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User1 clicks on Pay on Selected Account Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User1 unselects CardReaderCheckbox",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User1 updates PaymentAmount",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User1 enters comments",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User1 clicks on ElectronicPaymentButton",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User1 enters Master CreditCard Number",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User1 selects expirationYear",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User1 enters CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User1 enters Address Line",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User1 enters PhoneNumber",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User1 clicks on ReviewPayment Button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User1 clicks on SubmitPayment button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "MasterCard Receipt Page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Ecashiering_Steps2.user1_opens_browser()"
});
formatter.result({
  "duration": 7386402070,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps2.User1_enters_username()"
});
formatter.result({
  "duration": 115040929,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps2.user1_enters_password()"
});
formatter.result({
  "duration": 76448127,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps2.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 3024942101,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps2.user_clicks_on_AcceptPayment_link()"
});
formatter.result({
  "duration": 67608536,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps2.user_enters_the_patient_name_in_Search_text_box()"
});
formatter.result({
  "duration": 78361750,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps2.user_clicks_on_Accept_Payment_Search_button()"
});
formatter.result({
  "duration": 1787249132,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps2.user_selects_a_document_from_Search_Results()"
});
formatter.result({
  "duration": 51812539,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps2.User_clicks_on_Pay_on_Selected_Account_Button()"
});
formatter.result({
  "duration": 3831086982,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps2.user_unselects_CardReaderCheckbox()"
});
formatter.result({
  "duration": 60153784,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps2.user_updates_PaymentAmount()"
});
formatter.result({
  "duration": 97663913,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps2.user_enters_comments()"
});
formatter.result({
  "duration": 1094009049,
  "status": "passed"
});
formatter.match({
  "location": "Ecashiering_Steps2.user_clicks_on_ElectronicPaymentButton()"
});
formatter.result({
  "duration": 40126020,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"button\" class\u003d\"btn btn-secondary btn-action\" onclick\u003d\"SubmitValidatedForm(\u0027electronicPayment\u0027);\" value\u003d\"Electronic Payment\"\u003e is not clickable at point (1429, 452). Other element would receive the click: \u003cdiv id\u003d\"maskMessage\" style\u003d\"position: absolute; top: 0px; left: 0px; height: 100%; width: 100%; display: block; background-color: black; opacity: 0.75;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d78.0.3904.108)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Dhamodharans-iMac.local\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /var/folders/jn/qgh107891cx...}, goog:chromeOptions: {debuggerAddress: localhost:55996}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5fdf37051fda2a1f92662548357e5375\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\n\tat com.consumerpayments_pages.AcceptPayment.electronicPaymentButtonClick(AcceptPayment.java:95)\n\tat com.consumerpayments.stepDefinitions.Ecashiering_Steps2.user_clicks_on_ElectronicPaymentButton(Ecashiering_Steps2.java:86)\n\tat ✽.And User1 clicks on ElectronicPaymentButton(ECashiering2.feature:17)\n",
  "status": "failed"
});
formatter.match({
  "location": "Ecashiering_Steps2.user_enters_Master_CreditCard_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Ecashiering_Steps2.user_selects_expirationYear()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Ecashiering_Steps2.user_enters_CVV_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Ecashiering_Steps2.user_enters_Address_Line()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Ecashiering_Steps2.user_enters_PhoneNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Ecashiering_Steps2.user_clicks_on_ReviewPayment_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Ecashiering_Steps2.user_clicks_on_SubmitPayment_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Ecashiering_Steps2.MasterCard_receipt_Page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
});