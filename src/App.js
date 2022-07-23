import React from "react"
import CommentCard from "./components/commentCard"
import "./app.css"
import Button from "./components/shared/button"
import CommentForm from "./components/commentForm"
import DeleteModal from "./pages/deleteModal"

function App() {
  return (
    <div className="App">
      {/* <CommentCard />
      <CommentCard />
      <CommentForm /> */}
      <DeleteModal />
    </div>
  )
}

export default App
