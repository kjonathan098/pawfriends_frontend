import axios from 'axios'
import {useEffect, useState} from 'react'

const useFetch = (url, options) => {
	const [data, setData] = useState(null)
	const [fetchLoading, setLoading] = useState(true)
	const [error, setError] = useState()

	const finalOptions = {
		enabled: true,
		...options,
	}
	useEffect(() => {
		const fetch = async () => {
			try {
				const data = await axios.get(url, {headers: {Authorization: localStorage.getItem('access_token')}})
				setData(data)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}
		fetch()
	}, [url])

	const reFetch = async () => {
		setLoading(true)
		try {
			const data = await axios.get(url, {headers: {Authorization: localStorage.getItem('access_token')}})
			setData(data)
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}
	return {data, fetchLoading, error, reFetch, setData}
}

export default useFetch
