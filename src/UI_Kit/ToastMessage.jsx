import {useToast} from '@chakra-ui/react'
import React from 'react'

function useToastMessage() {
	const toast = useToast()

	const showToast = (title, description, status) => {
		toast({
			title: title || null,
			description: description || null,
			status: status || 'success',
			duration: 9000,
			isClosable: true,
		})
		return <div></div>
	}

	const errorToast = (message) => {
		toast({
			title: 'Error',
			description: message,
			status: 'error',
			duration: 9000,
			isClosable: true,
		})
	}
	return {showToast, errorToast}
}

export default useToastMessage
