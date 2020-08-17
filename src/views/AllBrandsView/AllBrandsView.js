import React, { useEffect, useState } from "react";

import BrandPreview from "components/BrandPreview";
import Pagination from "components/Pagination";
import Loader from "components/Loader/Loader";
import Image from "components/_Shared/Image";

import {useHistory, useRouteMatch, withRouter} from 'react-router-dom';
import { setPagesCount, setPage } from "helperFunctions/pagination";

import NO_PRODUCTS_IMAGE from 'assets/images/no_products.png';

const AllBrandsView = () => {
	const [pagination, setPagination] = useState({ currentPage: undefined, numberOfPages: undefined });
	const [brandsData, setBrandsData] = useState(undefined);
	const [isLoading, setIsLoading] = useState(false);
	const abortController = new AbortController();
	const location = useRouteMatch();
	const history = useHistory();

	async function fetchData() {
		setIsLoading(true);
		try {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/brand/?sortBy=price:desc&limit=12&skip=${(pagination.currentPage - 1) * 12}`, {
				signal: abortController.signal,
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			});
			const result = await res.json();
			console.log(result)
			setPagination(({ ...pagination, numberOfPages: setPagesCount({ count: result.count }) }));
			setBrandsData(result);
			setIsLoading(false);
		} catch (e) {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		if (Number(location.params.page)) {
			setPagination({...pagination, currentPage: Number(location.params.page)})
		}
		if (!location.params.page || isNaN(Number(location.params.page))) {
			history.push(`/brands/1`)
		}
		//	eslint-disable-next-line
	}, [location.path])

	useEffect(() => {

		if(pagination.numberOfPages && (Number(location.params.page) > pagination.numberOfPages)) {
			// history.push(`/brands/${page && page < pagination.numberOfPages ? page : '/1'}`);
			setPagination({...pagination, currentPage: 1});
		}
		//	eslint-disable-next-line
	}, [pagination.numberOfPages])

	useEffect(() => {
		fetchData();
		if (!isNaN(pagination.currentPage)) {
			history.push(`/brands/${pagination.currentPage}`)
		}
		return () => abortController.abort();
		//	eslint-disable-next-line
	}, [pagination.currentPage])

	return(
		<>
			<Loader isLoading={isLoading}/>
			{console.log(brandsData)}
			{brandsData &&
				brandsData.map((brand, idx) => <BrandPreview key={`${brand.brand_name} - ${brand.brand_path} - ${idx}`} brand={brand}/>
			)}
			{brandsData && !isLoading && !brandsData.length &&(
				<Image src={NO_PRODUCTS_IMAGE} styles={'height: 100%; margin: 0 auto;'}/>
			)}
			<Pagination
				setPage={setPage({ pagination, setPagination })}
				numberOfPages={pagination.numberOfPages}
				currentPage={pagination.currentPage}
			/>
		</>
	)
};

export default withRouter(AllBrandsView);