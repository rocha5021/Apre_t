describe('Fluxo de Compra - Simples', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });


  it('Deve realizar uma compra completa com sucesso', () => {
    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .find('button')
      .click();
    cy.get('.shopping_cart_link').click();
    cy.wait(5000);

    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Marcus');
    cy.get('[data-test="lastName"]').type('Rocha');
    cy.get('[data-test="postalCode"]').type('40000-000');
    cy.get('[data-test="continue"]').click();
   
    cy.get('[data-test="finish"]').click();
    cy.wait(5000);
  });
});
