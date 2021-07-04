import { data } from 'jquery'
import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './ArticleList.scss'
// import moment from 'moment'

function Tag(props) {
  //   const [articles, setArticles] = useState([])

  // 一開始就會開始載入資料
  //   useEffect(() => {}, [])

  // ------
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="articleTitleGroup mt-3">
            <span className="articleLogo ">
              <img
                src="../images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2">風格誌</span>
          </div>
          <ul className="nav ml-auto articleCategoryBar mt-3">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                露營新手指南
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                親子同遊露營
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                深度野營探索
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                奢華露營體驗
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default withRouter(Tag)
