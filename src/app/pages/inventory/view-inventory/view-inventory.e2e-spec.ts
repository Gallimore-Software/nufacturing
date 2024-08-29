describe('View Inventory', () => {
  beforeEach(() => {
    cy.visit('/inventory');
  });

  it('should display inventory items', () => {
    cy.intercept('GET', '/api/inventory', [
      { id: 1, name: 'item1', quantity: 100 },
    ]);

    cy.get('[data-cy=inventory-table]').should('exist');
    cy.get('[data-cy=inventory-item]').should('have.length', 1);
  });
});
