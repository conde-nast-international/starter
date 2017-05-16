import { loadFontGroup } from './utils/load-font'

const didot = [
	{ family: 'GFS Didot', weight: 300 },
	{ family: 'GFS Didot', weight: 700 },
]

const opensans = [
	{ family: 'Open Sans', weight: 400 },
	{ family: 'Open Sans', weight: 700 },
]

loadFontGroup(didot)
loadFontGroup(opensans)
