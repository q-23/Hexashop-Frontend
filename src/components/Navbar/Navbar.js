import React, { useContext } from "react";

import { withRouter } from 'react-router-dom';
import NavigationWrapper from "./NavigationWrapper";
import Button from "../_Shared/Button";
import Icon from "../_Shared/Icon";
import { MenuContext } from '../../contexts/reducers/menu';
const Navbar = () => {
	const { menuOpen, setMenuOpen } = useContext(MenuContext);

	return(
		<NavigationWrapper>
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
		</NavigationWrapper>
	)
};

export default withRouter(Navbar);