'use client'
import React from 'react'
import ModalBody from '../ModalBody'
import { useGlobalStateContext } from '@/app/context/StateContext'

const SignupModal = () => {

  const{ setIsSignupOpen} = useGlobalStateContext()
  
  return (
    <ModalBody onClose={()=>setIsSignupOpen(false)} formHeading={'Create your account'} buttonLable={'Sign In'}/>
  )
}

export default SignupModal