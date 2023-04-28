describe('[simple-game-platform] End-2-End test. Sign up scenario',  { viewportHeight: 720, viewportWidth: 1280}, () => {


  it('Visits sign-up page -> input data -> log in', () => {
    cy.visit('/sign-up');
    cy.get("#sgp-authorisation-field").should('exist');
    cy.get('input[placeholder=username]').type('CypressUser', { force: true });
    cy.get('input[placeholder=email]').type('hello@cypress.io', { force: true });
    cy.get('input[placeholder=password]').type('Cypress1', { force: true });
    cy.get('a[href="/user-page"]').invoke('attr', 'href')
      .then(href => {
        cy.visit(href ? href : '/sign-up');
      });
    cy.url().should('include', '/user-page');
    cy.screenshot()
  })

  it('Visits log-in page -> navigate to sign-up -> input data -> log in', () => {
    cy.visit('/log-in');
    cy.get('a[href="/sign-up"]').invoke('attr', 'href')
      .then(href => {
        cy.visit(href ? href : '/log-in');
      });
    cy.get("#sgp-authorisation-field").should('exist');
    cy.get('input[placeholder=username]').type('CypressUser', { force: true });
    cy.get('input[placeholder=email]').type('hello@cypress.io', { force: true });
    cy.get('input[placeholder=password]').type('Cypress1', { force: true });
    cy.get('a').invoke('attr', 'href')
      .then(href => {
        cy.visit(href ? href : '/sign-up');
      });
    cy.url().should('include', '/user-page');
    cy.screenshot()
  })
})
