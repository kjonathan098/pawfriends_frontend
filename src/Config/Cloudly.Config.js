const cloudName = 'dqfpsjdew'

const cloudlyRequest = {
	uploadPic: async (petPicture) => {
		const data = new FormData()
		data.append('file', petPicture)
		data.append('upload_preset', 'ml_default')
		data.append('cloud_name', cloudName)

		// Upload image to Cloudinary
		try {
			const rawResponse = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {method: 'post', body: data})
			const jsonResponse = await rawResponse.json()
			return jsonResponse.url
		} catch (error) {
			return {error: true, message: 'Picture upload failed.. Please try again'}
		}
	},
}

export default cloudlyRequest
