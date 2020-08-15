import React, { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';
import * as palette from 'assets/css_variables/colors'

const StyledInput = styled.input`
		border: 0;
		border-bottom: 1px solid ${({ valid, invalid, disabled }) => valid ? palette.VALID_GREEN : invalid ? palette.ERROR_RED : disabled ? palette.LIGHT_GRAY : palette.DARK_GRAY};  
		background: transparent;
		width: 100%;
		padding: 1rem 0 .5rem 0;
		font-size: 1rem;
		color: ${({disabled}) => disabled ? palette.LIGHT_GRAY : 'black'};
		&:focus { 
		 border:none;
		 outline:none;
		 border-bottom:1px solid ${palette.DARK_BLUE};
		}
	`;

const InputContainer = styled.div`
  	position: relative;
		margin-bottom: 1.25rem;
		width: 100%;
	`;

const InputLabel = styled.label`
		position:absolute;
		top: 0;
		left:0;
		font-size: .8rem;
		color: ${({ valid, invalid, disabled }) => valid ? palette.VALID_GREEN : invalid ? palette.ERROR_RED : disabled ? palette.LIGHT_GRAY : palette.DARK_GRAY};
		transition: all 0.5s ease-in-out;
	`;

const ValidationError = styled.div`
	position: absolute;
	top: -${props => props.height}px;
	font-size: .8rem;
	padding: 5px 10px;
	background-color: white;
	color: ${palette.ERROR_RED};
	border: 1px solid ${palette.LIGHT_GRAY};
	border-radius: 5px;
	opacity: ${props => props.visible ? 1 : 0};
	transition: opacity .5s ease-in-out;
	&:after {
		display: inline-block;
		position: absolute;
		content: '';
		width: 10px;
		height: 10px;
		background-color: white;
		bottom: -6px;
		left: 4px;
		border-bottom: 1px solid ${palette.LIGHT_GRAY};
		border-right: 1px solid ${palette.LIGHT_GRAY};
		transform: rotate(45deg);
	}
`

const Input = ({ label, valid, invalid, error, ...props }) => {
	const [offsetHeight, setOffsetHeight] = useState(28);
	const placeholderRef = useRef();

	useEffect(() => {
		setOffsetHeight(placeholderRef.current.offsetHeight);
	}, [error])

	return (
		<InputContainer>
			<ValidationError key={error} visible={!!error} ref={placeholderRef} height={offsetHeight}>
				{error}
			</ValidationError>
			<InputLabel valid={valid} invalid={invalid} disabled={props.disabled}>
				{label}
			</InputLabel>
			<StyledInput valid={valid} invalid={invalid} {...props}/>
		</InputContainer>
	)
}

export default Input;
