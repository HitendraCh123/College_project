import React from 'react'
import { useRef, useState } from 'react'
import './Book.css'
import map from './map.png'
import Section9 from './Section9'
import emailjs from "emailjs-com";

const Book = () => {
    const formRef = useRef();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
        totalPerson: "1 Person",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_b50e08n",
            "template_hyuxh1l",
            formData,
            "'WHTEW8Ps9-2U_9fEV"
        )
            .then((result) => {
                alert("Table booked successfully!");
                setFormData({
                    name: "",
                    phone: "",
                    date: "",
                    time: "",
                    totalPerson: "1 Person",
                });
            }, (error) => {
                alert("Failed to book table. Please try again.");
                console.error(error.text);
            });
    };
    return (
        <div>
            <div className="book-container"  data-aos="zoom-in">

                <div className="book-top">
                    <div className="book-head">Book A Table</div>
                    <div className="book-para">We consider all the drivers of change gives you the components you need to change to create a truly happens.</div>
                    <form ref={formRef} onSubmit={sendEmail}>
                        <div className="book-detail">
                            <div className="inputs">
                                <div className="first-input">
                                    <label>Name</label><br />
                                    <input type="text" name='name' placeholder='Enter you name' required value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="first-input">
                                    <label>Phone</label><br />
                                    <input type="number" name='phone' placeholder='x-xxx-xxx-xxxx' required value={formData.phone} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="selects" >
                                <div className="first-select">
                                    <label>Date</label><br />
                                    <input type="date" name="date" className='date-section' required value={formData.date} onChange={handleChange} />
                                </div>


                                <div className="first-select">
                                    <label>Time</label><br />
                                    <input type="time" name="time" className='date-section' required value={formData.time} onChange={handleChange} />

                                </div>
                            </div>

                            <div className="person">

                                <div className="first-person">
                                    <label>Toatl Person</label><br />
                                    <select required name='totalPerson' value={formData.totalPerson} onChange={handleChange}>
                                        <option value="1 Person">1 Person</option>
                                        <option value="2 Person">2 Person</option>
                                        <option value="3 Person">3 Person</option>
                                        <option value="4 Person">4 Person</option>
                                        <option value="5 Person">5 Person</option>
                                        <option value="6 Person">6 Person</option>
                                    </select>
                                </div>
                            </div>

                            <button className='book-btn' type='submit'>Book A Table</button>

                        </div>
                    </form>



                </div>

                <div className="book-bottom">
                    <img src={map} alt="" />

                </div>

            </div>
            <Section9 />
        </div>
    )
}

export default Book