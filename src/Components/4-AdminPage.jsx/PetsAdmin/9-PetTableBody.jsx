import React from 'react'
import { Button, HStack, Icon, Td, Tr, useDisclosure } from '@chakra-ui/react'
import { AiTwotoneLock } from 'react-icons/ai'
import PetModalEdit from './12-PetModalEdit'
const PetTableBody = ({ pet }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Tr>
				<Td>{pet.name}</Td>
				<Td>{pet._id}</Td>
				<Td>
					<HStack>
						<Button size="xs" variant="solid" leftIcon={<Icon as={AiTwotoneLock} />} colorScheme="purple" onClick={onOpen}>
							View Profile
						</Button>
					</HStack>
				</Td>
				<PetModalEdit pet={pet} isOpen={isOpen} onClose={onClose} />
			</Tr>
		</>
	)
}

export default PetTableBody
