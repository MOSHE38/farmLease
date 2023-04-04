import { React, useState, useEffect } from 'react';
import Logo from '../assets/logo.png';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
    const [ pageState, setPageSstate ] = useState("Sign In");
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const navigate = useNavigate();
    const location = useLocation();
    const auth = getAuth();
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user) {
                setPageSstate("Profile");
            } else {
                setPageSstate("Sign In");
            }
        })
    }, [auth])
    function pathMatchRoute(route) {
        if(route === location.pathname) {
            return true;
        }
    }

  return (
    <div>
        <header className='w-screen h-[80px] z-10 '>
            <div className='lg:px-36 px-2 md:px-3.5 flex justify-between items-center w-full h-full'>
                <div className='flex items-center '>
                    <img src={Logo} alt="logo" className='md:cursor-pointer h-9' onClick={() => navigate("/")} />
                    <ul className='hidden md:flex ml-11'>
                        <li className={` cursor-pointer ${pathMatchRoute("/for-lease") && "text-green-light"}`} onClick={() => navigate("/for-lease")}>For Lease</li>
                        <li className={` cursor-pointer ${pathMatchRoute("/about-us") && "text-green-light"}`} onClick={() => navigate("/about-us")}>About Us</li>
                        <li className={` cursor-pointer ${pathMatchRoute("/contact-us") && "text-green-light"}`} onClick={() => navigate("/contact-us")}>Contact Us</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className=' btn border-none mr-4' onClick={() => navigate("/sign-up")}>Register</button>
                    <button className=' btn px-8 py-3 bg-green-lighter' onClick={() => navigate("/profile")}>{pageState}</button>
                </div>
                <div className='md:hidden sm:hidden' onClick={handleClick
                    }>
                        {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
                        
                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute w-full px-8 z-10 bg-green-lightetest'}>
                <li className={`cursor-pointer font-sans font-bold text-lg w-full ${pathMatchRoute("/for-lease") && "text-green-light"}`} onClick={() => navigate("/for-lease")}>For Lease</li>
                <li className={`cursor-pointer font-sans font-bold text-lg w-full ${pathMatchRoute("/about-us") && "text-green-light"}`} onClick={() => navigate("/about-us")}>About Us</li>
                <li className={`cursor-pointer font-sans font-bold text-lg w-full ${pathMatchRoute("/contact-us") && "text-green-light"}`} onClick={() => navigate("/contact-us")}>Contact Us</li>
                <div className='flex flex-row my-4 mx-4 pr-4'>
                    <button className='btn text-white px-4 py-3 mb-4 mr-5 ml-4' onClick={() => navigate("/sign-up")}>Register</button>
                    <button className=' btn text-white px-4 py-3 mb-4 bg-green-lighter' onClick={() => navigate("/sign-in")}>Sign In</button>
                </div>
            </ul>
        </header>
    </div>
  )
}

export default Navbar