import React, {useEffect, useState} from "react";

import ProductPresentation from "components/ProductPresentation";
import FlexContainer from "components/_Shared/FlexContainer";

import { withRouter } from 'react-router-dom';

const ProductView = ({ match }) => {
	const [productData, setProductData] = useState(undefined);

	async function fetchData() {
		try {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/product/${match.params.id}`, {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			});
			const result = await res.json()
			setProductData(result)
		} catch (e) {
		}
	}

	useEffect(() => {
		fetchData();
	}, [match.params.id])

	return(
		<FlexContainer justify={'flex-start'} wrap={'wrap'}>
			{ productData && <ProductPresentation product={productData}/> }
		</FlexContainer>
	)
};

export default withRouter(ProductView);