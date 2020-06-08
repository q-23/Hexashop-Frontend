import React, { useContext } from "react";

import { withRouter } from 'react-router-dom';

import { MenuContext } from 'contexts/reducers/menu';

import {MenuOverlay, MenuWrapper, Link, List} from './Menu.style'

const Menu = ({ categories = [], location }) => {
	const { menuOpen, setMenuOpen } = useContext(MenuContext);

	const { pathname } = location;

	return(
		<>
			<MenuWrapper visible={menuOpen}>
				<ul>
					{
						categories
							.filter(e => !!e.showInMenu)
							.map(el =>
							<List key={`${el.category_path} - ${el.category_name}`}>
								<Link
									to={el.category_path}
									activelink={pathname === el.category_path ? 1 : 0}
									onClick={() => setMenuOpen(false)}
								>
									{el.category_name}
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