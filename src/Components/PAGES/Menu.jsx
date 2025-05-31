import React from 'react'
import './Menu.css'
import Aboutpartner from './Aboutpartner'
import { useState, useEffect } from 'react'

export const Menu = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  async function fetchdata() {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    const response = await fetch(url)
    const data1 = await response.json()
    console.log(data1.meals)
    setData(data1.meals)
  }
  fetchdata();

  function getdata(e) {
    setData(e.target.value)
  }
  function valueupdated() {
    setSearch('breakfast')
  }
  function breakfastdata(e) {
    setSearch(e.target.value)
  }
  function desert() {
    setSearch('sweet')
  }
  function dessertdata(e) {
    setSearch(e.target.value)
  }

  return (
    <div>
      <div className="main-1">
        <h1 data-aos="zoom-in">Our Menu</h1>
        <div className="menu-para"  data-aos="zoom-in">
          We consider all the drivers of change gives you the components you need to change to create a truly happens.
        </div>
        <div className="menu-buttons"  data-aos="zoom-in">
          <button className='all' onClick={fetchdata} onChange={getdata}>All</button>
          <button className='breakfast' onClick={valueupdated} onChange={breakfastdata}>Breakfast</button>
          <button className='drink'  onClick={desert} onChange={dessertdata}>Sweets</button>
          <button>Dessert</button>
        </div>
        <div className='gm1'>
          {
            data.map((item) => {
              return (
                <div className="menu-cont">
                  <div className="image-card"  data-aos="fade-up">
                    <img src={item.strMealThumb} alt="" />
                    <p className='price'> $ {(item.idMeal % 300)}</p>
                    <p>{item.strMeal}</p>
                    <p className='discription'>{item.strIngredient1}, {item.strIngredient2},{item.strIngredient3},{item.strIngredient4}, {item.strIngredient5}, {item.strIngredient6}</p>
                  </div>

                </div>
              )
            })
          }
        </div>
        <Aboutpartner/>


      </div>
    </div>
  )
}
