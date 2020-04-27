/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0');
  })

  it('first test', () => {
    // https://on.cypress.io/hash
    // cy.hash().should('be.empty')
    console.log('hello world');

    cy.get('.mw-headline')
      .then((data) => {
        const block = data[1];
        console.log('block', block.innerText);

        expect(block.innerText).eq('Архимед')
      })
  })

})