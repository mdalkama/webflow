import { useState } from 'react';
import '../App.scss'
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const Navigate = useNavigate()
    const [isMenuActive, setIsMenuActive] = useState(false);

    return (
        <div className='navbar'>
            <nav>
                <div className='left-nav'>
                    <img className='logo-nav' src="https://dhygzobemt712.cloudfront.net/Logo/Social_Square_White.png" alt="Logo" />
                    <div className='nav-menu'>
                        <div className='nav-link'>
                            Product
                            <IoIosArrowDown className='arrow-icon' />
                        </div>
                        <div style={{ color: 'black' }} className='nav-link'>
                            Marketplace
                            <IoIosArrowDown className='arrow-icon' />
                        </div>
                        <div className='nav-link'>
                            Learn
                        </div>
                        <div className='nav-link'>
                            Resources
                            <IoIosArrowDown className='arrow-icon' />
                        </div>
                    </div>
                </div>
                <div className='right-nav'>
                    <div className='nav-btns'>
                        <button className='nav-btn'>
                            Login
                        </button>
                        <button className='nav-btn'>
                            Contact Sales
                        </button>
                    </div>
                    <button onClick={() => {
                        Navigate('/form')
                    }}
                    className='get-started-btn'>Get started &nbsp; <span> —  it's free</span></button>
                    {isMenuActive ?
                        <RxCross1 onClick={() => {
                            setIsMenuActive(false)
                        }} className='menu-icon' />
                        :
                        <SlMenu onClick={() => {
                            setIsMenuActive(true)
                        }} className='menu-icon' />
                    }
                </div>
            </nav>
            {
                isMenuActive && <MobileNavbar />
            }
        </div>

    )
}

const MobileNavbar = () => {
    const Navigate = useNavigate()
    return (
        <div className='mobile-menu'>
            <div className='mobile-menu-links'>
                <div className='mobile-menu-link'>
                    Product
                    <IoIosArrowDown className='arrow-icon' />
                </div>
                <div style={{ color: 'black' }} className='mobile-menu-link'>
                    Marketplace
                    <IoIosArrowDown className='arrow-icon' />
                </div>
                <div className='mobile-menu-link'>
                    Learn
                </div>
                <div className='mobile-menu-link'>
                    Resources
                    <IoIosArrowDown className='arrow-icon' />
                </div>
            </div>
            <button className='mobile-nav-btn'>Login</button>
            <button className='mobile-nav-btn'>Contact Sales</button>
            <button onClick={()=>{
                Navigate('/form')
            }}  className='mobile-get-started-btn mobile-nav-btn'>Get started &nbsp; <span> —  it's free</span></button>
        </div>
    )
}




export default Navbar
