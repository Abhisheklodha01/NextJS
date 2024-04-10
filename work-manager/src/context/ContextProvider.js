"use client"
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { toast } from 'react-toastify'
import { CurrentUser } from '@/services/userService'

const ContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        async function fetcheUserDetails() {
            try {
                const loggedInUser = await CurrentUser()
                setUser({ ...loggedInUser })
                toast.success(loggedInUser.message, {
                    position: "top-center"
                })
            } catch (error) {
                console.log(error);
                toast.error("Error in Fetching user datails", {
                    position: "top-center"
                })
                setUser(null)

            }
        }
        fetcheUserDetails()
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextProvider