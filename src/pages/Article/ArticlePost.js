import React, { useState, useEffect } from 'react'
import { withRouter, Link, useParams } from 'react-router-dom'
import './ArticleList.scss'
import { BiChevronRight } from 'react-icons/bi'
import { BiRightArrowCircle } from 'react-icons/bi'
import moment from 'moment'

function ArticlePost(props) {
  const { aId } = useParams()
  const [post, setPost] = useState([])

  async function getArticlePostFromServer() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:4000/articles/a/12'
    // const url = `http://localhost:4000/articles/a/${aId}`

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
    setPost(data)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getArticlePostFromServer()
  }, [])

  // ------
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="articleTitleGroup mt-3">
            <span className="articleLogo">
              <img
                src="../../images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2">
              風格誌 <BiChevronRight />
            </span>
            <span className="articleBreadCrumb ml-2">露營新手指南</span>
          </div>

          <div className="articleBackToList ml-auto mt-3">
            <Link className="nav-link" to="/articles/">
              返回一覽列表 <BiRightArrowCircle size="25px" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container articlePostMain">
        {/* background color change to fixed */}
        <div className="row">
          <div className="articlePostBox mx-auto" id="wrapper">
            <div className="articlePostPic1">
              <img
                src="../../images/article/article_08.jpg"
                alt="article_post_picL"
                className="article_post_picL"
              />
            </div>

            <div className="a_divider"></div>

            <div className="articlePostPic2">
              <img
                src="../../images/article/article_33.jpg"
                alt="article_post_picS"
                className="article_post_picS"
              />
            </div>

            <div className="a_divider"></div>

            <div className="articlePostTitle">
              <div className="card-body mx-auto">
                {/* <h5 className="card-title my-3">{topArticle.aTitle}</h5> */}
                <h5 className="card-title my-3">
                  這次，來個不一樣的的夏天!夏日風格選品提案
                </h5>
                {/* <span className="articleDate">
                {moment(topArticle.aDate).format('YYYY-MM-DD')}
              </span> */}
                <span className="articleDate">2010.1.1</span>
                &nbsp;&nbsp;&nbsp;
                {/* <span className="articleAuthor">作者：{topArticle.author}</span> */}
                <span className="articleAuthor">作者：AAA</span>
                {/* <div className="card-text mt-4">
                <p className="ellipsis">{topArticle.aContent}</p>
              </div> */}
              </div>
            </div>

            {/* <div id="a_wallpaper"></div> */}

            <div className="articlePostContent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              facilis. Totam eveniet sit commodi quisquam? Dolore aut libero
              cumque molestiae rerum obcaecati delectus minima. Explicabo
              officiis non delectus? Delectus, cupiditate! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nihil soluta debitis nulla eius
              facere sed in sit odit omnis. Consequatur ducimus tempora animi
              hic odio, ad voluptates consequuntur dolorum unde! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Harum, facilis. Totam
              eveniet sit commodi quisquam? Dolore aut libero cumque molestiae
              rerum obcaecati delectus minima. Explicabo officiis non delectus?
              Delectus, cupiditate! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nihil soluta debitis nulla eius facere sed in
              sit odit omnis. Consequatur ducimus tempora animi hic odio, ad
              voluptates consequuntur dolorum unde! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Harum, facilis. Totam eveniet sit
              commodi quisquam? Dolore aut libero cumque molestiae rerum
              obcaecati delectus minima. Explicabo officiis non delectus?
              Delectus, cupiditate! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nihil soluta debitis nulla eius facere sed in
              sit odit omnis. Consequatur ducimus tempora animi hic odio, ad
              voluptates consequuntur dolorum unde! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Harum, facilis. Totam eveniet sit
              commodi quisquam? Dolore aut libero cumque molestiae rerum
              obcaecati delectus minima. Explicabo officiis non delectus?
              Delectus, cupiditate! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nihil soluta debitis nulla eius facere sed in
              sit odit omnis. Consequatur ducimus tempora animi hic odio, ad
              voluptates consequuntur dolorum unde! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Harum, facilis. Totam eveniet sit
              commodi quisquam? Dolore aut libero cumque molestiae rerum
              obcaecati delectus minima. Explicabo officiis non delectus?
              Delectus, cupiditate! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nihil soluta debitis nulla eius facere sed in
              sit odit omnis. Consequatur ducimus tempora animi hic odio, ad
              voluptates consequuntur dolorum unde! adipisicing elit. Nihil
              soluta debitis nulla eius facere sed in sit odit omnis.
              Consequatur ducimus tempora animi hic odio, ad voluptates
              consequuntur dolorum unde! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Harum, facilis. Totam eveniet sit commodi
              quisquam? Dolore aut libero cumque molestiae rerum obcaecati
              delectus minima. Explicabo officiis non delectus? Delectus,
              cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nihil soluta debitis nulla eius facere sed in sit odit
              omnis. Consequatur ducimus tempora animi hic odio, ad voluptates
              consequuntur dolorum unde!
            </div>

            <div className="articlePostManualPic">
              <img src="../../images/article/manual.jpg" alt=""></img>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ 影片部分 -------------- */}
      <div className="container">
        <div className="row">
          <div className="articlePostManualVid">
            <video width="640" height="480" controls muted autoplay>
              <source
                src="../../images/article/campFire.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      {/* ------------ 標籤部分 -------------- */}

      <div className="container">
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

          {/* {tagName.length &&
            tagName.map((value, index) => {
              return (
                <div key={value.id} className="articleTagGroup mt-2 d-flex">
                  <Link className="nav-link" to="#">
                    {value.tagName}
                  </Link>
                </div>
              )
            })} */}
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
          <div className="articleTagProduct"></div>
        </div>
      </div>

      {/* ------------ 留言板 -------------- */}
      <div className="container">
        <div className="row">
          <div className="articleTitleGroup mt-3">
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
      </div>
    </>
  )
}

export default withRouter(ArticlePost)
