class actions{
    launchUrl(url){
        cy.visit(url,{timeout:50000})
    }
    buttonClick(cyElement){
        cyElement.click({force:true})
    }
    inputText(cyElement,value){
        cyElement.type(value,{force:true})
    }
    checkBox(cyElement,value){
        cyElement.check(value)
    }
    dropDown(cyElement,value){
        cyElement.select(value)
    }
}
let actionsObj=new actions()
export default actionsObj