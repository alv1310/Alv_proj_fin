import React, { useState, useEffect } from 'react'
import { withRouter, Link, useParams } from 'react-router-dom'

function AComment() {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
  })

  const handleChange = (e) => {
    const newInput = { ...formData, [e.target.name]: e.target.value }
    setFormData(newInput)
  }

  async function sendCommenttoServer(e) {
    e.preventDefault()
    const mycomment = { name: formData.name, comment: formData.comment }
    console.log('mycomment', mycomment)
    // 連接的伺服器資料網址
    const url = 'http://localhost:4000/articles/comment/add'
    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(mycomment),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log('my comment', JSON.stringify(mycomment))
    const response = await fetch(request)
    const data = await response.json()
    console.log('comment data', data)
  }

  // ------
  return (
    <>
      <form
        class="row articleComment form-group mt-3 ml-3"
        onSubmit={sendCommenttoServer}
        method="post"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="我的名字..."
          onChange={handleChange}
        />

        <textarea
          type="textarea"
          name="comment"
          value={formData.comment}
          class="form-control"
          rows="3"
          placeholder="我的留言..."
          onChange={handleChange}
        ></textarea>

        <button type="submit" class="articleCommentSubmit mt-3 ml-auto mr-3">
          送出留言
        </button>
      </form>
    </>
  )
}

export default AComment
