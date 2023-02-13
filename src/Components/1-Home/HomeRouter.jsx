import React, { useContext } from 'react'
import authContext from '../../Context/AuthContext/AuthContext'
import HomeNoUser from './Home.NoUser'
import HomeUser from './Home.User'

const HomeRouter = () => {
	const { isLoggedIn, loading } = useContext(authContext)

	if (loading) return <>Loading ...</>
	if (!isLoggedIn) return <HomeNoUser />
	if (isLoggedIn) return <HomeUser />
}

export default HomeRouter
