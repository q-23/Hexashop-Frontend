import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	max-width: 1280px;
	flex-wrap: wrap;
	${({position}) => position && 'position: ' + position};
	${({zIndex}) => zIndex && 'z-index: ' + zIndex};
	${({styles}) => !!styles && styles}
	${({ mx_auto }) => mx_auto && `
		margin-left: auto;
		margin-right: auto;
	`}
`;

export default Container;
