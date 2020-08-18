import React, {createContext, useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
export const MenuContext = createContext();

export const StateProviderMenu = ({ children, location }) => {
	const [menuCategories, setMenuCategories] = useState([
		{ category_path: '/all_products', category_name: 'All products' },
		{ category_path: '/brands/1', category_name: 'Brands' }
	]);
	const [brands, setBrands] = useState(undefined);
	const [activeCategory, setActiveCategory] = useState(undefined);
	const [menuOpen, setMenuOpen] = useState(false)
	const abortController = new AbortController();
	const fetchCategories = async () => {
		const categoriesBuffer = await fetch(`${process.env.REACT_APP_API_URL}/category`, {
			headers : {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			signal: abortController.signal
		});
		const categoriesResolved = await categoriesBuffer.json();
		const categoriesWithMappedPaths = categoriesResolved.map(e => ({ ...e, category_path: '/category' + e.category_path}));
		setMenuCategories([...menuCategories, ...categoriesWithMappedPaths]);
	}

	const fetchBrands = async () => {
		try {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/brand/`, {
				signal: abortController.signal,
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			});
			const response = await res.json();
			setBrands(response.brands);
		} catch (e) {
			console.log(e)
		}

	}



	useEffect(() => {
		fetchCategories();
		fetchBrands();
	//	eslint-disable-next-line
	}, []);

	useEffect(() => {
		const foundCategory =
			menuCategories.find(category => category.category_path.split('/')[2] === location.pathname.split('/')[2]);

		if (foundCategory) {
			setActiveCategory(foundCategory)
		}
	} ,[location.pathname, menuCategories])

	return (
		<MenuContext.Provider
			value={{
				brands,
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