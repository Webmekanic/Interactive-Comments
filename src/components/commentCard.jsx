import React from "react"
import Card from "./shared/card/card"
import user from "../images/avatars/image-amyrobson.png"
import CommentVote from "./commentVote"
import { CommentWrapper } from "./styled/comment"
import { FaReply, FaEdit } from "react-icons/fa"

const commentCard = () => {
  return (
    <Card>
      <CommentWrapper>
        <div className="userInfo">
          <div className="styledImg">
            <img src={user} alt="User" />
          </div>
          <h3 className="userName">amyrobson</h3>
          <p className="youTag">you</p>
          <p className="createdDate">1 month ago</p>
        </div>
        <p className="comment">
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You've nailed the design and the
          responsiveness at various breakpoints works really well.
        </p>
        <div className="commentBtn">
          <CommentVote />
          <button className="replyBtn">
            <FaEdit size={"13.3"} />
            Reply
          </button>
        </div>
      </CommentWrapper>
    </Card>
  )
}

export default commentCard
