import {transparentize, darken} from 'polished'

export class colors {
	private static dodgerBlue = '#2D8CF0'
	private static silver = '#cccccc'
	private static iron = '#dddee1'
	private static pictonBlue = '#2baee9'
	private static mountainMeadow = '#19be6b'
	private static orangePeel = '#ff9900'
	private static pomegranate = '#ed3f14'
	private static black = '#000'
	private static white = '#fff'
	private static alto = '#dddddd'
	private static paleSky = '#6b717f'

	static info = colors.pictonBlue
	static warning = colors.orangePeel
	static success = colors.mountainMeadow
	static error = colors.pomegranate

	static primary = colors.dodgerBlue
	static secondary = colors.silver
	static accent = colors.dodgerBlue
	static shadow = transparentize(0.125, colors.black)
	static background = colors.white
	static text = darken(0.85, colors.paleSky)
	static textWeak = colors.black
	static textStrong = colors.black
	static border = colors.alto
	static textInvert = transparentize(0.75, colors.background)
	static textStrongInvert = colors.background
	static textHeading = colors.black
}