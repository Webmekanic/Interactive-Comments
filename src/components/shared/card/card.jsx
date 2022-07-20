import React from "react"
import styled from "styled-components"

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.White};
  color: ${(props) => props.theme.colors.grayishBlue};
  border-radius: 5px;
  padding: 10px 12px;
  margin: 20px 10px;
  position: relative;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);

  @media ${({ theme }) => theme.mediaQueries["below - 768"]} {
  } ;
`

const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
export default Card
