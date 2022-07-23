import React from "react"
import Button from "../components/shared/button"
import { DeleteDialog } from "../components/styled/deleteDialog"

const DeleteModal = () => {
  return (
    <DeleteDialog>
      <section className="modalContainer">
        <h1>Delete comment</h1>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone
        </p>
        <div className="modalBtn">
          <Button text={"CANCEL"}>NO, CANCEL</Button>
          <Button text={"DELETE"}>YES, DELETE</Button>
        </div>
      </section>
    </DeleteDialog>
  )
}

export default DeleteModal
