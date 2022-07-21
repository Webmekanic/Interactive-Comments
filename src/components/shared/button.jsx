import React from "react"
import { StyledButton } from "../styled/styledButton"

const Button = ({ type, text, children }) => {
  return <StyledButton text={text}>button</StyledButton>
}

export default Button
