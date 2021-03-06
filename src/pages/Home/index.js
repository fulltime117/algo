import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Home as HomeController } from '../../components/Home'

export const Home = (props) => {
  return (
    <>
      <HelmetTags page='home' />
      <HomeController {...props} />
    </>
  )
}
