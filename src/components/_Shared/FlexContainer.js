import styled from 'styled-components';

const FlexContainer = styled.div`
	width: 100%;
	display: flex;
	${({ m_auto }) => m_auto && 'margin: auto;'};
	justify-content: flex-start;
`;

export default FlexContainer;