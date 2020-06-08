import * as palette from 'assets/css_variables/colors';
import { Link as RouterLink } from 'react-router-dom';
import WithWidth from "components/_HOC/WithWidth";

import styled from "styled-components";

const Wrapper = styled.nav`
  width: ${({ width }) => width === 'xs' ? '100vw' : '25vw'};
  height: 100vh;
  background: ${palette.BLUE};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  transition: transform .3s cubic-bezier(0, .52, 0, 1);
  overflow: scroll;
  padding-top: 3.5em;
  transform: translate3d(${({ width }) => width === 'xs' ? '-100vw' : '-25vw'}, 0, 0);
	box-shadow: ${({ visible }) => visible ? '10px 2px 23px -1px rgba(0,0,0,0.62)' : 'none'};
	${({ visible }) => visible && `
	  transform: translate3d(0vw, 0, 0);
	  overflow: auto;
		::-webkit-scrollbar {
			width: 10px;
		}
		::-webkit-scrollbar-track {
			background: transparent; 
		}
		::-webkit-scrollbar-thumb {
			background: #2d46bf; 
		}
		::-webkit-scrollbar-thumb:hover {
			background: #1f37af; 
		}
	`};
`;

const MenuOverlay = styled.div`
	backdrop-filter: blur(5px);
  visibility: hidden;
  overflow: hidden;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 89;
  left: 0;
  top: 0;
  
	${({ visible }) => visible && `
	visibility: visible;
	  transform: translate3d(0vw, 0, 0);
	`};
`;

const List = styled.ul`
		margin: 10px 0;
		width: 7.5em;
		padding: 0;
`;


const Link = styled(RouterLink)`
		${({activelink}) => activelink ? `
			text-decoration: underline;
    	color: white;
		` : `
			text-decoration: none;
		`};
    text-decoration-color: ${palette.LIGHT_PURPLE};
		font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-size: 1.2em;
    font-weight: 700;
		color: white;
`;

const MenuWrapper = WithWidth(Wrapper);

export {
	MenuWrapper,
	MenuOverlay,
	Link,
	List
}