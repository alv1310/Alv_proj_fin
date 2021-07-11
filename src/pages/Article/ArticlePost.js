import React, { useState, useEffect } from 'react'
import { withRouter, Link, useParams } from 'react-router-dom'
import './ArticleList.scss'
import { BiChevronRight } from 'react-icons/bi'
import { BiRightArrowCircle } from 'react-icons/bi'
// import { BsMoon } from 'react-icons/bs'
import moment from 'moment'
import ArticleCarousel from '../../components/ArticleCarousel'

function ArticlePost(props) {
  const { aId } = useParams()
  const [post, setPost] = useState([])
  const [articleTag, setArticleTag] = useState([])
  const [tagFilter, setTagFilter] = useState([])
  const [tagId, setTagId] = useState([])

  // 取得文章內容
  async function getArticlePostFromServer() {
    // 連接的伺服器資料網址
    const url = `http://localhost:4000/articles/a/${aId}`
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
    console.log('article data', data)
    // 設定資料
    setPost(data)
  }

  // 取得文章多個標籤
  async function getArticleTagFromServer() {
    // 連接的伺服器資料網址
    const url = `http://localhost:4000/articles/a/tag/${aId}`
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
    console.log('tags data', data)
    // 設定資料
    setArticleTag(data)
  }

  // 取得標籤篩選結果
  async function getTagFilterFromServer() {
    // 連接的伺服器資料網址
    const url = `http://localhost:4000/articles/tag/${tagId}`
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
    console.log('data tag filters', data)
    // 設定資料
    setTagFilter(data)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getArticlePostFromServer()
    getArticleTagFromServer()
    getTagFilterFromServer()
    // getCateNameFromServer()
  }, [])

  // ------
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="articleTitleGroup mt-3">
            <Link className="articleLogo" to="/articles/">
              <img
                src="../../images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </Link>
            <Link className="articlePageTitle ml-2" to="/articles/">
              風格誌 <BiChevronRight />
            </Link>
            <span className="articleBreadCrumb ml-2">{post.aCatName}</span>
          </div>

          <div className="articleBackToList ml-auto mt-3">
            <Link
              className="nav-link"
              onClick={() => {
                props.history.goBack()
              }}
            >
              返回一覽列表 <BiRightArrowCircle size="25px" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container articlePostMain">
        <div className="a-wrapper"></div>

        <div className="row">
          <div className="articlePostBox mx-auto" id="wrapper">
            <div className="articlePostPic1">
              <img
                src={`../../images/article/${post.aImg}`}
                alt="article_post_picL"
                className="article_post_picL"
              />
            </div>

            <div className="a_divider"></div>

            <div className="articlePostPic2">
              <img
                src={`../../images/article/${post.aImg2}`}
                alt="article_post_picS"
                className="article_post_picS"
              />
            </div>

            <div className="a_divider"></div>

            <div className="articlePostTitle">
              <div className="card-body mx-auto">
                <h5 className="card-title my-3">{post.aTitle}</h5>
                <span className="articleDate">
                  {moment(post.aDate).format('YYYY-MM-DD')}
                </span>
                &nbsp;&nbsp;&nbsp;
                <span className="articleAuthor">作者：{post.author}</span>
              </div>
            </div>

            <p className="articlePostContent">{post.aContent}</p>

            <div className="articlePostManualPic">
              <img src={`../../images/article/${post.aImg3}`} alt=""></img>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ 影片部分 -------------- */}
      <div className="container">
        <div className="row">
          <div className="articlePostManualVid">
            <video width="960" height="600" controls muted autoplay>
              <source
                src="../../images/article/campFire.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      {/* ------------ 標籤部分 -------------- */}

      <div className="container my-5">
        <div className="row">
          <div className="articleTitleGroup mt-3">
            <span className="articleLogo ">
              <img
                src="../../images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2 mr-3">熱門主題</span>
          </div>

          {articleTag.length &&
            articleTag.map((value, index) => {
              return (
                <div key={value.id} className="articleTagGroup mt-2 d-flex">
                  <Link
                    className="nav-link"
                    onClick={() => {
                      setTagFilter(tagFilter)
                      setTagId(value.tagId)
                    }}
                    to={`/articles/tag/${value.tagId}`}
                  >
                    {value.tagName}
                  </Link>
                </div>
              )
            })}
        </div>
      </div>

      {/* ------------ 相關商品 -------------- */}
      <div className="container">
        <div className="row">
          <div className="articleTitleGroup mt-3">
            <span className="articleLogo ">
              <img
                src="../../images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2 mr-3">推薦品項</span>
          </div>
        </div>
      </div>

      <div className="container articleTagProduct mt-3">
        <div className="row">
          <div className="articleTagProductGroup mt-3">
            <div className="articleTagProductCarousel mt-5 mx-auto">
              {/* CAROUSEL STARTS HERE */}
              <ArticleCarousel />
            </div>
          </div>
        </div>
      </div>

      {/* ------------ 留言板 -------------- */}
      <div className="container">
        <div className="row">
          <div className="articleTitleGroup mt-5">
            <span className="articleLogo ">
              <img
                src="../../images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2 mr-3">會員留言</span>
          </div>
          <div className="articleComment"></div>
        </div>

        {/* ------ 輸入留言 ----- */}

        <div class="row articleComment form-group mt-3 ml-3">
          <textarea
            class="form-control"
            rows="3"
            placeholder="我的留言..."
          ></textarea>
          <button type="button" class="articleCommentSubmit mt-3 ml-auto mr-3">
            送出留言
          </button>
        </div>

        {/* ------ 留言紀錄 ------ */}

        <div class="media articleCommentGroup mt-5">
          <img
            class="d-flex rounded-circle avatar z-depth-1-half mr-3"
            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
            alt="Avatar"
          />

          <div class="media-body ml-3">
            <h5 class="mt-0 font-weight-bold articleUser">Anna Smith</h5>
            對新手來說非常適合，值得一試，是近期很棒的熱門露營地點！
            <div class="media-body mt-3 d-flex flex-column ">
              <div class="articleReply">
                感謝您喜愛我們這期的主題企劃，期待與您再次相見！
              </div>
            </div>
          </div>
        </div>
        {/* ------ */}
        <div class="media articleCommentGroup mt-5">
          <img
            class="d-flex rounded-circle avatar z-depth-1-half mr-3"
            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-10.jpg"
            alt="Avatar"
          />
          <div class="media-body ml-3">
            <h5 class="mt-0 font-weight-bold articleUser">Caroline Horwitz</h5>
            內容有趣，想看更多相關故事推薦
            <div class="media-body mt-3 d-flex flex-column ">
              <div class="articleReply">
                歡迎加入我們，想看更多故事可點選上方連結前往逛逛！
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </>
  )
}

export default withRouter(ArticlePost)
