import {useState} from 'react'

function useSearch() {
	const [searchInput, setSearchInput] = useState()

	const handleUserInput = (e) => {
		setSearchInput(e.target.value)
	}
	return {searchInput, handleUserInput}
}

export default useSearch
