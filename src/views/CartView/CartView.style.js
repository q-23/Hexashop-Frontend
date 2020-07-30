import styled from "styled-components";

export const CartEmptyImage = styled.img`
	top: -50%;
	margin: 10rem 0;
	animation: emptyCart 5s infinite;
	max-width: 250px;
	@keyframes emptyCart {
		0% { transform: scale(1) rotate(-2deg) }
		50% { transform: scale(1.1) rotate(2deg) }
		100% { transform: scale(1) rotate(-2deg) }
	}
`