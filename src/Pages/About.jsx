import React from 'react'
import AboutBlog from '../Components/Elements/About/AboutBlog'
import AboutTouch from '../Components/Elements/About/AboutTouch'
import HeroAbout from '../Components/Elements/About/HeroAbout'
import WhosPolka from '../Components/Elements/About/WhosPolka'

const About = () => {
  return (
    <>
      <HeroAbout/>
      <WhosPolka/>
      <AboutTouch/>
      <AboutBlog/>
    </>
  )
}

export default About
