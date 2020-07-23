import styled from "styled-components";
import { LIGHT_GRAY } from "assets/css_variables/colors";

export const Image = styled.div`
	width: 100%;
	background-image: ${({ src }) => `url(${src})`};
	background-position: center;
	background-size: cover;
	&:after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
`;

export const ItemDataHolder = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	height: 100%;
`;

export const ItemWrapper = styled.div`
	border-bottom: ${({lastItem}) => lastItem ? 'unset' : `1px solid ${LIGHT_GRAY}`};
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	padding: 1em;
`