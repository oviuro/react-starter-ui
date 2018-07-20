import * as React from 'react'
import {shallow} from  'enzyme'
import {Button} from './Button'
import styled from 'styled-components'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('Button component', () => {
	describe('ui', () => {
		it('needs to render without props', () => {
			const button = shallow(<Button />)
			expect(button).toBeDefined()
		})

		it('needs to render with children', () => {
			const button = shallow(<Button>Button Text</Button>)
			expect(button.children().text()).toEqual('Button Text')
		})

		it('not render with children when not passed', () => {
			const button = shallow(<Button />)
			expect(button.children()).toHaveLength(0)
		})

		it('needs to render with primary', () => {
			const button = shallow(<Button primary/>)
			expect(button.props().primary).toBeTruthy()
		})

		it('not render with primary when not passed', () => {
			const button = shallow(<Button />)
			expect(button.props().primary).toBeFalsy()
		})

		it('needs to render with correct theme', () => {})

		it('needs to match snapshot for styles', () => {
			const tree = renderer.create(<Button primary/>).toJSON()
			expect(tree).toMatchSnapshot()
		})
	})
})
