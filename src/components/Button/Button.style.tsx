import * as React from 'react'
import {css} from 'styled-components'
import {ButtonProps} from "./Button";
import {colors, vars} from "./Button.theme";

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
`
