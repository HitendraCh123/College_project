import icon from './icon.png'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import './Section3.css'
import { Link } from 'react-router-dom'
const Section3 = () => {
    return (
        <>
            <div className="container-2 "  data-aos="zoom-in">
                <h1 className='child-content'>Browse Our Menu </h1>
                <div className="card-box">
                    <div className="card">
                        <img src={icon} alt="" />
                        <h2>Breakfast</h2>
                        <div className="mid-content">
                            In the new rea of technology we look in the future with certainty and pride for our life
                        </div>
                        <Link to='/menu'><button className='explore-menu'>Explore Menu</button></Link>

                    </div>
                    <div className="card">
                        <img src={icon1} alt="" />
                        <h2>Main Dishes</h2>
                        <div className="mid-content">
                            In the new rea of technology we look in the future with certainty and pride for our life
                        </div>
                        <Link to='/menu'><button className='explore-menu'>Explore Menu</button></Link>

                    </div>
                    <div className="card">
                        <img src={icon2} alt="" />
                        <h2>Drinks</h2>
                        <div className="mid-content">
                            In the new rea of technology we look in the future with certainty and pride for our life
                        </div>
                        <Link to='/menu'><button className='explore-menu'>Explore Menu</button></Link>
                    </div>
                    <div className="card">
                        <img src={icon3} alt="" />
                        <h2>Desserts</h2>
                        <div className="mid-content">
                            In the new rea of technology we look in the future with certainty and pride for our life
                        </div>
                        <Link to='/menu'><button className='explore-menu'>Explore Menu</button></Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3