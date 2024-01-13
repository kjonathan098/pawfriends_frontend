import React from 'react'
import { Box, Flex, Hide, HStack, IconButton, Image, Show, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { useNavigate, NavLink } from 'react-router-dom'
import logo from '../../Media/logo2.png'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import AuthButton from '../../UI_Kit/Loggin.Logout.Btn'

const Nav = () => {
	const nav = useNavigate()
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<HStack w={'100%'} justifyContent={'center'} p={3}>
				<HStack p={2} w={{ base: '100%', lg: '400px' }} justifyContent={{ base: 'space-between' }} position={'relative'}>
					<Image
						w={50}
						h={50}
						src={logo}
						objectFit={'cover'}
						backgroundSize={'cover'}
						objectPosition={'cover'}
						onClick={() => {
							nav('/')
						}}
						_hover={{
							cursor: 'pointer',
						}}
					/>

					<Hide above="lg">
						<IconButton size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} onClick={isOpen ? onClose : onOpen} />
					</Hide>

					<Hide below="lg">
						<NavLink to="/" className="navLkink">
							<Text _hover={{ color: 'green.500' }}>Home</Text>
						</NavLink>
						<NavLink to="/pets" className="navLkink">
							<Text _hover={{ color: 'green.500' }}>Pets</Text>
						</NavLink>
						<AuthButton />
					</Hide>
				</HStack>
			</HStack>

			{isOpen ? (
				<VStack display={{ md: 'none' }} bg={'gray.100'} position={'absolute'} w={'100vw'} p={1}>
					<Stack as={'nav'} h={'100%'}>
						<Flex justifyContent={'center'} _hover={{ bg: 'gray.200' }}>
							<NavLink to="/" className="navLkink">
								Home
							</NavLink>
						</Flex>
						<Flex justifyContent={'center'} _hover={{ bg: 'gray.200' }}>
							<NavLink to="/pets" className="navLkink">
								Pets
							</NavLink>
						</Flex>
						<AuthButton />
					</Stack>
				</VStack>
			) : null}
		</>
	)
}

export default Nav
