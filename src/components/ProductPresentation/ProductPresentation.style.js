import styled from "styled-components";
import Typography from "components/_Shared/Typography";

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



export {
	Image,
	BrandLabel
}