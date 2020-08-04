import styled from "styled-components";
import * as palette from 'assets/css_variables/colors';

export const FooterTopLine = styled.div`
	height: .5em;
	width: 100%;
	background: linear-gradient(90deg, ${palette.LIGHT_PURPLE} 0%, ${palette.DARK_BLUE} 25%, ${palette.DARK_BLUE} 50%, ${palette.DARK_BLUE} 75%, ${palette.LIGHT_PURPLE} 100%);

`

export const FooterWrapper = styled.footer`
	background-color: ${palette.BLUE};
	margin-top: -7.9em;
	overflow: hidden;
	position: relative;
	min-height: 30vh;
	width: 100%;
	top: 0;
`;