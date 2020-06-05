import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import * as palette from '../../assets/styles/colors';

const Link = styled(RouterLink)`
		${({activeLink}) => activeLink && `
			text-decoration: line-through;
    	color: black;
		`};
		font-family: 'Lato', sans-serif;
    text-decoration-color: black;
    text-transform: uppercase;
    font-size: 1.65rem;
    color: ${palette.DARK_GRAY};
`;

export default Link;