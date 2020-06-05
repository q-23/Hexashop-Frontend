import styled from 'styled-components';

const FlexItem = styled.div`
	${({flex_width}) => flex_width && `width: ${flex_width & 100}%`};
	${({ m_auto }) => m_auto && 'margin: auto;'}
	${({ flex_grow }) => flex_grow && `flex-grow: ${flex_grow}`}
`;

export default FlexItem;