import styled from "styled-components";

const Image = styled.div`
	width: 20em;
	height: 20em;
	background-image: ${({ src }) => `url("${process.env.REACT_APP_API_URL}/image/${src}")`};
`;

export {
	Image
}