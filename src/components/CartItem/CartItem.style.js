import styled from "styled-components";

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