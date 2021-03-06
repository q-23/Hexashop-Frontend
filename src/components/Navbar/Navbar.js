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

	return(
		<NavbarStyle>
			<Button navbar_button onClick={() => setMenuOpen(!menuOpen)}>
				<Icon className={`fa fa-${menuOpen ? 'times' : 'bars'}`} size={'1.7em'} color={'#FFF'}/>
			</Button>
			<a href={'https://github.com/q-23/Hexashop-Frontend'} target={'_blank'} rel="noopener noreferrer">
				<Button navbar_button >
					<Icon className="fa fa-github" size={'1.7em'} color={'#FFF'}/>
				</Button>
			</a>
			<Link to={!!auth && auth.token && auth.token.length ? '/account' : '/login'}>
				<Button navbar_button float={'right'} nav_border_left>
					<Icon className="fa fa-user" size={'1.7em'} color={'#FFF'}/>
				</Button>
			</Link>
			<Link to={'/cart'}>
				<Button navbar_button float={'right'}  nav_border_left>
					<CartIcon />
				</Button>
			</Link>
		</NavbarStyle>
	)
};

export default withRouter(Navbar);