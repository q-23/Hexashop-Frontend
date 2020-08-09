import React, { useState, useEffect } from "react";

import {FooterWrapper, FooterTopLine, Image} from "components/Footer/Footer.style";

import FlexContainer from "components/_Shared/FlexContainer";
import Typography from "components/_Shared/Typography";
import FlexItem from "components/_Shared/FlexItem";

import { Link, useLocation } from "react-router-dom";

import FOOTER_IMAGE_1 from 'assets/images/bg1.png';
import FOOTER_IMAGE_2 from 'assets/images/bg2.png';
import FOOTER_IMAGE_3 from 'assets/images/bg3.png';
import FOOTER_IMAGE_4 from 'assets/images/bg4.png';

const Footer = () => {
	const [image, setImage] = useState('');
	const location = useLocation();

	const imagesArray = [FOOTER_IMAGE_1, FOOTER_IMAGE_2, FOOTER_IMAGE_3, FOOTER_IMAGE_4];

	const getRandomNumber = max => Math.floor(Math.random() * max)

	useEffect(() => {
		setImage(imagesArray[getRandomNumber(imagesArray.length)]);
		//	eslint-disable-next-line
	}, [location.pathname])

	return(
		<FooterWrapper>
			<FooterTopLine/>
			<Image src={image}/>
			<FlexContainer>
				<FlexItem xs={12} justify={'center'} align={'center'} styles={'min-height: 30vh'}>
					<Link to={'/'}>
						<Typography color={'white'}>© Hexashop {new Date().getFullYear()}</Typography>
					</Link>
				</FlexItem>
			</FlexContainer>
		</FooterWrapper>
	)
};

export default Footer;