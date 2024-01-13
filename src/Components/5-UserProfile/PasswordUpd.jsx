import React, { useState } from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, FormLabel, Input, Button } from '@chakra-ui/react'
import useForm from '../../CustomHooks/apiCalls/useForm'
import useToastMessage from '../../UI_Kit/ToastMessage'
import userConfig from '../../Config/User.Config'

const PasswordUpd = ({ userInfo }) => {
	const [values, handleChange, setState] = useForm()
	const [loading, setLoading] = useState()
	const { showToast, errorToast } = useToastMessage()

	const updPassword = async () => {
		setLoading(true)

		if (userInfo.name === 'Demo') return errorToast('Not allowed to update password')

		if (Object.keys(values).length !== 3) {
			return errorToast('Details not filled ')
		}

		if (values.rePassword !== values.passwordValidation) {
			return errorToast('New Password & Re-type New Password mismatch')
		}

		delete values.passwordValidation

		const res = await userConfig.updUserPassword(values)
		if (res.error) {
			return errorToast('Error')
		}

		values.rePassword = null
		values.password = null
		values.passwordValidation = null

		return showToast('', 'Password updated')
	}

	return (
		<Accordion allowToggle borderRight={'10px'} borderColor="black.200" bg={'#f2f2f2'}>
			<AccordionItem>
				<h2>
					<AccordionButton>
						<Box flex="1" textAlign="left">
							Change Password
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel borderColor="black.200">
					<FormLabel>Current Password</FormLabel>
					<Input placeholder="Current Password" _placeholder={{ color: 'gray.500' }} type="password" name="password" onChange={handleChange} mb={3} />
					<FormLabel>New Password</FormLabel>
					<Input placeholder="New Password" _placeholder={{ color: 'gray.500' }} type="password" name="rePassword" onChange={handleChange} mb={3} />
					<FormLabel>Re-type New Password</FormLabel>
					<Input placeholder="Re-type Password" _placeholder={{ color: 'gray.500' }} type="password" name="passwordValidation" onChange={handleChange} mb={3} />
					<Button
						bg={'blue.400'}
						color={'white'}
						w="50%"
						_hover={{
							bg: 'blue.500',
						}}
						onClick={updPassword}
					>
						Update Password
					</Button>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	)
}

export default PasswordUpd
