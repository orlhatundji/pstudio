import React, { useEffect, useState, useRef } from 'react'
import Slide from 'react-reveal/Slide';

// components
import Button from '../../common/button'

// styles
import { Wrapper } from './style'

// Assets
import Avatar from "../../assets/images/avatar.png"
import { ReactComponent as Star } from "../../assets/images/star.svg"

const testimonies = [
    {
        ID: 1,
        customerName: "Augustine Ogiza",
        position: "CEO",
        rating: 5,
        body: "“PrintStudio is the preferred online printer of business cards, postcards, brochures”"
    },
    {
        ID: 2,
        customerName: "Simon Olatunji",
        position: "CTO",
        rating: 5,
        body: "“PrintStudio is the preferred online printer of business cards, postcards, brochures”"
    },
    {
        ID: 1,
        customerName: "Augustine Ogiza",
        position: "Analyst",
        rating: 5,
        body: "“PrintStudio is the preferred online printer of business cards, postcards, brochures”"
    },
    {
        ID: 2,
        customerName: "Simon Olatunji",
        position: "Designer",
        rating: 5,
        body: "“PrintStudio is the preferred online printer of business cards, postcards, brochures”"
    },
    {
        ID: 1,
        customerName: "Augustine Ogiza",
        position: "Developer",
        rating: 5,
        body: "“PrintStudio is the preferred online printer of business cards, postcards, brochures”"
    },
]


const Testimonials = () => {
    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
      setHeight(ref.current.clientHeight)
      console.log('height: ', height)
    }, [height])
    return (
    <Wrapper className="app-section">
        <div className="left">
            <div className="one">
                {testimonies.slice(2).map((testimony) => (
                    <Slide bottom key={testimony.ID}>
                        <div className="testimony">
                            <div className="name-container">
                                <img src={Avatar} alt="" />
                                <div className="customer-name">
                                    <span className="_name">{testimony.customerName}</span>
                                    <span className="position">{testimony.position}</span>
                                </div>
                            </div>
                            <div className="rating">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <p className="body">{testimony.body}</p>
                        </div>
                    </Slide>
                ))}
            </div>
            <div className="two" ref={ref}>
                {testimonies.slice(-2).map((testimony) => (
                    <Slide bottom key={testimony.ID}>
                        <div className="testimony">
                            <div className="name-container">
                                <img src={Avatar} alt="" />
                                <div className="customer-name">
                                    <span className="_name">{testimony.customerName}</span>
                                    <span className="position">{testimony.position}</span>
                                </div>
                            </div>
                            <div className="rating">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <p className="body">{testimony.body}</p>
                        </div>
                    </Slide>
                ))}
            </div>
        </div>
        <div className="right">
            <div className="_inner" style={{ height: height}}>
                <h3>What Our Customers <br/> Say About Us</h3>
                <span>Reviews are amazing right?</span>
                <Button title="Shop Now" />
            </div>
        </div>
    </Wrapper>
)}

export default Testimonials
