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
    it('input an invalid username', () => {
        cy.get('input[name="username"]')
        .type('a')
        .should('have.value', 'a')
    })
   it('validate the user name error', ()=> {
    
       cy.get('.usernameError')
       .should('have.text', 'username must have at least 3 characters!')
   })
    it('input an invalid email', () => {
        cy.get('input[name="email"]')
        .type('a')
        .should('have.value', 'a')
    })
   it('validate the email error', ()=> {
    
       cy.get('.emailError')
       .should('have.text', 'a VALID email is required')
   })
    it('input an invalid password', () => {
        cy.get('input[name="password"]')
        .type('a')
        .should('have.value', 'a')
    })
   it('validate the user name error', ()=> {
    
       cy.get('.passwordError')
       .should('have.text', 'Password must contain one lowercase letter, one uppercase letter and a number')
   })
})