import styled from 'styled-components';
import { DARK_GRAY } from "../../assets/styles/colors";

const Icon = styled.i`
	font-size: ${({ size }) => size || '1rem'};
	${({ padding }) => `padding: ${padding}`};
	${({ color }) => `color: ${color || DARK_GRAY};`};
	
`;

export default Icon;
