import React, { useContext } from "react";

import { withRouter } from 'react-router-dom';

import { NavbarStyle } from "./Navbar.style";
import Button from "components/_Shared/Button";
import Icon from "components/_Shared/Icon";

import { MenuContext } from 'contexts/menu/menu';

const Navbar = () => {
	const { menuOpen, setMenuOpen } = useContext(MenuContext);

	return(
		<NavbarStyle>
			<Button navbar_button nav_border_right onClick={() => setMenuOpen(!menuOpen)}>
				<Icon className={`fa fa-${menuOpen ? 'times' : 'bars'}`} size={'1.7em'} color={'#FFF'}/>
			</Button>
			<Button navbar_button  nav_border_right>
				<Icon className="fa fa-github" size={'1.7em'} color={'#FFF'}/>
			</Button>

			<Button navbar_button float={'right'} nav_border_right>
				<Icon className="fa fa-user" size={'1.7em'} color={'#FFF'}/>
			</Button>
			<Button navbar_button float={'right'}  nav_border_left>
				<Icon className="fa fa-shopping-basket" size={'1.7em'} color={'#FFF'}/>
			</Button>
		</NavbarStyle>
	)
};

export default withRouter(Navbar);