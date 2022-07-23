import React from "react"
import Button from "../components/shared/button"
import { DeleteDialog } from "../components/styled/deleteDialog"
import { StyledButton } from "../components/styled/styledButton"

const DeleteModal = () => {
  return (
    <DeleteDialog>
      <section className="modalContainer">
        <h1>Delete comment</h1>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone
        </p>
        {/* Button Here */}
        <Button text={"REPLY"}>hdhdhdh</Button>
      </section>
    </DeleteDialog>
  )
}

export default DeleteModal
