import {stripUnits} from './stripUnits'
class vars {
	static baseSpacing = '1.5em'
	static smallSpacing = `${stripUnits(vars.baseSpacing).divide(2).groupUnit()}`
}