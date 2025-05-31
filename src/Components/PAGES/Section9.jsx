import React from 'react'
import './Section9.css'
import footerlogo from './whitelogo.png'
import logoname from './name.png'
import group1 from './group1.png'
import group2 from './group2.png'
import group3 from './group3.png'
import group4 from './group4.png'
const Section9 = () => {
    return (
        <div>
            <div className="container9"  data-aos="fade-up">
                <div className="container9-child">
                    <div className="footer-content-1">
                        <div className="footer-logo">
                            <img src={footerlogo} alt="" />
                            <img src={logoname} alt="" className='name' />
                        </div>
                        <div className="footer-para">In the new era of technology we look a in the future with certainty and pride to for our company and.</div>
                        <div className="footer-logo-2">
                            <div className="icon-container"> <a href="https://x.com/zomato"><i class="fa-brands fa-twitter"></i></a></div>
                            <div className="icon-container">
                                <a href="https://www.facebook.com/zomato"><i class="fa-brands fa-facebook"></i></a>
                            </div>
                            <div className="icon-container">
                                <a href="https://www.instagram.com/zomato/"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                            <div className="icon-container">
                                <a href="https://github.com/adarsh-kumar123"><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content-2">
                        <div className="content-head">Pages</div>
                        <div className="home">Home</div>
                        <div className="home">About</div>
                        <div className="home">menu</div>
                        <div className="home">Pricing</div>
                        <div className="home">contact</div>
                        <div className="home">Blog</div>
                        <div className="home">Delivery</div>
                    </div>
                    <div className="footer-content-2">
                        <div className="content-head">Utility Pages</div>
                        <div className="home">Start Here</div>
                        <div className="home">styleguide</div>
                        <div className="home">Password Protected</div>
                        <div className="home">404 Not Found</div>
                        <div className="home">Lincese</div>
                        <div className="home">Changelog</div>
                        <div className="home">View More</div>
                    </div>
                    <div className="footer-content-3">
                        <div className="content3-head">Follow Us On Instagram</div>
                        <div className="footer-card-img">
                            <div className="footer-img">
                                <img src={group1} alt="" />
                            </div>
                            <div className="footer-img">
                                <img src={group2} alt="" />
                            </div>
                        </div>
                        <div className="footer-card-img">
                            <div className="footer-img">
                                <img src={group3} alt="" />
                            </div>
                            <div className="footer-img">
                                <img src={group4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-line"></div>
                   <div className="copy-right">Copyright © 2025 Hashtag Developer. All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Section9