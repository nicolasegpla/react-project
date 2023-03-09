import React from 'react';
import header_img from './header_img.png';
import './sass/styles.css'

export const SectionHome1 = () => {
  return (
    <div className='section-home-1'>
        <section className='section-home-1__section-information'>
            <h3 className='section-home-1__section-information__h3'>S U X Z  M A K E  I T  E A S Y</h3>
            <h1 className='section-home-1__section-information__h1'>Find Your Way Of Success</h1>
            <p className='section-home-1__section-information__p'>
                We help you to increase self-confidence and
                train yourself in a direction, and make you more
                creative in developing a work
            </p>
            <div className='section-home-1__section-information__div-buttons'>
                <button className='section-home-1__section-information__div-buttons__button-1'>Get Started</button>
                <button className='section-home-1__section-information__div-buttons__button-2'>Our Services</button>
            </div>
        </section>
        <div className='section-home-1__div-img-home'>
            <img className='section-home-1__div-img-home__img' src = {header_img} />
        </div>
    </div>
  )
}
