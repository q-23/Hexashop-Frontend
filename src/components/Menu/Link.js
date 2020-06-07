import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import * as palette from '../../assets/css_variables/colors';

const Link = styled(RouterLink)`
		${({activelink}) => activelink ? `
			text-decoration: underline;
    	color: white;
		` : `
			text-decoration: none;
		`};
    text-decoration-color: ${palette.LIGHT_PURPLE};
		font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-size: 1.2em;
    font-weight: 700;
		color: white;
`;

export default Link;