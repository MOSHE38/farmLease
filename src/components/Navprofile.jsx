import {React, useState} from 'react'
import { AiOutlineBell } from "react-icons/ai";
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import { AiOutlineSearch } from 'react-icons/ai';
import Avater from '../assets/avater.png';
import Logo from '../assets/logo.png';
import "../index.css";

const Navprofile = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <nav className='navbar w-[1200px] mx-40'>
        {/* <div className='na_icon' onClick={() => openSidebar()}>
          <i className='fa fa-bars'></i>
        </div> */}


        <div className='navbar__left'>
            <img src={Logo} alt="logo" className='md:cursor-pointer h-9 pr-16  ' onClick={() => navigate("/")} />
            <a href="">For Lease</a>
            <a href="">Abou Us</a>
            <a href="">Contact Us</a>
        </div>
        <div className='navbar__right'>
          <div>
            <form className='bg-white w-72 rounded-lg '>
              <a href="" className='flex justify-between  items-center h-10'>
                <AiOutlineSearch size={20} className='ml-6' />
                <input type="search"  placeholder='Search' className='mr-8'/>
              </a>
            </form>
          </div>
          <a href="">
            <AiOutlineBell />
          </a>
          <a href="">
            <img width="30" src={Avater} alt="avater" />
          </a>

        </div>
        {/* <div className='md:hidden sm:hidden' onClick={handleClick
                    }>
                  {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
                        
        </div> */}
        <div className='nav_icon' onClick={() => openSidebar()}>
          <i className='fa fa-bars'>Moshe</i>
        </div>
      </nav>
    </>
  )
}

export default Navprofile;