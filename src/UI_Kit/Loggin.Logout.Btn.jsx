import {Box, Avatar, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Center, useDisclosure, useToast} from '@chakra-ui/react'
import React, {useEffect} from 'react'
import {useContext} from 'react'
import authContext from '../Context/AuthContext/AuthContext'
import loginModalContext from '../Context/AuthContext/LoginModalContext/LoginModalContext'
import userConfig from '../Config/User.Config'
import {useNavigate} from 'react-router-dom'
import AdminMain from '../Components/4-AdminPage.jsx/1-AdminRouter'
import {useState} from 'react'
import avatarProfile from '../Media/avatarProfile.jpeg'

const AuthButton = () => {
	const navigate = useNavigate()
	const {isLoggedIn, setLoading, setIsLoggedIn, userInfo} = useContext(authContext)
	const {isOpen, onOpen, onClose} = useContext(loginModalContext)
	const [isAdmin, setIsAdmin] = useState(false)
	const toast = useToast()

	useEffect(() => {
		// let userPermission = localStorage.getItem('user_info')
		// userPermission = JSON.parse(userPermission)
		// if (!userPermission?.permissions?.admin) return
		// if (userPermission?.permissions?.admin) return setIsAdmin(true)
		if (userInfo?.permissions === '0') return
		setIsAdmin(true)
	}, [isLoggedIn])

	const handleLogout = () => {
		setLoading(true)
		userConfig.logoutUser()
		setIsLoggedIn(false)
		toast({
			title: 'Success',
			description: "You've logged out",
			status: 'warning',
			duration: 5000,
			isClosable: true,
		})
		setLoading(false)
	}

	const admingPage = () => {
		navigate('/admin')
	}

	if (isLoggedIn)
		return (
			<Menu>
				<MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
					<Avatar size={'sm'} src={avatarProfile} />
				</MenuButton>
				<MenuList>
					<MenuItem
						onClick={() => {
							navigate('/pets')
						}}
					>
						My Pets
					</MenuItem>
					<MenuItem
						onClick={() => {
							navigate('/profile')
						}}
					>
						Profile
					</MenuItem>
					{isAdmin && (
						<MenuItem
							onClick={() => {
								navigate('/admin')
							}}
						>
							Admin Page
						</MenuItem>
					)}

					<MenuDivider />
					<MenuItem>
						<Center width={'100%'}>
							<Box as="button" bg={'red.400'} rounded={'full'} color={'white'} _hover={{bg: 'red.500'}} w={'80%'} onClick={handleLogout}>
								Logout
							</Box>
						</Center>
					</MenuItem>
				</MenuList>
			</Menu>
		)

	return (
		<Button bg={'green.400'} rounded={'full'} color={'white'} _hover={{bg: 'green.500'}} onClick={onOpen}>
			Login
		</Button>
	)
}

export default AuthButton
