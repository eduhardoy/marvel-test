import React from 'react'
import Header from '../components/templates/Header'
import HomeBody from '../components/templates/HomeBody'
import InfoModal from '../components/templates/InfoModal'

const Home = () => {
  return (
    <div>
      <Header />
      <InfoModal />
      <HomeBody />
    </div>
  )
}

export default Home
