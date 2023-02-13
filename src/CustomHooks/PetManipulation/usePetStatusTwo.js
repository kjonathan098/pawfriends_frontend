import { useState } from 'react'

const usePetStatusTwo = () => {
	const [petStatusloading, setPetStatusloading] = useState(true)
	const [petStatusStringArray, setPetStatusStringArray] = useState([])

	const petStatusString = (pets) => {
		let petStatus = []
		for (const pet of pets) {
			switch (pet.adoptionStatus) {
				case 0:
					pet.adoptionStatus = 'Available'
					petStatus = [...petStatus, pet]
					setPetStatusStringArray(petStatus)
					break
				case 1:
					pet.adoptionStatus = 'Fostered'
					petStatus = [...petStatus, pet]
					setPetStatusStringArray(petStatus)
					break
				case 2:
					pet.adoptionStatus = 'Adopted'
					petStatus = [...petStatus, pet]
					setPetStatusStringArray(petStatus)
					break
			}
		}
		setPetStatusloading(false)
	}

	return { petStatusStringArray, petStatusloading, petStatusString }
}

export default usePetStatusTwo
