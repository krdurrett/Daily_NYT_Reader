import '../styles/App.css'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import ArticleContainer from './ArticleContainer'
import ArticleDetails from './ArticleDetails'
import { getArtArticles, getMovieArticles, getHealthArticles, getSportsArticles, getPoliticsArticles } from '../apiCalls'
import { cleanData } from '../utils'

class App extends Component {
  constructor() {
    super()
    this.state= {
      articles: []
    }
  }

  componentDidMount() {
    const fetchedData = []
    Promise.all([getArtArticles(), getMovieArticles(), getHealthArticles(), getSportsArticles(), getPoliticsArticles()])
      .then(data => 
        data.forEach(dataset => {
          let cleanedData = cleanData(dataset.results)
          cleanedData.forEach(result => fetchedData.push(result))
        }))
        this.setState({ articles: fetchedData })
      }
      
  render() {
    return (
      <section className='App'>
        <Switch>
          <Route exact path='/'>
            <NavBar />
            <ArticleContainer articles={this.state.articles}/>
          </Route>
          <Route exact path='/article_details'>
            <ArticleDetails />
          </Route>
        </Switch>
      </section>
    )
  }
}

export default App
