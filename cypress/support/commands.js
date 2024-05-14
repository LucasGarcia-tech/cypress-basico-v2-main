Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Garcia')
    cy.get('#email').type('lucasgarciainvest@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button','Enviar').click()

})
