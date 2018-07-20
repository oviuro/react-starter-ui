import {shade, tint, transparentize} from 'polished'
import {colors} from '../../helpers/colors'
import {settings} from '../../helpers/settings'
import {css} from "styled-components";

export class vars {
	static borderRadius = settings.borderRadius
	static padding = `${settings.smallSpacing} ${settings.baseSpacing}`
	static transition = `all ${settings.transition}`
	static border = settings.border
	static colors = {
		primary: colors.primary,
		secondary: colors.secondary,
		info: colors.info,
		success: colors.success,
		warning: colors.warning,
		error: colors.error,
		disabled: shade(0.7, colors.border),
		disabled_hover: shade(0.8, colors.border),
		disabled_background: tint(0.5, colors.border),
		disabled_background_hover: tint(0.7, colors.border),
		text: colors.text,
		border: colors.border
	}

}

export class mixins {
	static colored = (color: string, textColor: string = 'white') => css`
		color: ${textColor};
		background-color: ${color};
		&:hover {
			background-color: ${shade(0.9, color)}
		}
		${mixins.focus(color)}
	`
	static focus = (color: string) => css`
		&:focus { box-shadow: 0 0 0 3px ${ transparentize(0.8, color) } };
	`
}