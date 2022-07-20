import React from "react"
import { CounterWrapper } from "./styled/counter"

const CommentVote = () => {
  return (
    <CounterWrapper>
      <button className="subtract">+</button>
      <p className="counterNumber">12</p>

      <button className="addition">-</button>
    </CounterWrapper>
  )
}

export default CommentVote
