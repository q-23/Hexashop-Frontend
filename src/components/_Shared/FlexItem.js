import styled from 'styled-components';
import WithWidth from "components/_HOC/WithWidth";

const breakpointsArr = ['xs', 'sm', 'md', 'lg', 'xl'];

const returnFlexWidth = props => {
	const calculateWidth = width => (width * 100) / 12
	if (!props[props.width]) {
		const indexOfPresentBreakpoint = breakpointsArr.findIndex(el => el === props.width);
		const availableGivenBreakpoints = breakpointsArr
			.slice(0, indexOfPresentBreakpoint)
			.filter(breakpoint => Object.keys(props).includes(breakpoint));
		const properBreakpoint = availableGivenBreakpoints.pop();
		return calculateWidth(props[properBreakpoint])
	}
	return calculateWidth(props[props.width])
};

const FlexItem = styled.div`
	display: flex;
	flex-direction: column;
	${({ m_auto }) => m_auto && 'margin: auto;'}
	${({styles}) => styles}
	${({padding}) => !!padding && `padding: ${padding}`};
	${({align}) => !!align && `align-items: ${align}`};
	${({justify}) => justify && `justify-content: ${justify}`};
	${props => 
		Object.keys(props).some(e => breakpointsArr.includes(e)) ? 
		`max-width: ${returnFlexWidth(props)}%;
		flex-basis: ${returnFlexWidth(props)}%;` :
		`max-width: 100%;
		flex-basis: 100`
	};
`;

export default WithWidth(FlexItem);