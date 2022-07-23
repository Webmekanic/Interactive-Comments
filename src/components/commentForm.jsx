import React from "react"
import user from "../images/avatars/image-amyrobson.png"
import Button from "./shared/button"
import Card from "./shared/card/card"
import { StyledForm } from "./styled/styledForm"

const CommentForm = () => {
  return (
    <Card>
      <StyledForm>
        <textarea
          className="textArea"
          placeholder="Add a comment..."
        ></textarea>
        <div className="formGroup">
          <div className="styledImg">
            <img src={user} alt="User" />
          </div>
          <Button>Send</Button>
        </div>
      </StyledForm>
    </Card>
  )
}

export default CommentForm
