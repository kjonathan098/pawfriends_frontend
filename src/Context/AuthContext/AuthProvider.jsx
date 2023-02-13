import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import authContext from './AuthContext'

const AuthProvider = ({children}) => {
	const [isLoggedIn, setIsLoggedIn] = useState()
	const [loading, setLoading] = useState(true)
	const [userInfo, setUserInfo] = useState()

	useEffect(() => {
		setLoading(true)
		const access_token = localStorage.getItem('access_token')
		if (access_token) {
			const userInfo = localStorage.getItem('user_info')
			setUserInfo(JSON.parse(userInfo))
			setIsLoggedIn(true)
			return setLoading(false)
		}
		setIsLoggedIn(false)
		setLoading(false)
		return () => {}
	}, [])

	return <authContext.Provider value={{isLoggedIn, loading, setLoading, userInfo, setUserInfo, setIsLoggedIn}}>{children}</authContext.Provider>
}

export default AuthProvider
