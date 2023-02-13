import {useContext, useEffect, useState} from 'react'
import petsContext from '../../Context/AuthContext/PetsContext/PetsContex'
import handlePetRequest from '../../Config/Pet.Config'

function useFavoritePets(pet) {
	const {loadingUserPets, userFavorites, setUserFavorites} = useContext(petsContext)
	const [isFavorite, setIsFavorite] = useState()
	const [favoriteIndex, setFavoriteIndex] = useState()

	useEffect(() => {
		if (loadingUserPets) return
		const favorite = userFavorites.find((res) => res._id === pet._id)
		if (!favorite) return

		// In case user wants to delete from fav we already have the index
		const index = userFavorites.indexOf(favorite)
		setFavoriteIndex(index)

		return setIsFavorite(true)
	}, [userFavorites])

	const addToFavorites = async () => {
		const res = await handlePetRequest.addToFavorites(pet)
		if (res.error) return res
		setIsFavorite(true)
		setUserFavorites([...userFavorites, pet])

		return res
	}

	const removeFavorite = async () => {
		const res = await handlePetRequest.removeFromFavorites(pet)
		if (res.error) return res
		userFavorites.splice(favoriteIndex, 1)
		setUserFavorites([...userFavorites])
		setIsFavorite(false)
	}

	return {isFavorite, addToFavorites, removeFavorite}
}

export default useFavoritePets
