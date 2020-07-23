import React, {useEffect, useState} from "react";

import ProductPresentation from "components/ProductPresentation";
import FlexContainer from "components/_Shared/FlexContainer";

import { FormFullWidth } from "components/_Shared/Form";
import { withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';

import { useShopcart } from "contexts/shopcart/shopcart";
import shopcartActions from "contexts/shopcart/actions";

const ProductView = ({ match }) => {
	const [productData, setProductData] = useState(undefined);
	const [,dispatch] = useShopcart()

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
		<Form
			onSubmit={e => dispatch({ type: shopcartActions.ADD_ITEM_TO_CART, payload: e })}
			initialValues={{product_id: match.params.id}}
			render={({ handleSubmit, form, values }) => (
				<FormFullWidth
					onSubmit={handleSubmit}
				>
					<FlexContainer justify={'flex-start'} wrap={'wrap'}>
						{ productData && <ProductPresentation form={form} values={values} product={productData}/> }
					</FlexContainer>
				</FormFullWidth>
			)}
		/>
	)
};

export default withRouter(ProductView);