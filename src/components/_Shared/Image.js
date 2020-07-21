import styled, { css } from 'styled-components';

const Image = styled.img`
	${({ styles }) => !!styles && styles};
	${({defaultSquare, width}) => defaultSquare && css`
		max-width: ${width ? width : '250'}px; 
		width: 100%;
		height: auto;
		box-shadow: 0px 0px 41px -13px rgba(0,0,0,0.72);
		transition: .2s ease-in-out;
		cursor: pointer;
		&:hover {
			filter: saturate(100%);
			transform: scale(1.02);
		}
	`}
`;

export default Image;
