import React, {useContext, useEffect, useState} from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import ProductPreview from "components/ProductPreview";

import { mapImageThumbnails} from "helperFunctions/mapImageUrls";
import { MenuContext } from "contexts/reducers/menu";
import { withRouter } from 'react-router-dom';

const CategoryView = ({ location }) => {
	const [categoryData, setCategoryData] = useState({});
	const { activeCategory } = useContext(MenuContext);

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch(`${process.env.REACT_APP_API_URL}/category/${activeCategory._id}?sortBy=price:desc`, {
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json'
					}
				});
				const result = await res.json()
				setCategoryData(result)
			} catch (e) {
				console.log(e)
			}
			}
		fetchData();
	}, [activeCategory])
	return(
		<FlexContainer justify={'flex-start'} wrap={'wrap'}>
			{!!categoryData.products &&
				mapImageThumbnails(categoryData.products)
					.map((product, idx) => <ProductPreview key={`${product.name} - ${product.price} - ${idx}`} product={product}/>
				)}
		</FlexContainer>
	)
};

export default withRouter(CategoryView);