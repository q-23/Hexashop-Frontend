import styled, { css } from 'styled-components';

export const IMAGE_STYLES = css`

`;

export const FLEX_ITEM_STYLES = css`
	text-align: center;
	filter: saturate(90%);
`;

export const PRODUCT_NAME_STYLES = css`
	font-weight: 400;
	text-align: center;
	cursor: pointer;
	font-size: 1.2em;
	text-decoration: none;
`;

export const Image = styled.div`
	width: 100%;
	background-image: ${({ src }) => `url("${src}")`};
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	max-width: 250px; 
	height: auto;
	transition: opacity 1s ease-in-out;
	filter: opacity(.7);
	cursor: ${({pointer}) => pointer && 'pointer'};
	&:hover {
		filter: opacity(1);
	}
	${({miniature}) => miniature && `
		cursor: pointer;
		filter: saturation(.7);
		transition: .2s ease-in-out;
		&:hover {
			filter: saturation(1)
		}
	`};
	&:after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
`;

export const PreviewWrapper = styled.div`
	margin: 1.5em;
`;
