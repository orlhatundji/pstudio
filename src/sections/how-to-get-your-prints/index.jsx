import React from 'react'
import Slide from 'react-reveal/Slide';

// styles
import { Wrapper } from './style'

// Assets
import { ReactComponent as Line } from '../../assets/images/line.svg'
import { ReactComponent as Earphone } from '../../assets/images/earphone.svg'
import { ReactComponent as Dollar } from '../../assets/images/dollar.svg'
import MoreThanPrints from "../../assets/images/more-than-prints.png"

const steps = [
    {
        ID: 1,
        title: 'Select Item'
    },
    {
        ID: 2,
        title: 'Customize Item'
    },
    {
        ID: 3,
        title: 'Checkout'
    },
    {
        ID: 4,
        title: 'Make Payment'
    }
]
const HowToGetYourPrints = () => (
    <Wrapper id="press" className="app-section">
        <center>How To Get Your Prints</center>

        <div className="print-steps">
            {steps.map((item, index) => (
                <>
                    <div className="step-item" key={item.ID}>
                        <span className="step-position">{item.ID}</span>
                        <span className="step-title">{item.title}</span>
                    </div>
                    {index < (steps.length -1) && <Line />}
                </>
            ))}
        </div>

        <div className="content flex">
            <Slide left>
                <div className="left">
                    <h3>More Than Prints</h3>
                    <p>PrintStudio is the preferred online printer of business cards, postcards, brochures.</p>
                    <div className="flex">
                        <div className="support">
                            <div className="icon"><Earphone /></div>
                            <span className="icon-caption">Amazing Support</span>
                        </div>
                        <div className="pricing">
                            <div className="icon"><Dollar /></div>
                            <span className="icon-caption">Amazing Support</span>
                        </div>
                    </div>
                </div>
            </Slide>
            <Slide right>
                <img src={MoreThanPrints} alt="more than prints" />
            </Slide>
        </div>

    </Wrapper>
)

export default HowToGetYourPrints
