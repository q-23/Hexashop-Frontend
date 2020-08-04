import React from "react";

import { FooterWrapper, FooterTopLine } from "components/Footer/Footer.style";

import FlexContainer from "components/_Shared/FlexContainer";
import Typography from "components/_Shared/Typography";
import FlexItem from "components/_Shared/FlexItem";

import { Link } from "react-router-dom";

const Footer = () => {
	return(
		<FooterWrapper>
			<FooterTopLine/>
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