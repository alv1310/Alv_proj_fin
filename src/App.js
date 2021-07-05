import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import ArticleList from './pages/Article/ArticleList'
import Category from './pages/Article/Category'
import Tag from './pages/Article/Tag'

function App() {
  return (
    <Router>
      <>
        <Switch>
          {/* <Route path="/articles/cate/:aCategoryId">
            <Category />
          </Route> */}
          <Route exact path="/articles/cate/:aCategoryId">
            <Category />
          </Route>

          <Route exact path="/articles/tag">
            <Tag />
          </Route>

          <Route exact path="/articles/">
            <ArticleList />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
