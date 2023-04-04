import React from 'react';
import '../index.css';
import background from '../assets/bg-image.gif';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className=' cont-main max-w-[1630px] mx-auto p-4'>
        <div className=' cont-sub max-h-[950px] max-w-[1240px] relative m-auto'>
            {/* Overlay */}
            <div className=' cont-1 absolute w-full h-full   bg-black/60 rounded-3xl '>
              <div className='cont-left'>
                <div className='px-4 pb-1.5'>
                  <ul className='hero-li'>
                    <li className='hero-li-1'>Lease</li>
                    <li className='hero-li-2'>Cultivate</li>
                    <li className='hero-li-3'>Earn Profit</li>
                  </ul>
                </div>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-2xl font-bold'>Find Your Perfect Farm - Land leasing Platform.</h1>
                <p className='px-4'>Connecting local farm-land owners with farm investors</p>
                <form className=' frm flex justify-between items-center max-w-[460px] mx-[15px]  border  rounded-md bg-form-background mt-6'>
                  <div>
                    <button><AiOutlineSearch size={20} className='icon mb-1 text-black  m-2'/></button>
                  </div>
                  <div>
                    <input className='input-srch w-[500px] sm:w-[300px] focus:outline-none text-center text-lg bg-transparent' type="text" placeholder='Search for farmland' />
                  </div>
                  <div>
                    <button className='btn-search'>Search</button>
                  </div>
                </form>
              </div>
              <div className='cont-cards lg:-mt-10'>
                <article className='cont-card text-sm text-center'>Leasing land can reduce the financial risk associated with farming.</article>
                <article className='cont-card text-sm '>Landowners who lease their land also provide farmers with access to farming equipment.</article>
                <article className='cont-card text-sm'>Leasing land can allow farmers to increase their productivity by expanding their farming operations.</article>
                <article className='cont-card text-sm'>Leasing land provides farmers with greater flexibility in terms of choosing the size and location of their farm.</article>
                <article className='cont-card text-sm'>Leasing land promote sustainability by allowing farmers to practice crop rotation and other env-friendly farming techniques</article>
                <article className='cont-card text-sm'>Leasing land for farming can be more cost-effective than purchasing land outright.</article> 
              </div>
            </div>
            <img className=' bg-img w-full h-[600px] object-cover rounded-3xl' src={background} alt="/" />
        </div>
    </div>
  )
}

export default Hero