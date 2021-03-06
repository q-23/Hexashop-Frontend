import React, {useContext, useState} from "react";

import { Image, AdditionalInfoLabel } from "./ProductPresentation.style";
import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import QuantityInput from "components/QuantityInput/QuantityInput";
import FlexContainer from "components/_Shared/FlexContainer";
import { LIGHT_DARK } from 'assets/css_variables/colors';
import Typography from "components/_Shared/Typography";
import FlexItem from "components/_Shared/FlexItem";
import BoxName from "components/_Shared/BoxName";
import HRLine from  'components/_Shared/HRLine';
import Button from "components/_Shared/Button";

import ReactHtmlParser from 'react-html-parser';
import { Field } from 'react-final-form';
import { Link } from "react-router-dom";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import {MenuContext} from "contexts/menu/menu";

const ProductPresentation = ({ product = {}, form = {}, values = {} }) => {

	const findMainImageIndex = product =>
		!!product && !!product.images && product.images.findIndex(img => img.main);

	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(findMainImageIndex(product));
	const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState(currentPhotoIndex)
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const { brands, menuCategories } = useContext(MenuContext);

	const currentCategory = menuCategories && menuCategories.find(category => category._id === product.category[0]._id);

	const currentBrand = brands && product.brand && brands.find(brand => brand._id === product.brand._id);

	return (
		<>
			<BoxHeaderContainer>
				<BoxName>{product.name}</BoxName>
			</BoxHeaderContainer>
			<FlexContainer wrap={'wrap'} padding={'1em'}>
				<FlexItem xs={12} sm={4}>
					<Image
						src={product.images[currentPhotoIndex].link}
						pointer
					 	onClick={() => {
							setLightboxOpen(true);
							setLightboxPhotoIndex(currentPhotoIndex);
						}}
					/>
					<FlexContainer wrap={'wrap'}>
						{product.images.length > 1 && product.images.map((image, index) => (
							<FlexItem xs={3} lg={4} xl={3} key={image._id}>
								<Image miniature src={image.link} onClick={() => setCurrentPhotoIndex(index)}/>
							</FlexItem>
						))}
					</FlexContainer>
				</FlexItem>
				<FlexItem xs={12} sm={8}>
					<FlexContainer wrap={'wrap'} direction={'row'}>
						<FlexItem xs={12} padding={'0 1em'} align={'center'}>
							{product.brand &&
								(<AdditionalInfoLabel><span>Brand: </span>
									<Link to={`/brand${currentBrand && currentBrand.brand_path}/1`}>
										{product.brand.brand_name}
									</Link>
								</AdditionalInfoLabel>)
							}
							{currentCategory &&
							(<AdditionalInfoLabel><span>Category: </span>
								<Link to={currentCategory.category_path}>
									{currentCategory.category_name}
								</Link>
							</AdditionalInfoLabel>)
							}
							<Typography align={'justify'}>{ReactHtmlParser(product.description)}</Typography>
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
							<Typography align={'center'} size={'1.5em'} color={LIGHT_DARK}>{(product.price * values.quantity).toFixed(2)} $</Typography>
						</FlexItem>
					</FlexContainer>
				</FlexItem>
			</FlexContainer>
			{lightboxOpen &&
				<Lightbox
					mainSrc={product.images[lightboxPhotoIndex].link}
					onCloseRequest={() => setLightboxOpen(false)}
					nextSrc={product.images[(lightboxPhotoIndex + 1) % product.images.length]}
					prevSrc={product.images[(lightboxPhotoIndex + product.images.length - 1) % product.images.length]}
					onMoveNextRequest={() =>  setLightboxPhotoIndex((lightboxPhotoIndex + 1) % product.images.length)}
					onMovePrevRequest={() => setLightboxPhotoIndex((lightboxPhotoIndex + product.images.length - 1) % product.images.length)}
				/>
			}
		</>
	)
};

export default ProductPresentation;