import React from 'react'
import Navbar from './Navbar';
const Header = () => {
  return (
    <div>
      <Navbar/>
      <div className="name">
        <h1><span>Find your</span>next top tech job in 1 week.</h1>
<p className="details">
Are you a top 2% Software Engineer, Product Manager or Data Scientist?
Let leading Indian technology companies compete to hire you. 
</p>
<a href="#" className="cv-btn">Apply to Join</a>
        
      </div>
    </div>
  )
}

export default Header