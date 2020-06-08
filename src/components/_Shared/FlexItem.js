import styled from 'styled-components';
import WithWidth from "components/_HOC/WithWidth";

const breakpointsArr = ['xs', 'sm', 'md', 'lg', 'xl'];

const returnFlexWidth = props => {
	const calculateWidth = width => (width * 100) / 12
	if (!props[props.width]) {
		const indexOfPresentBreakpoint = breakpointsArr.findIndex(el => el === props.width);
		const availableGivenBreakpoints = breakpointsArr
			.slice(indexOfPresentBreakpoint)
			.filter(breakpoint => Object.keys(props).includes(breakpoint));
		const firstBreakpointHigherThanPresent = availableGivenBreakpoints[0];
		return calculateWidth(props[firstBreakpointHigherThanPresent])
	}
	return calculateWidth(props[props.width])
};

const FlexItem = styled.div`
	${({ m_auto }) => m_auto && 'margin: auto;'}
	${({styles}) => styles}
	${({ spacing }) => `padding: ${spacing * .5 || 0}em`};
	${props => 
		Object.keys(props).some(e => breakpointsArr.includes(e)) && 
		`max-width: ${returnFlexWidth(props)}%;
			flex-basis: ${returnFlexWidth(props)}%;`
	};
`;

export default WithWidth(FlexItem);