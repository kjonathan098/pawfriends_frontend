import { useState } from 'react'

function usePetStatus(pet) {
	const [petStatus, setPetStatus] = useState()

	switch (pet.adoptionStatus) {
		case 2:
			pet.statusString = 'Adopted'
			break
		case 1:
			pet.statusString = 'Fostered'
			break

		case 0:
			pet.statusString = 'Available'
			break
	}

	return { setPetStatus, petStatus }
}

export default usePetStatus
