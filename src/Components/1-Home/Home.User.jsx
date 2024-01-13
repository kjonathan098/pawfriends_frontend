import React, { useContext } from 'react'
import authContext from '../../Context/AuthContext/AuthContext'
import heroLoggedIn from '../../Media/HerUser.jpeg'
import { Stack, Flex, Button, Text, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const HomeUser = () => {
	const { userInfo, loading } = useContext(authContext)
	const navigate = useNavigate()

	if (loading) return <>loading...</>
	return (
		<Flex w={'full'} h={'100vh'} backgroundImage={heroLoggedIn} backgroundSize={'cover'} backgroundPosition={'center center'}>
			<VStack w={'full'} justify={'center'} px={{ base: 4, md: 8 }} bgGradient={'linear(to-r, blackAlpha.400, transparent)'}>
				<Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
					<Text color={'white'} fontWeight={900} lineHeight={1.2} fontSize={{ base: '5xl', md: '7xl' }}>
						Hi there {userInfo.name} {userInfo.surName}
					</Text>
					<Text color={'white'} fontWeight={900} lineHeight={1.2} fontSize={{ base: '3xl', md: '3xl' }}>
						Lets Get Started
					</Text>
					<Stack direction={'row'}>
						<Button
							bg={'green.400'}
							rounded={'full'}
							color={'white'}
							_hover={{ bg: 'green.500' }}
							onClick={() => {
								navigate('/pets')
							}}
						>
							Search Pets
						</Button>
						<Button
							bg={'whiteAlpha.300'}
							rounded={'full'}
							color={'white'}
							_hover={{ bg: 'whiteAlpha.500' }}
							onClick={() => {
								navigate('/pets')
							}}
						>
							My Pets
						</Button>
					</Stack>
				</Stack>
			</VStack>
		</Flex>
	)
}

export default HomeUser
