import styled from 'styled-components';

const Image = styled.img`
	${({ styles }) => !!styles && styles}
`;

export default Image;
