import React from "react"
import CommentCard from "./components/commentCard"
import "./app.css"
import Button from "./components/shared/button"
import CommentForm from "./components/commentForm"

function App() {
  return (
    <div className="App">
      <CommentCard />
      <CommentCard />
      {/* <Button primary>Send</Button> */}
      <CommentForm />
    </div>
  )
}

export default App
