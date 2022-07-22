import styled from "styled-components"

export const StyledButton = styled.button`
  padding: 0.73rem 1.8rem;
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  color: #fff;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.colors.moderateBlue};
  border-radius: 0.5rem;
  font-weight: 400;
  text-transform: uppercase;
`
