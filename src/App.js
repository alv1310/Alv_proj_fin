import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import ArticleList from './pages/Article/ArticleList'
import Category from './pages/Article/Category'
import Tag from './pages/Article/Tag'
import ArticlePost from './pages/Article/ArticlePost'
import ScrollToTop from './components/ScrollToTop'

function App() {
  // const [test, setTest] = useState()
  return (
    <>
      <Router>
        <>
          <ScrollToTop>
            <NavBar />
            <Switch>
              <Route path="/articles/tag/:tagId">
                <Tag />
                <Footer ver="full" />
              </Route>

              <Route exact path="/articles/cate/:aCategoryId?">
                <Category />
                <Footer ver="full" />
              </Route>

              <Route exact path="/articles/a/:aId?">
                <ArticlePost />
                <Footer ver="full" />
              </Route>

              <Route exact path="/articles/tag">
                <Tag />
                <Footer ver="full" />
              </Route>

              <Route exact path="/articles/">
                <ArticleList />
                <Footer ver="full" />
              </Route>
            </Switch>
          </ScrollToTop>
        </>
      </Router>
    </>
  )
}

export default App
