import React, { useState, useEffect } from 'react'
import { withRouter, Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

function AComment(props) {
  const { getCommentFromServer } = props
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
    if (!data.comment) {
      errorAlert()
    } else {
      successAlert()
    }

    function successAlert() {
      Swal.fire({
        icon: 'success',
        title: '留言成功',
        // text: '下次請您使用新密碼登入',
        confirmButtonColor: '#ffbb00',
      })
    }

    function errorAlert(errorMessages) {
      Swal.fire({
        icon: 'question',
        title: '沒有輸入留言？',
        text: '沒有留言內容，請重新輸入',
        confirmButtonColor: '#ffbb00',
      })
    }

    setFormData({ ...formData, name: '', comment: '' })
    setTimeout(() => {
      getCommentFromServer()
    }, 1000)
  }

  // ------
  return (
    <>
      <form
        className="row articleComment form-group mx-3"
        onSubmit={sendCommenttoServer}
        method="post"
      >
        <input
          type="text"
          name="name"
          className="form-control articleName my-3"
          value={formData.name}
          placeholder="我的名字..."
          onChange={handleChange}
        />

        <textarea
          type="textarea"
          name="comment"
          value={formData.comment}
          className="form-control articleTextarea"
          rows="3"
          placeholder="我的留言..."
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="articleCommentSubmit my-3 ml-auto mr-3"
        >
          送出留言
        </button>
      </form>
    </>
  )
}

export default AComment
