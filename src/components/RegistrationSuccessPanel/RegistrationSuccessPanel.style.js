import styled from 'styled-components';

export const SuccessImage = styled.img`
	top: -50%;
	animation: successShake 2s;
	max-width: 80%;
	@keyframes successShake {
			0% {
				-moz-transform:  rotate(0deg) scaleX(1.00) scaleY(1.00) ;
			}
			10% {
				-moz-transform:  rotate(-3deg) scaleX(0.80) scaleY(0.80) ;
			}
			20% {
				-moz-transform:  rotate(-3deg) scaleX(0.80) scaleY(0.80) ;
			}
			30% {
				-moz-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
			}
			40% {
				-moz-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
			}
			50% {
				-moz-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
			}
			60% {
				-moz-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
			}
			70% {
				-moz-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
			}
			80% {
				-moz-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
			}
			90% {
				-moz-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
			}
			100% {
				-moz-transform:  rotate(0deg) scaleX(1.00) scaleY(1.00) ;
			}
		}
	}
`;