import styled from 'styled-components';
import * as palette from 'assets/css_variables/colors';

const HeaderStyle = styled.header`
	width: 100%;
	padding: 2em 0;
	${({ mx_auto }) => mx_auto && `
		margin-left: auto;
		margin-right: auto;
	`};
	background: ${palette.BLUE};
	box-shadow: inset 0px 11px 9px -2px rgba(0,0,0,0.2);
`;

export { HeaderStyle }
