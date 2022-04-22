export const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Sorry, an error has occurred! Please try again later.')
  }
}

const cleanUrl = (url) => {
  return url.split('/')[3]
}

const cleanPublishedDate = (date) => {
  const newDate = date.split('T')[0].split('-')
  return `${newDate[1]}-${newDate[2]}-${newDate[0]}`
} 

export const cleanData = (articles) => {
  const completeData = articles.filter(article => {
    if (article.short_url && article.multimedia.length) {
      return article
    }
  })
  return completeData.map((article, i) => {
      return {
        id: `${cleanUrl(article.short_url)}${i}`,
        category: article.section,
        title: article.title,
        abstract: article.abstract,
        link: article.url,
        byline: article.byline,
        published: cleanPublishedDate(article.published_date),
        image: article.multimedia[1].url,
        imageTagline: article.multimedia[1].caption,
        imageCopyright: article.multimedia[1].copyright
      }
    }) 
}