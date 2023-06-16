'use client'
import React from 'react'
import ModalBody from '../ModalBody'
import { useGlobalStateContext } from '@/app/context/StateContext'

const SigninModal = () => {

  const{setIsLoginOpen} = useGlobalStateContext()
  
  return (
    <ModalBody onClose={()=>setIsLoginOpen(false)} formHeading={'Login to your account'} buttonLable={'Sign In'}/>
  )
}

export default SigninModal