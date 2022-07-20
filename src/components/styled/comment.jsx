import styled from "styled-components"
// import { Theme } from "../../theme/theme"

export const Wrapper = styled.section`
  border: 2px solid green;
  background-color: ${(props) => props.theme.colors.softRed};
  color: #333;
  border-radius: 15px;
  padding: 40px 50px;
  margin: 20px 0;
  position: relative;

  @media ${({ theme }) => theme.mediaQueries["below - 768"]} {
  } ;
`
