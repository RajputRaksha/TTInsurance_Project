import {Given,And,When,Then} from "cypress-cucumber-preprocessor/steps"
import loginPageObj from "../../page/loginPage"
import testData from '../../fixtures/login.json'
let url
before(()=>{
    url=Cypress.config().baseUrl
})
Given("I launch login page of DemoGuru",()=>{
    loginPageObj.launchApp(url+'index.php')
})
And("I enter Valid Email id",()=>{
    loginPageObj.enterUser(testData.emailId)
})
And("I enter invalid Email id",()=>{
    loginPageObj.enterUser(testData.emailId+'1245')
})
And("I enter Valid Password",()=>{
    loginPageObj.enterPassword(testData.password)
})
When("I click on Login Button",()=>{
    loginPageObj.clickLoginbtn()
})
Then("I see header in url",()=>{
    loginPageObj.assertDash('header.php')
})
Then("I see error Message",()=>{
    loginPageObj.assertErrorSpan()
})
Then("I Logout Application",()=>{
    loginPageObj.logout()
})