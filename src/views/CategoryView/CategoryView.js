import React, {useContext, useEffect, useState} from "react";

import ProductPreview from "components/ProductPreview";
import Pagination from "components/Pagination";
import Image from "components/_Shared/Image";
import Loader from "components/Loader/Loader";

import { MenuContext } from "contexts/menu/menu";
import {useHistory, useRouteMatch, withRouter} from 'react-router-dom';

import NO_PRODUCTS_IMAGE from 'assets/images/no_products.png';
import {setPage, setPagesCount} from "helperFunctions/pagination";

const CategoryView = () => {
	const [pagination, setPagination] = useState({ currentPage: 1, numberOfPages: 1 });
	const [categoryData, setCategoryData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const { activeCategory } = useContext(MenuContext);
	const location = useRouteMatch();
	const history = useHistory();

	const abortController = new AbortController();

	async function fetchData() {
		setIsLoading(true)
		if (typeof activeCategory === 'object') {
			const { _id } = { ...activeCategory }
			try {
				const res = await fetch(`${process.env.REACT_APP_API_URL}/category/${_id}?sortBy=price:desc&limit=12&skip=${(pagination.currentPage - 1) * 12}`, {
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json'
					}
				});
				const result = await res.json();
				setPagination(pagination => ({ ...pagination, numberOfPages: setPagesCount({ count: result.count }) }))
				setCategoryData(result);
				setIsLoading(false);
			} catch (e) {
				setIsLoading(false);
			}
		}
	}

	useEffect(() => {
		if (Number(location.params.page)) {
			setPagination(pagination => ({...pagination, currentPage: Number(location.params.page)}))
		}
		if (activeCategory && (!location.params.page || location.params.page === 'NaN')) {
			history.push(activeCategory.category_path + '/1')
		}
		//	eslint-disable-next-line
	}, [])

	useEffect(() => {
		if(Number(location.params.page) > pagination.numberOfPages) {
			history.push(location.pathname + '/1');
			setPagination({...pagination, currentPage: 1});
		}
		//	eslint-disable-next-line
	}, [pagination.numberOfPages])

	useEffect(() => {
		fetchData();
		if (activeCategory && !isNaN(pagination.currentPage)) {
			history.push(activeCategory.category_path + '/' + pagination.currentPage);
		}
		return () => abortController.abort();
		//	eslint-disable-next-line
	}, [activeCategory, pagination.currentPage])

	return(
		<>
			<Loader isLoading={isLoading}/>
			{!!categoryData.products &&
				categoryData.products.map((product, idx) => <ProductPreview key={`${product.name} - ${product.price} - ${idx}`} product={product}/>
			)}
			{categoryData.products && !categoryData.products.length &&(
				<Image src={NO_PRODUCTS_IMAGE} styles={'height: 100%; margin: 0 auto;'}/>
			)}
			{		console.log(location,'asd')}
			<Pagination
				numberOfPages={pagination.numberOfPages}
				currentPage={pagination.currentPage}
				setPage={setPage({ pagination, setPagination })}
			/>
		</>
	)
};

export default withRouter(CategoryView);