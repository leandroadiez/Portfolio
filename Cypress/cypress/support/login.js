Cypress.Commands.add('login', (username, password)=>{
    cy.fixture('login').then((login)=>{
        cy.get(login.loginButton).click();
        cy.get(login.emailInput).type(username);
        cy.get(login.passwordInput).type(password);
        cy.get(login.submitButton).click();
    })
})