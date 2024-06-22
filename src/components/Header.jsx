import logo from '../assets/shared/logo.svg'
import { Navbar } from './Navbar.jsx'



export const Header = () => {
  return (
    <header className='flex place-content-between items-center w-full fixed'>
        <img src={logo} alt="logo" className='p-[12px]' />
        {/* <div className='hidden sm:hidden md:hidden lg:flex lg:border-b-0'></div> */}
        <Navbar />
    </header>
  )
}
