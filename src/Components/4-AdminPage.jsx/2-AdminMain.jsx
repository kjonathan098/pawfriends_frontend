import React from 'react'
import {Tabs, TabList, TabPanels, Tab, TabPanel, Flex} from '@chakra-ui/react'
import UserTableAdmin from './UsersAdmin/3-UsersTableAdmin'
import PetTableMain from './PetsAdmin/8-PetTableMain'

const AdminMain = () => {
	return (
		<Flex justifyContent={'center'} h="100vh">
			<Tabs variant="soft-rounded" colorScheme="green" mt={'10'} width={'100%'} justifyContent={'center'}>
				<TabList justifyContent={'center'}>
					<Tab>Pets</Tab>
					<Tab>Users</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<PetTableMain />
					</TabPanel>
					<TabPanel>
						<UserTableAdmin />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	)
}

export default AdminMain
