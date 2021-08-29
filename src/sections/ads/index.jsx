import React from 'react'
import Slide from 'react-reveal/Slide';

// components
import Button from '../../common/button'

// styles
import { Wrapper } from './style'

// Assets
import ComputerImages from "../../assets/images/pc1.png"
import MobileImages from "../../assets/images/mobiles.png"

const AdsSection = () => (
    <Wrapper className="app-section">
        <Slide left>
            <div className="left">
                <img src={ComputerImages} alt="computers" />     
                <div>
                    <p>Overwhelming amount of options</p>
                    <Button title="Shop Now" />
                </div>
            </div>
        </Slide>
        <Slide right>
            <div className="right">
                <div>
                    <p>Amazing quality</p>
                    <Button title="Shop Now" />
                </div>
                <img src={MobileImages} alt="computers" />   
            </div>
        </Slide>
    </Wrapper>
)

export default AdsSection
