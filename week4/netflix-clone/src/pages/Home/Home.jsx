import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className="hero">
          <img src={hero_banner} alt=""  className='banner-img'/>
          <div className="hero-caption">
            <img src={hero_title} className='caption-img'/>
            <p>Discovering his ties to a secret anctinet order , a young man living in modern instanbul embarks on a quest to save the city from the immortal enemy.</p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon}/>Play</button>
              <button className='btn dark-btn'><img src={info_icon}/>More Info</button>
            </div>
            <TitleCards/>
          </div>
        </div>
        <div className="more-cards">
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
          <TitleCards title={"Only On Netflix"} category={"popular"}/>
          <TitleCards title={"Upcoming"} category={"upcoming"}/>
          <TitleCards title={"Top Picks For You"} category={"now_playing"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home