import styled from 'styled-components';
import { DARK_GRAY } from "../../assets/css_variables/colors";

const Typography = styled.p`
	font-size: ${({ size }) => size || '1em'};
	${({ padding }) => `padding: ${padding}`};
	${({ color }) => `color: ${color || DARK_GRAY};`};
	${({ styles }) => !!styles && styles}
`;

export default Typography;
