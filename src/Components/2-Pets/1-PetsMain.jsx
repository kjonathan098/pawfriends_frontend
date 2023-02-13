import React, {useEffect} from 'react'
import {Tabs, TabList, TabPanels, Tab, TabPanel, Flex} from '@chakra-ui/react'
import SearchPets from './2-SearchPets'
import MyPets from './3-MyPets'
import MyFavorites from './4-MyFavorites'

const PetsMain = () => {
	return (
		<Flex justifyContent={'center'} h="100vh">
			<Tabs variant="soft-rounded" colorScheme="green" mt={'10'} width={'100%'} justifyContent={'center'}>
				<TabList justifyContent={'center'}>
					<Tab>Search Pets</Tab>
					<Tab>My Pets</Tab>
					<Tab>My Favorites</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<SearchPets />
					</TabPanel>
					<TabPanel>
						<MyPets />
					</TabPanel>
					<TabPanel>
						<MyFavorites />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	)
}

export default PetsMain
