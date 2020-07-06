import styled from "styled-components";
import * as palette from 'assets/css_variables/colors';

const PaginationButton = styled.button`
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	border: 1px solid ${palette.LIGHT_GRAY};
	background-color: transparent;
	cursor: pointer;
	transition: .2s ease-in-out;
	&:hover {
		border-color: ${palette.DARK_GRAY};
	}
	&:hover i {
		color: ${palette.DARK_GRAY};
		transition: .2s ease-in-out;
	}
`;

export { PaginationButton };