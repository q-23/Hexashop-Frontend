import styled from "styled-components";
import * as palette from "assets/css_variables/colors";

const BoxHeaderContainer = styled.div`
	height: 3.90em;
	width: 100%;
	border-bottom: 1px solid ${palette.LIGHT_GRAY};
	text-align: center;
	${({ variant_down }) => variant_down && `
		border-top: 1px solid ${palette.LIGHT_GRAY};
		border-bottom: none;
	`}
`;

export default BoxHeaderContainer;