import React from 'react'
import '../styles/ArticleDetails.scss'

const ArticleDetails = ({ article }) => {
  return(
    <section className='article-details'>
      <article className='text'>
        <h2>{article.title}</h2>
        <p>{article.byline}</p>
        <p>Published: {article.published}</p>
      </article>
      <article className='info'>
        <img src={article.image} />
        <p>{article.imageTagline}</p>
        <p>{article.imageCopyright}</p>
        <p>{article.abstract}</p>
      <a href={article.link}>Link to article</a>
      </article>  
    </section>
  
  )
}

export default ArticleDetails