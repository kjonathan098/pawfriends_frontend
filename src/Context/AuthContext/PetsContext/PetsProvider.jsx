import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import authContext from '../AuthContext'
import petsContext from './PetsContex'
import apirUrl from '../../../Utils/apiCall'
const PetsProvider = ({ children }) => {
	const { userInfo } = useContext(authContext)
	const [userAdoptedPet, setUserAdoptedPet] = useState([])
	const [userFavorites, setUserFavorites] = useState([])
	const [loadingUserPets, setLoadingUserPets] = useState(true)
	const [allPets, setAllPets] = useState([])
	const [error, setError] = useState()
	const [loading, setLoading] = useState(true)

	const fetchAll = async () => {
		try {
			const data = await axios.get(`${apirUrl}/api/pet/`, {
				headers: { Authorization: localStorage.getItem('access_token') },
			})
			setAllPets(data.data)
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	// Fetch users Pets
	const fetchUserPets = async () => {
		const userInfo = JSON.parse(localStorage.getItem('user_info'))
		if (!userInfo) {
			return setLoadingUserPets(false)
		}
		try {
			const userPets = await axios.get(`${apirUrl}/api/pet/userPets/${userInfo.uid}`)
			setUserAdoptedPet([...userPets.data.adoptedPet])
			setUserFavorites([...userPets.data.favoritePet])
		} catch (error) {
			setError(error)
		} finally {
			setLoadingUserPets(false)
		}
	}

	// Change Pets display according to query
	const fetchQuery = async (qObject) => {
		try {
			const qResponse = await axios.get(`${apirUrl}/api/pet/query`, qObject)
			if (!qResponse.data.length) return false
			setAllPets(qResponse.data)
			return true
		} catch (error) {
		} finally {
		}
	}

	return (
		<petsContext.Provider
			value={{
				userAdoptedPet,
				setUserAdoptedPet,
				userFavorites,
				setUserFavorites,
				loadingUserPets,
				allPets,
				setAllPets,
				fetchQuery,
				fetchAll,
				loading,
				fetchUserPets,
			}}
		>
			{children}
		</petsContext.Provider>
	)
}

export default PetsProvider
