import React from 'react'
import './About.css'
import Section4 from './Section4'
import video from './videoplayback.mp4'
import menu1 from './menu1 (1).png'
import menu2 from './menu1 (2).png'
import menu3 from './menu1 (3).png'
import Aboutinformation from './Aboutinformation'
import Section7 from './Section7'
import Section9 from './Section9'
const About = () => {
  return (
    <>
      <div className="about-container">
        <Section4 />
        <div className="food-video-container">

          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
          <div className="about-container-bottom" data-aos="zoom-in">
            <div className="about-container-child">
              <img src={menu1} alt="" />
              <div className="about-group">
                <h3>Multi cuisine</h3>
                <div className="para-graph">In the new era of technology we look in the future with certainty life.</div>
              </div>


            </div>
            <div className="about-container-child">
              <img src={menu2} alt="" />
              <div className="about-group">
                <h3>Easy To Order</h3>
                <div className="para-graph">In the new era of technology we look in the future with certainty life.</div>
              </div>


            </div>
            <div className="about-container-child">
              <img src={menu3} alt="" />
              <div className="about-group">
                <h3>Fast Delivery</h3>
                <div className="para-graph">In the new era of technology we look in the future with certainty life.</div>
              </div>


            </div>


          </div>

            <Aboutinformation/>
            <Section7/>
            <Section9/>
        </div>

      </div>
    </>
  )
}

export default About