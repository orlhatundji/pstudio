import { bgHex } from "chalk"
import styled from "styled-components"

import bg from "../../assets/images/dontmiss.png"

export const Wrapper = styled.div`
  width: 100%;
  margin-top: -64px;
  center {
      font-weight: 700;
      font-size: 28px;
      margin-bottom: 50px;
  }

  .logos {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .dont-miss {
    background: url(${bg}) no-repeat;
    background-size: 100% 330px;
    height: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    margin-top: 64px;

    h3 {
      color: #FFFFFF;
      font-weight: 700;
      font-size: 28px;
      line-height: 28px;
      margin: 0;
    }
    input {
      height: 45px;
      width: 700px;
      background: #F2F5F5;
      border: None;
      border-radius: 15px;
      outline: None;
      padding: 14px 33px;
      margin-top: 56px;
      margin-bottom: 24px;
      bottom: 24px;
    }
  }
`