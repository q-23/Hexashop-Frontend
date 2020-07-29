import React, {useEffect, useState} from "react";

import ProductPreview from "components/ProductPreview";
import Pagination from "components/Pagination";

import { useStateValuePagination } from "contexts/pagination/pagination";
import paginationActions from 'contexts/pagination/actions';

const AllProductsView = () => {
	const [productsData, setProductsData] = useState([]);

	const [pagination, dispatch] = useStateValuePagination();

	async function fetchData() {
		const res = await fetch(`${process.env.REACT_APP_API_URL}/product?sortBy=price:desc`, {
			headers : {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		});
		const result = await res.json()
		setProductsData(result.products);
		dispatch({ type: paginationActions.SET_ITEMS_COUNT, payload: 135 });
	}

	useEffect(() => {
		fetchData();
	}, []);


	return(
		<>
			{productsData.map((product, idx) => <ProductPreview key={`${product.name} - ${product.price} - ${idx}`} product={product}/>)}
			<Pagination/>
		</>
	)
};

export default AllProductsView;