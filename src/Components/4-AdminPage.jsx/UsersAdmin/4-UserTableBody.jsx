import { Button, HStack, Icon, Td, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AiTwotoneLock } from 'react-icons/ai'
import UserModal from './5-UserModal'

const UserTableBody = ({ user }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Tr>
				<Td>
					{user.name} {''} {user.surName}
				</Td>
				<Td>{user.email}</Td>
				<Td>
					<HStack>
						<Button size="xs" variant="solid" leftIcon={<Icon as={AiTwotoneLock} />} colorScheme="purple" onClick={onOpen}>
							View Profile
						</Button>
					</HStack>
				</Td>
			</Tr>
			<UserModal user={user} isOpen={isOpen} onClose={onClose} />
		</>
	)
}

export default UserTableBody
