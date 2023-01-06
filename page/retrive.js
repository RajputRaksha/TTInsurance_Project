import locators from "../locators/retrivePage.json"
import assertionObj from "../utility/assert"
import actionsObj from "../utility/actions"
class retrive{
    get retriveSectn(){
        return cy.get(locators.retriveSec)
    }
    get idText(){
        return cy.get(locators.id_txt)
    }
    get retriveBTN(){
        return cy.get(locators.retrive_Btn)
    }
    get qutTable(){
        return cy.get(locators.Quot_table)
    }
    navRetrive(){
        actionsObj.buttonClick(this.retriveSectn)
    }
    enterId(value){
        actionsObj.inputText(this.idText,value)
    }
    clickRetriveBtn(){
            actionsObj.buttonClick(this.retriveBTN)
    }
    assertTable(){
        assertionObj.assertVisibility(this.qutTable)
    }
}
let retriveQuotObj=new retrive()
export default retriveQuotObj
