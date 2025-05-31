import React from 'react'
import './Aboutinformation.css'
import made from './made.png'
const Aboutinformation = () => {
    return (
        <div>
            <div className="about-information">
                <div className="left-information"  data-aos="fade-right">
                    <div className="heading-information">
                        A little information for our valuable guest
                    </div>
                    <div className="para-information">
                        At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                    </div>
                    <div className="info-card">
                        <div className="left-card">
                            <h1>3</h1>
                            <p>Locations</p>
                        </div>
                        <div className="left-card">
                            <h1>1995</h1>
                            <p>Founded</p>
                        </div>

                    </div>
                    <div className="info-card">
                        <div className="left-card">
                            <h1>65+</h1>
                            <p>Staff Members</p>
                        </div>
                        <div className="left-card">
                            <h1>100%</h1>
                            <p>Satsified Customers</p>
                        </div>

                    </div>
                </div>
                <div className="right-information" data-aos="fade-left">
                    <img src={made} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Aboutinformation