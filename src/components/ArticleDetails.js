import React from 'react'
import '../styles/ArticleDetails.css'

const ArticleDetails = ({ article }) => {
  console.log('article details', article)

  return(
    <>
      <h2>{article.title}</h2>
      <p>{article.abstract}</p>
      <p>{article.byline}</p>
      <p>{article.link}</p>
      <p>{article.published}</p>
      <img src={article.image} />
    </>
   
  )
}

export default ArticleDetails