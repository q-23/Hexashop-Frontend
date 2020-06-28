import React from 'react';

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

const Input = ({ label, valid, invalid, ...props }) => {

	return (
		<InputContainer>
			<InputLabel valid={valid} invalid={invalid} disabled={props.disabled}>
				{label}
			</InputLabel>
			<StyledInput valid={valid} invalid={invalid} {...props}/>
		</InputContainer>
	)
}

export default Input;
