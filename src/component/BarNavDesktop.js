import React from 'react';
import logo2 from './logo2.svg';
import './sass/styles.css'

export const BarNavDesktop = () => {
  return (
    <div className='div-Bar-nav'>
        <div className='div-Bar-nav__div-logo'>
            <img src={logo2} className="div-Bar-nav__div-logo__App-logo" alt="logo"/>
            <h1 className='div-Bar-nav__div-logo__h1'>Suxz</h1>
        </div>
        <ul className='div-Bar-nav__ul'>
            <li className='div-Bar-nav__ul__li'>Home</li>
            <li className='div-Bar-nav__ul__li'>Learnings</li>
            <li className='div-Bar-nav__ul__li'>About Us</li>
            <li className='div-Bar-nav__ul__li'>Testimonial</li>
        </ul>
        <div className='div-Bar-nav__div-buttons'>
            <a 
            href='#'
            className='div-Bar-nav__div-buttons__a'
            >Log in</a>
            <button className='div-Bar-nav__div-buttons__button'>Sign up</button>
        </div>
        
    </div>
  )
}
