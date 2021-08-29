import React from 'react'
import Zoom from 'react-reveal/Slide';

// components
import Button from "../../common/button"

// styles
import { Wrapper } from './style'

// Assets
import logo1 from "../../assets/images/logo1.png"
import logo2 from "../../assets/images/logo2.png"
import logo4 from "../../assets/images/logo4.png"
import logo3 from "../../assets/images/logo3.png"
import logo5 from "../../assets/images/logo5.png"
import logo6 from "../../assets/images/logo6.png"

const Trustees = () => (
    <Wrapper className="app-section">
        <center>Trusted By These Brands</center>
        <div className="logos">
            <Zoom bottom><img src={logo1} alt="anime planet" /></Zoom>
            <Zoom bottom><img src={logo2} alt=";lagonika" /></Zoom>
            <Zoom bottom><img src={logo3} alt="snap" /></Zoom>
            <Zoom bottom><img src={logo4} alt="moo" /></Zoom>
            <Zoom bottom><img src={logo5} alt="b-star" /></Zoom>
            <Zoom bottom><img src={logo6} alt="lahore garrison" /></Zoom>       
        </div>
        <div className="dont-miss">
            <h3>Hey there. Don't miss our next print drop!!</h3>
            <input type="text" placeholder="Subscribe to our newsletter" />
            <Button title="Sign Up" />
        </div>
    </Wrapper>
)

export default Trustees
