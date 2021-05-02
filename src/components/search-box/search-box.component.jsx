import React from 'react';
import './search-box.style.css';

 const searchBox = ({placeholder, handleChange}) => {
    return (
       
           <input className="search" type="text" placeholder={placeholder} onChange={handleChange}/> 
       
    )
}
export default searchBox
