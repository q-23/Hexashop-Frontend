import styled from "styled-components";
import * as palette from '../../assets/css_variables/colors';

const MenuWrapper = styled.nav`
  width: 25vw;
  height: 100vh;
  background: ${palette.BLUE};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  transition: transform .3s cubic-bezier(0, .52, 0, 1);
  overflow: scroll;
  padding-top: 3.5em;
  transform: translate3d(-26vw, 0, 0);
	box-shadow: 10px 2px 23px -1px rgba(0,0,0,0.62);
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

export default MenuWrapper;