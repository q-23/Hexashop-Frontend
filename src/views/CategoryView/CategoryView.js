import React, {useContext, useEffect, useState} from "react";

import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import ProductPreview from "components/ProductPreview";
import BoxName from "components/_Shared/BoxName";
import Pagination from "components/Pagination";
import Loader from "components/Loader/Loader";
import Image from "components/_Shared/Image";

import {useHistory, useRouteMatch, withRouter} from 'react-router-dom';
import { setPagesCount, setPage } from "helperFunctions/pagination";
import { MenuContext } from "contexts/menu/menu";

import NO_PRODUCTS_IMAGE from 'assets/images/no_products.png';

const CategoryView = () => {
	const [pagination, setPagination] = useState({ currentPage: undefined, numberOfPages: undefined });
	const [categoryData, setCategoryData] = useState(undefined);
	const [isLoading, setIsLoading] = useState(false);
	const { activeCategory } = useContext(MenuContext);
	const abortController = new AbortController();
	const location = useRouteMatch();
	const history = useHistory();

	const [category, categoryName, page] = location.url.split('/').filter(e => !!e);

	async function fetchData() {
		setIsLoading(true);
		if (typeof activeCategory === 'object') {
			const { _id } = { ...activeCategory }
			try {
				const res = await fetch(`${process.env.REACT_APP_API_URL}/category/${_id}?sortBy=price:desc&limit=12&skip=${(pagination.currentPage - 1) * 12}`, {
					signal: abortController.signal,
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json'
					}
				});
				const result = await res.json();
				setPagination(({ ...pagination, numberOfPages: setPagesCount({ count: result.count }) }));
				setCategoryData(result.products);
				setIsLoading(false);
			} catch (e) {
				setIsLoading(false);
			}
		}
	}

	useEffect(() => {
		if (Number(location.params.page)) {
			setPagination({...pagination, currentPage: Number(location.params.page)})
		}
		if (!location.params.page || isNaN(Number(location.params.page))) {
			history.push(`/${category}/${categoryName}/1`)
		}
		//	eslint-disable-next-line
	}, [location.path])

	useEffect(() => {
		const pageNumber = Number(location.params.page);
		if (pageNumber < 1 || isNaN(pageNumber) || (pagination.numberOfPages && (pageNumber > pagination.numberOfPages))) {
			history.push(`/${category}/${categoryName}/${page && page < pagination.numberOfPages ? page : '/1'}`);
			setPagination({...pagination, currentPage: 1});
		}
		//	eslint-disable-next-line
	}, [pagination.numberOfPages, activeCategory])

	useEffect(() => {
		fetchData();
		if (activeCategory && !isNaN(pagination.currentPage)) {
			history.push(`/${category}/${categoryName}/${pagination.currentPage}`)
		}
		return () => abortController.abort();
		//	eslint-disable-next-line
	}, [activeCategory, pagination.currentPage])

	return(
		<>
			<BoxHeaderContainer>
				<BoxName>
					{activeCategory && activeCategory.category_name}
				</BoxName>
			</BoxHeaderContainer>
			<Loader isLoading={isLoading}/>
			{categoryData &&
				categoryData.map((product, idx) => <ProductPreview key={`${product.name} - ${product.price} - ${idx}`} product={product}/>
			)}
			{categoryData && !isLoading && !categoryData.length &&(
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

export default withRouter(CategoryView);