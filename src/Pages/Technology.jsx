import React from 'react'
import BuildTech from '../Components/Elements/Technology/BuildTech'
import Dots from '../Components/Elements/Technology/Dots'
import HeroTech from '../Components/Elements/Technology/HeroTech'
import Modals from '../Components/Elements/Technology/Modals'
import NetworkGlossary from '../Components/Elements/Technology/NetworkGlossary'
import Roadmap from '../Components/Elements/Technology/Roadmap'
import RoadmapCards from '../Components/Elements/Technology/RoadmapCards'

const Technology = () => {
  return (
    <>
     <HeroTech/>
     <NetworkGlossary/>
     <Dots/>
     <BuildTech/>
     <Modals/>
     <Roadmap/>
     <RoadmapCards/>
    </>
  )
}

export default Technology
