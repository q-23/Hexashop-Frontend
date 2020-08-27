import styled from 'styled-components';
import WithWidth from "components/_HOC/WithWidth";
export const PasswordResetImage = WithWidth(styled.img`
	position: absolute;
	animation: pulse 5s infinite;
	top: ${({width}) => width === 'xl' ? '6rem' : width === 'lg' ? '5rem' :  '4rem'};
	right: calc(50% - 100px);
	@keyframes pulse {
		0% { transform: scale(1) }
		50% { transform: scale(1.1) }
		100% { transform: scale(1) }
	}
`)