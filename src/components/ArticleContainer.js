import React, { useEffect, useState } from 'react'
import '../styles/ArticleContainer.css'
import ArticleCard from './ArticleCard'
import { getArtArticles, getMovieArticles } from '../apiCalls'

const ArticleContainer = () => {
  const [articles, setArticles] = useState([])
  
  useEffect(() => {
    const fetchedData = []
    getArtArticles().then(data => data.results.forEach(result => fetchedData.push(result)))
    getMovieArticles().then(data => data.results.forEach(result => fetchedData.push(result)))
    setArticles(fetchedData)
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