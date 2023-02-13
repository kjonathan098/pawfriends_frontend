import { Stack, Flex, Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import authContext from '../../Context/AuthContext/AuthContext'
import heroNoUser from '../../Media/HeroNoUser.jpeg'

const HomeNoUser = () => {
	const { loading } = useContext(authContext)
	const navigate = useNavigate()

	if (loading) return <>Loading...</>

	return (
		<Flex
			w={'full'}
			h={'100vh'}
			backgroundImage={heroNoUser}
			backgroundSize={'cover'}
			backgroundPosition={'center center'}
		>
			<VStack
				w={'full'}
				justify={'center'}
				px={{ base: 4, md: 8 }}
				bgGradient={'linear(to-r, blackAlpha.400, transparent)'}
			>
				<Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
					<Text
						color={'white'}
						fontWeight={900}
						lineHeight={1.2}
						fontSize={{ base: '5xl', md: '7xl' }}
					>
						Find youre perfect paw-fwiend
					</Text>
					<Stack direction={'row'}>
						<Button
							bg={'green.400'}
							rounded={'full'}
							color={'white'}
							_hover={{ bg: 'green.500' }}
							onClick={() => navigate('/pets')}
						>
							Search Pets
						</Button>
						<Button
							bg={'whiteAlpha.300'}
							rounded={'full'}
							color={'white'}
							_hover={{ bg: 'whiteAlpha.500' }}
						>
							Show me more
						</Button>
					</Stack>
				</Stack>
			</VStack>
		</Flex>
	)
}

export default HomeNoUser
