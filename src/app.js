import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import { useOnlineStatus } from './hooks/useOnlineStatus'
import { ScrollToTop } from './components/ScrollToTop'
import { HelmetTags } from './components/HelmetTags'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'

export const App = () => {
  const onlineStatus = useOnlineStatus()

  return (
    <>
      <Header />
      {onlineStatus && (
        <ScrollToTop>
          <HelmetTags />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </ScrollToTop>
      )}
      <Footer />
    </>
  )
}
