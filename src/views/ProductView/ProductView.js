import React, {useEffect, useState} from "react";

import ProductPresentation from "components/ProductPresentation";
import FlexContainer from "components/_Shared/FlexContainer";
import FormFullWidth from "components/_Shared/Form";
import Image from "components/_Shared/Image";

import { get } from "helperFunctions/fetchFunctions";
import { withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';

import { useShopcart } from "contexts/shopcart/shopcart";
import shopcartActions from "contexts/shopcart/actions";

import NO_PRODUCTS_IMAGE from "assets/images/no_products.png";

const ProductView = ({ match }) => {
	const [productData, setProductData] = useState(undefined);
	const [,dispatch] = useShopcart()

	async function fetchData() {
		try {
			const res = await get({ url: `/product/${match.params.id}`});
			const result = await res.json()
			setProductData(result)
		} catch (e) {
		}
	}

	useEffect(() => {
		fetchData();
		//	eslint-disable-next-line
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
						{productData && productData._id ? <ProductPresentation form={form} values={values} product={productData}/> : <Image src={NO_PRODUCTS_IMAGE} styles={'height: 100%; margin: 0 auto;'}/>}
					</FlexContainer>
				</FormFullWidth>
			)}
		/>
	)
};

export default withRouter(ProductView);