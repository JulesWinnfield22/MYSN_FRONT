import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { Switch, Route } from 'react-router-dom'

import IsLoggedin from './GuardedRoute/IsLoggedin'
import OnlyFromRegister from './GuardedRoute/OnlyFromRegister'

import Context from './store'
import VerifyAccount from '@/components/verifyaccount'

function App() {
  return (
    <Context>
      <Switch> 
        <OnlyFromRegister path='/verifyaccount' Component={VerifyAccount} />
        <IsLoggedin path='/login' Component={Login} />
        <Route path='/'>
          <Home />
        </Route>
      </Switch> 
    </Context>
  )
}

export default App
