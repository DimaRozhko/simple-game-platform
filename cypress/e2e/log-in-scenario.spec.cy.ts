describe('[simple-game-platform] End-2-End test. Log in scenario', () => {


  it('Visits log-in page -> input data -> log in', () => {
    cy.visit('/log-in');
    cy.get("#sgp-authorisation-field").should('exist');
    cy.get('input[placeholder=email]').type('hello@cypress.io', { force: true });
    cy.get('input[placeholder=password]').type('Cypress1', { force: true });
    cy.get('a[href="/user-page"]').invoke('attr', 'href')
      .then(href => {
        cy.visit(href ? href : '/log-in');
      });
    cy.url().should('include', '/user-page');
  })

  it('Visits sign-up page -> navigate to log-in -> input data -> log in', () => {
    cy.visit('/sign-up');
    cy.get('a[href="/log-in"]').invoke('attr', 'href')
      .then(href => {
        cy.visit(href ? href : '/sign-up');
      });
    cy.get("#sgp-authorisation-field").should('exist');
    cy.get('input[placeholder=email]').type('hello@cypress.io', { force: true });
    cy.get('input[placeholder=password]').type('Cypress1', { force: true });
    cy.get('a').invoke('attr', 'href')
      .then(href => {
        cy.visit(href ? href : '/log-in');
      });
    cy.url().should('include', '/user-page');
  })
})
