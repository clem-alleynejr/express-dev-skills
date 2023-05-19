describe('template spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000")
    cy.get('a').click()
    cy.location('pathname').should('equal', '/skills')
    cy.get('a').eq(0).click()
    cy.location('pathname').should('equal', '/skills/123547')
  })
})
