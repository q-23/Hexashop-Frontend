import React, {useContext, useEffect, useState} from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import ProductPreview from "components/ProductPreview";
import Pagination from "components/Pagination";
import Image from "components/_Shared/Image";

import { MenuContext } from "contexts/menu/menu";
import { withRouter } from 'react-router-dom';

import NO_PRODUCTS_IMAGE from 'assets/images/no_products.png';

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
		//	eslint-disable-next-line
	}, [activeCategory])

	return(
		<>
			<FlexContainer justify={categoryData.products && !categoryData.products.length && 'center'}>
				{!!categoryData.products &&
					categoryData.products.map((product, idx) => <ProductPreview key={`${product.name} - ${product.price} - ${idx}`} product={product}/>
				)}
				{categoryData.products && !categoryData.products.length &&(
					<>
						<Image src={NO_PRODUCTS_IMAGE} styles={'height: 100%'}/>
					</>
				)}
			</FlexContainer>
			<Pagination/>
		</>
	)
};

export default withRouter(CategoryView);