import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            {/* To left */}
             <div className='left'>
                <p>Buy & Sell 24/7 using your retirement account</p>
                <h1>Invest in CryptoCurrency with your IRA</h1>
                <p>Buy, Sell, and store hundreds of Cryptocurrencies</p>
                <div className='container'>
                    <input type='email' placeholder='Enter your email' />
                    <button className='btn'>Learn More</button>
                </div>
             </div>
              {/* To Right */}
             <div className='right'>
                   <div className='container'>
                    <img src={Crypto} alt='img'/>
                   </div>
             </div>
        </div>
    </div>
  )
}

export default Hero