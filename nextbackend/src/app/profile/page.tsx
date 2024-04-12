import React from 'react'
import {Metadata} from 'next'
import Profile from './Profile';

export const metadata: Metadata = {
    title: "Profile: Auth",
  };
  

function profilePage() {
  return (
    <Profile />
  )
}

export default profilePage