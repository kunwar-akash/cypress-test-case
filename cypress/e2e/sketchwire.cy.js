describe('Web Application Basic Test', () => {
 
  // website loading and title verification
  it('website loading and title verification', () => {
    cy.visit('https://hw.dmlabs.in/login') // Visit the webpage
    cy.title().should('include', 'HyreWorks')
  })
 
  // specific check to buttons and fields (visibilty)
  it('Specific check to buttons and fields (visibilty)', () => {
    cy.visit("https://hw.dmlabs.in/login") // Visit the webpage
   
    // login button visibility
    cy.get('.css-37cp2p').should('be.visible')
    // password - field visibilty
    cy.get('#password-login').should('be.visible')
    // username - field visibilty
    cy.get('#email-login').should('be.visible')
   
  })
 
  // valid login
  it('login using correct credentials', () => {
    cy.visit("https://hw.dmlabs.in/login") // Assert the title contains 'Inventory'
    cy.get('#email-login').type('akash.kunwar@digimantra.com') // Type username
    cy.get('#password-login').type('Root@1234') // Type password
    cy.get('.css-37cp2p').click() // Click the login button
   
    // Verify successful login by checking the presence of the dashboard
    cy.url().should('include', '/dashboard'); // dashboard is visible after login
  })
 
  //  invalid login (incorrect credentials)
  it('login using invalid creds', () => {
    cy.visit('https://hw.dmlabs.in/login') // Visit the webpage
   
    cy.get('#email-login').type('invalidUser@gmail.com') // invalid username
    cy.get('#password-login').type('wrongPassword@123') // invalid password
    cy.get('.css-37cp2p').click() // Click on the login button
   
    // verify error message is displayed
    cy.get('h6').should('be.visible')
  })
 

})
