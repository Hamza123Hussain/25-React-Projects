import React from 'react'
import { useState } from 'react';
import {FaStarHalf, FaStarHalfAlt} from 'react-icons/fa' 
import './Styles.css'
export default function Star({ noOfStars = 11 }) {

    const [star,setstar] = useState({rating:0,hover:0});
    const [hover, setHover] = useState(0);
  
    function handleClick(getCurrentIndex) {
      setstar(prev=>({
        ...prev,rating:getCurrentIndex
      }))
    }
  
    function handleMouseEnter(getCurrentIndex) {
        setstar(prev=>({
            ...prev,hover:getCurrentIndex
          }))
    }
  
    function handleMouseLeave() {
        setstar(prev=>({
            ...prev,hover:star.rating
          }))
    }
  
    return (
      <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => { // making an array from a prop values
          index += 1;
  
          return (
            <FaStarHalfAlt
              key={index}
              className={index <= (star.hover || star.rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={80}
            />
          );
        })}
      </div>
    );


}