import { IoIosSearch } from "react-icons/io";


const HeroSection = () => {
    return (
        <section className='icon-and-path'>
            <div className='path'>
                <img className='logo' src="https://dhygzobemt712.cloudfront.net/Mark/Mark_Logo_Blue.svg" alt="logo" />
                <p>Made in Webflow</p>
            </div>
            <div className='title'>
                <p>Discover inspiring websites</p>
                <p>built by the Webflow community</p>
            </div>
            <div className="description">
                <p>Browse, clone, and customize thousands of websites #MadeinWebflow. <span>Looking for templates?</span></p>
            </div>
            <div className="search-bar">
                <IoIosSearch className='search-icon' />
                <input type="text" placeholder='Search' />
            </div>
            <div className='category'>
                <button className='category-btn'>All</button>
                <button className='category-btn'>Animation</button>
                <button className='category-btn'>Interaction</button>
                <button className='category-btn'>CMS</button>
                <button className='category-btn'>Ecommerce</button>
                <button className='category-btn'>Portfolio</button>
            </div>
        </section>
    )
}

export default HeroSection
