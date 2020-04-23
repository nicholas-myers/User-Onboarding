describe('User Form', () => {
    it('navigates to the localhost', ()=> {
        cy.visit('')
        cy.url().should('include', 'localhost')
    })
    it('input a username', () => {
        cy.get('input[name="username"]')
        .type('Nick')
        .should('have.value', 'Nick')
    })
    it('input a email', () => {
        cy.get('input[name="email"]')
        .type('nick@users.com')
        .should('have.value', 'nick@users.com')
    })
    it('input a password', () => {
        cy.get('input[name="password"]')
        .type('G00semoney')
        .should('have.value', 'G00semoney')
    })
    it('check the terms', () => {
        cy.get('input[name="terms"]')
        .check()
        .should('checked')
    })
    it('submit the user', () => {
        cy.get('form button')
        .click()
    })
})