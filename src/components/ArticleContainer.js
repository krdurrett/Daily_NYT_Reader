import React from 'react'
import '../styles/ArticleContainer.css'
import ArticleCard from './ArticleCard'

const ArticleContainer = () => {
  return(
    <section>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </section>
  )
}

export default ArticleContainer