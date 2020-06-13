import React from "react";

import { Image } from "./ProductPresentation.style";
import FlexItem from "components/_Shared/FlexItem";

const ProductPresentation = ({ product }) => {
	return (
		<>
			<FlexItem xs={6} xl={6}>
				<Image  src={product.images[0]._id}/>
			</FlexItem>
			<FlexItem xs={6} xl={6}>
				olek
			</FlexItem>
		</>
	)
};

export default ProductPresentation;