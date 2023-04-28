describe('[simple-game-platform] End-2-End test. Sidebar navigation scenario',  { viewportHeight: 720, viewportWidth: 1280}, () => {

  it('Visits user-page. Navigate to information, game pages', () => {
    cy.visit('/user-page');
    cy.get('a[href="/info-page"]').invoke('attr', 'href')
      .then(href => {
        cy.visit(href ? href : '/user-page');
      });
    cy.url().should('include', '/info-page');

    cy.visit('/user-page');
    cy.get('a[href="/game-page"]').invoke('attr', 'href')
      .then(href => {
        cy.visit(href ? href : '/user-page');
      });
    cy.url().should('include', '/game-page');
    cy.screenshot()
  });

  it('Visits info-page. Navigate to user, game pages', () => { 
    cy.visit('/info-page');
    cy.get('a[href="/user-page"]').invoke('attr', 'href')
      .then(href => {
        cy.visit(href ? href : '/info-page');
      });
    cy.url().should('include', '/user-page');

    cy.visit('/info-page');
    cy.get('a[href="/game-page"]').invoke('attr', 'href')
      .then(href => {
        cy.visit(href ? href : '/info-page');
      });
    cy.url().should('include', '/game-page');
    cy.screenshot()
  });

  it('Visits game-page. Navigate to user, information pages', () => { 
    cy.visit('/game-page');
    cy.get('a[href="/user-page"]').invoke('attr', 'href')
      .then(href => {
        cy.visit(href ? href : '/game-page');
      });
    cy.url().should('include', '/user-page');

    cy.visit('/game-page');
    cy.get('a[href="/info-page"]').invoke('attr', 'href')
      .then(href => {
        cy.visit(href ? href : '/game-page');
      });
    cy.url().should('include', '/info-page');
    cy.screenshot()
  });
})
