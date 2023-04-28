describe('[simple-game-platform] End-2-End test. Game scenario', { viewportHeight: 720, viewportWidth: 1280}, () => {

  it('Visits game-page. Mouse ower. Game not started', () => {
    cy.visit('/game-page');
    cy.get('input[value="1"]').trigger('mouseover');
    // cy.screenshot();
    cy.get('input[value="1"]').reload();
    cy.get('input[value="2"]').trigger('mouseover');
    // cy.screenshot();
    cy.get('input[value="2"]').trigger('mouseover');
    cy.get('input[value="3"]').trigger('mouseover');
    // cy.screenshot();
  });

  it('Visits game-page. Mouse ower -> down -> up. Game not started', () => {
    cy.visit('/game-page');
    cy.get('input[value="1"]').trigger('mouseover');
    cy.get('input[value="1"]').trigger('mousedown');
    // cy.screenshot();
    cy.get('input[value="2"]').trigger('mouseover');
    cy.get('input[value="2"]').trigger('mousedown');
    // cy.screenshot();
    cy.get('input[value="3"]').trigger('mouseover');
    cy.get('input[value="3"]').trigger('mousedown');
    // cy.screenshot();
    cy.get('input[value="1"]').trigger('mouseup');
    cy.get('input[value="2"]').trigger('mouseup');
    cy.get('input[value="3"]').trigger('mouseup');
    // cy.screenshot();
    
    cy.get('input[value="1"]').trigger('mouseover');
    cy.get('input[value="1"]').trigger('mousedown');
    // cy.screenshot();
    cy.get('input[value="2"]').trigger('mouseover');
    cy.get('input[value="2"]').trigger('mousedown');
    // cy.screenshot();
  });

  it('Visits game-page. Start game', () => {
    cy.visit('/game-page');
    cy.get('input[value="START GAME"]').trigger('mousedown');
    cy.get('input[value=" "]').trigger('mouseover');
    // cy.screenshot();
  });

  it('Visits game-page. Mouse ower -> down -> up. Game started. Items dont move', () => {
    cy.visit('/game-page');
    cy.get('input[value="START GAME"]').trigger('mousedown');
    cy.get('input[value=" "]').trigger('mouseover');
  });
})
