class SauceDemoPage {
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  login(username, password) {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
  }

  addToCart() {
    cy.get('#add-to-cart-sauce-labs-backpack').click();
  }

  goToCart() {
    cy.get('.shopping_cart_link').click();
  }

  checkout() {
    cy.get('#checkout').click();
  }

  fillCheckoutInfo(firstName, lastName, postalCode) {
    cy.get('#first-name').type(firstName);
    cy.get('#last-name').type(lastName);
    cy.get('#postal-code').type(postalCode);
    cy.get('#continue').click();
  }

  finishOrder() {
    cy.get('#finish').click();
  }

  verifySuccessMessage(expectedMessage) {
    cy.get('.complete-header').should('have.text', expectedMessage);
  }
}

export default new SauceDemoPage();