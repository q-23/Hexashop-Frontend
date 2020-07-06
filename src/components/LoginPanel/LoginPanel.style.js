import styled from 'styled-components';
import * as palette from 'assets/css_variables/colors';

export const RegisterBox = styled.div`
	width: 100%;
	margin-top: 1.25rem;
	color: ${palette.LIGHT_DARK}
`

export const LoginImage = styled.img`
	position: absolute;
	top: -50%;
	animation: login 5s infinite;
	@keyframes login {
		0% { transform: scale(1) }
		50% { transform: scale(1.1) }
		100% { transform: scale(1) }
	}
`