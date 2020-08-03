import React, {useEffect, useState} from "react";

import ProductPreview from "components/ProductPreview";
import Pagination from "components/Pagination";

import { useHistory, useRouteMatch } from 'react-router-dom';

import { setPagesCount, setPage } from "helperFunctions/pagination";

const AllProductsView = () => {
	const [pagination, setPagination] = useState({ currentPage: 1, numberOfPages: 1 });
	const [productsData, setProductsData] = useState([]);
	const abortController = new AbortController();
	const location = useRouteMatch();
	const history = useHistory();

	async function fetchData() {
		try {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/product?sortBy=name:asc&limit=12&skip=${(pagination.currentPage - 1) * 12}`, {
				signal: abortController.signal,
				headers : {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			});
			const result = await res.json();
			console.log(result)
			setPagination(({ ...pagination, numberOfPages: setPagesCount({ count: result.count }) }))
			setProductsData(result.products);
		} catch (e) {
		}
	}

	useEffect(() => {
		if (!location.params.page || location.params.page === 'NaN') {
			history.push('/all_products/1')
		}
	}, [])

	useEffect(() => {
		fetchData();
		if (!isNaN(pagination.currentPage)) {
			history.push(`/all_products/${pagination.currentPage}`);
		}
		return () => abortController.abort();
	}, [pagination.currentPage]);

	return(
		<>
			{console.log((pagination.currentPage - 1) * 12)}
			{productsData.map((product, idx) => <ProductPreview key={`${product.name} - ${product.price} - ${idx}`} product={product}/>)}
			<Pagination
				numberOfPages={pagination.numberOfPages}
				currentPage={pagination.currentPage}
				setPage={setPage({ pagination, setPagination })}
			/>
		</>
	)
};

export default AllProductsView;