import React from 'react';
import '../index.css';
import {BsSuitHeart} from 'react-icons/bs';
import {IoBedOutline,IoLocateOutline} from 'react-icons/io5';
import Rectangle from '../assets/Rectangle-65.gif';

const Lands = () => {
  return (
    <div className=''>
       <h1 className='text-4xl font-extrabold'>Listed Farmlands For Lease</h1>
       <div className='deals'>
        <div className='deal'>
            <div>
                <img src={Rectangle} alt="" />
                <div>
                    <BsSuitHeart size={"1.5rem"} />
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <IoBedOutline />
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Lands;