import * as React from 'react'
import {HTMLProps, StatelessComponent} from "react";

type ButtonProps = HTMLProps<HTMLButtonElement> & {
	primary?: boolean
}

const ButtonSFC: StatelessComponent<ButtonProps> = ({children, ...props}) => (
	<button {...props}>{children}</button>
)

export const Button = ButtonSFC
