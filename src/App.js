import './App.css'
import Home from './Components/1-Home/HomeRouter'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import { Flex, HStack, IconButton, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import AuthProvider from './Context/AuthContext/AuthProvider'
import AuthButton from './UI_Kit/Loggin.Logout.Btn'
import PetsMain from './Components/2-Pets/1-PetsMain'
import AuthRoute from './Components/Z-Auth/AuthRoute'
import AuthModal from './Components/Z-Auth/AuthModal'
import LoginModalProvider from './Context/AuthContext/LoginModalContext/LoginModalProvider'
import PetsProvider from './Context/AuthContext/PetsContext/PetsProvider'
import AdminRouter from './Components/4-AdminPage.jsx/1-AdminRouter'
import logo from './Media/logo2.png'
import MyProfileMain from './Components/5-UserProfile/MyProfileMain'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

function App() {
	const nav = useNavigate()
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<AuthProvider>
			<LoginModalProvider>
				<PetsProvider>
					<div className="App">
						<Flex alignItems={'center'}>
							<div className="menuMain">
								<Flex
									w={50}
									h={50}
									backgroundImage={logo}
									backgroundSize={'cover'}
									backgroundPosition={'center center'}
									onClick={() => {
										nav('/')
									}}
									_hover={{
										cursor: 'pointer',
									}}
								/>

								<Flex alignItems={'center'} w="500px" justify="right">
									<IconButton
										size={'md'}
										icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
										aria-label={'Open Menu'}
										display={{ md: 'none' }}
										onClick={isOpen ? onClose : onOpen}
									/>

									<HStack
										display={{ base: 'none', md: 'flex' }}
										w="100%"
										justifyContent={'space-between'}
									>
										<NavLink to="/" className="navLkink">
											<Text _hover={{ color: 'green.500' }}>Home</Text>
										</NavLink>
										<NavLink to="/pets" className="navLkink">
											<Text _hover={{ color: 'green.500' }}>Pets</Text>
										</NavLink>
										<AuthButton />
									</HStack>
								</Flex>
							</div>
						</Flex>

						{isOpen ? (
							<VStack display={{ md: 'none' }} bg={'gray.100'}>
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
						<div>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/pets" element={<PetsMain />} />
								<Route
									path="/admin"
									element={
										<AuthRoute>
											<AdminRouter />
										</AuthRoute>
									}
								/>
								<Route
									path="/profile"
									element={
										<AuthRoute>
											<MyProfileMain />
										</AuthRoute>
									}
								/>
							</Routes>
						</div>
					</div>
				</PetsProvider>
				<AuthModal />
			</LoginModalProvider>
		</AuthProvider>
	)
}

export default App
