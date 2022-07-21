import React from "react"
import CommentCard from "./components/commentCard"
import "./app.css"
import Button from "./components/shared/button"

function App() {
  return (
    <div className="App">
      <CommentCard />
      <Button primary>Send</Button>
    </div>
  )
}

export default App
