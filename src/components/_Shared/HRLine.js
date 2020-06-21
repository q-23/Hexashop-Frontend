import styled from 'styled-components';
import { LIGHT_GRAY } from "assets/css_variables/colors";

const HRLine = styled.hr`
	display: block; 
	height: 1px;
	border: 0; 
	border-top: 1px solid ${LIGHT_GRAY};
	margin: 1em 0; 
	padding: 0;
`;

export default HRLine;
