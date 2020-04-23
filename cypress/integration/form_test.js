describe('User Form', () => {
    it("navigates to the localhost", ()=> {
        cy.visit('')
        cy.url().should('include', 'localhost')
    })

})