import React, {useContext, useEffect, useState} from "react";

import ProductPreview from "components/ProductPreview";
import Pagination from "components/Pagination";

import { MenuContext } from "contexts/menu/menu";
import { withRouter } from 'react-router-dom';

const CategoryView = () => {
	const [categoryData, setCategoryData] = useState({});
	const { activeCategory } = useContext(MenuContext);

	async function fetchData() {
		if (typeof activeCategory === 'object') {
			const { _id } = { ...activeCategory }
			try {
				const res = await fetch(`${process.env.REACT_APP_API_URL}/category/${_id}?sortBy=price:desc&limit=12&skip=${0}`, {
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json'
					}
				});
				const result = await res.json()
				setCategoryData(result)
			} catch (e) {
			}
		}
	}

	useEffect(() => {
		fetchData();
	}, [activeCategory])

	return(
		<>
			{!!categoryData.products &&
				categoryData.products.map((product, idx) => <ProductPreview key={`${product.name} - ${product.price} - ${idx}`} product={product}/>
			)}
			<Pagination/>
		</>
	)
};

export default withRouter(CategoryView);