const apiKey = process.env.REACT_APP_API_KEY

describe('Daily NYT Reader article details user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`, { fixture: 'articles.json' })
  });
  it('Should be able to click on article and view its details', () => {
    cy.get('nav')
      .contains('Daily NYT Reader')
      .get('.article-container')
      .click(200, 200)
      .url().should('include', '/article_details')
      .get('img')
      .get('h2')
      .get('a').contains('Link to article')
  });
  it('Should be able to return to homepage', () => {
    cy.get('nav')
      .contains('Daily NYT Reader')
      .get('.article-container')
      .click(200, 200)
      .get('h1')
      .click()
      .url().should('equal', 'http://localhost:3000/')
  })
});