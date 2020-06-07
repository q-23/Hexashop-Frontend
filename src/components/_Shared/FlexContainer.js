import styled from 'styled-components';

const FlexContainer = styled.div`
	width: 100%;
	display: flex;
	${({ justify }) => `justify-content: ${justify}`};
	${({ wrap }) => `flex-wrap: ${wrap}`};
	${({ main_container }) => main_container && `
		margin-top: -3.95em;
		background-color: white;
		box-shadow: 0px 0px 31px -6px rgba(0,0,0,0.62);
	`};
	${({ m_auto }) => m_auto && 'margin: auto;'};
	${({ styles }) => !!styles && styles};
`;

export default FlexContainer;