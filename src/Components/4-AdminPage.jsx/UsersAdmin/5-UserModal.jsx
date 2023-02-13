import React from 'react'
import {Heading, Avatar, Box, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalBody, Tabs, TabList, Tab, TabPanels, TabPanel, Flex} from '@chakra-ui/react'
import UserContactModal from './6-UserInfoModal'
import UserPetsModal from './7-UserPetsModal'
import avatarProfile from '../../../Media/avatarProfile.jpeg'

const UserModal = ({user, isOpen, onClose}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} size={'xl'} isCentered>
			{' '}
			<ModalOverlay />
			<ModalContent>
				<ModalBody>
					<Box maxW={'100%'} w={'full'} bg={useColorModeValue('white', 'gray.900')} boxShadow={'2xl'} rounded={'lg'} p={6} textAlign={'center'}>
						<Avatar
							size={'xl'}
							src={avatarProfile}
							alt={'Avatar Alt'}
							mb={4}
							pos={'relative'}
							_after={{
								content: '""',
								w: 4,
								h: 4,
								bg: 'green.300',
								border: '2px solid white',
								rounded: 'full',
								pos: 'absolute',
								bottom: 0,
								right: 3,
							}}
						/>
						<Heading fontSize={'2xl'} fontFamily={'body'}>
							{user.name} {''} {user.surName}
						</Heading>
						<Flex justifyContent={'center'} h="auto">
							<Tabs variant="soft-rounded" colorScheme="green" mt={'10'} width={'100%'} justifyContent={'center'}>
								<TabList justifyContent={'center'}>
									<Tab>User Info</Tab>
									<Tab>Pets</Tab>
								</TabList>
								<TabPanels>
									<TabPanel>
										<UserContactModal user={user} />
									</TabPanel>
									<TabPanel>
										<UserPetsModal user={user} />
									</TabPanel>
								</TabPanels>
							</Tabs>
						</Flex>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default UserModal
