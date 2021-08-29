import styled from "styled-components"

export const Wrapper = styled.div`
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  background: #FFFFFF;
  position: sticky;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 24px 0;
  align-items: center;
  font-size: 18px;
  z-index: 100;  

  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    padding: 0;

    li {
      a {
        margin-right: 40px;
        cursor: pointer;
        color: #000000;
        text-decoration: none;
        transition: all .5s ease-in-out;
        background: linear-gradient(to right, rgba(100, 200, 200, 1), rgba(100, 200, 200, 1)),
          linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));
        background-size: 100% 0em, 0 0em;
        background-position: 100% 100%, 0 100%;
        background-repeat: no-repeat;
        transition: background-size 400ms;
        &:hover, &:focus {
          background-size: 0 0.1em, 100% 0.1em;
        }
      }
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