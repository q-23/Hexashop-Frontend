import styled from 'styled-components';

export const Spacer = styled.div`
	width: 100%;
	flex-basis: 100%;
	height: 3rem;
`;

export const AccountImage = styled.img`
	top: 50%;
	right: 0;
	animation: accountImage 3s infinite;
	position: absolute;
	transform: translateY(50%);
	max-width: 80%;
	@keyframes accountImage {
		0% { transform: scale(1) rotate(-2deg) }
		50% { transform: scale(1.1) rotate(2deg) }
		100% { transform: scale(1) rotate(-2deg) }
	}
`;
