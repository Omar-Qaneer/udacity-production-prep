describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })

  it('Navigates to Card Set Page.', () => {
    cy.get('[data-cy="cardSetPage"]').click();
    cy.get("main .cardPageContainer").should("exist");
  })

  it('Navigates to the About page.', () => {
    cy.get('[data-cy="aboutPage"]').click();
    cy.get("main .aboutContainer").should("exist");
  })

  it('Navigates to the Home page.', () => {
  cy.get('[data-cy="homePage"]').click();
  cy.get('[data-cy="header"]').should("contain", "Study Night");
  cy.get("main .homeContainer").should("exist");
  cy.get('img[alt="Desk of laptops"]').should("exist");
  })
})