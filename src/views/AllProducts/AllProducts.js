import React, {useEffect, useState} from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import ProductPreview from "components/ProductPreview";

const AllProducts = () => {
	const [productsData, setProductsData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/product?sortBy=price:desc`, {
				headers : {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			});
			const result = await res.json()
			setProductsData(result)
		}
		fetchData();
	}, [])
	return(
		// <FlexContainer justify={'flex-start'} wrap={'wrap'}>
		<>
			{productsData.map((product, idx) => <ProductPreview key={`${product.name} - ${product.price} - ${idx}`} product={product}/>)}
		</>
			// </FlexContainer>
	)
};

export default AllProducts;