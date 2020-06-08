import styled from 'styled-components';
import { DARK_GRAY } from "assets/css_variables/colors";

const Icon = styled.i`
	font-size: ${({ size }) => size || '1em'};
	${({ padding }) => `padding: ${padding}`};
	${({ color }) => `color: ${color || DARK_GRAY};`};
	
`;

export default Icon;
