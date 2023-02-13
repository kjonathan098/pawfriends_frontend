import {Center, SimpleGrid} from '@chakra-ui/react'
import React from 'react'
import {useEffect} from 'react'
import {useContext} from 'react'
import authContext from '../../Context/AuthContext/AuthContext'
import petsContext from '../../Context/AuthContext/PetsContext/PetsContex'
import LoginAlert from '../../UI_Kit/LoginAlert'
import PetsCardsDisplay from './5-PetsCardsDisplay'

const MyPets = () => {
	const {isLoggedIn} = useContext(authContext)
	const {loadingUserPets, userAdoptedPet, fetchUserPets} = useContext(petsContext)

	useEffect(() => {
		fetchUserPets()
	}, [])

	if (!isLoggedIn) return <LoginAlert />

	if (loadingUserPets) return <>Loading...</>

	if (!userAdoptedPet || !userAdoptedPet.length) return <Center h={'100vh'}>No Pets</Center>
	return (
		<Center>
			{userAdoptedPet && (
				<SimpleGrid columns={{sm: 1, md: 2, lg: 3}} mt={'10'} bg={'white'} spacing="8">
					{userAdoptedPet.map((pet) => {
						return <PetsCardsDisplay pet={pet} key={pet._id} />
					})}
				</SimpleGrid>
			)}
		</Center>
	)
}

export default MyPets
