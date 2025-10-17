import '../App.scss'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import { FaRegHeart } from "react-icons/fa";






function Home() {
    const data = [
        {
            thumbnail: "https://screenshots.webflow.com/sites/68c3fd0533b5bbfb0e7ea25e/20250929083452_d7524fc9bfa259e926ed119e03561599.png",
            profile: "https://cdn.prod.website-files.com/66f50e2a4133943d0cc32ea0/67ec209ae7b5d473182c3951_osmo-logo-svg-import.jpg",
            name: "Aarav Singh",
            heart: 120,
            company: "Tech Vision",
        },
        {
            thumbnail: "https://screenshots.webflow.com/sites/68beefdc60829c24857fd3d1/20250929144316_73651d5705842b2e412a468f5898a076.png",
            profile: "https://uploads-ssl.webflow.com/560a63720bafb24648a2868b/63cac37873e6852969db3bab_Joseph%20Berry%20(2).jpg",
            name: "Diya Sharma",
            heart: 98,
            company: "Creative Nexus",
        },
        {
            thumbnail: "https://screenshots.webflow.com/sites/681dfd1a06c7a786f5707c6a/20250912141121_f699d41d9027ac109b23469b04390583.png",
            profile: "https://cdn.prod.website-files.com/6711515f83204ff65e2f5a3d/68a21f96ae20130ac8ffd379_ff-fwebclip-256x256.png",
            name: "Rohan Patel",
            heart: 150,
            company: "Code Matrix",
        },
        {
            thumbnail: "https://screenshots.webflow.com/sites/66ec41f2f3c928308a0e9eea/20250820151628_8d72fb14c44a25d9c50e91757f27ca2c.png",
            profile: "https://cdn.prod.website-files.com/614e04c7ade77410d0e1b74c/68c35c0acaeee217b33a694c_NevesDuallLightsaber256.jpg",
            name: "Ananya Mehta",
            heart: 76,
            company: "Design Hive",
        },
        {
            thumbnail: "https://screenshots.webflow.com/sites/657a39d289f26d77740bcb16/20250911132809_0c1dc4ec67ee2a95442ba8e39302f1ab.png",
            profile: "https://cdn.prod.website-files.com/6388ba4915e70a65cacd6a43/66bfe8557436ec16fc74fae4_652436a66f15f501b4e7ec87_pt-avatar-1.png",
            name: "Kabir Khan",
            heart: 200,
            company: "Next Systems",
        },
        {
            thumbnail: "https://cdn.prod.website-files.com/688c53958c286a5e5aa8aae5/68c1a6c43e917248c502e5cb_portal-to-the-future.webflow.io_.png",
            profile: "https://cdn.prod.website-files.com/63c84b10c7d2c118e9074a8d/6594a4cdf7d5030390179fd0_65674ccc36072760f3a5b4d7_aaron%252Bface%252B2.jpg",
            name: "Isha Verma",
            heart: 132,
            company: "Innovate Labs",
        },
        {
            thumbnail: "https://cdn.prod.website-files.com/6878ca779bf020102499f3d1/68b58a513a6359d9a38d411f_talcual.png",
            profile: "https://cdn.prod.website-files.com/6851459d75b55252b3507bc8/68b56e34747a7ae84123dff2_cc3153395272527.68ac656c240a8.png",
            name: "Aditya Rao",
            heart: 89,
            company: "Vision Soft",
        },
        {
            thumbnail: "https://cdn.prod.website-files.com/68a6d6660991b88c1d15d725/68b69a07a6d99dda1a802134_flippagelayoutog.png",
            profile: "https://cdn.prod.website-files.com/6332d5554bdcdf01092e64d0/648850cb04f368bf8592d092_64883dea92750615c6cbdbe6_Become_Monogram_256px.png",
            name: "Sneha Gupta",
            heart: 111,
            company: "Bright Works",
        },
        {
            thumbnail: "https://screenshots.webflow.com/sites/67d84a4692225e70a862c18f/20250804194823_a74faa5a20c2918f01596b6154288e1a.png",
            profile: "https://cdn.prod.website-files.com/6331b0942c5088f94f7c9b56/68b6d7c4f460f0c4d1a135ea_68b6cbd339273d08377e3a33_Webclip.jpg",
            name: "Vihaan Joshi",
            heart: 67,
            company: "Data Wave",
        },
        {
            thumbnail: "https://screenshots.webflow.com/sites/683fe9ed9abe575daebf23d8/20250726103658_732924886ed7718f29d86576902e630e.png",
            profile: "https://cdn.prod.website-files.com/64f05ce29537ff63dd78618f/6710cfa66d19ef80912f1b85_Monogramme%20white.jpg",
            name: "Mira Nair",
            heart: 142,
            company: "Pixel Point",
        },
        {
            thumbnail: "https://screenshots.webflow.com/sites/66d916671c0960cc3107be26/20241030005936_c7d6d4c410e403e40e5625fae10e6e68.png",
            profile: "https://cdn.prod.website-files.com/60515e12a6c6fd0046d71582/687dfbac4bcd6931dcc4d638_Avatar-red.png",
            name: "Aryan Kapoor",
            heart: 177,
            company: "Sky Bridge",
        },
        {
            thumbnail: "https://screenshots.webflow.com/sites/6835ef94fba7ee7ef42e8357/20250722192316_ab7d9a0e80f854b88bdcbc1bd5e7f24b.png",
            profile: "https://cdn.prod.website-files.com/648a74916775a91d5c61d9f1/6771a3e95971404437fd7215_instagram2%25281%2529.jpg",
            name: "Riya Bansal",
            heart: 201,
            company: "Blue Peak",
        },
    ];

    return (
        <div>
            <Navbar />
            <HeroSection />
            <section className='sites-showcase'>
                <div className='top-sites-showcase'>
                    <div className='filter'>
                        <select name="" id="" className='filter-category'>
                            <option value="popular">Popular</option>
                            <option value="recent">Recent</option>
                            <option value="most-liked">Most liked</option>
                        </select>
                        <div className='filter-clonable'>
                            <input type="checkbox" />
                            <p>Clonable sites only</p>
                            <span>?</span>
                        </div>
                    </div>
                    <button className='showcase-btn'>
                        Showcase Your Site
                    </button>
                </div>

                <div className="bottom-site-showcase">
                    {data.map((data,idx)=>{
                        return <div key={idx} className="card">
                            <div style={{ backgroundImage: `URL(${data.thumbnail})` }} className='thumbnail'>
                            </div>
                            <div className='details'>
                                <div className='logo'>
                                    <img src={data.profile} alt="" />
                                </div>
                                <div className='details-container'>
                                    <div className='name-and-heart'>
                                        <div className='name'>{data.name}</div>
                                        <div className='heart'><FaRegHeart /> <p>{data.heart}</p></div>
                                    </div>
                                    <div className='company'>{data.company}</div>
                                </div>
                            </div>
                        </div>
                    })}
                    
                </div>
                <div className='show-more-btn-container'>
                    <button className='show-more-btn'>Show more</button>
                </div>

            </section>
            <Footer />
        </div>
    )
}

export default Home