import styled from "styled-components";

const MenuOverlay = styled.div`
  width: 100vw;
  height: 100vh;
	backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 89;
  overflow: hidden;
  visibility: hidden;
  
	${({ visible }) => visible && `
	visibility: visible;
	  transform: translate3d(0vw, 0, 0);
	`};
`;

export default MenuOverlay;