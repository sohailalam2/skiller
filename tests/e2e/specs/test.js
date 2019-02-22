// https://docs.cypress.io/api/introduction/api.html

describe('End 2 End Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'ADD YOUR SKILLS');
  });
});
