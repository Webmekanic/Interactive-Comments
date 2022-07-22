import React from "react"
import { StyledButton } from "../styled/styledButton"

const Button = ({ type, text, children }) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button
