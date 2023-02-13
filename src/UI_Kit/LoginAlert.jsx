import { Box, Center, Heading } from '@chakra-ui/react'
import { WarningTwoIcon } from '@chakra-ui/icons'

import React from 'react'

const LoginAlert = () => {
	return (
		<Center>
			<Box textAlign="center" py={10} px={6}>
				<WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
				<Heading as="h2" size="xl" mt={6} mb={2}>
					Please Login
				</Heading>
			</Box>
		</Center>
	)
}

export default LoginAlert
