import styled from "styled-components";

const BasicLink = styled.a`
	cursor: pointer;
	text-decoration: underline;
	display: block;
	margin-top: 2rem;
	text-align: ${({ align }) => align && align};
	&:hover {
		text-decoration: none;
	}
`;

export default BasicLink;