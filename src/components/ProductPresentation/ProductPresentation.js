import React from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import Typography from "components/_Shared/Typography";
import { Image } from "./ProductPresentation.style";
import FlexItem from "components/_Shared/FlexItem";
import { LIGHT_DARK } from 'assets/css_variables/colors';
import QuantityInput from "components/QuantityInput/QuantityInput";
import { Field } from 'react-final-form';
import Button from "components/_Shared/Button";


const ProductPresentation = ({ product, form, values }) => {
	return (
			<FlexContainer wrap={'wrap'} padding={'1em'}>
				<FlexItem xs={12}>
					<Typography size={'2em'} align={'center'}>{product.name}</Typography>
					<hr/>
				</FlexItem>
				<FlexItem xs={12} sm={3}>
					<Image  src={product.images[0]._id}/>
				</FlexItem>
				<FlexItem xs={12} sm={9}>
					<FlexContainer wrap={'wrap'} direction={'row'}>
						<FlexItem xs={12} padding={'1em'} align={'center'}>
							<Typography align={'center'} size={'1.5em'} color={LIGHT_DARK}>{product.price} $</Typography>
							<Typography size={'1.3em'}>{product.description}</Typography>
							<Field name={'quantity'} initialValue={1}>
								{({ input }) => (
									<QuantityInput form={form} values={values} {...input}/>
								)}
							</Field>
							<Button
								with_gradient
								styles={`margin-top: 1em`}
								type={'submit'}
							>
								Add to cart
							</Button>
						</FlexItem>
					</FlexContainer>
				</FlexItem>
			</FlexContainer>
	)
};

export default ProductPresentation;