describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })

  it('Submit valid input successfully for Create Set Form (happy path)', () => {
    cy.get('[data-cy="cardSetPage"]').click();
    cy.get('[data-cy="toggle_form"]').should('contain', 'Add New Set');
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('form[data-cy="set_form"]').should('not.have.class', 'notVisible');
    cy.get('form[data-cy="set_form"]').should('be.visible');
    cy.get('form[data-cy="set_form"] input#titleInput').should('exist');
  });

  it('Submit valid input successfully for Add Card Form (happy path)', () => {
    cy.get('[data-cy="cardSetPage"]').click();
    cy.get('.cardSets').first().click();
    cy.get('[data-cy="toggle_form"]').should('contain', 'Add New Card');
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('form').should('be.visible');
  });

  it('shows error when description is empty (unhappy path)', () => {
    cy.get('[data-cy="cardSetPage"]').click();
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('form[data-cy="set_form"]').should('not.have.class', 'notVisible');
    cy.get('form[data-cy="set_form"]').should('be.visible');
    cy.get('form[data-cy="set_form"] input#titleInput').clear();
    cy.get('form[data-cy="set_form"]').submit();
    cy.contains('DESCRIPTION CANNOT BE EMPTY').should('be.visible');
  });
})