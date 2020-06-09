import React, {createContext, useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
export const MenuContext = createContext();

export const StateProviderMenu = ({ children, location }) => {
	const [menuCategories, setMenuCategories] = useState([{ category_path: '/all_products', category_name: 'All products', showInMenu: true }]);
	const [activeCategory, setActiveCategory] = useState(undefined);
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const fetchCategories = async () => {
			const categoriesBuffer = await fetch(`${process.env.REACT_APP_API_URL}/category`, {
				headers : {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			});
			const categoriesResolved = await categoriesBuffer.json();
			const categoriesWithShowInMenu = categoriesResolved.map(e => ({ ...e, showInMenu: true, category_path: '/category' + e.category_path}));
			setMenuCategories([...menuCategories, ...categoriesWithShowInMenu]);
		}
		fetchCategories();
	}, []);

	useEffect(() => {
		const foundCategory = menuCategories.find(category => category.category_path === location.pathname);
		if (foundCategory) {
			setActiveCategory(foundCategory)
		}
	} ,[location.pathname, menuCategories])

	return (
		<MenuContext.Provider
			value={{
				menuOpen,
				setMenuOpen,
				menuCategories,
				setMenuCategories,
				activeCategory,
				setActiveCategory
			}}
		>
			{children}
		</MenuContext.Provider>
	);
};

export default withRouter(StateProviderMenu);