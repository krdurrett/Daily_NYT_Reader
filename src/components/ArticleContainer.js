import React, { useState } from 'react'
import '../styles/ArticleContainer.scss'
import ArticleCard from './ArticleCard'


const ArticleContainer = ({ articles, filteredArticles, getFilteredArticles }) => {
  const [searchInput, setSearchInput] = useState('')

  const handleChange = (event) => {
    setSearchInput({ ...searchInput, value: event.target.value })
    return getFilteredArticles(event.target.value)
  }

  let articlesToDisplay;
  if(filteredArticles.length) {
    articlesToDisplay = filteredArticles
  } else {
    articlesToDisplay = articles
  }

  const articleCards = articlesToDisplay.map(article => { 
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
    <section className='article-container'>
      <input placeholder='Search Articles By Category' onChange={ event => handleChange(event) } />
      {articleCards}
    </section>
    ) 
} 





export default ArticleContainer