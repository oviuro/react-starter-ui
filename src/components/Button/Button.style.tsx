import * as React from 'react'
import {css} from 'styled-components'
import {ButtonProps} from "./Button";
import {mixins, vars} from "./Button.theme";

const { colors } = vars

export const button = ({}: ButtonProps) => css`
	appearance: none;
	border: 0;
	cursor: pointer;
	display: inline-block;
	-webkit-font-smoothing: antialiased;
	line-height: 1;
	text-align: center;
	text-decoration: none;
	user-select: none;
	vertical-align: middle;
	white-space: nowrap;
	outline: none;
	background: none;
	border-radius: ${vars.borderRadius};
	padding: ${vars.padding};
	transition: ${vars.transition};
	
	&:disabled {
		cursor: not-allowed;
		${disabled}
	}
	
	${props}
`

const disabled = css`
	color: ${colors.disabled};
	border: ${vars.border};
	background-color: ${colors.disabled_background};
	&:hover {
		color: ${colors.disabled_hover};
		border: ${vars.border};
		background-color: ${colors.disabled_background_hover};
	}
`

const props = (props: ButtonProps) => css`
	${!props.text && mixins.colored(colors.secondary, 'black')}
	${props.primary && mixins.colored(colors.primary)}
	${props.info && mixins.colored(colors.info)}
	${props.success && mixins.colored(colors.success)}
	${props.warning && mixins.colored(colors.warning)}
	${props.error && mixins.colored(colors.error)}
	${props.ghost && ghost}
	${props.dashed && dashed}
	${props.text && text}
	${props.full && 'width: 100%'}
`

const ghost = css`
	background-color: transparent;
	border: ${vars.border};
	color: ${colors.text};
	&:hover {
		background-color: transparent;
		border-color: ${colors.primary};
		color: ${colors.primary};
	}
	${mixins.focus(colors.primary)};
`

const dashed = css`
	${ghost};
	border: 1px dashed ${colors.border};
`

const text = css`
	color: ${colors.text};
	&:hover {
		color: ${colors.primary}
	}
`
