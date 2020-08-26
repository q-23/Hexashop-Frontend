import styled from 'styled-components';

export const PasswordResetImage = styled.img`
	position: absolute;
	top: -100%;
	transform: scale(.5);
	animation: login 5s infinite;
	@keyframes login {
		0% { transform: scale(1) }
		50% { transform: scale(1.1) }
		100% { transform: scale(1) }
	}
`