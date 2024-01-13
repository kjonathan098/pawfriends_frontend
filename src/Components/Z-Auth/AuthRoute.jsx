import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import authContext from '../../Context/AuthContext/AuthContext'

const AuthRoute = ({ children }) => {
	const { isLoggedIn, loading } = useContext(authContext)

	const navigate = useNavigate()

	useEffect(() => {
		if (loading) return
		if (!isLoggedIn) return navigate('/')
	}, [isLoggedIn])

	if (loading) return <>Loading...</>

	return children
}

export default AuthRoute
