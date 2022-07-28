describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get('.gLFyf', {setTimeout: 20000}).type('cypress.io{enter}')
    cy.wait(10000)
    cy.contains('Videos').click()
  })
})