import React from 'react'
import './Section7.css'
import profile1 from './profile1.png'
import profile2 from './profile2.png'
import prof3 from './profile3.png'
const Section7 = () => {
    return (
        <div>
            <div className="container7">
                <div className="heading-center"  data-aos="zoom-in">
                    What Our Customers Say
                </div>
                <div className="customer-card-container">
                    <div className="customer-card"  data-aos="fade-up">
                        <h1>“The best restaurant”</h1>
                        <div className="customer-para">
                            Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.
                        </div>
                        <div className="line"></div>
                        <div className="customer-profile">
                            <div className="dp">
                                <img src={profile1} alt="" />
                            </div>
                            <div className="bio">
                                <h3>Sanorita</h3>
                                <p>Los Angeles, CA</p>
                            </div>
                        </div>
                    </div>
                    <div className="customer-card"  data-aos="fade-up">
                        <h1>“Simply delicious”</h1>
                        <div className="customer-para">
                            Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.
                        </div>
                        <div className="line"></div>
                        <div className="customer-profile">
                            <div className="dp">
                                <img src={profile2} alt="" />
                            </div>
                            <div className="bio">
                                <h3>Matt Cannon</h3>
                                <p>San Digego, CA</p>
                            </div>
                        </div>
                    </div>
                    <div className="customer-card"  data-aos="fade-up">
                        <h1>“One of a kind restaurant”</h1>
                        <div className="customer-para">
                            Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.
                        </div>
                        <div className="line"></div>
                        <div className="customer-profile">
                            <div className="dp">
                                <img src={prof3} alt="" />
                            </div>
                            <div className="bio">
                                <h3>Andy Smith</h3>
                                <p>San Francisco, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section7