import React,{useState} from 'react'



const navbar = () => {

  const [nav, setnav] = useState(false);

  const changeBackground=()=>{
    if(window.scrollY>=50)
    {
      setnav(true);
    }
    else {
      setnav(false);
    }
  }
window.addEventListener('scroll',changeBackground);
  return (
  <nav className={nav?'nav-active':'nav'}>
    <a href='#' className='logo'>
      <img src='' alt=''/>
    </a>
<input type='checkbox' className='menu-btn' id='menu-btn'/>
<label for='menu-btn' className="menu-icon">
  <span className='nav-icon'></span>
</label>
<ul className='menu'>
  <li><a href='#' className='active'>Home</a></li>
  <li><a href='#'>Wish to Join</a></li>
  <li><a href='#'>Register</a></li>
  <li><a href='#'>Find Jobs</a></li>
</ul>
  </nav>
  )
}

export default navbar