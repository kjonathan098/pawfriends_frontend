import {Button, Center, HStack, Input, PopoverCloseButton, PopoverHeader, Radio, RadioGroup, Stack, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Text} from '@chakra-ui/react'
import React, {useContext, useEffect} from 'react'
import {useState} from 'react'
import petsContext from '../../Context/AuthContext/PetsContext/PetsContex'
import useForm from '../../CustomHooks/apiCalls/useForm'
import useToastMessage from '../../UI_Kit/ToastMessage'

const createEvent = (name, value) => {
	return {persist: () => {}, target: {name: name, value: value}}
}

const AdvanceSearch = ({setFlag}) => {
	const initialState = {type: '-1', adoptionStatus: '-1', weight: [0, 100], height: [0, 110]}

	const [values, handleChange, setForm] = useForm(initialState)
	const {fetchQuery, fetchAllPets} = useContext(petsContext)
	const [isFetching, setIsFetching] = useState(false)
	const {errorToast} = useToastMessage()

	const handleQuery = async (e) => {
		setIsFetching(true)

		const params = {
			name: values.name,
			type: values.type,
			adoption_status: values.adoptionStatus,
			weight_start: values.weight[0],
			weight_end: values.weight[1],
			height_start: values.height[0],
			height_end: values.height[1],
		}

		if (params.type === '-1') params.type = null
		if (params.adoption_status === '-1') params.adoption_status = null

		try {
			const qResponse = await fetchQuery({params})
			if (!qResponse) {
				return errorToast('No Match Found')
			}
			setFlag.off()
			setIsFetching(false)
		} catch (e) {
			setIsFetching(false)
		}
	}

	return (
		<>
			<PopoverCloseButton onClick={setFlag.off} />
			<Center>
				<PopoverHeader mb={5} fontWeight={'400'}>
					Advance Search
				</PopoverHeader>
			</Center>
			<Center>
				<Input placeholder="Search Name" name="name" onChange={handleChange} value={values.name} width={'100%'} />
			</Center>
			<HStack mt={5}>
				<RadioGroup
					name="type"
					onChange={(newTypeValue) => {
						const event = createEvent('type', newTypeValue)
						handleChange(event)
					}}
					w={'50%'}
					value={values.type}
				>
					Search On
					<Stack direction="row" w={'50%'}>
						<Radio value="-1">All</Radio>
						<Radio value="1">Dogs</Radio>
						<Radio value="2">Cats</Radio>
					</Stack>
				</RadioGroup>{' '}
				<RadioGroup
					mt={5}
					w={'50%'}
					name="adoptionStatus"
					onChange={(newValue) => {
						const event = createEvent('adoptionStatus', newValue)
						handleChange(event)
					}}
					value={values.adoptionStatus}
				>
					Pet Adoption Status
					<Stack direction="row">
						<Radio value="-1">All</Radio>
						<Radio value="0">Available</Radio>
						<Radio value="1">Fostered</Radio>
						<Radio value="2">Adopted</Radio>
					</Stack>
				</RadioGroup>{' '}
			</HStack>
			<Text mt={5}>
				{' '}
				Search Weight: {values.weight[0]}lbs - {values.weight[1]}lbs
			</Text>
			<RangeSlider
				value={values.weight}
				min={0}
				max={100}
				step={5}
				name="weight"
				onChange={(newValue) => {
					const event = createEvent('weight', newValue)
					handleChange(event)
				}}
			>
				<RangeSliderTrack bg="green.900">
					<RangeSliderFilledTrack bg="green.400" />
				</RangeSliderTrack>
				<RangeSliderThumb boxSize={6} index={0} shadow={'lg'} />
				<RangeSliderThumb boxSize={6} index={1} shadow={'lg'} />
			</RangeSlider>
			<Text mt={5}>
				Search Height: {values.height[0]}cm - {values.height[1]}cm
			</Text>
			<RangeSlider
				value={values.height}
				min={0}
				max={110}
				step={5}
				name="height"
				onChange={(newValue) => {
					const event = createEvent('height', newValue)
					handleChange(event)
				}}
			>
				<RangeSliderTrack bg="green.900">
					<RangeSliderFilledTrack bg="green.400" />
				</RangeSliderTrack>
				<RangeSliderThumb boxSize={6} index={0} shadow={'lg'} />
				<RangeSliderThumb boxSize={6} index={1} shadow={'lg'} />
			</RangeSlider>
			<Button onClick={handleQuery} mt={5}>
				Search
			</Button>
		</>
	)
}

export default AdvanceSearch
