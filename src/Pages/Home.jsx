import React from 'react'
import Hero from '../Components/Elements/Hero'
import Cards from '../Components/Elements/Cards'
import Token from '../Components/Elements/Token'
import OpenSource from '../Components/Elements/OpenSource'
import Blog from '../Components/Elements/Blog'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Cards/>
      <Token/>
      <OpenSource/>
      <Blog/>

    </div>
  )
}

export default Home
