import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  width: 100%;

  .left, .right {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 15px;
    padding: 0 30px 24px 30px;

    img {
        margin-top: -24px;
    }
    p {
        font-size: 28px;
        font-weight: 700;
        color: #FFFFFF;
    }
  }
  
  .left {
    background: #5F49C3;
  }
  .right {
    background: #FFCB4F;
    img {
        margin-left: auto;
    }
  }
`