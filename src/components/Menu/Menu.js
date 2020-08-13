import React, { useContext } from "react";

import { withRouter } from 'react-router-dom';

import { MenuContext } from 'contexts/menu/menu';

import {MenuOverlay, MenuWrapper, Link, List} from './Menu.style'

const Menu = ({ location }) => {
	const { menuOpen, setMenuOpen } = useContext(MenuContext);
	const { menuCategories } = useContext(MenuContext);
	const { pathname } = location;

	return(
		<>
			<MenuWrapper visible={menuOpen}>
				<ul>
					{
						menuCategories
							.map(el =>
							<List key={`${el.category_path} - ${el.category_name}`}>
								<Link
									activelink={pathname.split('/')[pathname.includes('all_products') ? 1 : 2] === el.category_path.split('/')[pathname.includes('all_products') ? 1 : 2] ? 1 : 0}
									to={`${el.category_path}`}
									onClick={() => {
										setMenuOpen(false)
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