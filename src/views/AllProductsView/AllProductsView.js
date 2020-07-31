import React, {useEffect, useState} from "react";

import ProductPreview from "components/ProductPreview";
import Pagination from "components/Pagination";

import { useStateValuePagination } from "contexts/pagination/pagination";
import paginationActions from 'contexts/pagination/actions';
import { useHistory, useRouteMatch } from 'react-router-dom';

const AllProductsView = () => {
	const [productsData, setProductsData] = useState([]);
	const [pagination, dispatch] = useStateValuePagination();
	const abortController = new AbortController();
	const history = useHistory();
	const location = useRouteMatch();

	async function fetchData() {
		try {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/product?sortBy=name:asc&limit=12&skip=${pagination.skip}`, {
				signal: abortController.signal,
				headers : {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			});
			const result = await res.json();
			if (pagination.numberOfItems !== result.count) {
				dispatch({type: paginationActions.SET_ITEMS_COUNT, payload: result.count});
			}
			setProductsData(result.products);
		} catch (e) {
		}
	}

	useEffect(() => {
		dispatch({ type: paginationActions.SELECT_PAGE, payload: Number(location.params.page) });
	}, [])

	useEffect(() => {
		fetchData();
		history.push(`/all_products/${pagination.currentPage}`);
		return () => abortController.abort();
	}, [pagination.skip]);

	return(
		<>
			{productsData.map((product, idx) => <ProductPreview key={`${product.name} - ${product.price} - ${idx}`} product={product}/>)}
			<Pagination/>
		</>
	)
};

export default AllProductsView;