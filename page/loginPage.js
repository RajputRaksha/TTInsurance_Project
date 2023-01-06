import locators from "../locators/loginPage.json"
import assertionObj from "../utility/assert"
import actionsObj from "../utility/actions"
class loginPage{
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
    get errorSpan(){
        return cy.xpath(locators.error_Span_xpath)
    }
    get logoutBtn1(){
        return cy.get(locators.logout_btn)
    }
    launchApp(url){
        actionsObj.launchUrl(url)
        assertionObj.assertUrl(url)
    }
    assertHeading(value){
        assertionObj.assertText(this.headerH3,value)
    }
    enterUser(value){
        actionsObj.inputText(this.userNameTxt,value)
    }
    enterPassword(value){
        actionsObj.inputText(this.passwordTxt,value)
    }
    clickLoginbtn(){
        actionsObj.buttonClick(this.loginBtn)
    }
    assertDash(url){
        assertionObj.assertUrl(url)
    }
    assertErrorSpan(){
        assertionObj.assertVisibility(this.errorSpan)
    }
    logout(){
        actionsObj.buttonClick(this.logoutBtn1)
    }
}
let loginPageObj=new loginPage()
export default loginPageObj