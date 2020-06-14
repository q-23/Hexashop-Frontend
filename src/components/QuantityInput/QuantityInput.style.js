import styled from "styled-components";
import { LIGHT_DARK, DARK_GRAY } from 'assets/css_variables/colors';

const Input = styled.input`
	padding: 10px;
	border: 1px solid ${LIGHT_DARK};
	color: ${DARK_GRAY};
	border-radius: 3px; 
	font-size: 1.5em;
	width: 5em;
	text-align: center;
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

export { Input }