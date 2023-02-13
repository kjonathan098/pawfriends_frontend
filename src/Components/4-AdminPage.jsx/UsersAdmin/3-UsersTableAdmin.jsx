import {Center, Table, Tbody, Th, Thead, Tr, TableContainer} from '@chakra-ui/react'
import React from 'react'
import useFetch from '../../../CustomHooks/apiCalls/useFetch'
import UserTableBody from './4-UserTableBody'
import apirUrl from '../../../Utils/apiCall'

const UserTableAdmin = () => {
	const {data: users, fetchLoading} = useFetch(`${apirUrl}/api/user`)

	if (fetchLoading) return <>Loading...</>
	if (!users) return <>No users</>

	return (
		<div>
			{users && (
				<TableContainer outline={{border: '2px solid', borderColor: 'purple.500', color: 'purple.500'}}>
					<Center>
						<Table variant="striped" colorScheme="green" width={{md: '900px', sm: 'auto'}} justifyContent={'spaceAround'}>
							<Thead>
								<Tr>
									<Th>Name</Th>
									<Th>Email</Th>
									<Th>Actions</Th>
								</Tr>
							</Thead>
							<Tbody>
								{users.data.map((user) => {
									return <UserTableBody user={user} key={user._id} />
								})}
							</Tbody>
						</Table>
					</Center>{' '}
				</TableContainer>
			)}
		</div>
	)
}
export default UserTableAdmin
