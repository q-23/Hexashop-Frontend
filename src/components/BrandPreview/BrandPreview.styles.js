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

export const PRODUCT_PRICE_STYLES = css`
	text-align: center;
	font-size: .9em;
`;

export const PreviewWrapper = styled.div`
	margin: 1.5em;
`;
