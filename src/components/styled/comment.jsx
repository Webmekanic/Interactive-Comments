import styled from "styled-components"

export const CommentWrapper = styled.section`
.userInfo{
  display: flex;
  align-items: center;
  text-align: center;
  padding-bottom: 10px;

  .styledImg{
  height: 35px;
  width: 35px;
  display: flex;
  flex - direction: row;
  object-fit: cover;
  }

  img {
    width: 100%;
    height: 100%;
  }
  .userName{
    margin-left: 0.625rem;
    font-weight: 700;
    font-size: 16px;
    color:  ${(props) => props.theme.colors.darkBlue};
  }
  .createdDate{
    margin-left: 0.825rem;
   color: ${(props) => props.theme.colors.grayishBlue};
    font-weight: 500;
    font-size: 16px;
  }
}
.comment{
  line-height: 1.4rem;
  color: ${(props) => props.theme.colors.grayishBlue};
  font-size: 1.0313rem;
  

}
.commentBtn{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
padding-top: 1rem;
text-align: justify;
}
.replyBtn{
  color: ${(props) => props.theme.colors.moderateBlue};
  font-weight: 600;
  display: flex;
  grid-gap:0.4rem;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 17px;

  
}

`
