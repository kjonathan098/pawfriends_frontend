import React from 'react'
import {Table, Thead, Tbody, Tr, Th, Td, TableContainer} from '@chakra-ui/react'

const UserContactModal = ({user}) => {
	return (
		<TableContainer>
			<Table size="sm">
				<Thead>
					<Tr>
						<Th>Email</Th>
						<Th>Phone</Th>
						<Th>Bio</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>{user.email}</Td>
						<Td>{user.phone}</Td>
						<Td>{user.bio}</Td>
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	)
}

export default UserContactModal
