import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import SidePanel from '../components/SidePanel'
import Main from '../components/Main'
import RightSide from '../components/RightSide'
import {useHistory} from 'react-router-dom'
import axios from '@/../api'

import { useStore } from '../store'

import '../../assets/style/style.css'


function Home() {
  const [loading, setLoading] = useState(true)
  const {user, token, changeToken} = useStore()
  const api = axios()
  const history = useHistory()
  useEffect(() => {
    if((localStorage.getItem('token')?.length > 20)) {
      if(!user.username) {
        api.get('/user')
          .then(res => {
            changeToken(localStorage.getItem('token'))
            user.dispatch({
              type: 'SET_USER',
              payload: {
                isLoggedIn: true,
                ...res.data
              }
            })
            setLoading(false)
          })
          .catch(err => {
            console.log('error')
          })
      } else {
        setLoading(false)
      }
    } else {
      history.push('/login')
    }
  }, [])

  function getChild() {
    return (
      <div id='grid' className='h-screen'>
        <Navbar />
        <SidePanel />
        <Main />
        <RightSide />
      </div>
    )
  }

  return (
    <>
      { loading ? <div className='flex flex-center h-screen'>Loading...</div> : getChild()}
    </>
  )
}

export default Home
