class CheckoutPage {
  checkout() {
    cy.get('[data-test="checkout"]').click();
  }

  fillInformation(firstName, lastName, zip) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(zip);
    cy.get('[data-test="continue"]').click();
  }

  finish() {
    cy.get('[data-test="finish"]').click();
  }

  validateSuccess() {
    cy.get('.complete-header')
      .should('be.visible')
      .and('contain.text', 'THANK YOU FOR YOUR ORDER');
  }
}
export default new CheckoutPage();
