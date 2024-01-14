import './App.css'
import Home from './Components/1-Home/HomeRouter'
import { Route, Routes } from 'react-router-dom'
import { Grid, GridItem, useToast } from '@chakra-ui/react'
import AuthProvider from './Context/AuthContext/AuthProvider'
import PetsMain from './Components/2-Pets/1-PetsMain'
import AuthRoute from './Components/Z-Auth/AuthRoute'
import AuthModal from './Components/Z-Auth/AuthModal'
import LoginModalProvider from './Context/AuthContext/LoginModalContext/LoginModalProvider'
import PetsProvider from './Context/AuthContext/PetsContext/PetsProvider'
import AdminRouter from './Components/4-AdminPage.jsx/1-AdminRouter'
import MyProfileMain from './Components/5-UserProfile/MyProfileMain'
import Nav from './Components/6-Nav/Nav'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import useServerWarning from './CustomHooks/useServerWarning'

function App() {
	useServerWarning()
	return (
		<ChakraProvider theme={theme}>
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
		</ChakraProvider>
	)
}

export default App
