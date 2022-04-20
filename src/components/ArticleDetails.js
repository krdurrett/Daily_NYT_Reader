import React from 'react'
import '../styles/ArticleDetails.scss'

const ArticleDetails = ({ article }) => {
  return(
    <>
      <h2>{article.title}</h2>
      <p>{article.byline}</p>
      <p>Published: {article.published}</p>
      <img src={article.image} />
      <p>{article.imageTagline}</p>
      <p>{article.imageCopyright}</p>
      <p>{article.abstract}</p>
      <a href={article.link}>Link to article</a>
    </>
  
  )
}

export default ArticleDetails