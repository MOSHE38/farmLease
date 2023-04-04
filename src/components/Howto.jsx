import React from 'react';
import '../index.css';
import Gif1 from '../assets/gif-1.gif';
import Gif2 from '../assets/gif-2.gif';
import Gif3 from '../assets/gif-3.gif';
import Dec from '../assets/dec.png';


const Howto = () => {
  return (
    <div>
      <div className='py-20 max-w-[1100px] justify-center mx-auto'>
        <div className='text-center mx-auto mb-20'>
          <h1 className='howto-text font-extrabold text-3xl leading-10 w-[768px] mx-auto'>Get Your Farmland Listed For Potential Farming Investors By Following 3 Simple Steps.</h1>
        </div>

        <div className='cards grid grid-cols-3 lg:gap-x-12 items-center justify-between space-y-6 ml-9'>
          {/* Card 1 */}
          <div className='card cards-gifs-1'>
            <img className='gifs w-[272px] h-[272px] rounded-full' src={Gif1} alt="" />
          </div>

          {/* Card 2 */}
          <div className='card'>
            <img className='gifs w-[272px] h-[272px] rounded-full ml-5' src={Gif2} alt="" />
          </div>
          
          {/* Card 3 */}
          <div className='card'>
            <img className='gifs w-[272px] h-[272px] rounded-full ml-6' src={Gif3} alt="" />
          </div>
        </div>
        <div className='mt-16 card-2'>
          <img className='gif px-16' src={Dec} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Howto;