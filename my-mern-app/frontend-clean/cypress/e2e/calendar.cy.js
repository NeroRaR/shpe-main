describe('Calendar Navigation', () => {
  it('loads the homepage and opens the Calendar page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Calendar').click();
    cy.url().should('include', '/calendar');
    cy.contains('Today').should('be.visible');
  });

  it('navigates months correctly', () => {
    cy.visit('http://localhost:3000/calendar');
    cy.contains('Next').click();
    cy.contains('Prev').click();
    cy.contains('Today').click();
  });
});
