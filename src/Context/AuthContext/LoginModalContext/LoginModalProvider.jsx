import {useDisclosure} from '@chakra-ui/react'
import React from 'react'
import LoginModalContext from './LoginModalContext'

const LoginModalProvider = ({children}) => {
	const {isOpen, onOpen, onClose} = useDisclosure()
	return <LoginModalContext.Provider value={{isOpen, onOpen, onClose}}>{children}</LoginModalContext.Provider>
}

export default LoginModalProvider
