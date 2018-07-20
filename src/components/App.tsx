import * as React from 'react'
import {Fragment} from 'react'
import {Button} from "./Button/Button";
import {injectGlobal} from "styled-components";

injectGlobal`
	button {
		maring-right: 10px;
	}
`

export const App = () => (
	<Fragment>
		<Button>Hello</Button>
		<Button primary>Hello</Button>
		<Button info>Hello</Button>
		<Button error>Hello</Button>
		<Button warning>Hello</Button>
		<Button success>Hello</Button>
		<Button ghost>Hello</Button>
		<Button dashed>Hello</Button>
		<Button text>Hello</Button>
		<br/><br/>
		<Button full>Hello</Button>
	</Fragment>
)