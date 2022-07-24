import styled from "styled-components"

export const DeleteDialog = styled.section`
  background: rgba(0, 0, 0, 0.55);
  height: 100vh;
  padding-top: 6rem;

  .modalContainer {
    background-color: ${({ theme }) => theme.colors.White};
    width: 70%;
    margin: auto;
    padding: 25px;
    border-radius: 8px;
  }
  .modalTitle {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 600;
    font-size: 18px;
    padding-bottom: 0.625rem;
  }
  .confirmText {
    font-size: 14px;
    font-weight: 540;
    line-height: 20px;
    color: ${(props) => props.theme.colors.grayishBlue};
  }

  .modalBtn {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
`
