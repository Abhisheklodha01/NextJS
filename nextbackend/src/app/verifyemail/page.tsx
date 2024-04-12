import React from 'react'
import VerifyEmail from './VerifyEmail'
import {Metadata} from 'next'

export const metadata: Metadata = {
    title: "Verify Email: Auth",

  };
  
function VerifyEmailPage() {
  return (
    <VerifyEmail />
  )
}

export default VerifyEmailPage