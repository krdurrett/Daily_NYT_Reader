export const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Sorry, an error has occurred! Please try again later.')
  }
}

const cleanedUrl = (url) => {
  return url.split('/')[3]
}

export const cleanData = (articles) => {
  const completeData = articles.filter(article => {
    if (article.short_url && article.multimedia) {
      return article
    }
  })
  return completeData.map((article, i) => {
      return {
        id: `${cleanedUrl(article.short_url)}${i}`,
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
    }) 
}