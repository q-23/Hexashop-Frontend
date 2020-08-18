import React, {useContext, useEffect, useState} from "react";

import ProductPreview from "components/ProductPreview";
import Pagination from "components/Pagination";
import Loader from "components/Loader/Loader";
import Image from "components/_Shared/Image";

import {useHistory, useRouteMatch, withRouter} from 'react-router-dom';
import { setPagesCount, setPage } from "helperFunctions/pagination";
import { MenuContext } from "contexts/menu/menu";

import NO_PRODUCTS_IMAGE from 'assets/images/no_products.png';

const BrandView = () => {
	const [pagination, setPagination] = useState({ currentPage: undefined, numberOfPages: undefined });
	const [brandData, setBrandData] = useState(undefined);
	const [isLoading, setIsLoading] = useState(false);
	const { brands } = useContext(MenuContext);
	const abortController = new AbortController();
	const location = useRouteMatch();
	const history = useHistory();

	const currentBrand = !!brands && brands.find(brand => brand.brand_path === '/' + location.params.brand_name);

	async function fetchData() {
		setIsLoading(true);
		try {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/brand/${currentBrand._id}?sortBy=price:desc&limit=12&skip=${(pagination.currentPage - 1) * 12}`, {
				signal: abortController.signal,
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			});
			const result = await res.json();
			console.log(result)
			setPagination(({ ...pagination, numberOfPages: setPagesCount({ count: result.count }) }));
			setBrandData(result.products);
			setIsLoading(false);
		} catch (e) {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		if (Number(location.params.page)) {
			setPagination({...pagination, currentPage: Number(location.params.page)})
		}
		// if (!location.params.page || isNaN(Number(location.params.page))) {
		// 	history.push(`/${category}/${categoryName}/1`)
		// }
		//	eslint-disable-next-line
	}, [location.path])

	useEffect(() => {
		console.log(currentBrand)
		if(pagination.numberOfPages && (Number(location.params.page) > pagination.numberOfPages)) {
			history.push(`/brand${currentBrand.brand_path}/${1 && 1 < pagination.numberOfPages ? 1 : '/1'}`);
			setPagination({...pagination, currentPage: 1});
		}
		//	eslint-disable-next-line
	}, [pagination.numberOfPages, brands])

	useEffect(() => {
		if (brands && !currentBrand) {
			history.push('/brands/1');
		}
	}, [brands, currentBrand])

	useEffect(() => {
		if (currentBrand) {
			fetchData();
		}
		// if (activeCategory && !isNaN(pagination.currentPage)) {
		// 	history.push(`/${category}/${categoryName}/${pagination.currentPage}`)
		// }
		return () => abortController.abort();
		//	eslint-disable-next-line
	}, [brands, currentBrand, pagination.currentPage])

	return(
		<>
			<Loader isLoading={isLoading}/>
			{brandData &&
				brandData.map((product, idx) => <ProductPreview key={`${product.name} - ${product.price} - ${idx}`} product={product}/>
			)}
			{brandData && !isLoading && !brandData.length &&(
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

export default withRouter(BrandView);