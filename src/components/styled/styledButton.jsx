import styled from "styled-components"

export const StyledButton = styled.button`
  padding: 0.73rem 1.3rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #fff;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  background-color: ${(props) =>
    props.text === "UPDATE" || props.text === "REPLY" || props.text === "SEND"
      ? props.theme.colors.moderateBlue
      : props.text === "CANCEL"
      ? props.theme.colors.grayishBlue
      : props.theme.colors.softRed};
`
