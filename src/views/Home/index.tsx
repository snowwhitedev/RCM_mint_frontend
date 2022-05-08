import React from 'react'

import { PageWrapper } from 'styles/components'

import { ScrollTopBtn, WelcomeContainer } from './components'

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <WelcomeContainer />
      <ScrollTopBtn />
    </PageWrapper>
  )
}

export default Home
