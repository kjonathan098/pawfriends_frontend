import React from 'react'
import {chakra, Box, Icon, Flex, useColorModeValue, Center} from '@chakra-ui/react'

import {BsLightningFill} from 'react-icons/bs'

const ErrorAlert = () => {
	return (
		<Flex w="full" bg="white.600" p={50} alignItems="center" justifyContent="center">
			<Flex maxW="sm" w="full" mx="auto" bg="white" shadow="md" rounded="lg" overflow="hidden">
				<Flex justifyContent="center" alignItems="center" w={12} bg="red.500">
					<Icon as={BsLightningFill} color="white" boxSize={6} />
				</Flex>

				<Box mx={-3} py={2} px={4}>
					<Box mx={3}>
						<chakra.span color={useColorModeValue('red.500', 'red.400')} fontWeight="bold">
							Error
						</chakra.span>
						<chakra.p color={useColorModeValue('gray.600', 'gray.200')} fontSize="sm">
							Please try again later
						</chakra.p>
					</Box>
				</Box>
			</Flex>
		</Flex>
	)
}

export default ErrorAlert
