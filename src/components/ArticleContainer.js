import React, { useEffect, useState } from 'react'
import '../styles/ArticleContainer.css'
import ArticleCard from './ArticleCard'
import { getArtArticles } from '../apiCalls'

const ArticleContainer = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArtArticles().then(data => setArticles(data.results))
  }, [])
  
  console.log(articles)

  return(
    <section>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </section>
  )
}

export default ArticleContainer