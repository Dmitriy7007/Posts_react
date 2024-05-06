type TSizes = 28 | 20 | 16 | 14 | 12 | 10

export enum EIcons {
	block = 'BlockIcon',
	comments = 'CommentsIcon',
	menu = 'MenuIcon',
	save = 'SaveIcon',
	shared = 'SharedIcon',
	warning = 'WarningIcon',
}

export interface IIconsProps {
	name?: EIcons
	size?: TSizes
}
