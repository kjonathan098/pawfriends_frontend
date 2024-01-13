import React, { useState } from 'react'
import { Badge, Flex, Stack, useColorModeValue, Heading, Text, Box, HStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, Link } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import useForm from '../../CustomHooks/apiCalls/useForm'
import useToastMessage from '../../UI_Kit/ToastMessage'
import userConfig from '../../Config/User.Config'

const RegistrationForm = ({ setFormContent }) => {
	const [showPassword, setShowPassword] = useState(false)
	const [values, handleChange] = useForm()
	const [error, setError] = useState()
	const [loading, setLoading] = useState()
	const { showToast } = useToastMessage()

	const handleRegister = async () => {
		setError(null)
		setLoading(true)
		if (values.password !== values.rePassword) {
			setError('passwords do not match ')
			return setLoading(false)
		}
		const res = await userConfig.registerUser(values)
		if (res.error) {
			setError(res.message)
			return setLoading(false)
		}
		setFormContent(true)
		showToast('Success', 'Please login')
		return setLoading(false)
	}

	return (
		<Flex minH={'75vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'} textAlign={'center'}>
						Sign up
					</Heading>
					<Text fontSize={'lg'} color={'gray.600'}>
						to enjoy all of our cool features ✌️
					</Text>
				</Stack>
				<Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
					<Stack spacing={4}>
						<HStack>
							<Box>
								<FormControl id="firstName" isRequired>
									<FormLabel>First Name</FormLabel>
									<Input type="text" name="name" onChange={handleChange} />
								</FormControl>
							</Box>
							<Box>
								<FormControl id="lastName" isRequired>
									<FormLabel>Last Name</FormLabel>
									<Input type="text" name="surName" onChange={handleChange} />
								</FormControl>
							</Box>
						</HStack>
						<FormControl id="email" isRequired>
							<FormLabel>Email address</FormLabel>
							<Input type="email" name="email" onChange={handleChange} />
						</FormControl>
						<FormControl id="email" isRequired>
							<FormLabel>Phone Number</FormLabel>
							<Input type="email" name="phone" onChange={handleChange} />
						</FormControl>

						<FormControl id="password" isRequired>
							<FormLabel>Password</FormLabel>
							<InputGroup>
								<Input type={showPassword ? 'text' : 'password'} name="password" onChange={handleChange} />
								<InputRightElement h={'full'}>
									<Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
										{showPassword ? <ViewIcon /> : <ViewOffIcon />}
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
						<FormControl id="rePassword" isRequired>
							<FormLabel> Re-Password</FormLabel>
							<InputGroup>
								<Input type={showPassword ? 'text' : 'password'} name="rePassword" onChange={handleChange} />
								<InputRightElement h={'full'}>
									<Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
										{showPassword ? <ViewIcon /> : <ViewOffIcon />}
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
						{error && (
							<Badge colorScheme="red" align={'center'}>
								{error}
							</Badge>
						)}
						<Stack spacing={10} pt={2}>
							<Button
								loadingText="Submitting"
								size="lg"
								bg={'green.400'}
								color={'white'}
								_hover={{
									bg: 'green.500',
								}}
								// isLoading={loading}
								onClick={handleRegister}
							>
								Sign up
							</Button>
						</Stack>
						<Stack pt={6}>
							<Text align={'center'}>
								Already a user?{' '}
								<Link
									color={'blue.400'}
									onClick={() => {
										setFormContent(true)
									}}
								>
									Login
								</Link>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	)
}

export default RegistrationForm
