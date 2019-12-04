Feature: Consumer Payment Ecashiering application Test

Scenario: TC001_AccountSearch_CreditCard_Visa_Pay

Given user opens browser
Then user enters username 
And User enters password
And user clicks on Submit button
Then user clicks on AcceptPayment link
And User enters the patient name in Search text box
And User clicks on Accept Payment Search button
And User selects a document from Search Results
And User clicks on Pay on Selected Account Button
And User unselects CardReaderCheckbox
And User updates PaymentAmount
And User enters comments
And User clicks on ElectronicPaymentButton
And User enters Visa CreditCard Number
And User selects expirationYear
And User enters CVV Number
And User enters Address Line
And User enters PhoneNumber
And User clicks on ReviewPayment Button
And User clicks on SubmitPayment button
Then Receipt Page should be displayed