describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('ivysaur loads', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.get('a[href*="/pokemon/ivysaur"]').click()
    cy.contains('chlorophyll')
    cy.contains('overgrow')
    cy.get('td').should('have.class', 'pokemon-stats-name').contains('speed')
    cy.get('td').should('have.class', 'pokemon-stats-value').contains(60)
    cy.get('td').should('have.class', 'pokemon-stats-value').contains(80)
    cy.get('td').should('have.class', 'pokemon-stats-value').contains(63)
    cy.get('td').should('have.class', 'pokemon-stats-value').contains(62)
  })
})