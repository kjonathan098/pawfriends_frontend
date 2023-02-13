import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Badge,
	useToast,
	VStack,
	HStack,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useState } from 'react'
import userConfig from '../../Config/User.Config'
import authContext from '../../Context/AuthContext/AuthContext'
import loginModalContext from '../../Context/AuthContext/LoginModalContext/LoginModalContext'
import useForm from '../../CustomHooks/apiCalls/useForm'
import toastMessage from '../../UI_Kit/ToastMessage'
import DemoAccount from './DemoAccount'

const LoginForm = ({ setFormContent }) => {
	const { setUserInfo, setIsLoggedIn } = useContext(authContext)
	const { onClose } = useContext(loginModalContext)
	let [values, handleChange, setState] = useForm()
	const [error, setError] = useState()
	const [loading, setLoading] = useState()
	const toast = useToast()

	const handleLogin = async (demo) => {
		setLoading(true)

		if (demo)
			values = {
				email: process.env.REACT_APP_DEMO_EMAIL,
				password: process.env.REACT_APP_DEMO_PASS,
			}

		const userInfo = await userConfig.loginUser(values)
		if (userInfo.error) {
			setError(userInfo.message)
			return setLoading(false)
		}
		setUserInfo(userInfo)
		setIsLoggedIn(true)
		onClose()
		toast({
			title: 'Success',
			description: "You've logged in",
			status: 'success',
			duration: 5000,
			isClosable: true,
		})
		setLoading(false)
	}
	return (
		<Flex
			minH={'75vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('gray.50', 'gray.800')}
		>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'}>Sign in to your account</Heading>
					<Text fontSize={'lg'} color={'gray.600'}>
						to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
					</Text>
				</Stack>
				<Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
					<Stack spacing={4}>
						<FormControl id="email">
							<FormLabel>Email address</FormLabel>
							<Input type="email" name="email" onChange={handleChange} />
						</FormControl>
						<FormControl id="password">
							<FormLabel>Password</FormLabel>
							<Input type="password" name="password" onChange={handleChange} />
						</FormControl>
						{error && (
							<Badge colorScheme="red" align={'center'}>
								{error}
							</Badge>
						)}
						<VStack spacing={3} justifyContent="space-around">
							<Button
								bg={'green.400'}
								color={'white'}
								_hover={{
									bg: 'green.500',
								}}
								onClick={() => {
									handleLogin(false)
								}}
								isLoading={loading}
							>
								Sign in
							</Button>

							<Text align={'center'}>
								Or click here to sign in to our demo account and view all features{' '}
							</Text>
							<DemoAccount handleLogin={handleLogin} loading={loading} />
						</VStack>
						<Stack
							direction={{ base: 'column', sm: 'row' }}
							align={'start'}
							justify={'space-between'}
						>
							<Text align={'center'}>
								New User?
								<Link
									color={'blue.400'}
									onClick={() => {
										setFormContent(false)
									}}
								>
									Register Here
								</Link>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	)
}

export default LoginForm
