import burgerMenu from '../assets/shared/icon-hamburger.svg'
import { Link } from 'react-router-dom';
import { useState } from "react";

export const Navbar = () => {
    const [menuClicked, setMenuClicked] = useState(false);
    const handleClick = () => {
        setMenuClicked((prevState) => !prevState);
    }
  return (
    <nav>
        <ul className={`w-[280px] h-[180px] text-white bg-blue-950 absolute left-0 right-0 mx-auto top-20 text-center flex flex-col place-content-around sm:w-[400px] sm:flex sm:flex-row sm:h-20 sm:items-center sm:relative sm:top-0 md:w-[500px] lg:w-[600px] ${menuClicked ? "flex" : "hidden"}`}>
            <li className='sm:hover:border-solid sm:hover:border-white sm:hover:border-b'><Link to="/">00 Home</Link></li>
            <li className='sm:hover:border-solid sm:hover:border-white sm:hover:border-b'><Link to="/destination">01 Destination</Link></li>
            <li className='sm:hover:border-solid sm:hover:border-white sm:hover:border-b'><Link to="/crew">02 Crew</Link></li>
            <li className='sm:hover:border-solid sm:hover:border-white sm:hover:border-b'><Link to="/technology">03 Technology</Link></li>
        </ul>
        <div className='sm:hidden' onClick={handleClick}>
            <img src={burgerMenu} alt="burger-menu" className='p-[12px] cursor-pointer' />
        </div>
    </nav>
  )
}
