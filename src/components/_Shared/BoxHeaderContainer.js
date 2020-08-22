import styled from "styled-components";
import * as palette from "assets/css_variables/colors";

const BoxHeaderContainer = styled.div`
	min-height: 3.90em;
	width: 100%;
	border-bottom: 1px solid ${palette.LIGHT_GRAY};
	text-align: center;
	${({ variant_down, no_margin_top }) => variant_down && `
		border-top: 1px solid ${palette.LIGHT_GRAY};
		border-bottom: none;
		${no_margin_top && 'margin-top: -3.9em;'}
	`}
`;

export default BoxHeaderContainer;