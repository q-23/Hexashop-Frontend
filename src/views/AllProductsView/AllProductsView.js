import React, {useEffect, useState} from "react";

import ProductPreview from "components/ProductPreview";
import Pagination from "components/Pagination";
import Loader from "components/Loader/Loader";

import { useHistory, useRouteMatch } from 'react-router-dom';

import { setPagesCount, setPage } from "helperFunctions/pagination";

const AllProductsView = () => {
	const [pagination, setPagination] = useState({ currentPage: 1, numberOfPages: 1 });
	const [productsData, setProductsData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const abortController = new AbortController();
	const location = useRouteMatch();
	const history = useHistory();

	async function fetchData() {
		setIsLoading(true)
		try {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/product?sortBy=name:asc&limit=12&skip=${(pagination.currentPage - 1) * 12}`, {
				signal: abortController.signal,
				headers : {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			});
			const result = await res.json();
			console.log('json', result)
			setPagination(({ ...pagination, numberOfPages: setPagesCount({ count: result.count }) }))
			setProductsData(result.products);
			setIsLoading(false);
		} catch (e) {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		if (Number(location.params.page)) {
			setPagination({...pagination, currentPage: Number(location.params.page)})
		}
		if (!location.params.page || location.params.page === 'NaN') {
			console.log('page', location.params)
			history.push('/all_products/1')
		}
	//	eslint-disable-next-line
	}, [])

	useEffect(() => {
		fetchData();
		console.log('currpa', pagination.currentPage)
		if (!isNaN(pagination.currentPage)) {
			history.push(`/all_products/${pagination.currentPage}`);
		}
		return () => abortController.abort();
		//	eslint-disable-next-line
	}, [pagination.currentPage]);

	useEffect(() => {
		if(Number(location.params.page) > pagination.numberOfPages) {
			history.push('/all_products/1');
			setPagination({...pagination, currentPage: 1});
		}
	}, [pagination.numberOfPages])

	return(
		<>
			{console.log('prod', productsData)}
			<Loader isLoading={isLoading}/>
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