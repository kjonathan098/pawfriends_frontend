import './App.css'
import Home from './Components/1-Home/HomeRouter'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import { Box, Flex, Grid, GridItem, HStack, IconButton, Image, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import AuthProvider from './Context/AuthContext/AuthProvider'
import AuthButton from './UI_Kit/Loggin.Logout.Btn'
import PetsMain from './Components/2-Pets/1-PetsMain'
import AuthRoute from './Components/Z-Auth/AuthRoute'
import AuthModal from './Components/Z-Auth/AuthModal'
import LoginModalProvider from './Context/AuthContext/LoginModalContext/LoginModalProvider'
import PetsProvider from './Context/AuthContext/PetsContext/PetsProvider'
import AdminRouter from './Components/4-AdminPage.jsx/1-AdminRouter'
import MyProfileMain from './Components/5-UserProfile/MyProfileMain'
import Nav from './Components/6-Nav/Nav'

function App() {
	return (
		<AuthProvider>
			<LoginModalProvider>
				<PetsProvider>
					<Grid templateRows="auto 1fr" minH={'100vh'}>
						<GridItem h={'fit-content'}>
							<Nav />
						</GridItem>
						<GridItem h={'100%'}>
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
						</GridItem>
					</Grid>
				</PetsProvider>
				<AuthModal />
			</LoginModalProvider>
		</AuthProvider>
	)
}

export default App
