export const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Sorry, an error has occurred! Please try again later.')
  }
}

export const cleanData = (articles) => {
  return articles.map(article => {
    if (article.multimedia === null) {
      return {
        id: article.short_url,
        category: article.section,
        title: article.title,
        abstract: article.abstract,
        link: article.url,
        byline: article.byline,
        published: article.published_date,
        image: '',
        imageTagline: '',
        imageCopyright: ''
      }
    } else {
      return {
        id: article.short_url,
        category: article.section,
        title: article.title,
        abstract: article.abstract,
        link: article.url,
        byline: article.byline,
        published: article.published_date,
        image: article.multimedia[1].url,
        imageTagline: article.multimedia[1].caption,
        imageCopyright: article.multimedia[1].copyright
      }
    }
  }) 
}