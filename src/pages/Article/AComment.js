import React, { useState, useEffect } from 'react'
import { withRouter, Link, useParams } from 'react-router-dom'

function AComment() {
  //   const [comment, setComment] = useState('')
  const [test, setTest] = useState(['abc', 'def'])
  //   const [name, setName] = useState('')
  const [test2, setTest2] = useState(['111', '222'])

  const [formData, setFormData] = useState({
    name: '',
    comment: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    setIsSubmitted(true)
    e.preventDefault()
  }

  const handleChange = (e) => {
    const newInput = { ...formData, [e.target.name]: e.target.value }
    setFormData(newInput)
  }

  async function sendCommenttoerver() {
    const mycomment = { name: formData.name, comment: formData.comment }
    // 連接的伺服器資料網址
    const url = 'http://localhost:4000/articles/comment/add'
    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(mycomment),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('comment data', data)
    // 設定資料
    // if (data) setFormData(data)
  }

  console.log(sendCommenttoerver())

  useEffect(() => {
    sendCommenttoerver()
  }, [])

  // ------
  return (
    <>
      <form
        class="row articleComment form-group mt-3 ml-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="我的名字..."
          onChange={handleChange}
        />
        {console.log(formData.name)}
        <textarea
          type="textarea"
          name="comment"
          value={formData.comment}
          class="form-control"
          rows="3"
          placeholder="我的留言..."
          onChange={handleChange}
        ></textarea>

        {/* <input
          type="text"
          name="name"
          value={name}
          placeholder="我的名字..."
          onChange={(e) => {
            setName(e.target.value)
          }}
        />

        <textarea
          type="textarea"
          name="comment"
          value={comment}
          class="form-control"
          rows="3"
          placeholder="我的留言..."
          onChange={(e) => {
            setComment(e.target.value)
          }}
        ></textarea> */}

        <button
          type="submit"
          class="articleCommentSubmit mt-3 ml-auto mr-3"
          value={handleSubmit}
          onClick={(e) => {
            sendCommenttoerver()
            // const newText = [e.target.value, ...test]
            // setTest(newText)
            // // setComment('')
            // const newName = [e.target.value, ...test2]
            // setTest2(newName)
            // // setName('')
            // console.log('newText btn', newText)
          }}
          //   onClick={handleSubmit}
        >
          送出留言
        </button>
      </form>

      {/* -------- */}

      <div className="show_here">
        <ul>
          {test.map((v, i) => {
            return <li key={i}> {v} </li>
          })}
        </ul>
      </div>
      <div className="show_here2">
        <ul>
          {test2.map((v, i) => {
            return <li key={i}> {v} </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default AComment
