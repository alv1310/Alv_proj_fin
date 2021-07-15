import React, { useState, useEffect } from 'react'
import { withRouter, Link, useParams } from 'react-router-dom'

function ACommentLine(props) {
  //   const { cId } = useParams()
  const [comment, setComment] = useState([])

  // 取得留言
  async function getCommentFromServer() {
    // 連接的伺服器資料網址
    const url = `http://localhost:4000/articles/comment`
    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('comment data', data)
    // 設定資料
    if (data) setComment(data)
  }

  useEffect(() => {
    getCommentFromServer()
  }, [])

  // ------
  return (
    <>
      <div>
        {comment.length &&
          comment.map((value, index) => {
            return (
              <div key={value.id} class="media articleCommentGroup mt-5">
                <img
                  class="d-flex rounded-circle avatar z-depth-1-half mr-3"
                  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                  alt="Avatar"
                />

                <div class="media-body ml-3">
                  <h5 class="mt-0 font-weight-bold articleUser">
                    {value.name}{' '}
                  </h5>
                  {value.content}
                  <div class="media-body mt-3 d-flex flex-column ">
                    {/* <div class="articleReply">reply here</div> */}
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default ACommentLine
