import '../styles/App.scss'
import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import ArticleContainer from './ArticleContainer'
import ArticleDetails from './ArticleDetails'
import ErrorModal from './ErrorModal'
import Error404 from './Error404'
import { getArtArticles, getMovieArticles, getHealthArticles, getSportsArticles, getPoliticsArticles } from '../apiCalls'
import { cleanData } from '../utils'

const App = () => {
  const [articles, setArticles] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])
  const [error, setError] = useState('')
      
  useEffect(() => {
    const fetchedData = []
    Promise.all([getArtArticles(), getMovieArticles(), getHealthArticles(), getSportsArticles(), getPoliticsArticles()])
      .then(data => 
        data.forEach(dataset => {
          let cleanedData = cleanData(dataset.results)
          cleanedData.forEach(result => fetchedData.push(result))
          setArticles([...fetchedData])
          setError('')
        }))
        .catch(err => setError(err.message))
  }, [])

  const selectArticle = (id) => { 
    return articles.find(article => article.id === id)         
  }


  const getFilteredArticles = (inputValue) => {
    let filteredArticles = articles.filter(article => article.category.toLowerCase().includes(inputValue.toLowerCase()))
    setFilteredArticles([...filteredArticles])
  }

  const errorModal = error ? <ErrorModal message={error}/> : null

  return (
    <main>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <ArticleContainer articles={articles} filteredArticles={filteredArticles} getFilteredArticles={getFilteredArticles} />
        </Route>
        <Route path='/article_details/:id' render={({ match }) => {
          console.log(match.params.id)
          const currentArticle = selectArticle(match.params.id)
          if (!currentArticle) {
            return <p>Loading...</p>
          }
          return <ArticleDetails article={currentArticle} />
        }} />
         <Route>
            <Error404 />
          </Route>
      </Switch>
      {errorModal}
    </main>
  )
  
}

export default App
