import React from 'react'
import '../styles/ArticleDetails.scss'

const ArticleDetails = ({ article }) => {
  return(
    <section className='article-details'>
      <article className='title-text'>
        <h2>{article.title}</h2>
        <p>{article.byline}</p>
        <p>Published: {article.published}</p>
      </article>
      <article className='info'>
        <div className='image-tag'>
          <img src={article.image} />
        </div>
        <div className='overview'>
          <div>
            <p>{article.imageTagline}</p>
            <p>{article.abstract}</p>
          </div>
          <a href={article.link}>Link to article</a>
        </div>  
      </article>  
      <p className='copy-right'>{article.imageCopyright}</p>
    </section>
  )
}

export default ArticleDetails