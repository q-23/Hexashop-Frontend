import React, { useContext } from "react";

import { withRouter } from 'react-router-dom';
import Link from "./Link";
import List from "./List";
import MenuWrapper from "./MenuWrapper";
import { MenuContext } from '../../contexts/reducers/menu';
import MenuOverlay from "./MenuOverlay";
const Menu = ({ categories = [], location }) => {
	const { menuOpen, setMenuOpen } = useContext(MenuContext);

	const { pathname } = location;

	return(
		<>
			<MenuWrapper visible={menuOpen}>
				<ul>
					{
						categories.map(el =>
							<List key={`${el.to} - ${el.label}`}>
								<Link
									to={el.to}
									activelink={pathname === el.to ? 1 : 0}
									onClick={() => setMenuOpen(false)}
								>
									{el.label}
								</Link>
							</List>)
					}
				</ul>
			</MenuWrapper>
			<MenuOverlay visible={menuOpen} onClick={() => setMenuOpen(false)}/>
		</>
	)
};

export default withRouter(Menu);