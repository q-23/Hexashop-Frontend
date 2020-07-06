import React, { useState } from "react";

import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import QuantityInput from "components/QuantityInput/QuantityInput";
import { Image, BrandLabel } from "./ProductPresentation.style";
import FlexContainer from "components/_Shared/FlexContainer";
import { LIGHT_DARK } from 'assets/css_variables/colors';
import Typography from "components/_Shared/Typography";
import FlexItem from "components/_Shared/FlexItem";
import BoxName from "components/_Shared/BoxName";
import HRLine from  'components/_Shared/HRLine';
import Button from "components/_Shared/Button";

import { Field } from 'react-final-form';
import { Link } from "react-router-dom";


const ProductPresentation = ({ product = {}, form = {}, values = {} }) => {
	const findMainImageIndex = product =>
		!!product && !!product.images && product.images.findIndex(img => img.main);

	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(findMainImageIndex(product));


	return (
		<>
			<BoxHeaderContainer>
				<BoxName>{product.name}</BoxName>
			</BoxHeaderContainer>
			<FlexContainer wrap={'wrap'} padding={'1em'}>
				<FlexItem xs={12} sm={4}>
					<Image src={product.images[currentPhotoIndex]._id}/>
					<FlexContainer wrap={'wrap'}>
						{product.images.map((image, index) => (
							<FlexItem xs={3} lg={4} xl={3} key={image._id}>
								<Image miniature src={image._id} onClick={() => setCurrentPhotoIndex(index)}/>
							</FlexItem>
						))}
					</FlexContainer>
				</FlexItem>
				<FlexItem xs={12} sm={8}>
					<FlexContainer wrap={'wrap'} direction={'row'}>
						<FlexItem xs={12} padding={'0 1em'} align={'center'}>
							{product.brand &&
								(<BrandLabel><span>Brand: </span>
									<Link to={`/brand/${product.brand && product.brand._id}`}>
										{product.brand.brand_name}
									</Link>
								</BrandLabel>)
							}
							<Typography size={'1.3em'} align={'justify'}>{product.description}</Typography>
							<br/>
							<HRLine/>
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
							<Typography align={'center'} size={'1.5em'} color={LIGHT_DARK}>{product.price * values.quantity} $</Typography>
						</FlexItem>
					</FlexContainer>
				</FlexItem>
			</FlexContainer>
		</>
	)
};

export default ProductPresentation;