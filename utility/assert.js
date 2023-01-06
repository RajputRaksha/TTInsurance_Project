class assert{
    assertUrl(value){
        cy.url().should('include',value)
    }
    assertText(cyElement,value){
        cyElement.should('have.text',value)
    }
    assertVisibility(cyElement){
        cyElement.should('be.visible')
    }
    assertEmpty(cyElement){
        cyElement.should('be.empty')
    }
}
let assertionObj=new assert()
export default assertionObj