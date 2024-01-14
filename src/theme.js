import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	styles: {
		global: {
			body: {
				scrollbarWidth: 'none', // For Firefox
				msOverflowStyle: 'none', // For Internet Explorer and Edge
				'&::-webkit-scrollbar': {
					display: 'none', // For Chrome, Safari and Opera
				},
			},
			'body[data-chakra-ui-light]': {
				paddingRight: '0 !important',
			},
		},
	},
})

export default theme
