import {useState} from 'react'

function usePetType() {
	const [petTypeLoading, setPetTypeLoading] = useState(true)
	const [petTypeStringArray, setPetTypeStringArray] = useState([])

	const handleType = (pets) => {
		let petType = []

		for (const pet of pets) {
			switch (pet.type) {
				case 1:
					pet.typeDisplay = 'Dog'
					petType = [...petType, pet]
					setPetTypeStringArray(petType)
					break
				case 2:
					pet.typeDisplay = 'Cat'
					petType = [...petType, pet]
					setPetTypeStringArray(petType)
					break
				default:
					pet.typeDisplay = 'Dragon'
					petType = [...petType, pet]
					setPetTypeStringArray(petType)
			}
		}
		setPetTypeLoading(false)
	}

	return {petTypeLoading, petTypeStringArray, handleType}
}

export default usePetType
