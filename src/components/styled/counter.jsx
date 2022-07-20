import styled from "styled-components"

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.veryLightGray};
  border-radius: 8px;
  align-items: center;
  padding: 5px 5px;

  .subtract,
  .addition {
    border: none;
    padding: 0 10px;
    background: none;
    font-size: 25px;
    font-weight: 700;
    margin-left: 0.5rem;
    cursor: pointer;
    align-items: center;
    text-align: center;
    color: ${(props) => props.theme.colors.lighGrayishBlue};
  }
  .counterNumber {
    color: ${(props) => props.theme.colors.moderateBlue};
    font-weight: 600;
  }
`
