import React from 'react'

import styled from 'styled-components'
import Bookshelf from '../BookShelf/Bookshelf'
import Hero from '../Hero/Hero'

const Home = () => {
  return (
      <Conatiner>
      <Hero />
      <Bookshelf/>
          
   </Conatiner>
  )
}

export default Home

const Conatiner = styled.div`
padding-bottom:50px;
`