import {Box, Center, SimpleGrid} from '@chakra-ui/react'
import React, {useContext, useEffect, useState} from 'react'
import petsContext from '../../Context/AuthContext/PetsContext/PetsContex'
import SearchBarMain from '../3-SearchBar/SearchBarMain'
import PetsCardsDisplay from './5-PetsCardsDisplay'
import {Spinner} from '@chakra-ui/react'

const SearchPets = () => {
	const {allPets, loading, fetchAll} = useContext(petsContext)

	useEffect(() => {
		fetchAll()
	}, [])
	if (loading)
		return (
			<Center>
				<Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
			</Center>
		)

	return (
		<Box>
			<Center mt={5}>
				<SearchBarMain />
			</Center>

			<Center>
				{allPets && (
					<SimpleGrid columns={{sm: 1, md: 2, lg: 3}} mt={'10'} bg={'white'} spacing="8">
						{allPets.map((pet) => {
							return <PetsCardsDisplay pet={pet} key={pet._id} />
						})}
					</SimpleGrid>
				)}
			</Center>
		</Box>
	)
}

export default SearchPets
