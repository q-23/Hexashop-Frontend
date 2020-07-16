import React, { useContext } from "react";

import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

import Button from "components/_Shared/Button";
import Icon from "components/_Shared/Icon";
import CartIcon from "components/CartIcon";

import { NavbarStyle } from "./Navbar.style";

import { MenuContext } from 'contexts/menu/menu';
import {useStateValueAuthorization} from "contexts/authorization/authorization";

const Navbar = () => {
	const { menuOpen, setMenuOpen } = useContext(MenuContext);
	const [auth] = useStateValueAuthorization();
	console.log(auth)
	return(
		<NavbarStyle>
			<Button navbar_button nav_border_right onClick={() => setMenuOpen(!menuOpen)}>
				<Icon className={`fa fa-${menuOpen ? 'times' : 'bars'}`} size={'1.7em'} color={'#FFF'}/>
			</Button>
			<Button navbar_button  nav_border_right>
				<Icon className="fa fa-github" size={'1.7em'} color={'#FFF'}/>
			</Button>
			<Link to={!!auth && auth.length ? '/account' : '/login'}>
				<Button navbar_button float={'right'} nav_border_right>
					<Icon className="fa fa-user" size={'1.7em'} color={'#FFF'}/>
				</Button>
			</Link>
			<Button navbar_button float={'right'}  nav_border_left>
				<CartIcon />
			</Button>
		</NavbarStyle>
	)
};

export default withRouter(Navbar);