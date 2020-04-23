describe('User Form', () => {
    it('navigates to the localhost', ()=> {
        cy.visit('')
        cy.url().should('include', 'localhost')
    })
    it('input a username', () => {
        cy.get('input[name="username"]')
        .type('Nick')
    })
})