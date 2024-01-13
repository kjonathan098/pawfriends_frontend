import { useContext } from 'react'
import handlePetRequest from '../../Config/Pet.Config'
import petsContext from '../../Context/AuthContext/PetsContext/PetsContex'

function useAdoptPet(pet) {
	const { userAdoptedPet, setUserAdoptedPet } = useContext(petsContext)

	const adoptPet = async () => {
		const res = await handlePetRequest.adoptPet(pet)
		if (res.error) return res
		pet.adoptionStatus = 2

		setUserAdoptedPet([...userAdoptedPet, pet])

		return res

		// is adopted by user true
	}

	const fosterPet = async () => {
		const res = await handlePetRequest.fosterPet(pet)
		if (res.error) return res
		pet.adoptionStatus = 1
		setUserAdoptedPet([...userAdoptedPet, pet])
		return res
	}

	const returnPet = async () => {
		const res = await handlePetRequest.returnPet(pet)
		if (res.error) return res
		// Find Pet in user's pet array and splice it
		const data = userAdoptedPet.find((res) => res._id === pet._id)
		const index = userAdoptedPet.indexOf(data)
		userAdoptedPet.splice(index, 1)
		pet.adoptionStatus = 0
		setUserAdoptedPet([...userAdoptedPet])

		return res
	}
	return { adoptPet, returnPet, fosterPet }
}

export default useAdoptPet
