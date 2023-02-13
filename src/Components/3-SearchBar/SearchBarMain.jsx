import {Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Select, Tooltip, useBoolean, useDisclosure, VStack} from '@chakra-ui/react'
import React, {useContext} from 'react'
import {SearchIcon} from '@chakra-ui/icons'
import AdvanceSearch from './AdvanceSearch'
import petsContext from '../../Context/AuthContext/PetsContext/PetsContex'

const SearchBarMain = () => {
	const [flag, setFlag] = useBoolean()
	const [isOpen, setIsOpen] = React.useState(false)

	const {fetchQuery} = useContext(petsContext)

	const handleDisplay = async (e) => {
		if (e.target.value === '-1') return fetchQuery({params: null})
		fetchQuery({params: {type: e.target.value}})
	}

	return (
		<>
			<VStack>
				<Popover isOpen={flag}>
					<PopoverTrigger>
						<Flex height={10} width={200} mb={2}>
							<Select onChange={handleDisplay}>
								<option value="-1">Display All</option>
								<option value="1">Display Dogs</option>
								<option value="2">Display Cats</option>
							</Select>
							<Tooltip label="Advance Search">
								<Button onClick={setFlag.toggle}>
									<SearchIcon />
								</Button>
							</Tooltip>
						</Flex>
					</PopoverTrigger>
					<PopoverContent w={{md: `800px`, sm: 'auto'}} padding={5}>
						<AdvanceSearch setFlag={setFlag} />
					</PopoverContent>
				</Popover>
			</VStack>
		</>
	)
}

export default SearchBarMain
