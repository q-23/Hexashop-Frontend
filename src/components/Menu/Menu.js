import React from "react";

import { withRouter } from 'react-router-dom';
import Link from "./Link";
import List from "./List";

const Menu = ({ categories = [], location }) => {
	const { pathname } = location;

	return(
		<nav>
			<ul>
				{
					categories.map(el =>
						<List key={`${el.to} - ${el.label}`}>
							<Link to={el.to} activelink={pathname === el.to ? 1 : 0}>{el.label}</Link>
						</List>)
				}
			</ul>
		</nav>
	)
};

export default withRouter(Menu);