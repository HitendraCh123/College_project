import React from 'react'
import './Aboutpartner.css'
import partner from './partner.png'
import Section9 from './Section9'
const Aboutpartner = () => {
    return (
        <div>
            <div className="partner-container">
                <div className="partner-content" data-aos="fade-left">
                    <div className="partner-head">
                    You can order through apps
                    </div>
                    <div className="partner-para">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.
                    </div>
                </div>
                <div className="partner-logo" >
                    <img data-aos="fade-right" src={partner} alt="loading" />
                </div>
            </div>
          
            <Section9/>
        </div>
    )
}

export default Aboutpartner