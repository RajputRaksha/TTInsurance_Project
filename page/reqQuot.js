import locators from "../locators/requQuot.json"
import assertionObj from "../utility/assert"
import actionsObj from "../utility/actions"
class reqObj {
    get reqQuotSec() {
        return cy.get(locators.requQuot)
    }
    get reqHeading() {
        return cy.get(locators.reqHeading)
    }
    get breakDownCOverCmb() {
        return cy.get(locators.breakDownCover_cmb)
    }
    get yesRadioBtn() {
        return cy.xpath(locators.yesRadio_xpath)
    }
    get incidentTxt1() {
        return cy.get(locators.incidents_txt)
    }
    get regTxt1() {
        return cy.get(locators.registration_txt)
    }
    get annualTxt1() {
        return cy.get(locators.annualMil_txt)
    }
    get estimateTxt1() {
        return cy.get(locators.estimate_txt)
    }
    get parkingCmb1() {
        return cy.get(locators.parking_cmb)
    }
    get dateCmb() {
        return cy.xpath(locators.date_xpath)
    }
    get calculateBtn() {
        return cy.get(locators.calculate_btn)
    }
    get resetBtn() {
        return cy.get(locators.resetForm_btn)
    }
    get saveBtn() {
        return cy.get(locators.saveForm_btn)
    }
    get premiumtxt1(){
        return cy.get(locators.premiumTXt)
    }
    get reQIdframe(){
        return cy.get(locators.reqIdiframe)
    }
    reqSecClick() {
        actionsObj.buttonClick(this.reqQuotSec)
    }
    breakDownCmb(value) {
        actionsObj.dropDown(this.breakDownCOverCmb, value)
    }
    yesRadio() {
        actionsObj.buttonClick(this.yesRadioBtn)
    }
    incidenTxt(value) {
        actionsObj.inputText(this.incidentTxt1, value)
    }
    regTxt(value) {
        actionsObj.inputText(this.regTxt1, value)
    }
    annualTxt(value) {
        actionsObj.inputText(this.annualTxt1, value)
    }
    esitimateTxt(value) {
        actionsObj.inputText(this.estimateTxt1, value)
    }
    parkingCmb(value) {
        actionsObj.dropDown(this.parkingCmb1, value)
    }
    dateCombo(year, month, day) {
        actionsObj.dropDown(this.dateCmb.eq(0), year)
        actionsObj.dropDown(this.dateCmb.eq(1), month)
        actionsObj.dropDown(this.dateCmb.eq(2), day)
    }
    calculateBt() {
        actionsObj.buttonClick(this.calculateBtn)
    }
    resetBt() {
        actionsObj.buttonClick(this.resetBtn)
    }
    saveQuotBtn() {
        cy.intercept(Cypress.config().baseUrl+'new_quotation.php').as('reqId')
        actionsObj.buttonClick(this.saveBtn)
        cy.wait('@reqId').then(({response})=>{
            cy.writeFile("cypress/fixtures/id.json",{id:response.body.split('</b>')[2].split('<br/>')[0]})
        })
    }
    premiumTxt_p(){
        assertionObj.assertVisibility(this.premiumtxt1)
    }
    verifyEmtytext1(){
        assertionObj.assertEmpty(this.incidentTxt1)
    }
    verifyEmtytext2(){
        assertionObj.assertEmpty(this.registration_txt)
    }
    reqId(){
    }
    
}
let requQuotObj=new reqObj()
export default requQuotObj