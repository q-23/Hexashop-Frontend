import styled from 'styled-components';
import * as palette from 'assets/css_variables/colors';

export const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
	position: absolute;
	height: 100%;
	visibility: ${({isLoading}) => isLoading ? 'visible' : 'hidden'};
`;

export const SpinnerOverlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 198;
	background-color: rgba(255,255,255,.6);
	transition: opacity .5s;
`;

export const SpinnerCircle = styled.div`
	position: absolute;
  display: inline-block;
  width: 50px;
  height: 50px;
  z-index: 200;
  border: 3px solid ${palette.LIGHT_BLUE};
  border-radius: 50%;
  border-top-color: ${palette.LIGHT_PURPLE};
  animation: spin 1s ease-in-out infinite;
	transition: opacity .5s;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;