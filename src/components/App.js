import '../styles/App.css'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import ArticleContainer from './ArticleContainer'
import ArticleDetails from './ArticleDetails'

function App() {
  return (
    <section className='App'>
      <Switch>
        <Route exact path='/'>
          <NavBar />
          <ArticleContainer />
        </Route>
        <Route exact path='/article_details'>
          <ArticleDetails />
        </Route>
      </Switch>
    </section>
  )
}

export default App
