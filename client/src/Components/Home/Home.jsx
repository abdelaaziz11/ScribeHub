import React from 'react'
import '../Home/Home.css';
import Footer from '../../Components/Footer/Footer'
import ContactForm from '../../Components/ContactForm/ContactForm'
import image from '../../Assets/mine.png'
import hero from '../../Assets/book.jpg'
import {Link } from 'react-router-dom'

const Home = () => {


  return (
    <>
      <div className="home">
        <section className='home_hero'>
          <div className="left_hero">
            <h1>ScribeHub</h1>
            <p>Welcome to ScribeHub, a vibrant space where stories come to life and communities grow through connection <br />
              A Community Chat and Story Sharing</p>
              <Link to='/login'>
            <button className='btn btn-primary'>Get Started</button></Link>
          </div>
          <div className="right_hero">
            <img src={hero} alt="rh" />
          </div>
        </section>
        <section className="about" id='about'>
          <p className='heading'>About</p>
          <p className="about-paragraph">
            Welcome to ChatTales, a vibrant space where stories come to life and communities grow through connection.

            This platform is designed to empower individuals to share their personal experiences, connect through real-time chat, and engage with meaningful content. Whether you're recounting a life-changing moment or enjoying the thoughts of others, ChatTales gives you the tools to be heard—and to listen.

            On ChatTales, you can:<br />


          </p>
          <div className="aboutstory">
            <img className='image-about' src={image} alt="" />
            <p> 🗣 Start private or group chats with other members<br />

              📝 Publish your own stories with rich text and images<br />

              ❤️ React to stories with emojis to show how they made you feel<br />

              💬 Comment and join conversations around shared experiences<br />

              🔍 Discover stories through tags, categories, and trending topics<br />

              Our mission is to build an inclusive digital space where everyone has a voice. Every story matters—and we believe sharing them makes us stronger, more connected, and more human.

              Start sharing. Start listening. Start connecting—with ChatTales.</p>
          </div>
          {/* <img src={image1} alt="" style={{ width: "500px" }}  /> style={{ width: "720px" }}*/}
        </section>
        <section className="features-section" id='features'>
          <p className='heading'>Features</p>
          <div className="features-content">
            <div className='features-box'>
              <p className='features-head'>📝 Share Your Stories</p>
              <span>Express yourself by writing and sharing personal stories with the community. Add images, tags, and meaningful content that inspires and connects.
              </span>
            </div>

            <div className='features-box'>
              <p className='features-head'>💬 Real-Time Chat</p>
              <span>Start one-on-one conversations or group chats with other users. Experience seamless, real-time messaging with typing indicators and message seen status.
              </span>
            </div>

            <div className='features-box'>
              <p className='features-head'>❤️ React to Stories</p>
              <span>React to stories using emojis like 👍 ❤️ 😂 😢 and more. Show your feelings and engage with the stories that move you.
              </span>
            </div>

            <div className='features-box'>
              <p className='features-head'>🗨️ Comment & Discuss</p>
              <span>Join the conversation by commenting on stories. Ask questions, share thoughts, and build deeper connections with the community.
              </span>
            </div>

            <div className='features-box'>
              <p className='features-head'>🔍 Discover & Explore</p>
              <span>Find trending stories, explore by tags, and search for content that speaks to you. Stay up to date with the latest from your favorite storytellers.
              </span>
            </div>

            <div className='features-box'>
              <p className='features-head'>👤 User Profiles</p>
              <span>View your own and others’ profiles with bio, photo, and published stories. Build your identity and follow storytellers you love.
              </span>
            </div>

            <div className='features-box'>
              <p className='features-head'>🔐 Secure & Simple Login</p>
              <span>          Sign up and log in easily with a secure and modern authentication system. Your data is protected and your experience is smooth.
              </span>
            </div>

            <div className='features-box'>
              <p className='features-head'>📱 Mobile-Friendly Design</p>
              <span>Enjoy a seamless experience across all devices. Whether you're on a phone, tablet, or desktop—ChatTales looks great everywhere.
              </span>
            </div>
          </div>

        </section>
        <section className='stories' id='stories'>
        </section>
        <ContactForm/>
        <Footer/>
       
      </div>
    </>
  )
}

export default Home