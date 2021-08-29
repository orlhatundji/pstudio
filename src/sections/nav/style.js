import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 24px 0;
  align-items: center;
  font-size: 18px;
  font-style: 'Manrope';

  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    padding: 0;

    li {
      margin-right: 40px;
    }
  }

  span.brand-name {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }

  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    .search-input-container {
      display: flex;
      justify-content: flex-end;
      background: #F2F5F5;
      border-radius: 30px;
      padding: 11px 20px;
      margin-right: 40px;
      .search-input {
        border: None;
        outline: None;
        background: transparent;
    }
    }
    
  }
`