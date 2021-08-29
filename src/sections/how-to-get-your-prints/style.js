import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  center {
      font-weight: 700;
      font-size: 28px;
      margin-bottom: 50px;
  }
  .print-steps {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-row-gap: 32px;
    justify-items: center;
    align-items: center;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;

    .step-item {
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: all .2s ease-in-out; 

      span {
        display: block;
        text-align: center;
      }
      .step-position {
        font-weight: 700;
        width: 60px;
        height: 60px;
        background: #FFFFFF;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 24px 0px #FF00000D;
      }
      .step-title {
        margin-top: 16px;
        font-weight: 700;
      }
      &:hover {
        transform: scale(0.9);
        .step-position {
          background: #FF0000;
          color: #FFFFFF;
        }
          .step-title {
            color: #FF0000;
          }
      }
    }
  }
  .flex {
    display: flex;
  }
  .content {
    margin-top: 50px;
    .left {
      padding-right: 30%;
      h3 {
        font-weight: 700;
        font-size: 28px;
        margin-bottom: 16px;
      }
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
      }
      .icon {
        width: 60px;
        height: 60px;
        background: #FF0000;
        border-radius: 50%;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .icon-caption {
        font-weight: 700;
        font-size: 17px;
      }
      .support {
        margin-right: 50px;
      }
    }
  }
`