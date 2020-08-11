import React, {createContext, useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
export const MenuContext = createContext();

export const StateProviderMenu = ({ children, location }) => {
	const [menuCategories, setMenuCategories] = useState([{ category_path: '/all_products', category_name: 'All products' }]);
	const [activeCategory, setActiveCategory] = useState(undefined);
	const [menuOpen, setMenuOpen] = useState(false)

	const fetchCategories = async () => {
		const categoriesBuffer = await fetch(`${process.env.REACT_APP_API_URL}/category`, {
			headers : {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		});
		const categoriesResolved = await categoriesBuffer.json();
		const categoriesWithMappedPaths = categoriesResolved.map(e => ({ ...e, category_path: '/category' + e.category_path}));
		setMenuCategories([...menuCategories, ...categoriesWithMappedPaths]);
	}

	useEffect(() => {
		fetchCategories();
	//	eslint-disable-next-line
	}, []);

	useEffect(() => {
		const foundCategory = menuCategories.find(category => category.category_path.split('/')[2] === location.pathname.split('/')[2]);
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