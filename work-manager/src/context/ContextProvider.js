"use client"
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { toast } from 'react-toastify'
import { CurrentUser } from '@/services/userService'

const ContextProvider = ({ children }) => {

    const [user, setUser] = useState(undefined)
    
    async function fetcheUserDetails() {
        try {
           const loggedInUser = await CurrentUser()
            setUser({ ...loggedInUser })
            toast.success(loggedInUser.message, {
                position: "top-center"
            })
        } catch (error) {
            console.log(error);
            setUser(undefined)
        }
    }

    useEffect(() => {
        fetcheUserDetails()
    }, [setUser])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextProvider