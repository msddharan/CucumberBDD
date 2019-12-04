Feature: Consumer Payment Ecashiering application Test

Scenario: TC002_AccountSearch_CreditCard_MasterCard_Pay

Given User1 opens browser
Then User1 enters User1name 
And User1 enters password
And User1 clicks on Submit button
Then User1 clicks on AcceptPayment link
And User1 enters the patient name in Search text box
And User1 clicks on Accept Payment Search button
And User1 selects a document from Search Results
And User1 clicks on Pay on Selected Account Button
And User1 unselects CardReaderCheckbox
And User1 updates PaymentAmount
And User1 enters comments
And User1 clicks on ElectronicPaymentButton
And User1 enters Master CreditCard Number
And User1 selects expirationYear
And User1 enters CVV Number
And User1 enters Address Line
And User1 enters PhoneNumber
And User1 clicks on ReviewPayment Button
And User1 clicks on SubmitPayment button
Then MasterCard Receipt Page should be displayed