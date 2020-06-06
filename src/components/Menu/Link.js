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
		font-family: 'Lato', sans-serif;
    text-decoration-color: ${palette.LIGHT_PURPLE};
    text-transform: uppercase;
    font-size: 1.2em;
    color: white;
    font-weight: 700;
`;

export default Link;