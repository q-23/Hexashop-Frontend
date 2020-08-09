import React from "react";

import START_IMAGE from 'assets/images/start_image.jpg';

import FlexContainer from "components/_Shared/FlexContainer";
import FlexItem from "components/_Shared/FlexItem";
import Button from "components/_Shared/Button";
import { Link } from "react-router-dom";

const containerStyle = `
	min-height: 80vh; 
	background-image: url(${START_IMAGE}); 
	background-size: cover; 
	background-position: center; 
	background-repeat: no-repeat;
`

const HomePageView = () => {
	return(
		<FlexContainer styles={containerStyle} justify={'center'} align={'flex-end'}>
			<FlexItem>
				<Link to={'/all_products'}>
					<Button
						with_gradient
						styles={`margin-bottom: 2em`}
						type={'submit'}
					>
						See our items
					</Button>
				</Link>
			</FlexItem>
		</FlexContainer>
	)
};

export default HomePageView;