import styled from "styled-components";
import Typography from "components/_Shared/Typography";
import * as palette from 'assets/css_variables/colors';

const Image = styled.div`
	width: 100%;
	background-image: ${({ src }) => `url("${process.env.REACT_APP_API_URL}/image/${src}")`};
	background-position: center;
	background-size: contain;
	&:after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
`;

const BrandLabel = styled(Typography)`
	color: #555555 !important;
	transition: .2s ease-in-out;
	text-align: left;
	cursor: pointer;
	&:visited {
		color: #555555;
	}
	& > span {
		color: #7f7f7f;
		&:hover {
			color: #7f7f7f;
		}
	}
	&:hover {
		color: initial;
	}
`;

const ProductName = styled(Typography)`
	text-align: center;
	margin: 0;
	line-height: 1.95em;
`;

const ProductNameBox = styled.div`
	height: 3.90em;
	width: 100%;
	border-bottom: 1px solid ${palette.LIGHT_GRAY};
	text-align: center;
`


export {
	Image,
	BrandLabel,
	ProductName,
	ProductNameBox
}