import React from 'react'
import './Section5.css'
import card1 from './cardimg1.png'
import card2 from './cardimg2.png'
import card4 from './cardimglst.png'
import card3 from './mask.png'
const Section5 = () => {
    return (
        <div>
            <div className="container5">
                <div className="mainhead"  data-aos="zoom-in">
                    We also offer unique services for your events
                </div>
                <div className="collection-card">
                    <div className="cards"  data-aos="flip-right">
                        <img src={card1} className='hover' />
                        <div className="img-heading">
                            Caterings
                        </div>
                        <div className="img-paragraph">
                            In the new era of technology we look in the future with certainty for life.
                        </div>
                    </div>

                    <div className="cards"  data-aos="flip-left">
                        <img src={card2} className='hover' />
                        <div className="img-heading">
                            Birthdays
                        </div>
                        <div className="img-paragraph">
                        In the new era of technology we look in the future with certainty for life.
                        </div>
                    </div>

                    <div className="cards"  data-aos="flip-right">
                        <img className='img-third' src={card3} />
                        <div className="img-heading">
                            Weddings
                        </div>
                        <div className="img-paragraph">
                        In the new era of technology we look in the future with certainty for life.
                        </div>
                    </div>


                    <div className="cards"  data-aos="flip-left">
                        <img src={card4} className='hover' />
                        <div className="img-heading">
                            Events
                        </div>
                        <div className="img-paragraph">
                            In the new era of technology we look in the future with certainty for life.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section5