import {stripUnits} from './stripUnits'
import modularScale from "polished/lib/helpers/modularScale";
import {colors} from "./colors";

export class settings {
	static baseSpacing = '1.5em'
	static smallSpacing = `${stripUnits(settings.baseSpacing).divide(2).groupUnit()}`
	static borderRadius = '3px'
	static lineHeight = 1.5
	static fontFamily = '"Helvetica Neue", "Helvetica", "Arial", sans-serif'
	static fontSize = modularScale(0)
	static fontWeight = {
		light: 300,
		regular: 400,
		bold: 600
	}
	static border = `1px solid ${colors.border}`
	static transition = '150ms linear'
	static headingFontFamily = '"Hoefler Text", "Baskerville Old Face", "Garamond", "Times New Roman", serif'
	static headingLineHeight = 1.2
}