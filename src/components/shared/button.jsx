import React from "react"
import { StyledButton } from "../styled/styledButton"

const Button = ({ type, text, children }) => {
  return (
    <StyledButton text={text} type={type}>
      {children}
    </StyledButton>
  )
}

export default Button
