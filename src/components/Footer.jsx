import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";


const Footer = () => {
    return (

        <footer>
            <div className='nav-menu'>
                <div>Explore</div>
                <ul>
                    <li>Dashboard</li>
                    <li>Marketplace</li>
                    <li>Hire designers</li>
                </ul>
            </div>
            <div className='nav-menu'>
                <div>Learn & get help</div>
                <ul>
                    <li>Support</li>
                    <li>University</li>
                    <li>Courses</li>
                    <li>Blog</li>
                    <li>Ebooks</li>
                    <li>Forum</li>
                    <li>Community</li>
                    <li>Developers</li>
                    <li>Wishlist</li>
                    <li>Status</li>
                </ul>
            </div>
            <div className='nav-menu'>
                <div>Company</div>
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Sitemap</li>
                    <li>Become an Affiliate</li>
                </ul>
                <div>Terms & policy</div>
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy policy</li>
                    <li>Cookie policy</li>
                    <li>Cookie preferences</li>
                </ul>
            </div>
            <div className='nav-menu'>
                <div>Social</div>
                <ul className="social">
                    <li><FaYoutube /></li>
                    <li><FaTwitter /></li>
                    <li><FaFacebook /></li>
                    <li><FaInstagram /></li>
                    <li><FaTiktok /></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
