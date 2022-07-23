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
  .modalBtn {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
`
