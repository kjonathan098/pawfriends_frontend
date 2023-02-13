import {Center, SimpleGrid} from '@chakra-ui/react'
import React, {useContext} from 'react'
import authContext from '../../Context/AuthContext/AuthContext'
import petsContext from '../../Context/AuthContext/PetsContext/PetsContex'
import LoginAlert from '../../UI_Kit/LoginAlert'
import PetsCardsDisplay from './5-PetsCardsDisplay'

const MyFavorites = () => {
	const {isLoggedIn, loading} = useContext(authContext)
	const {loadingUserPets, userFavorites, fetchUserPets} = useContext(petsContext)

	if (loadingUserPets) return <>Loading...</>

	if (!isLoggedIn) return <LoginAlert />

	if (!userFavorites || !userFavorites.length) return <Center h={'100vh'}>No Favorites Pets</Center>

	return (
		<Center>
			{userFavorites && (
				<SimpleGrid columns={{sm: 1, md: 2, lg: 3}} mt={'10'} bg={'white'} spacing="8">
					{userFavorites.map((pet) => {
						return <PetsCardsDisplay pet={pet} key={pet._id} />
					})}
				</SimpleGrid>
			)}
		</Center>
	)
}

export default MyFavorites
