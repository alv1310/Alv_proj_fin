import { data } from 'jquery'
import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './ArticleList.scss'
import { BiChevronRight } from 'react-icons/bi'
import { BiRightArrowCircle } from 'react-icons/bi'
import moment from 'moment'

function Category(props) {
  const [cate, setCate] = useState([])

  async function getCategoryFromServer() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:4000/articles/cate/2'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('data', data)
    // 設定資料
    setCate(data)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getCategoryFromServer()
  }, [])

  // ------
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="articleTitleGroup mt-3">
            <span className="articleLogo">
              <img
                src="../images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2">
              風格誌 <BiChevronRight />
            </span>
            <span className="articleBreadCrumb ml-2">露營新手指南</span>
          </div>

          <div className="articleBackToList ml-auto mt-3">
            <Link className="nav-link" to="#">
              返回一覽列表 <BiRightArrowCircle size="25px" />
            </Link>
          </div>
        </div>

        <div className="row d-flex justify-content-between">
          {cate.length &&
            cate.map((value, index) => {
              return (
                <div key={value.id} className="articleCategoryFilter mt-3">
                  <div className="articleCategoryFilterImg">
                    <img
                      src="../images/article/article_27.jpg"
                      alt="article_27"
                    ></img>
                  </div>
                  <div className="articleCategoryFilterText ml-3 mt-3">
                    <h5 className="articleCategoryTitle">{cate.aTitle}</h5>
                    <span className="articleDate">
                      {moment(value.aDate).format('YYYY-MM-DD')}
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">{value.author}</span>
                    <p className="mt-3 mb-3">
                      {value.aContent}
                      <Link to="#/">＋看更多</Link>
                    </p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default withRouter(Category)