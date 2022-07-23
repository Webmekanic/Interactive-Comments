import React from "react"
import { StyledButton } from "../styled/styledButton"
import PropTypes from "prop-types"

const Button = ({ type, text, children }) => {
  return (
    <StyledButton text={text} type={type}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  text: PropTypes.string,
}

export default Button
