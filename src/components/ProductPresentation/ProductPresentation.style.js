import styled from "styled-components";

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


export {
	Image
}