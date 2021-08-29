import React from 'react'
import Slide from 'react-reveal/Slide';

// components
import Button from '../../common/button'

// styles
import { Wrapper } from './style'

// Assets
import shirtImage from "../../assets/images/shirt1.png"

const About = () => (
    <Wrapper className="app-section">
        
        <div className="left">
            <Slide left cascade>
                <h3>We Are A Leading Printing Agency</h3>
                <h1>Variety of printing formats easily</h1>
            </Slide>
            <Button title="Shop Now" />
        </div>
        
        <div className="right">
            <img src={shirtImage} alt="shirt" />
        </div>
    </Wrapper>
)

export default About
