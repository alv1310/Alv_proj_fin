import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import ArticleList from './pages/Article/ArticleList'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/articles/">
            <ArticleList />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
