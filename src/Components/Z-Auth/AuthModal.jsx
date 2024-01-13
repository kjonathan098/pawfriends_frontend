import React, { useContext, useState } from 'react'
import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react'
import loginModalContext from '../../Context/AuthContext/LoginModalContext/LoginModalContext'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

const AuthModal = () => {
	const [formContent, setFormContent] = useState(true)
	const { isOpen, onClose } = useContext(loginModalContext)
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>{formContent ? <LoginForm setFormContent={setFormContent} /> : <RegistrationForm setFormContent={setFormContent} />}</ModalContent>
		</Modal>
	)
}

export default AuthModal
