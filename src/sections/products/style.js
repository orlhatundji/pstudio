import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  center {
      font-weight: 700;
      font-size: 28px;
      margin-bottom: 50px;
  }
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 32px;

    .product-item {
        width: 100%;
        background: #FFFFFF;
        border-radius: 15px;
        padding: 16px 10px;
        box-shadow: 0px 4px 24px 0px #FF000014;
        
        img {
          width: 100%;
        }
        span {
          display: block;
        }
        span.product-item-title {
          margin-top: 20px;
          margin-bottom: 10px;
          font-weight: 600;
        }
        .btn-reaction {
            display: grid;
            grid-template-columns: 6fr 2fr;
            align-items: center;
            margin-top: 20px;

            .heart-bg {
                background: #ECF1FF;
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 12px 20px;
            }
        }
    }
  }

`