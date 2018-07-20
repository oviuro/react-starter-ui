import {map, join, divide, add, round, subtract, multiply, sum, max, floor, ceil, min, split, isNumber, isString} from 'lodash'
import {em, rem, stripUnit} from 'polished'

type UnitAbsoluteLengths = 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc'
type UnitRelativeLengths = 'em' | 'ex' | 'ch' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%'

type UnitLengths = UnitAbsoluteLengths | UnitRelativeLengths | ''

export const stripUnits = (value: string, options:{debug: boolean} = {debug: false}) => {
	let unitsRegex: RegExp = /[+-]?\d+(?:\.\d+)?/g
	let units: number[] = map(value.match(unitsRegex), Number)
	let unitType = split(value.replace(unitsRegex, ''), ' ')
	return {
		print() {
			console.log(units)
			console.log(unitType)
			return this
		},
		px(base: number | string = 16) {
			map(unitType, (type,index) => {
				if(type === 'px') {
					options.debug && console.warn(`${units[index]}px can\'t be transformed to ${type}`)
					return
				}
				let strip = (isString(base) ? stripUnit(base).toString() : null);

				units[index] = multiply(units[index], isNumber(base) ? base : parseFloat(strip))
				unitType[index] = 'px'
			})
			return this
		},
		em(base: number | string = 16) {
			map(unitType, (type,index) => {
				if(type === 'em') {
					options.debug && console.warn(`${units[index]}em can\'t be transformed to ${type}`)
					return
				}
				units[index] = parseFloat(em(units[index], base))
				unitType[index] = 'em'
			})
			return this
		},
		rem(base: number | string = 16) {
			map(unitType, (type,index) => {
				if(type === 'em' || type === 'rem') {
					options.debug && console.warn(`${units[index]}em can\'t be transformed to ${type}`)
					unitType[index] = 'rem'
					return
				}
				units[index] = parseFloat(rem(units[index], base))
				unitType[index] = 'rem'
			})
			return this
		},
		toString(): number[] {
			return units
		},
		add(value: number | number[]) {
			typeof value === "number" ?
				units = map(units, unit => add(unit, value)) :
				units = map(units, (unit, index) => add(unit, value[index]))
			return this
		},
		divide(value: number | number[]) {
			typeof value === "number" ?
				units = map(units, unit => divide(unit, value)) :
				units = map(units, (unit, index) => divide(unit, value[index]))
			return this
		},
		subtract(value: number | number[]) {
			typeof value === "number" ?
				units = map(units, unit => subtract(unit, value)) :
				units = map(units, (unit, index) => subtract(unit, value[index]))
			return this
		},
		multiply(value: number | number[]) {
			typeof value === "number" ?
				units = map(units, unit => multiply(unit, value)) :
				units = map(units, (unit, index) => multiply(unit, value[index]))
			return this
		},
		ceil(precision?: number) {
			units = map(units, unit => ceil(unit, precision))
			return this
		},
		round(precision?: number) {
			units = map(units, unit => round(unit, precision))
			return this
		},
		floor(precision?: number) {
			units = map(units, unit => floor(unit, precision))
			return this
		},
		sum() {
			units = [sum(units)]
			return this
		},
		max() {
			units = [max(units)]
			return this
		},
		min() {
			units = [min(units)]
			return this
		},
		groupUnit(value?: UnitLengths): string {
			let groupUnit = map(units, (unit, index) => `${unit}${value || unitType[index]}`)
			return join(groupUnit, ' ')
		}
	}
}