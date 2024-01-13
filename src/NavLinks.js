import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import HomeLogin from './Components/1-Home/HomeLogin'
import HomeLogout from './Components/1-Home/HomeLogout'
import AuthRoute from './Components/3-AuthRoute/AuthRoute'
import LoginButton from './Components/z-Helpers/LoginButton'

const NavLinks = () => {
	return (
		<div>
			<NavLink to="/" className="navLkink">
				Home
			</NavLink>
			<NavLink to="/pets" className="navLkink">
				Pets
			</NavLink>
			<LoginButton />
			<Routes>
				<Route
					path="/"
					element={
						<AuthRoute>
							<HomeLogin />
						</AuthRoute>
					}
				/>
				<Route path="/login" element={<HomeLogout />} />
			</Routes>
		</div>
	)
}

export default NavLinks
