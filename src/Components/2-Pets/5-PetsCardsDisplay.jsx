import {Box, Heading, Text, Stack, Image, Modal, useDisclosure, ModalOverlay, ModalContent, ModalBody, Button} from '@chakra-ui/react'
import React, {useState} from 'react'
import usePetStatus from '../../CustomHooks/PetManipulation/usePetStatus'
import PetModal from './6-PetModal'
import {lazyload, placeholder} from '@cloudinary/react'

const PetsCardsDisplay = ({pet}) => {
	const {isOpen, onOpen, onClose} = useDisclosure()

	usePetStatus(pet)

	return (
		<Box role={'group'} p={6} maxW={'330px'} w={'full'} bg={'white'} boxShadow={'2xl'} rounded={'lg'} pos={'relative'}>
			<Box boxShadow="md">
				<Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src={pet.picture} plugins={[lazyload(), placeholder({mode: 'predominant-color'})]} />
			</Box>
			<Stack pt={10} align={'center'}>
				<Text color={'green.500'} fontSize={'sm'} textTransform={'uppercase'}>
					{pet.statusString}
				</Text>
				<Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
					{pet.name}
				</Heading>
				<Stack direction={'row'} align={'center'}>
					<Button onClick={onOpen} bg={'green.400'} rounded={'full'} color={'white'} _hover={{bg: 'green.500'}} boxShadow="xl" mt={'2'}>
						View More
					</Button>
					<Modal isOpen={isOpen} onClose={onClose} size={'xl'} isCentered>
						<ModalOverlay />
						<ModalContent>
							<ModalBody>
								<PetModal pet={pet} onClose={onClose} />
							</ModalBody>
						</ModalContent>
					</Modal>
				</Stack>
			</Stack>
		</Box>
	)
}

export default PetsCardsDisplay
