import logincred from '../../fixtures/login.json'
import retId from '../../fixtures/id.json'
import {Given,When,Then,And} from 'cypress-cucumber-preprocessor/steps'
import retriveQuotObj from '../../page/retrive';
import navigationObj from "../../page/navigation"

let url;
var reqId
before(()=>{
    url=Cypress.config().baseUrl+'index.php'
})
Given("I login to DemoGuru insurance Site",()=>{
    navigationObj.launchApp(url,logincred.emailId,logincred.password)

})
And("I Navigate to retrive Quotation Section",()=>{
    retriveQuotObj.navRetrive()
})
And("i Enter quotation id",()=>{
    retriveQuotObj.enterId(retId.id)
})
When("i click on retrive button",()=>{
    retriveQuotObj.clickRetriveBtn()
})
Then("i see retrived table on UI",()=>{
    retriveQuotObj.assertTable()
})
