import * as React from 'react'
import {HTMLProps, ReactNode, SFC} from "react";
import styled from "styled-components";
import {button} from './Button.style'

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
	children?: ReactNode
	primary?: boolean
	info?: boolean
	success?: boolean
	warning?: boolean
	error?: boolean
	text?: boolean
	ghost?: boolean
	dashed?: boolean
	circle?: number | boolean
	small?: boolean
	large?: boolean
	full?: boolean
	disabled?: boolean
}

const ButtonSFC: SFC<ButtonProps> = ({children, ...props}) => (
	<button {...props}>{children}</button>
)

export const Button = styled(ButtonSFC)`
	${button}
`

