import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './ArticleList.scss'

//function1
function ArticleList(props) {
  // console.log(props)
  const [articles, setArticles] = useState([])
  const [articlesLatest, setArticlesLatest] = useState([])

  async function getArticlesFromServer() {
    // 開啟載入指示
    // setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:4000/articles/latest'

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
    setArticles(data.r)
  }

  async function getLatestFromServer() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:4000/articles/latest'

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
    setArticlesLatest(data.r)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getArticlesFromServer()
    getLatestFromServer()
  }, [])

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

      <div className="container articleFeatured">
        <div className="row">
          <div className="articleFeaturedTitle mt-2 ml-5">FEATURED</div>
        </div>

        <div className="row rowFeatured">
          <div className="mainPicBoxRight">
            <img src="../images/article/article_01.jpg" alt="article_01" />
          </div>
          <div className="mainPicBoxLeft">
            <img src="../images/article/article_25.jpg" alt="article_02" />
          </div>
          <div className="card articleMainCard">
            <div className="card-body mx-auto">
              <h5 className="card-title my-3">
                這次，來個不一樣的夏天! 夏日風格選品提案
              </h5>
              <span className="articleDate">2021.07.15</span>&nbsp;&nbsp;&nbsp;
              <span className="articleAuthor">作者：小編A</span>
              <p className="card-text mt-3 mb-3">
                不管是三五好友或是全家同行，一定要能夠望著滿天的星星，聆聽大自然的聲音，被雲霧所包圍，體驗...{' '}
                <Link to="#/">＋看更多</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="aClear"></div>
      </div>

      <div className="container articleLatest">
        <div className="row">
          <div className="articleLatestTitle mt-3 ml-5">LATEST</div>
        </div>
        
        {articlesLatest.length &&
          articlesLatest.map((value, index) => {
            return (
              <>
                <ul key={value.aId}>
                  <li>{value.author}</li>
                  <li>{value.aDate}</li>
                  <li>{value.aTitle} </li>
                </ul>
              </>
            )
          })}
      </div>

      <div className="container articleTag">
        <div className="row d-flex my-5">
          <div className="articleTitleGroup mt-3">
            <span className="articleLogo ">
              <img
                src="../images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2">熱門主題</span>
          </div>

          <div className="articleTagGroup mt-2 ml-5 d-flex">
            <Link className="nav-link" to="#">
              ＃花蓮
            </Link>
            <Link className="nav-link" to="#">
              #單日體驗
            </Link>
            <Link className="nav-link" to="#">
              #夏天
            </Link>
            <Link className="nav-link" to="#">
              ＃親子
            </Link>
            <Link className="nav-link" to="#">
              #近溪邊
            </Link>
            <Link className="nav-link" to="#">
              #宜蘭
            </Link>
            <Link className="nav-link" to="#">
              ＃新手推薦
            </Link>
            <Link className="nav-link" to="#">
              #大草皮
            </Link>
          </div>
        </div>
      </div>

      {/* ------------ 文章部分 1 -------------- */}

      <div className="container articleCategoryAll">
        <div className="row d-flex">
          <div className="articleTitleGroup mt-3">
            <span>
              <img
                className="articleLogo-2"
                src="../images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2">露營新手指南</span>
          </div>
          {/* <div className="articlePageTitle mt-3 ml-3">露營新手指南</div> */}
          <div className="articleMoreLinkMain mt-4 ml-auto mr-5">
            {/* <Link to="/about">About</Link> */}
            <Link to="#/">看更多內容</Link>
          </div>
        </div>

        <div className="row">
          <div className="articleCategoryMain1 d-flex">
            <div className="articleCategoryMain1_Large mt-3">
              <div className="articleCategoryLargeImg">
                <img
                  src="../images/article/article_27.jpg"
                  alt="article_27"
                ></img>
              </div>
              <div className="articleCategoryLargeText ml-3 mt-3">
                <h5 className="articleCategoryTitle">
                  登山、露營再不是難事！野外露營、探險知識一次學會！
                </h5>
                <span className="articleDate">2021.07.15</span>
                &nbsp;&nbsp;&nbsp;
                <span className="articleAuthor">作者：小編A</span>
                <p className="mt-3 mb-3">
                  島內出走正夯！週末想要遠離喧囂，享受家庭時光嗎？還是想試試躺在沙灘上望著滿天星空的野營呢？無論無論是何種型態的露營，親進大自然和享受朋友家人間的美好時刻，精選超強露營區行程...{' '}
                  <Link to="#/">＋看更多</Link>
                </p>
              </div>
            </div>
            <div className="articleCategory_Small mt-3">
              <div className="articleCategory_SmallTop d-flex d-flex justify-content-between">
                <div className="articleCategory_SmallL">
                  <div className="articleCategory_SmallLImg">
                    <img
                      className="article_11_img"
                      src="../images/article/article_11.jpeg"
                      alt="article_11"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 className="articleCategoryTitle">
                      從營地到野地，帶你體驗露 營的不同樂趣
                    </h5>
                    <span className="articleDate">2021.07.15</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>

                <div className="articleCategory_SmallR">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="../images/article/article_20.jpg"
                      alt="article_20"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 className="articleCategoryTitle">
                      第一次親子健行好好玩！ 新手家庭也能輕鬆入門
                    </h5>
                    <span className="articleDate">2021.07.15</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>
              </div>

              <div className="articleCategory_SmallBottom d-flex d-flex justify-content-between mt-5">
                <div className="articleCategory_SmallL">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="../images/article/article_13.jpeg"
                      alt="article_13"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 className="articleCategoryTitle">
                      出發台灣山林：新手也能走 從里山到深山的步道小旅行
                    </h5>
                    <span className="articleDate">2021.07.15</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>

                <div className="articleCategory_SmallR">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="../images/article/article_07.jpg"
                      alt="article_07"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 className="articleCategoryTitle">
                      新手必修的登山露營課
                    </h5>
                    <span className="articleDate">2021.07.15</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ 文章部分 2 -------------- */}

      <div className="container articleCategoryAll">
        <div className="row d-flex">
          <div className="articleTitleGroup mt-3">
            <span>
              <img
                className="articleLogo-2"
                src="../images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2">親子同遊露營</span>
          </div>
          {/* <div className="articlePageTitle mt-3 ml-3">親子同遊露營</div> */}
          <div className="articleMoreLinkMain mt-4 ml-auto mr-5">
            {/* <Link to="/about">About</Link> */}
            <Link to="#/">看更多內容</Link>
          </div>
        </div>

        <div className="row">
          <div className="articleCategoryMain1 d-flex">
            <div className="articleCategory_Small mt-3">
              <div className="articleCategory_SmallTop d-flex d-flex justify-content-between">
                <div className="articleCategory_SmallL">
                  <div className="articleCategory_SmallLImg">
                    <img
                      className="article_15_img"
                      src="../images/article/article_15.jpeg"
                      alt="article_15"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 className="articleCategoryTitle">
                      帶你走進大自然，用美食向美景致敬！
                    </h5>
                    <span className="articleDate">2021.07.15</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>

                <div className="articleCategory_SmallR">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="../images/article/article_06.jpg"
                      alt="article_06"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 className="articleCategoryTitle">
                      山林癒：沐浴山林擁抱樹木 ，借助大自然力量自我療癒
                    </h5>
                    <span className="articleDate">2021.07.15</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>
              </div>

              <div className="articleCategory_SmallBottom d-flex d-flex justify-content-between mt-5">
                <div className="articleCategory_SmallL">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="../images/article/article_07.jpg"
                      alt="article_07"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 className="articleCategoryTitle">
                      ～運用先人的智慧結晶， 展開一場現代冒險旅程～
                    </h5>
                    <span className="articleDate">2021.07.15</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>

                <div className="articleCategory_SmallR">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="../images/article/article_12.jpeg"
                      alt="article_12"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 className="articleCategoryTitle">
                      愛好大自然、以童心為原動力，怎麼帶你玩戶外活動？
                    </h5>
                    <span className="articleDate">2021.07.15</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="articleCategoryMain1_Large mt-3">
              <div className="articleCategoryLargeImg ml-auto">
                <img
                  src="../images/article/article_14.jpeg"
                  alt="article_14"
                ></img>
              </div>
              <div className="articleCategoryLargeText ml-5 mt-3">
                <h5 className="articleCategoryTitle">
                  野外技能補完手冊：從輕量化裝備、行進技巧、戶外
                  炊煮、營地工藝到辨識危險
                </h5>
                <span className="articleDate">2021.07.15</span>
                &nbsp;&nbsp;&nbsp;
                <span className="articleAuthor">作者：小編A</span>
                <p className="mt-3 mb-3">
                  輕量化意味著要犧牲旅程的舒適與安全？輕量化裝備都很貴？背超輕就能走超快，能走超快就多了很多仔細欣賞山林、觀賞花朵、融入自然的餘裕。背超輕就有餘裕仔細辨識叉路、融入環境...{' '}
                  <Link to="#/">＋看更多</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ 文章部分 3 -------------- */}

      <div className="container articleCategoryAll">
        <div className="row d-flex">
          <div className="articleTitleGroup mt-3">
            <span>
              <img
                className="articleLogo-2"
                src="../images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2">深度野營探索</span>
          </div>

          <div className="articleMoreLinkMain mt-4 ml-auto mr-5">
            {/* <Link to="/about">About</Link> */}
            <Link to="#/">看更多內容</Link>
          </div>
        </div>

        <div className="row">
          <div className="articleCategoryMain1 d-flex">
            <div className="articleCategoryMain1_Large mt-3">
              <div className="articleCategoryLargeImg">
                <img
                  className="article_03_img"
                  src="../images/article/article_34.jpg"
                  alt="article_34"
                ></img>
              </div>
              <div className="articleCategoryLargeText ml-3 mt-3">
                <h5 className="articleCategoryTitle">
                  用鑄鐵平底鍋、荷蘭鍋、烤肉爐做出令人垂涎的戶外料理
                </h5>
                <span className="articleDate">2021.07.15</span>
                &nbsp;&nbsp;&nbsp;
                <span className="articleAuthor">作者：小編A</span>
                <p className="mt-3 mb-3">
                  從不用升火也能做出的輕鬆小菜，到讓你大飽口腹之欲的魚、肉、蔬菜料理、點心等，這裡通通都有。在野外用餐總是感覺食物特別美味！野炊露營能為小朋友和大人帶來很棒的成長體驗；而且，圍著營火用餐...
                  看更多＋... <Link to="#/">＋看更多</Link>
                </p>
              </div>
            </div>
            <div className="articleCategory_Small mt-3">
              <div className="articleCategory_SmallTop d-flex d-flex justify-content-between">
                <div className="articleCategory_SmallL">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="../images/article/article_04.jpg"
                      alt="article_04"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 className="articleCategoryTitle">
                      建立「輕量化的觀念」比購 買「輕量化的裝備」重要
                    </h5>
                    <span className="articleDate">2021.07.15</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>

                <div className="articleCategory_SmallR">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="../images/article/article_05.jpg"
                      alt="article_05"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 className="articleCategoryTitle">
                      靜謐山徑上的星星，找回與 大自然的相處之道！
                    </h5>
                    <span className="articleDate">2021.07.15</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>
              </div>

              <div className="articleCategory_SmallBottom d-flex d-flex justify-content-between mt-5">
                <div className="articleCategory_SmallL">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="../images/article/article_08.jpg"
                      alt="article_08"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 className="articleCategoryTitle">
                      四季的露營，享受美好露營 時光～
                    </h5>
                    <span className="articleDate">2021.07.15</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>

                <div className="articleCategory_SmallR">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="../images/article/article_33.jpg"
                      alt="article_33"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 className="articleCategoryTitle">
                      終極輕量化的山林料理絕招
                    </h5>
                    <span className="articleDate">2021.07.15</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ 文章部分 4 -------------- */}

      <div className="container articleCategoryAll">
        <div className="row d-flex">
          <div className="articleTitleGroup mt-3">
            <span>
              <img
                className="articleLogo-2"
                src="../images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2">奢華露營體驗</span>
          </div>

          <div className="articleMoreLinkMain mt-4 ml-auto mr-5">
            {/* <Link to="/about">About</Link> */}
            <Link to="#/">看更多內容</Link>
          </div>
        </div>

        <div className="row">
          <div className="articleCategoryMain1 d-flex">
            <div className="articleCategory_Small mt-3">
              <div className="articleCategory_SmallTop d-flex d-flex justify-content-between">
                <div className="articleCategory_SmallL">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="../images/article/article_32.jpg"
                      alt="article_32"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 className="articleCategoryTitle">
                      女子露營休日，裝備x穿搭 x美食x行程，一次搞定！
                    </h5>
                    <span className="articleDate">2021.07.15</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>

                <div className="articleCategory_SmallR">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="../images/article/article_18.jpg"
                      alt="article_18"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 className="articleCategoryTitle">平底鍋登山露營食譜</h5>
                    <span className="articleDate">2021.07.15</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>
              </div>

              <div className="articleCategory_SmallBottom d-flex d-flex justify-content-between mt-5">
                <div className="articleCategory_SmallL">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="../images/article/article_24.jpg"
                      alt="article_24"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 className="articleCategoryTitle">
                      超輕量登山野營技巧：10 天食物加上裝備不到12公斤
                    </h5>
                    <span className="articleDate">2021.07.15</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>

                <div className="articleCategory_SmallR">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="../images/article/article_19.jpg"
                      alt="article_19"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 className="articleCategoryTitle">
                      零失敗，好上手！完全圖解 露營必備料理
                    </h5>
                    <span className="articleDate">2021.07.15</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="articleCategoryMain1_Large mt-3">
              <div className="articleCategoryLargeImg ml-auto">
                <img
                  src="../images/article/article_20.jpg"
                  alt="article_20"
                ></img>
              </div>
              <div className="articleCategoryLargeText ml-5 mt-3">
                <h5 className="articleCategoryTitle">
                  野外技能補完手冊：從輕量化裝備、行進技巧、戶外炊煮、營地工藝到辨識危險
                </h5>
                <span className="articleDate">2021.07.15</span>
                &nbsp;&nbsp;&nbsp;
                <span className="articleAuthor">作者：小編A</span>
                <p className="mt-3 mb-3">
                  一起走進山林，來抱樹吧，發現樹療和森林浴的美好益處！2019/10/21台灣山林全面開放，安全享受山林前，先認識森林浴、樹療法和山林如何治癒身心！尤其是它能減少壓力。我發現森林恢復了我的寧靜，改善了我的健康...{' '}
                  <Link to="#/">＋看更多</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ArticleList)
