import styled from 'styled-components';

const Button = styled.button`
	font-size: 1.2em;
	padding: 0.45em 1.2em;
 	cursor: pointer;
	font-family: Lato;
	&:focus {
		outline: none;
	}
	${({quantity_button}) => quantity_button && `
		background-color: transparent;
		border: none;
	`};
	${({ navbar_border_left }) => navbar_border_left && `
			border-left:   1px solid #fff;
	`};
	${({ navbar_border_right }) => navbar_border_right && `
			border-right:   1px solid #fff;
	`};
	${({ navbar_button, nav_border_right, nav_border_left }) => navbar_button && `
		padding: .5em .5em;
		background-color: transparent;
		height: 100%;
		border-top:    none;
		border-bottom: none;
		${nav_border_right && 'border-right: 1px solid white;'}		
		${nav_border_left && 'border-left: 1px solid white;'}		
	`};
	${({ float }) => `float: ${float};`};
	${({ with_gradient }) => with_gradient && `
		padding: 0.6em 2.2em;
    font-size: 1.em;
    font-weight: 400;
    color: #fff;
    cursor: pointer;
    text-align:center;
    border: none;
    background-size: 300% 100%;
    border-radius: 10px;
    transition: all .4s ease-in-out;
		background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
		box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
		animation-timing-function: ease-in-out;

		@keyframes glow {
			0% {box-shadow: 0 4px 15px 0 rgba(209, 159, 228, 0.9);}
			50% {box-shadow: 0 7px 18px 0 rgba(209, 159, 228, 0.95);}
			100% {box-shadow: 0 4px 15px 0 rgba(209, 159, 228, 0.9);}
		}
					
		&:hover {
			transition: all .4s ease-in-out;
			background-position: 100% 0;
			animation: glow 1s infinite
		}
	`};	
	${({ styles }) => !!styles && styles}
`;

export default Button;
