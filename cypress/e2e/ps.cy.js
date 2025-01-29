describe('Verify Page Title and Sign Up', () => {
    it('should display the correct title, click sign-up, and create a new user', () => {
  
      // Step 1: Visit the target website
      // Navigate to the specified URL to begin the test
      cy.visit('https://dev.everydayheroessrd.net/');
  
     // Step 4: Click on the "Sign Up" button using more specific selectors
      cy.contains('Sign In').click()  // Locate button by visible text "Sign Up"
  
      
  
      // Step 5: Fill out the sign-up form
      // Assuming the form has fields for name, email, password, etc.
      cy.get('input[name="username"]').type('newUser');  // Replace with the actual field names
      cy.get('input[name="email"]').type('newuser@example.com');  // Replace with a valid email
      cy.get('input[name="password"]').type('password123');  // Replace with a valid password
  
      // Step 6: Submit the form
      // Assuming the submit button has a class or text identifier
      cy.contains('Create Account').click(); // Or cy.get('.submit-button').click();
  
      // Step 7: Verify that the user has been created
      // Check for a success message or redirection to the user dashboard
      cy.contains('Account created successfully').should('be.visible'); // Adjust based on the actual success message or page behavior
    });
  });