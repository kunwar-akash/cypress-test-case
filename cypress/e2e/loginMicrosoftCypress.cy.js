describe('Login using Microsoft', () => {
  beforeEach(() => {
    // Navigate to the application's login page
    cy.visit('https://app.keka.com/Account/Login?ReturnUrl=%2F');
  });

  it('Logs in with Microsoft account', () => {
    // Click on the Microsoft login button
    cy.get(':nth-child(2) > .login-button').click();

    // Wait for the Microsoft login page to load
    cy.visit('https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=7c7b3db6-6df5-42ff-a2b3-9a7dedb6dc4c&redirect_uri=https%3A%2F%2Fapp.keka.com%2Fsignin-oidc&response_type=id_token&scope=openid%20profile%20email&response_mode=form_post&nonce=638733088602083276.NzA3MzA0NmQtZDI2YS00OGU0LTgzOWQtZTdjYmFhZGFhZjczNDkzOTVlNzAtNTZhZi00NjNhLWI0NGMtZGQ4MzBkOTJkMGQ3&state=CfDJ8I1TV8z3V1xEjqGuu5qNGibzthXG3_vOfMGIIMWkMOtb3GwUodB3BW4G808lGtK7yqlNrbNSKDzGfB26KGviH-Sp-Jwzt-xkQkZu_m_JwedqY00mftBDYTNI7FZcn4Xn-Ep35TclOMraZxYXm5cFhuRUQaiLZ0QJXCZqd-NlG7rLvDvEoEjnh5QJCj948pcljcTUveubC9ZdOBuvnRLwF2VdNt8fp03UL62Dm22C9kR7P1Jd_LccrV6G35gZYz--MWz8uL_nijm1-mbqc504jA9c8Fo4t_U9d8JoCcHrjafTjnqUr2MfZE4hozW1W3taIktz_g1p2rHjICzd0ZCrcDbH3AaqE1gl32WSTZweK6elpABRnCJIEkUxRjItWXgpgQ&x-client-SKU=ID_NET6_0&x-client-ver=6.24.0.0&sso_reload=true', () => {
      // Fill in the email address
      cy.get('input[type="email"]').type(Cypress.env('MICROSOFT_EMAIL'));
      cy.contains('input', 'Next').click();

      // Fill in the password
      cy.get('input[type="password"]').type(Cypress.env('MICROSOFT_PASSWORD'), { log: false });
      cy.contains('button', 'Sign in').click();
    });

    // Handle redirection back to the application
    cy.url().should('include', '/dashboard'); // Adjust this to match your app's landing page
  });
});
