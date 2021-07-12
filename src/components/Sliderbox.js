import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/productcard.css'
import { BsMoon } from 'react-icons/bs'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

function Sliderbox(props) {
  //上層先設定鉤子
  const [cards, setCards] = useState([])

  //設定抓取資料
  async function getData() {
    //設定卡片資料源頭
    const source = props.source

    const request = new Request(source, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    setCards(data)
  }

  useEffect(() => {
    getData()
  }, [])

  let settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const moonrank = {
    size: 25,
    char: <BsMoon />,
    edit: false,
  }
  const cardgroup = (
    <>
      <div className="pro-cardout">
        <Slider {...settings}>
          {cards.length &&
            cards.map((value, index) => {
              let prourl = `/product/${value.product_id}`
              return (
                <>
                  <div className="pro-card">
                    <Link to={prourl} style={{ textDecoration: 'none' }}>
                      <div className="pro-cardimgarea">
                        <img
                          src={value.product_oimage}
                          className="pro-cardimg"
                          alt={value.product_name}
                        ></img>
                      </div>
                    </Link>
                    <div className="pro-card-info">
                      <div class="pro-cardtitle">
                        <h5>{value.product_name}</h5>
                      </div>
                      <div class="pro-cardsummary">
                        <span>{value.product_summary}</span>
                      </div>
                      <div class="pro-cardrank">
                        <div>Rank　</div>
                        <div>
                          <ReactStars
                            count={5}
                            value={value.product_rate}
                            {...moonrank}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
        </Slider>
      </div>
    </>
  )
  return <div>{cardgroup}</div>
}
export default Sliderbox
