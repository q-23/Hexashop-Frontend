import styled from 'styled-components';
import * as palette from 'assets/css_variables/colors';

export const SuccessImage = styled.img`
	top: -50%;
	animation: login 5s infinite;
	max-width: 80%;
	@keyframes login {
		0% { transform: scale(1) rotate(-2deg) }
		50% { transform: scale(1.1) rotate(2deg) }
		100% { transform: scale(1) rotate(-2deg) }
	}
`