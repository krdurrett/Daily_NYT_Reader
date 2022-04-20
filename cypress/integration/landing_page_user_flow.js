const apiKey = process.env.REACT_APP_API_KEY

describe('Daily NYT Reader main page load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`, { fixture: 'articles.json' })
  });
  it('Should be able to visit the page and view all articles', () => {
    cy.get('nav')
      .contains('Daily NYT Reader')
      .get('.article-container')
      .get('.article-card')
      .get('img')
      .get('h3')
      .get('p').contains('Published')
  });
  it('Should be able to search articles by category', () => {
    cy.get('input')
      .type('arts')
      .should('have.value', 'arts')
      .get('.article-container')
      .get('.article-card')
      .get('p').contains('arts')
  })
});