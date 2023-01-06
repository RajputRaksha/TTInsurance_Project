import locators from "../locators/loginPage.json"
import assertionObj from "../utility/assert"
import actionsObj from "../utility/actions"
class navigation{
    get headerH3(){
        return cy.xpath(locators.heading_h3_xpath)
    }
    get userNameTxt(){
        return cy.get(locators.userName_txt)
    }
    get passwordTxt(){
        return cy.get(locators.password_txt)
    }
    get loginBtn(){
        return cy.get(locators.login_btn)
    }
    
    launchApp(url,userName,Password){
        actionsObj.launchUrl(url)
        assertionObj.assertUrl(url)
        actionsObj.inputText(this.userNameTxt,userName)
        actionsObj.inputText(this.passwordTxt,Password)
        actionsObj.buttonClick(this.loginBtn)
    }
    assertHeading(value){
        assertionObj.assertText(this.headerH3,value)
    }
        
    assertDash(url){
        assertionObj.assertUrl(url)
    }
    
}
let navigationObj=new navigation()
export default navigationObj