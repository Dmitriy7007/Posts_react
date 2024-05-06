type TBreakSize = 4 | 8 | 12 | 16 | 20
type TDisplays = 'mobile' | 'tablet' | 'desktop'

export interface IBreakProps {
	size: TBreakSize
	mobileSize?: TBreakSize
	tabletSize?: TBreakSize
	desktopSize?: TBreakSize
	inline?: boolean
	top?: boolean
}
