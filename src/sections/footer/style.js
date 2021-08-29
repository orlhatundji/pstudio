import styled from "styled-components"

export const Wrapper = styled.footer`
  background: #000000;
  margin-top: -85px;
 
  grid-column-gap: 20px;
  width: 100%;
  color: #FFFFFF;
  padding-top: 56px;
  padding-bottom: 69px;

  ._inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-right: 190px;
    margin-left: 190px;

    h3 {
      font-weight: 700;
      font-size: 28px;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;

      li {
        margin-top: 24px;
        font-size: 17px;
        font-weight: 400;
      }
    }
  }
  
`