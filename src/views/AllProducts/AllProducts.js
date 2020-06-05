import React, {useEffect, useState} from "react";
import FlexContainer from "../../components/_Shared/FlexContainer";
import ProductPreview from "../../components/ProductPreview";
import {MOCK_PRODUCT_ARR} from "../../tests/ProductPreview/ProductPreview.mock.data";

const AllProducts = () => {
	const [productsData, setProductsData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch(`http://localhost:3000/product`, {
				headers : {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			});
			const result = await res.json()
			setProductsData(result.map(({image_thumbnail, ...el}) => ({ ...el, image_thumbnail: `${process.env.REACT_APP_API_URL}/image/${image_thumbnail}` })))
		}
		fetchData();
	}, [])
	return(
		<FlexContainer>
			{productsData.map((product, idx) => <ProductPreview key={`${product.name} - ${product.price} - ${idx}`} width={'25'} product={product}/>)}
		</FlexContainer>
	)
};

export default AllProducts;