import styled, { css } from 'styled-components';

export const IMAGE_STYLES = css`
	max-width: 250px; 
	width: 100%;
	height: auto;
	transition: .2s ease-in-out;
	cursor: pointer;
	&:hover {
		filter: saturate(100%);
		transform: scale(1.02);
	}
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
`;

export const Image = styled.div`
	width: 100%;
	background-image: ${({ src }) => `url("${src}")`};
	background-position: center;
	background-size: cover;
	cursor: ${({pointer}) => pointer && 'pointer'};
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
