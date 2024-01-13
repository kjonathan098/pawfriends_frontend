import React, { useContext, useEffect } from 'react'
import petsContext from '../../../Context/AuthContext/PetsContext/PetsContex'
import { Center, Table, Tbody, Th, Thead, Tr, TableContainer, Box, Button, useDisclosure, Spinner } from '@chakra-ui/react'
import PetTableBody from './9-PetTableBody'
import { AddIcon } from '@chakra-ui/icons'
import AddPetModal from './10-AddPetModal'

const PetTableMain = () => {
	const { allPets, fetchAll, loading } = useContext(petsContext)
	const { isOpen, onOpen, onClose } = useDisclosure()

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
		<Box mt={10}>
			<Center>
				<Button bg={'green.400'} _hover={{ bg: 'green.500' }} color={'white'} leftIcon={<AddIcon />} onClick={onOpen}>
					Add New Pet
				</Button>
			</Center>

			{allPets && (
				<TableContainer outline={{ border: '2px solid', borderColor: 'purple.500', color: 'purple.500' }}>
					<Center>
						<Table variant="striped" colorScheme="green" width={{ md: '900px', sm: 'auto' }} justifyContent={'spaceAround'}>
							<Thead alignContent={'center'}>
								<Tr>
									<Th>Name</Th>
									<Th>ID</Th>
									<Th>Actions</Th>
								</Tr>
							</Thead>
							<Tbody>
								{allPets.map((pet) => {
									return <PetTableBody pet={pet} key={pet._id} onOpen={onOpen} />
								})}
							</Tbody>
						</Table>
					</Center>{' '}
				</TableContainer>
			)}
			<AddPetModal isOpen={isOpen} onClose={onClose} allPets={allPets} />
		</Box>
	)
}

export default PetTableMain
