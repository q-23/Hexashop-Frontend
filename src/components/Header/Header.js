import React from "react";

import FlexContainer from "../_Shared/FlexContainer";
import HeaderWrapper from "./HeaderWrapper";
import FlexItem from "../_Shared/FlexItem";
import Image from "../_Shared/Image";

import logo from '../../assets/images/logo.png';

const Header = () => {

	return (
		<HeaderWrapper>
			<FlexContainer>
				<FlexItem m_auto>
					<Image src={logo} alt={'logo'} styles={'margin: 0 auto; height: 10em; transform: translateY(-2em);'}/>
				</FlexItem>
			</FlexContainer>
		</HeaderWrapper>
	)
};

export default Header;