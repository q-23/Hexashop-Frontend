import styled from 'styled-components';

const FlexContainer = styled.div`
	width: ${({width}) => width ? width : '100%'};
	display: flex;
	${({ justify }) => justify && `justify-content: ${justify}`};
	${({ wrap }) => wrap && `flex-wrap: ${wrap}`};
	${({ align }) => align && `align-items: ${align}`};
	${({ main_container }) => main_container && `
		transform: translateY(-3.95em);
		background-color: white;
		min-height: 60vh;
		align-items: end;
		box-shadow: 0px 0px 31px -6px rgba(0,0,0,0.62);
	`};
	${({ padding }) => !!padding && `padding: ${padding}`};
	${({ direction }) => !!direction && `flex-direction: ${direction}`};
	${({ m_auto }) => m_auto && 'margin: auto;'};
	${({ styles }) => !!styles && styles};
	${({ spacing }) => spacing && `
		& > div {
			padding: ${spacing * .5}em;
		}
		width: calc(100% + ${spacing}em);
  	margin: -${spacing * .5}em
	`};
`;

export default FlexContainer;