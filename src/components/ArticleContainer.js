import React, { useEffect, useState } from 'react'
import '../styles/ArticleContainer.css'
import ArticleCard from './ArticleCard'


const ArticleContainer = ({ articles }) => {
  const articleCards = articles.map(article => {
    
    return <ArticleCard 
              key={article.id}
              id={article.id}
              category={article.category}
              title={article.title}
              abstract={article.abstract}
              link={article.link}
              byline={article.byline}
              published={article.published}
              image={article.image}
              imageTagline={article.imageTagline}
              imageCopyright={article.imageCopyright}
          />
  })

  return(
    <section>
     {articleCards}
    </section>
  )
}

export default ArticleContainer