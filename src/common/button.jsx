import React from 'react'
import styled from "styled-components"

const Button = ({title, style, children}) => (
    <Wrapper className="shop-now" style={style}>{children} {title}</Wrapper>
)

export default Button

export const Wrapper = styled.button`
    color: ${props => props?.style?.color || "#FFFFFF"};
    background: ${props => props?.style?.background || "#FF0000"};
    width: ${props => props?.style?.width || "fit-content"};
    font-size: ${props => props?.style?.fontSize || "18px"};
    font-weight: ${props => props?.style?.fontWeight || "500"};
    padding: ${props => props?.style?.padding || "12px 31px"};
    border-radius: 15px;
    outline: None;
    border: None;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    cursor: pointer;
    transition: all .2s ease-in-out; 
    &:hover {
        transform: scale(0.9);
    }
`