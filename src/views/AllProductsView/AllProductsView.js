import React, {useEffect, useState} from "react";

import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import ProductPreview from "components/ProductPreview";
import BoxName from "components/_Shared/BoxName";
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
			setPagination(pagination => ({ ...pagination, numberOfPages: setPagesCount({ count: result.count }) }))
			setProductsData(result.products);
			setIsLoading(false);
		} catch (e) {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		if (Number(location.params.page)) {
			setPagination(pagination => ({...pagination, currentPage: Number(location.params.page)}))
		}
		if (!location.params.page || location.params.page === 'NaN') {
			history.push('/all_products/1')
		}
	//	eslint-disable-next-line
	}, [])

	useEffect(() => {
		fetchData();
		if (!isNaN(pagination.currentPage)) {
			history.push(`/all_products/${pagination.currentPage}`);
		}
		return () => abortController.abort();
		//	eslint-disable-next-line
	}, [pagination.currentPage]);

	useEffect(() => {
		const pageNumber = Number(location.params.page);
		if(isNaN(pageNumber) || pageNumber < 1 ||pageNumber > pagination.numberOfPages) {
			history.push('/all_products/1');
			setPagination({...pagination, currentPage: 1});
		}
	//	eslint-disable-next-line
	}, [pagination.numberOfPages])

	return(
		<>
			<BoxHeaderContainer>
				<BoxName>
					All products
				</BoxName>
			</BoxHeaderContainer>
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