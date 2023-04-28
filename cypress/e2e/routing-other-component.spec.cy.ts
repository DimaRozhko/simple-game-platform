describe('[simple-game-platform] End-2-End test check routing and other component inside page', () => {

  it('Visits root page and check component inside. Check redirection \'/\' -> \'/log-in\'', () => {
    cy.visit('/');
    cy.get('app-logo-auth').should('exist');
    cy.get('app-authorization').should('exist');
    cy.get('#sgm-log-in').should('exist');
    cy.screenshot()
  })

  it('Visits log in page and check component inside.', () => {
    cy.visit('/log-in');
    cy.get('app-logo-auth').should('exist');
    cy.get('app-authorization').should('exist');
    cy.get('#sgm-log-in').should('exist');
    cy.screenshot()
  })

  it('Visits sign up page and check component inside.', () => {
    cy.visit('/sign-up');
    cy.get('app-logo-auth').should('exist');
    cy.get('app-authorization').should('exist');
    cy.get('#sgm-sign-up').should('exist');
    cy.screenshot()
  })

  it('Visits user page and check component inside.', () => {
    cy.visit('/user-page');
    cy.get('#sgp-sidebar').should('exist');
    cy.screenshot()
  })

  it('Visits info page and check component inside.', () => {
    cy.visit('/info-page');
    cy.get('#sgp-sidebar').should('exist');
    cy.screenshot()
  })

  it('Visits game page and check component inside.', () => {
    cy.visit('/game-page');
    cy.get('#sgp-sidebar').should('exist');
    cy.screenshot()
  })
})
