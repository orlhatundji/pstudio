import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  width: 100%;

  .left {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 15px;
    padding: 0 30px 24px 30px;
  }

  .left {
     display: grid;
     grid-template-columns: 1fr 1fr; 
     align-items: center;
     justify-content: center;
    
    .testimony {
      width: fit-content;
      background: #FFFFFF;
      border-radius: 15px;
      padding: 64px 21px;
      margin-bottom: 32px;
      margin-right: 48px;
      box-shadow: 0px 4px 24px 0px #FF000014;
      transition: all 2s ease-in-out !important; 

      &:hover {
        transform: scale(1.1) !important;
      }
      
      .name-container {
        display: flex;
        span {
          display: block;
        }
        img {
          width: 40px;
          height: 40px;
        }
        .customer-name {
          margin-left: 12px;
          white-space: nowrap;
          ._name {
            font-size: 18px;
            font-weight: 700;
          }
          .position {
            font-size: 16px;
            font-weight: 400;
          }
        }
      }
      .rating {
        margin-top: 15px;
        margin-bottom: 15px;
      }
      .body {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }
    }
    .two {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;

    
    ._inner {
      margin-top: auto;
      margin-bottom: auto;
      padding: 0;

      h3{
        margin-top: 0;
        font-size: 28px;
        font-weight: 700;
        line-height: 28px;
      }
      span {
        margin-top: 16px;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
      }
      button {
        margin-top: 32px;
      }
    }
  }
`