import styled from "styled-components";

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

export default MenuOverlay;