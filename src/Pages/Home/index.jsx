import React from 'react'
import NavBar from '../../component/NavBar'
import Footer from '../../component/Footer'
import hero_section from "../../assets/hero_section.png"
import about1 from "../../assets/about1.png"
import about2 from "../../assets/about2.png"
import about3 from "../../assets/about3.png"
import love1 from "../../assets/love1.png"
import love2 from "../../assets/love2.png"
import love3 from "../../assets/love3.png"

const index = () => {
  const about=[{icon:about1,heading:"ABOUT US",content:"At Shekinah Church, we are a community of believers passionate about worship, prayer, and living out God’s Word. Our mission is to create a welcoming place where people can experience God’s presence, grow in their faith, and build meaningful relationships. Whether you are new to faith or have been walking with Christ for years, there is a place for you here."},{icon:about2,heading:"GET INVOLVED",content:"We believe church is more than Sunday services — it’s about doing life together. At Shekinah Church, there are many ways to get involved: join a small group, serve on a ministry team, volunteer with outreach programs, or participate in worship. Every gift and talent makes a difference, and we invite you to use yours to glorify God and bless others."},{icon:about3,heading:"GIVING BACK",content:"We are committed to being the hands and feet of Jesus in our community. Through food drives, supporting families in need, visiting the sick, and partnering with local organizations, Shekinah Church seeks to share Christ’s love in practical ways. Your generosity — whether through time, resources, or financial support — helps us extend hope and transform lives."}]
  return (
    <div>
      <NavBar />
      <div className='bodyContent'>
        <div className='hero_section'>
          <img src={hero_section} alt="hero_section_image" />
          <div className="hero_content">
            <h5 className="welcom">Welcome To Our Church</h5>
            <h3 className="content">BECOME A PART OF OUR COMMUNITY</h3>
            <button className="lear_more">LEARN MORE</button>
          </div>
        </div>
      </div>
      <div className="about_div">
        <h4 className="relevant">A CHURCH THAT'S RELEVANT</h4>
        {
         about.map((data,i)=>{
          return(
            <div className="about_us" key={i}>
              <img src={data.icon} alt={data.heading} className='about_image' />
              <h4 className='about_heading'>{data.heading}</h4>
              <p className="content">{data.content}</p>
            </div>
          )
         }) 
        }

      </div>
<section class="love-compassion">
  <div class="container">
    <h2 class="lc-title">LOVE AND COMPASSION</h2>
    <p class="lc-desc">
      At Shekinah Church, we believe that true faith is expressed through love and compassion. We care for the hurting, encourage the weary, and walk alongside one another in grace. Through prayer, fellowship, and practical acts of kindness, we strive to reflect the heart of Jesus in our community and beyond.
    </p>

   <button className='read_more'>READ MORE</button>

    <div class="lc-gallery">
      <div class="lc-card lc-left">
        <img src={love1} alt="prayer" />
      </div>

      <div class="lc-card lc-center">
        <img src={love2} alt="worship" />
      </div>

      <div class="lc-card lc-right">
        <img src={love3} alt="ministry" />
      </div>
    </div>
  </div>
</section>

      <Footer />
      {/* <button>hi bro</button> */}
    </div>
  )
}

export default index