import { cy } from "cypress";
describe('Web Application Basic Test', () => {
 
    it('Multiple scenarios for website functionality', () => {
      
      // Scenario 1: Website loading and title verification
      cy.visit('https://hw.dmlabs.in/login'); // Visit the webpage
      cy.title().should('include', 'HyreWorks');
      
      // Scenario 2: Specific check for buttons and fields (visibility)
      // Login button visibility
      cy.get('.css-37cp2p').should('be.visible');
      // Password field visibility
      cy.get('#password-login').should('be.visible');
      // Username field visibility
      cy.get('#email-login').should('be.visible');
      
      // Scenario 3: Valid login
      cy.get('#email-login').clear().type('akash.kunwar@digimantra.com'); // Type username
      cy.get('#password-login').clear().type('Root@1234'); // Type password
      cy.get('.css-37cp2p').click(); // Click the login button
      // Verify successful login by checking the presence of the dashboard
      cy.url().should('include', '/dashboard'); // Dashboard is visible after login

      cy.visit('https://hw.dmlabs.in/login'); // Redirect back to the login page for further tests

      // Logout
      cy.get('.css-15vogpg').click(); // Click the hamburger icon
    cy.get('.css-4g6ai3').should('be.visible').click(); // Click the logout button
    cy.get(':nth-child(12) > [data-layer="Content"]').should('be.visible').click() // Verify logout is successful


      // Scenario 4: Invalid login (incorrect credentials)
      cy.get('#email-login').clear().type('invalidUser@gmail.com'); // Invalid username
      cy.get('#password-login').clear().type('wrongPassword@123'); // Invalid password
      cy.get('.css-37cp2p').click(); // Click the login button
      // Verify error message is displayed
      cy.get('h6').should('be.visible');
      
    });
    
  });
  