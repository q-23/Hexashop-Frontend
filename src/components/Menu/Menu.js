import React, { useContext } from "react";

import { withRouter } from 'react-router-dom';

import { MenuContext } from 'contexts/reducers/menu';

import {MenuOverlay, MenuWrapper, Link, List} from './Menu.style'

const Menu = ({ location }) => {
	const { menuOpen, setMenuOpen } = useContext(MenuContext);
	const { menuCategories, setActiveCategory } = useContext(MenuContext);

	const { pathname } = location;

	return(
		<>
			<MenuWrapper visible={menuOpen}>
				<ul>
					{
						menuCategories
							.filter(e => !!e.showInMenu)
							.map(el =>
							<List key={`${el.category_path} - ${el.category_name}`}>
								<Link
									to={`${el.category_path}`}
									activelink={pathname === el.category_path ? 1 : 0}
									onClick={() => {
										setMenuOpen(false)
										el._id && setActiveCategory(el._id)
									}}
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