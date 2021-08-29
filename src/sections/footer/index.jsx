import React from 'react'

// components
import Button from '../../common/button'

// styles
import { Wrapper } from './style'

const Footer = () => (
    <Wrapper>
        <div className="_inner">
            <div className="footer-column">
                <h3>PSTUDIO</h3>
            </div>
            <div className="footer-column">
                <h3>Company</h3>
                <ul>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Press</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Information</h3>
                <ul>
                    <li>Track Order</li>
                    <li>Terms and use</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Contact</h3>
                <ul>
                    <li>Call: +2349074741077</li>
                    <li>About</li>
                    <li>Press</li>
                </ul>
            </div>
        </div>
    </Wrapper>
)

export default Footer
