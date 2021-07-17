import React, { useState, useEffect } from 'react'
// import { withRouter, Link, useParams } from 'react-router-dom'

function ACommentLine(props) {
  const { comment, setComment, getCommentFromServer } = props

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
              <div key={value.id} className="media articleCommentGroup mt-5">
                <img
                  className="d-flex rounded-circle avatar z-depth-1-half mr-3"
                  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                  alt="Avatar"
                />

                <div className="media-body ml-3">
                  <h5 className="mt-0 font-weight-bold articleUser">
                    {value.name === '' ? <div>匿名訪客</div> : value.name}
                    {/* {value.name}{' '} */}
                  </h5>
                  {value.content}
                  <div className="media-body mt-3 d-flex flex-column ">
                    {/* <div className="articleReply">{value.reply}</div> */}
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
