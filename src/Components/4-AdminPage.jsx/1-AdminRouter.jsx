import React, {useContext} from 'react'
import authContext from '../../Context/AuthContext/AuthContext'
import {useNavigate} from 'react-router-dom'
import AdminMain from './2-AdminMain'
import {useEffect} from 'react'
import {useState} from 'react'

const AdminRouter = () => {
	const [isAdmin, setIsAdmin] = useState(false)
	const [adminLoading, setLoading] = useState(true)
	const {isLoggedIn, userInfo} = useContext(authContext)

	const navigate = useNavigate()

	let userPermission = localStorage.getItem('user_info')
	userPermission = JSON.parse(userPermission)

	useEffect(() => {
		if (!isLoggedIn) return
		if (userInfo?.permissions === 0) return navigate('/')
		setIsAdmin(true)
		setLoading(false)
	}, [isLoggedIn])

	if (adminLoading) return <>Loading.. </>

	return <AdminMain />
}

export default AdminRouter
