import React, { useEffect } from 'react'
import useToastMessage from '../UI_Kit/ToastMessage'

export default function useServerWarning() {
	const { showToast } = useToastMessage()

	showToast('Delay Message', ' Render server hosting spins down a Free web service that goes 15 minutes without receiving inbound traffic. Spinning up a service takes a few seconds, which causes a noticeable delay for incoming requests until the service is back up and running', 'warning', 'freeze')
	showToast('', 'Please be patient when loading or signin in', 'warning', 'freeze')
}
