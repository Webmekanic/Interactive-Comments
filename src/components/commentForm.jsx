import React from "react"
import user from "../images/avatars/image-amyrobson.png"
import Button from "./shared/button"
import Card from "./shared/card/card"

const CommentForm = () => {
  return (
    <Card>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Add a comment"
      ></textarea>
      <div className="styledImg">
        <img src={user} alt="User" />
      </div>
      <Button>Send</Button>
    </Card>
  )
}

export default CommentForm
