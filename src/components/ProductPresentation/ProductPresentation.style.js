import styled from "styled-components";
import Typography from "components/_Shared/Typography";

const Image = styled.div`
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

const AdditionalInfoLabel = styled(Typography)`
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
	AdditionalInfoLabel
}