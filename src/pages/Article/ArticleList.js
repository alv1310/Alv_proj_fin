import React from 'react'
import './ArticleList.scss'

function ArticleList() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div className="articleTitleGroup mt-3">
            <span className="articleLogo ">
              <img
                src="./images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2">風格誌</span>
          </div>
          <ul class="nav ml-auto articleCategoryBar mt-3">
            <li class="nav-item">
              <a class="nav-link" href="#/">
                露營新手指南
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/">
                親子同遊露營
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/">
                深度野營探索
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/">
                奢華露營體驗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="container articleFeatured">
        <div class="row">
          <div className="articleFeaturedTitle mt-2 ml-5">FEATURED</div>
        </div>

        <div class="row rowFeatured">
          <div className="mainPicBoxRight">
            <img src="./images/article/article_01.jpg" alt="article_01" />
          </div>
          <div className="mainPicBoxLeft">
            <img src="./images/article/article_25.jpg" alt="article_02" />
          </div>
          <div class="card articleMainCard">
            <div class="card-body mx-auto">
              <h5 class="card-title my-3">
                這次，來個不一樣的夏天! 夏日風格選品提案
              </h5>
              <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
              <span className="articleAuthor">作者：小編A</span>
              <p class="card-text mt-3 mb-3">
                不管是三五好友或是全家同行，一定要能夠望著滿天的星星，聆聽大自然的聲音，被雲霧所包圍，體驗...{' '}
                <a href="#/">＋看更多</a>
              </p>
            </div>
          </div>
        </div>
        <div class="aClear"></div>
      </div>

      <div class="container articleLatest">
        <div class="row">
          <div className="articleLatestTitle mt-3 ml-5">LATEST</div>
        </div>
        <div class="row d-flex justify-content-around">
          <div class="col-sm-4 ">
            <div class="articleLatestCard mx-auto mt-3">
              <img
                src="./images/article/article_28.jpg"
                alt="article_03"
                className="articleLatestLeftImg"
              />

              <div class="card-body d-flex align-items-start flex-column">
                <h5 class="card-title mb-auto">
                  運用先人的智慧結晶，展開 一場現代冒險旅程～
                </h5>
                <p class="card-text mb-2">
                  你是否在繁忙的日常生活中感到焦慮？是否在網路上接收了過量的訊息而無法思考？每天手機的LINE提示音響不停？
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-4 ">
            <div class="articleLatestCard mx-auto mt-3">
              <img
                src="./images/article/article_32.jpg"
                alt="article_03"
                className="articleLatestMiddleImg"
              />

              <div class="card-body d-flex align-items-start flex-column">
                <h5 class="card-title mb-auto">
                  辦場專屬女生的戶外派對， 享受美好的休日時光！
                </h5>

                <p class="card-text mb-2">
                  教妳用最基本的露營裝備，不用耗費過多體力與心力，就能和姊妹們一起「露營趣」！
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-4 ">
            <div class="articleLatestCard mx-auto mt-3">
              <img
                src="./images/article/article_15.jpeg"
                alt="article_03"
                className="articleLatestRightImg"
              />

              <div class="card-body d-flex align-items-start flex-column">
                <h5 class="card-title mb-auto">
                  野炊這樣煮最對味！一鍋到 底輕鬆煮
                </h5>
                <p class="card-text mb-2">
                  今天起，跟著行家的腳步，一起體驗全新的野炊樂趣！從澎湃主菜、飽足主食、暖胃湯品到網美甜點，全部一鍋完成！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container articleTag">
        <div className="row d-flex my-5">
          <div className="articleTitleGroup mt-3">
            <span className="articleLogo ">
              <img
                src="./images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2">熱門主題</span>
          </div>

          <div className="articleTagGroup mt-2 ml-5 d-flex">
            <a class="nav-link" href="#">
              ＃花蓮
            </a>
            <a class="nav-link" href="#">
              #單日體驗
            </a>
            <a class="nav-link" href="#">
              #夏天
            </a>
            <a class="nav-link" href="#">
              ＃親子
            </a>
            <a class="nav-link" href="#">
              #近溪邊
            </a>
            <a class="nav-link" href="#">
              #宜蘭
            </a>
            <a class="nav-link" href="#">
              ＃新手推薦
            </a>
            <a class="nav-link" href="#">
              #大草皮
            </a>
          </div>
        </div>
      </div>

      {/* ------------ 文章部分 1 -------------- */}

      <div class="container articleCategoryAll">
        <div class="row d-flex">
          <div className="articleTitleGroup mt-3">
            <span>
              <img
                className="articleLogo-2"
                src="./images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2">露營新手指南</span>
          </div>
          {/* <div className="articlePageTitle mt-3 ml-3">露營新手指南</div> */}
          <div className="articleMoreLinkMain mt-4 ml-auto mr-5">
            {/* <Link to="/about">About</Link> */}
            <a href="#/">看更多內容</a>
          </div>
        </div>

        <div class="row">
          <div className="articleCategoryMain1 d-flex">
            <div className="articleCategoryMain1_Large mt-3">
              <div className="articleCategoryLargeImg">
                <img
                  src="./images/article/article_27.jpg"
                  alt="article_27"
                ></img>
              </div>
              <div class="articleCategoryLargeText ml-3 mt-3">
                <h5 class="articleCategoryTitle">
                  登山、露營再不是難事！野外露營、探險知識一次學會！
                </h5>
                <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                <span className="articleAuthor">作者：小編A</span>
                <p class="mt-3 mb-3">
                  島內出走正夯！週末想要遠離喧囂，享受家庭時光嗎？還是想試試躺在沙灘上望著滿天星空的野營呢？無論無論是何種型態的露營，親進大自然和享受朋友家人間的美好時刻，精選超強露營區行程...{' '}
                  <a href="#/">＋看更多</a>
                </p>
              </div>
            </div>
            <div className="articleCategory_Small mt-3">
              <div className="articleCategory_SmallTop d-flex d-flex justify-content-between">
                <div className="articleCategory_SmallL">
                  <div className="articleCategory_SmallLImg">
                    <img
                      className="article_11_img"
                      src="./images/article/article_11.jpeg"
                      alt="article_11"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 class="articleCategoryTitle">
                      從營地到野地，帶你體驗露 營的不同樂趣
                    </h5>
                    <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>

                <div className="articleCategory_SmallR">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="./images/article/article_20.jpg"
                      alt="article_20"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 class="articleCategoryTitle">
                      第一次親子健行好好玩！ 新手家庭也能輕鬆入門
                    </h5>
                    <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>
              </div>

              <div className="articleCategory_SmallBottom d-flex d-flex justify-content-between mt-5">
                <div className="articleCategory_SmallL">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="./images/article/article_13.jpeg"
                      alt="article_13"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 class="articleCategoryTitle">
                      出發台灣山林：新手也能走 從里山到深山的步道小旅行
                    </h5>
                    <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>

                <div className="articleCategory_SmallR">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="./images/article/article_07.jpg"
                      alt="article_07"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 class="articleCategoryTitle">新手必修的登山露營課</h5>
                    <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ 文章部分 2 -------------- */}

      <div class="container articleCategoryAll">
        <div class="row d-flex">
          <div className="articleTitleGroup mt-3">
            <span>
              <img
                className="articleLogo-2"
                src="./images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2">親子同遊露營</span>
          </div>
          {/* <div className="articlePageTitle mt-3 ml-3">親子同遊露營</div> */}
          <div className="articleMoreLinkMain mt-4 ml-auto mr-5">
            {/* <Link to="/about">About</Link> */}
            <a href="#/">看更多內容</a>
          </div>
        </div>

        <div class="row">
          <div className="articleCategoryMain1 d-flex">
            <div className="articleCategory_Small mt-3">
              <div className="articleCategory_SmallTop d-flex d-flex justify-content-between">
                <div className="articleCategory_SmallL">
                  <div className="articleCategory_SmallLImg">
                    <img
                      className="article_15_img"
                      src="./images/article/article_15.jpeg"
                      alt="article_15"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 class="articleCategoryTitle">
                      帶你走進大自然，用美食向美景致敬！
                    </h5>
                    <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>

                <div className="articleCategory_SmallR">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="./images/article/article_06.jpg"
                      alt="article_06"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 class="articleCategoryTitle">
                      山林癒：沐浴山林擁抱樹木 ，借助大自然力量自我療癒
                    </h5>
                    <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>
              </div>

              <div className="articleCategory_SmallBottom d-flex d-flex justify-content-between mt-5">
                <div className="articleCategory_SmallL">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="./images/article/article_07.jpg"
                      alt="article_07"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 class="articleCategoryTitle">
                      ～運用先人的智慧結晶， 展開一場現代冒險旅程～
                    </h5>
                    <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>

                <div className="articleCategory_SmallR">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="./images/article/article_12.jpeg"
                      alt="article_12"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 class="articleCategoryTitle">
                      愛好大自然、以童心為原動力，怎麼帶你玩戶外活動？
                    </h5>
                    <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="articleCategoryMain1_Large mt-3">
              <div className="articleCategoryLargeImg ml-auto">
                <img
                  src="./images/article/article_14.jpeg"
                  alt="article_14"
                ></img>
              </div>
              <div class="articleCategoryLargeText ml-5 mt-3">
                <h5 class="articleCategoryTitle">
                  野外技能補完手冊：從輕量化裝備、行進技巧、戶外
                  炊煮、營地工藝到辨識危險
                </h5>
                <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                <span className="articleAuthor">作者：小編A</span>
                <p class="mt-3 mb-3">
                  輕量化意味著要犧牲旅程的舒適與安全？輕量化裝備都很貴？背超輕就能走超快，能走超快就多了很多仔細欣賞山林、觀賞花朵、融入自然的餘裕。背超輕就有餘裕仔細辨識叉路、融入環境...{' '}
                  <a href="#/">＋看更多</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ 文章部分 3 -------------- */}

      <div class="container articleCategoryAll">
        <div class="row d-flex">
          <div className="articleTitleGroup mt-3">
            <span>
              <img
                className="articleLogo-2"
                src="./images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2">深度野營探索</span>
          </div>

          <div className="articleMoreLinkMain mt-4 ml-auto mr-5">
            {/* <Link to="/about">About</Link> */}
            <a href="#/">看更多內容</a>
          </div>
        </div>

        <div class="row">
          <div className="articleCategoryMain1 d-flex">
            <div className="articleCategoryMain1_Large mt-3">
              <div className="articleCategoryLargeImg">
                <img
                  className="article_03_img"
                  src="./images/article/article_34.jpg"
                  alt="article_34"
                ></img>
              </div>
              <div class="articleCategoryLargeText ml-3 mt-3">
                <h5 class="articleCategoryTitle">
                  用鑄鐵平底鍋、荷蘭鍋、烤肉爐做出令人垂涎的戶外料理
                </h5>
                <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                <span className="articleAuthor">作者：小編A</span>
                <p class="mt-3 mb-3">
                  從不用升火也能做出的輕鬆小菜，到讓你大飽口腹之欲的魚、肉、蔬菜料理、點心等，這裡通通都有。在野外用餐總是感覺食物特別美味！野炊露營能為小朋友和大人帶來很棒的成長體驗；而且，圍著營火用餐...
                  看更多＋... <a href="#/">＋看更多</a>
                </p>
              </div>
            </div>
            <div className="articleCategory_Small mt-3">
              <div className="articleCategory_SmallTop d-flex d-flex justify-content-between">
                <div className="articleCategory_SmallL">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="./images/article/article_04.jpg"
                      alt="article_04"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 class="articleCategoryTitle">
                      建立「輕量化的觀念」比購 買「輕量化的裝備」重要
                    </h5>
                    <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>

                <div className="articleCategory_SmallR">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="./images/article/article_05.jpg"
                      alt="article_05"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 class="articleCategoryTitle">
                      靜謐山徑上的星星，找回與 大自然的相處之道！
                    </h5>
                    <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>
              </div>

              <div className="articleCategory_SmallBottom d-flex d-flex justify-content-between mt-5">
                <div className="articleCategory_SmallL">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="./images/article/article_08.jpg"
                      alt="article_08"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 class="articleCategoryTitle">
                      四季的露營，享受美好露營 時光～
                    </h5>
                    <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>

                <div className="articleCategory_SmallR">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="./images/article/article_33.jpg"
                      alt="article_33"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 class="articleCategoryTitle">
                      終極輕量化的山林料理絕招
                    </h5>
                    <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ 文章部分 4 -------------- */}

      <div class="container articleCategoryAll">
        <div class="row d-flex">
          <div className="articleTitleGroup mt-3">
            <span>
              <img
                className="articleLogo-2"
                src="./images/article/campfun-logo.png"
                alt="campfun-logo"
              ></img>
            </span>
            <span className="articlePageTitle ml-2">奢華露營體驗</span>
          </div>

          <div className="articleMoreLinkMain mt-4 ml-auto mr-5">
            {/* <Link to="/about">About</Link> */}
            <a href="#/">看更多內容</a>
          </div>
        </div>

        <div class="row">
          <div className="articleCategoryMain1 d-flex">
            <div className="articleCategory_Small mt-3">
              <div className="articleCategory_SmallTop d-flex d-flex justify-content-between">
                <div className="articleCategory_SmallL">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="./images/article/article_32.jpg"
                      alt="article_32"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 class="articleCategoryTitle">
                      女子露營休日，裝備x穿搭 x美食x行程，一次搞定！
                    </h5>
                    <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>

                <div className="articleCategory_SmallR">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="./images/article/article_18.jpg"
                      alt="article_18"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 class="articleCategoryTitle">平底鍋登山露營食譜</h5>
                    <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>
              </div>

              <div className="articleCategory_SmallBottom d-flex d-flex justify-content-between mt-5">
                <div className="articleCategory_SmallL">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="./images/article/article_24.jpg"
                      alt="article_24"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 class="articleCategoryTitle">
                      超輕量登山野營技巧：10 天食物加上裝備不到12公斤
                    </h5>
                    <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>

                <div className="articleCategory_SmallR">
                  <div className="articleCategory_SmallLImg">
                    <img
                      src="./images/article/article_19.jpg"
                      alt="article_19"
                    ></img>
                  </div>
                  <div className="articleCategorySmallText ml-2 mt-3">
                    <h5 class="articleCategoryTitle">
                      零失敗，好上手！完全圖解 露營必備料理
                    </h5>
                    <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                    <span className="articleAuthor">作者：小編A</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="articleCategoryMain1_Large mt-3">
              <div className="articleCategoryLargeImg ml-auto">
                <img
                  src="./images/article/article_20.jpg"
                  alt="article_20"
                ></img>
              </div>
              <div class="articleCategoryLargeText ml-5 mt-3">
                <h5 class="articleCategoryTitle">
                  野外技能補完手冊：從輕量化裝備、行進技巧、戶外炊煮、營地工藝到辨識危險
                </h5>
                <span>2021.07.15</span>&nbsp;&nbsp;&nbsp;
                <span className="articleAuthor">作者：小編A</span>
                <p class="mt-3 mb-3">
                  一起走進山林，來抱樹吧，發現樹療和森林浴的美好益處！2019/10/21台灣山林全面開放，安全享受山林前，先認識森林浴、樹療法和山林如何治癒身心！尤其是它能減少壓力。我發現森林恢復了我的寧靜，改善了我的健康...{' '}
                  <a href="#/">＋看更多</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleList
