import styled from "styled-components"

export const Wrapper = styled.div`
  background: #FBB9A9;
  padding: 60px 68px 0 60px;
  border-radius: 15px;
  height: 504px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 68px;
    overflow: hidden;

    h3 {
      font-weight: 300;
      font-size: 24px;
      line-height: 33px;
      margin-bottom: 16px;
    }

    h1 {
      font-weight: bold;
      font-size: 48px;
      margin-top: 0;
    }

    button {
      background: #FF0000;
      color: #FFFFFF;
      width: fit-content;
      padding: 12px 31px;
      border-radius: 15px;
      outline: None;
      border: None;
      font-weight: 600;
      font-size: 18px;
      
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
`