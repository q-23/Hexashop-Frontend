import React from "react";

import HeaderWrapper from "./HeaderWrapper";
import FlexContainer from "../_Shared/FlexContainer";
import FlexItem from "../_Shared/FlexItem";
import logo from '../../assets/images/logo.png';
import Image from "../_Shared/Image";

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