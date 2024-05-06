type TSizes = 28 | 20 | 16 | 14 | 12 | 10

export interface ITextProps {
	As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'div'
	children?: React.ReactNode
	size: TSizes
	mobileSize?: TSizes
	tabletSize?: TSizes
	desktopSize?: TSizes
	color?: EColor
	bold?: boolean
}

export enum EColor {
	black = 'black',
	orange = 'orange',
	green = 'green',
	white = 'white',
	grayF4 = 'grayF4',
	greyF3 = 'greyF3',
	greyEC = 'greyEC',
	greyD9 = 'greyD9',
	greyC4 = 'greyC4',
	grey99 = 'grey99',
	grey66 = 'grey66',
}
