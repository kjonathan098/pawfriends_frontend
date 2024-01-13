import { Badge, Button, Center, Flex, Heading, Image, Stack, Text, Tooltip, IconButton } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import React, { useContext, useState } from 'react'
import authContext from '../../Context/AuthContext/AuthContext'
import loginModalContext from '../../Context/AuthContext/LoginModalContext/LoginModalContext'
import { useEffect } from 'react'
import useFavoritePets from '../../CustomHooks/PetManipulation/useFavoritePets'
import useAdoptPet from '../../CustomHooks/PetManipulation/useAdoptPet'
import useToastMessage from '../../UI_Kit/ToastMessage'
import useModalButtons from '../../CustomHooks/PetManipulation/useModalButtons'
import usePetType from '../../CustomHooks/PetManipulation/usePetType'

const PetModal = ({ pet }) => {
	const { isLoggedIn, loading } = useContext(authContext)
	const [error] = useState()

	const { onOpen } = useContext(loginModalContext)

	const { isFavorite, addToFavorites, removeFavorite } = useFavoritePets(pet)
	const { fosterBtnDis, adoptBtnDis, returnBtnDis } = useModalButtons(pet)
	const { adoptPet, returnPet, fosterPet } = useAdoptPet(pet)
	const { showToast, errorToast } = useToastMessage()

	const { handleType, petTypeLoading } = usePetType()
	useEffect(() => {
		handleType([pet])
	}, [])

	const handleAdoptPet = async () => {
		if (!isLoggedIn) return onOpen()
		const res = await adoptPet()
		if (res.error) return errorToast(res.message)
		return showToast('Success', 'Pet added to your Adopted list')
	}

	const handleFosterPet = async () => {
		if (!isLoggedIn) return onOpen()
		const res = await fosterPet()
		if (res.error) return errorToast(res.message)
		return showToast('Success', 'Pet added to your Fostered list')
	}
	const handleReturnPet = async () => {
		if (!isLoggedIn) return onOpen()
		const res = await returnPet()
		if (res.error) return errorToast(res.message)
		return showToast('Success', 'Pet returned to  shelter', 'warning')
	}
	const favoritePet = async () => {
		if (!isLoggedIn) return onOpen()
		const res = await addToFavorites()
		if (res.error) return errorToast(res.message)

		return showToast('Success', 'Pet added to your favorites', 'success')
	}

	const removeFromFavorite = async () => {
		if (!isLoggedIn) return onOpen()
		const res = await removeFavorite()
		if (res.error) return errorToast(res.message)
		return showToast('Success', 'Pet removed from favorites', 'warning')
	}

	if (loading || petTypeLoading) return <div>Loading...</div>
	return (
		<Center py={6}>
			<Stack borderWidth="1px" borderRadius="lg" w={{ sm: '100%', md: '540px' }} height={{ sm: '476px', md: '20rem' }} direction={{ base: 'column', md: 'row' }} bg={'white'} boxShadow={'2xl'} padding={4}>
				<Flex flex={1} bg="blue.200">
					<Image objectFit="cover" boxSize="100%" src={pet.picture} />
				</Flex>
				<Stack flex={1} flexDirection="column" justifyContent="center" alignItems="center" p={1} pt={2}>
					<Heading fontSize={'2xl'} fontFamily={'body'}>
						{pet.name}
					</Heading>
					<Text fontWeight={600} color={'green.500'} size="sm" mb={4}>
						{pet.statusString}
					</Text>
					<Text textAlign={'center'} color={'gray.900'} px={3}>
						{pet.bio}
					</Text>
					<Stack align={'center'} justify={'center'} direction={'row'}>
						<Badge px={2} py={1} bg={'gray.100'} fontWeight={'400'}>
							{pet.typeDisplay}
						</Badge>
						<Badge px={2} py={1} bg={'gray.100'} fontWeight={'400'}>
							{pet.color}
						</Badge>
						<Badge px={2} py={1} bg={'gray.100'} fontWeight={'400'}>
							{pet.height} cm
						</Badge>
						<Badge px={2} py={1} bg={'gray.100'} fontWeight={'400'}>
							{pet.weight} lbs
						</Badge>
					</Stack>

					<Stack width={'100%'} mt={'2rem'} direction={'row'} padding={2} justifyContent={'space-between'} alignItems={'center'}>
						<Button
							flex={1}
							fontSize={'sm'}
							rounded={'full'}
							bg={'gray.200'}
							_focus={{
								bg: 'gray.300',
							}}
							onClick={handleFosterPet}
							disabled={fosterBtnDis}
						>
							Foster
						</Button>

						<Button
							flex={1}
							fontSize={'sm'}
							rounded={'full'}
							bg={'green.400'}
							color={'white'}
							boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
							_hover={{
								bg: 'green.500',
							}}
							_focus={{
								bg: 'green.500',
							}}
							onClick={handleAdoptPet}
							isDisabled={adoptBtnDis}
						>
							Adopt
						</Button>
						<Button
							flex={1}
							fontSize={'sm'}
							rounded={'full'}
							bg={'green.700'}
							color={'white'}
							boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
							_hover={{
								bg: 'green.900',
							}}
							_focus={{
								bg: 'green.1200',
							}}
							onClick={handleReturnPet}
							isDisabled={returnBtnDis}
						>
							Return
						</Button>
					</Stack>
					<Tooltip hasArrow bg="gray.300" color="black" label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
						<IconButton aria-label="Search database" colorScheme={'green'} variant="outline" size={'xs'} isActive={isFavorite} icon={<StarIcon color={'black'} size={'xs'} />} onClick={isFavorite ? removeFromFavorite : favoritePet} />
					</Tooltip>
					{error && <Badge colorScheme="red">{error}</Badge>}
				</Stack>
			</Stack>
		</Center>
	)
}

export default PetModal
