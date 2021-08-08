import React, { useState } from 'react'
import LoginForm from '../components/login/LoginForm'
import CreateAccountForm from '../components/login/CreateAccountForm'
import axios from '../../api'

const api = axios()
function App() {
  const [move_beam, setMoveBeam] = useState();
  const [move_beam_alternate, setMoveBeamAlternate] = useState('move_beam_down')
  const [slider, setSlider] = useState("move_right")
  const [firstMovable, setFirstMovable] = useState();
  const [secondMovable, setSecondMovable] = useState('move_left')
  const [imageTr, setImageTr] = useState('-translateX-50')
  const [message, setMessage] = useState('-translate-x-full')

  function slide(ev) {
    ev.preventDefault()
    ev.stopPropagation()
    if(window.innerWidth >= 900) {
      setFirstMovable( firstMovable == 'move_right' ? 'move_to_0' : 'move_right' )
      setSecondMovable( secondMovable == 'move_left' ? 'move_to_0' : 'move_left' )
      setSlider(slider.includes('move_right') ? 'move_to_0' : 'move_right' )
      setImageTr(imageTr == '-translateX-50' ? 'translateX-0' : '-translateX-50')
      setMessage( message == '-translate-x-full' ? 'translate-x-0' : '-translate-x-full')
    } else if(window.innerWidth < 900) {
      setMoveBeam( move_beam == 'move_beam_down' ? 'move_beam_up' : 'move_beam_down' )
      setMoveBeamAlternate( move_beam_alternate == 'move_beam_down' ? 'move_beam_up' : 'move_beam_down' )
    }
  }

  return (
    <div id="login">
      <section className='rounded-lg shadow-md' id='responsive_form'>
        <div id='slider' className={ slider + " relative overflow-hidden" }>
          <div className={ imageTr + ' absolute -z-1 top-0 left-0 h-full imageTr w-[200%]'}>
            <img className='w-full h-full object-cover' src='@/../assets/img/login_bg5.jpg' />
          </div>
          <div className='absolute w-full h-full flex top-0 left-0 z-10'>
            <div className={ message + ' w-full transition-transform duration-2 ease-in-out flex-shrink-0 flex flex-col flex-center h-full'}>
               <h1 className='uppercase text-white text-4xl font-extrabold'>
                Welcome Back!
              </h1>
              <p className='text-blue-black font-bold text-shadow-big px-14 font-sans text-xl mt-4 text-center'>To keep connected with us please login with your personal info</p>
              <button
                className='bg-gray-800 w-36 text-sm uppercase mt-4 font-medium py-3 rounded-full text-white shadow-lg'
                onClick={slide}
              >
                sign in
              </button>
            </div>
            <div className={ message + ' w-full transition-transform duration-2 ease-in-out flex-shrink-0 flex flex-col flex-center h-full'}>
              <h1 className='uppercase text-white text-4xl font-extrabold'>
                Hello, Friend!
              </h1>
              <p className='text-blue-black font-bold text-shadow-big px-14 font-sans text-xl mt-4 text-center'>Enter your personal details and start your journey with us</p>
              <button
                className='bg-gray-800 w-36 text-sm uppercase mt-4 font-medium py-3 rounded-full text-white shadow-lg'
                onClick={slide}
              >
                sign up
              </button>
            </div>
          </div>
        </div>
        <div className={ move_beam + ' beam'}>
          <div className={ firstMovable + ' first_movable'}>
            <LoginForm slide={slide} />
          </div>
        </div>
        <div className={ move_beam_alternate + ' beam'}>
          <div className={ secondMovable + ' second_movable'}>
            <CreateAccountForm slide={slide} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
