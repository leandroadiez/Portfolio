describe("Login", ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it("Login with incorrect email", ()=>{
        cy.login('username', 'password');
        cy.fixture('login').then((login)=>{
            cy.get(login.incorrectLoginMessage).should('contain', 'Invalid email address')
        })
    })
})