import React from 'react'
import './Section8.css'
import burger from './burger.png'
import item1 from './item1.png'
import item2 from './item2.png'
import item3 from './item3.png'
import item4 from './item4.png'
const Section8 = () => {
  return (
    <div>
      <div className="container8"  data-aos="zoom-in">
        <div className="container8-heading">
          Our Blog & Articles
          <div className="child-container8">
            <div className="left-box">
              <img src={burger} />
              <div className="date">January, 2023</div>
              <div className="left-heading">
                The secret tips & tricks to prepare a perfect burger & pizza for our customers
              </div>
              <div className="left-paragraph">
                Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.
              </div>
            </div>
            <div className="right-box">
              <div className="child-top">
                    <div className="img-box">
                      <img src={item1} alt="" />
                        <div className="img-date">January 3, 2023</div>
                        <div className="img-heading">How to prepare the perfect french fries in an air fryer</div>
                    </div>
                    <div className="img-box">
                      <img src={item2} alt="" />
                        <div className="img-date">January 3, 2023</div>
                        <div className="img-heading">How to prepare delicious chicken tenders</div>
                    </div>
              </div>
              <div className="child-bottom">
              <div className="img-box">
                      <img src={item3} alt="" />
                        <div className="img-date">January 3, 2023</div>
                        <div className="img-heading">7 delicious cheesecake recipes you can prepare</div>
                    </div>
                    <div className="img-box">
                      <img src={item4} alt="" />
                        <div className="img-date">January 3, 2023</div>
                        <div className="img-heading">5 great pizza restaurants you should visit this city</div>
                    </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section8