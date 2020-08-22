import styled from 'styled-components';

export const Spacer = styled.div`
	width: 100%;
	flex-basis: 100%;
	height: 3rem;
`;

export const InputWrapper = styled.div`
	margin: 1rem;
	z-index: 2;
	width: ${({width, button}) => button? 'unset' : width ? width : '80%'};
`

export const AccountImage = styled.img`
	bottom: 3rem;
	right: 3rem;
	animation: accountImage 3s infinite;
	position: absolute;
	transform: translateY(50%);
	max-width: 80%;
	opacity: .3;
	@keyframes accountImage {
		0% { transform: scale(1) rotate(-2deg) }
		50% { transform: scale(1.1) rotate(2deg) }
		100% { transform: scale(1) rotate(-2deg) }
	}
`;
