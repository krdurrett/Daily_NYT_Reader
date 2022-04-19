import React, { useEffect, useState } from 'react'
import '../styles/ArticleContainer.css'
import ArticleCard from './ArticleCard'
import { getArtArticles, getMovieArticles, getHealthArticles, getSportsArticles, getPoliticsArticles, getWorldArticles } from '../apiCalls'
import { cleanData } from '../utils'

const ArticleContainer = () => {
  const [articles, setArticles] = useState([])
  
  useEffect(() => {
    const fetchedData = []
    Promise.all([getArtArticles(), getMovieArticles(), getHealthArticles(), getSportsArticles(), getPoliticsArticles(), getWorldArticles()])
      .then(data => 
        data.forEach(dataset => {
          let cleanedData = cleanData(dataset.results)
          console.log(cleanedData)
          cleanedData.forEach(result => fetchedData.push(result))
        }))
    setArticles(fetchedData)
  }, [])
  
  // console.log(articles)

  return(
    <section>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </section>
  )
}

export default ArticleContainer