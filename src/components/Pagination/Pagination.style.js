import styled from "styled-components";
import * as palette from 'assets/css_variables/colors';

const PaginationArrowButton = styled.button`
	border-radius: 50%;
	border: none;
	background-color: transparent;
	cursor: pointer;
	transition: .2s ease-in-out;
	font-size: 2rem;
	&:hover i {
		text-shadow: 0px 4px 10px ${palette.LIGHT_PURPLE};
		color: ${palette.DARK_GRAY};
	}
`;

const PaginationButton = styled.button`
	border: none;
	background-color: transparent;
	transition: .2s ease-in-out;
	text-decoration: ${({current}) => current ? 'underline' : 'none'};
	cursor: ${({ dots }) => dots ? 'unset' : 'pointer'};
	font-size: 1.2rem;
`;


export { PaginationArrowButton, PaginationButton };