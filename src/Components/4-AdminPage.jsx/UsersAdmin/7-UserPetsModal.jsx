import React, { useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'
import useFetch from '../../../CustomHooks/apiCalls/useFetch'
import { useEffect } from 'react'
import usePetStatusTwo from '../../../CustomHooks/PetManipulation/usePetStatusTwo.js'
import usePetType from '../../../CustomHooks/PetManipulation/usePetType'
import apirUrl from '../../../Utils/apiCall'

const UserPetsModal = ({ user }) => {
	const { data, fetchLoading } = useFetch(`${apirUrl}/api/pet/userPets/${user._id}`)

	const { petStatusStringArray, petStatusloading, petStatusString } = usePetStatusTwo()
	const { petTypeLoading, petTypeStringArray, handleType } = usePetType()
	const [loading, setLoading] = useState(true)
	const [userPets, setUserPets] = useState()

	useEffect(() => {
		// fetch user pets
		if (fetchLoading) return
		// user has no pets
		if (!data.data.adoptedPet || !data.data.adoptedPet.length) {
			setUserPets(null)
			setLoading(false)
			return
		}
		// When fetched finished convert status to strings
		if (!fetchLoading) petStatusString(data.data.adoptedPet)
		if (petStatusloading) return

		// Convert type to string
		if (!petStatusloading) handleType(petStatusStringArray)

		if (petTypeLoading) return

		// When all is finished set userPets
		if (!petTypeLoading) {
			setUserPets(petTypeStringArray)
			setLoading(false)
		}
	}, [fetchLoading, petStatusloading, petTypeLoading])

	if (loading) return <>Loading...</>

	if (!userPets) return <>No Pets</>

	return (
		<TableContainer>
			{userPets && (
				<Table size="sm">
					<Thead>
						<Tr>
							<Th>Name</Th>
							<Th>Type</Th>
							<Th>Status</Th>
							<Th>Id</Th>
						</Tr>
					</Thead>
					{userPets.map((pet) => {
						return (
							<Tbody>
								<Tr>
									<Td>{pet.name}</Td>
									<Td>{pet.typeDisplay}</Td>
									<Td>{pet.adoptionStatus}</Td>
									<Td>{pet._id}</Td>
								</Tr>
							</Tbody>
						)
					})}
				</Table>
			)}
		</TableContainer>
	)
}

export default UserPetsModal
