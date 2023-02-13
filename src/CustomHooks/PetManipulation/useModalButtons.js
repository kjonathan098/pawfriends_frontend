import {useContext, useEffect, useState} from 'react'
import authContext from '../../Context/AuthContext/AuthContext'
import petsContext from '../../Context/AuthContext/PetsContext/PetsContex'

function useModalButtons(pet) {
	const [fosterBtnDis, setFosterBtnDis] = useState(false)
	const [adoptBtnDis, setAdoptBtnDis] = useState(false)
	const [returnBtnDis, setReturnBtnDis] = useState(true)

	const {userAdoptedPet, fetchUserPets, loadingUserPets} = useContext(petsContext)
	const {isLoggedIn} = useContext(authContext)

	// isDisable

	/*
    El boton de adopt es true si 

        - El pet status si either 
            -fostered
            - available

        - Si el status es adopted 

            - button is disable 


    RETURN 

        - Pet status es 0
            - disable 

        - ONLY TRUE if user has adopted or fostered this pet 

            -EITHER ADOPTED OR FOSTERED BY 

       */

	const btnHandler = (res) => {
		switch (pet.adoptionStatus) {
			case 0:
				setFosterBtnDis(false)
				setAdoptBtnDis(false)
				setReturnBtnDis(true)

				// isDisable NO
				break
			case 1:
				setFosterBtnDis(true)
				setAdoptBtnDis(false)
				setReturnBtnDis(true)

				// If user adopted pet make return btn available

				if (res) setReturnBtnDis(false)

				// isDisable Yes
				break
			case 2:
				setFosterBtnDis(true)
				setAdoptBtnDis(true)
				setReturnBtnDis(true)
				if (res) setReturnBtnDis(false)

				// isDisable Yes
				break
			default:
				setFosterBtnDis(null)
		}
	}

	useEffect(() => {
		if (!isLoggedIn) {
			setFosterBtnDis(false)
			setAdoptBtnDis(false)
			setReturnBtnDis(true)
			return
		}

		if (!userAdoptedPet) return btnHandler()
		const res = userAdoptedPet.find((obj) => obj._id === pet._id)
		btnHandler(res)
	}, [userAdoptedPet])

	return {fosterBtnDis, adoptBtnDis, returnBtnDis, btnHandler}
}

export default useModalButtons
