import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import * as palette from '../../assets/css_variables/colors';

const Link = styled(RouterLink)`
		${({activelink}) => activelink && `
			text-decoration: line-through;
    	color: black;
		`};
		font-family: 'Lato', sans-serif;
    text-decoration-color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.45em;
    font-weight: 300;
    color: ${palette.DARK_GRAY};

    &:hover {
			text-decoration: line-through;
		}
`;

export default Link;